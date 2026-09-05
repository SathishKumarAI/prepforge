---
qid: ing_368ce39cc1__star__local
question: 'Explain: Use the least privileged user — 9 Docker Best Practices You Must
  Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 335
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:17:09-05:00'
sources: []
---

**Situation:**  
At my last role we were deploying a customer‑facing recommendation engine in a Kubernetes cluster. The initial rollout used a single admin‑level Docker image that ran with root privileges, and the container could write to any volume on the host. After a security audit, the compliance team flagged this as a critical risk.

**Task:**  
I had to refactor the deployment so every microservice ran under the least privileged user, following Docker’s best practices, while keeping the recommendation pipeline fast and reliable.

**Action:**  
1. I created a non‑root `mluser` with UID 1001 in the Dockerfile (`RUN addgroup --system ml && adduser --uid 1001 --ingroup ml mluser`).  
2. I switched to a multi‑stage build, pulling only the runtime dependencies into the final image and stripping out all build tools.  
3. I added `USER mluser` before the entrypoint and set `--read-only=true` on the container filesystem, mounting only a small writable volume for model checkpoints (`VOLUME /ml/checkpoints`).  
4. I updated the Helm chart to use `runAsUser: 1001`, `fsGroup: 1001`, and enabled PodSecurityPolicy restrictions.

**Result:**  
The new images were ~30 % smaller, runtime latency dropped by 12 %, and we passed the audit with zero privileged‑container findings. I learned that enforcing least privilege not only improves security but can also trim image size and reduce attack surface without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
