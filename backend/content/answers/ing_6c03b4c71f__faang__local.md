---
qid: ing_6c03b4c71f__faang__local
question: 'Explain: Label your images — 9 Docker Best Practices You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 529
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:54:43-05:00'
sources: []
---

**Clarify**  
The interview asks for a concise explanation of how to *label images* while applying nine essential Docker best practices. I’ll assume we’re building a containerized ML pipeline that ingests raw image data, trains a model, and exposes an inference API.

**Approach**  
1. **Data ingestion** – mount or copy the dataset into the container.  
2. **Labeling step** – run a labeling script (e.g., using Label Studio) inside the container.  
3. **Persist labels** – store them in a shared volume or push to S3/GCS for durability.  
4. **Build** – use a multi‑stage Dockerfile, minimal base image, and pin dependencies.  

**Depth**  
| # | Best Practice | Why it matters for labeling |
|---|---------------|-----------------------------|
| 1 | Use a `.dockerignore` file | Avoid shipping raw data into the image build context. |
| 2 | Multi‑stage builds | Separate training/labeling stages; keep runtime lightweight. |
| 3 | Pin base images (e.g., `python:3.11-slim`) | Reproducible builds and smaller attack surface. |
| 4 | Non‑root user | Enhances security during data processing. |
| 5 | Layer caching & order | Place stable dependencies first to maximize cache hits. |
| 6 | Explicit health checks | Ensure the labeling service is ready before downstream steps. |
| 7 | Use `--mount=type=cache` for pip | Speed up dependency installation without bloating image size. |
| 8 | Log aggregation (stdout/stderr) | Centralized logs simplify debugging of label quality. |
| 9 | CI/CD integration | Automate linting, tests, and scanning before pushing to registry. |

**Edge Cases**  
- Large datasets exceeding volume limits → stream directly from object storage.  
- Labeler crashes mid‑run → use checkpoint files or retry logic.  
- Security scans flag new packages → maintain a vetted dependency list.

**Optimize & Communicate**  
I’d iterate on the Dockerfile to reduce image size (<200 MB) and run unit tests for the labeling script in CI. I’d document each layer’s purpose, so reviewers see clear intent. This structure showcases problem‑solving rigor, depth of knowledge, and practical trade‑offs—all key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
