---
qid: ing_39dcc7483f__faang__local
question: 'Explain: Use a specific image version — 9 Docker Best Practices You Must
  Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 509
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:58:56-05:00'
sources: []
---

**Clarify**  
We’re asked how to pick *one* image version for a machine‑learning service while following nine key Docker best practices. I’ll assume: the model is served via a containerized API, we have CI/CD pipelines, and we need reproducibility, security, and performance.

**Approach**  
1. Pick a stable base (e.g., `python:3.10-slim`).  
2. Use multi‑stage builds to keep runtime lean.  
3. Add a `.dockerignore` for large data dirs.  
4. Pin every dependency (`requirements.txt` with exact hashes).  
5. Run as non‑root user.  
6. Set explicit `WORKDIR`.  
7. Expose only required ports.  
8. Use healthchecks to verify model loading.  
9. Tag images immutably (e.g., `myservice:20240906-abcdef`).

**Depth**  
The Dockerfile will look like:

```dockerfile
# Build stage
FROM python:3.10-slim AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Runtime stage
FROM python:3.10-slim
WORKDIR /app
COPY --from=builder /usr/local/lib/python3.10/site-packages ./site-packages
COPY . .
ENV PYTHONPATH=/app:/app/site-packages
RUN adduser --no-create-home svc && chown -R svc /app
USER svc
EXPOSE 8000
HEALTHCHECK CMD curl -f http://localhost:8000/health || exit 1
CMD ["python", "serve.py"]
```

**Edge Cases**  
- **Large models**: store weights in an external volume or S3.  
- **GPU support**: use `nvidia/cuda` base and add `--gpus all`.  
- **Compatibility**: test on target Kubernetes nodes.

**Optimize & Communicate**  
I’d explain that multi‑stage builds reduce image size, pinning dependencies prevents “works‑on‑my‑machine” bugs, non‑root users mitigate privilege escalation, and immutable tags enable rollbacks. In an interview I’d finish by highlighting how this single Dockerfile satisfies the nine best practices while ensuring reproducible ML deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
