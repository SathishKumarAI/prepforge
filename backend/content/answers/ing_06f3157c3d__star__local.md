---
qid: ing_06f3157c3d__star__local
question: 'Explain: Scan images — 9 Docker Best Practices You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 357
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:42:55-05:00'
sources: []
---

**Situation**  
At my last company we were shipping a micro‑service that exposed an image‑recognition API. The team had been pulling base images from the public registry, and one of our CI runs flagged a CVE in the `python:3.10-slim` layer. We had to get the image scanned before every release without breaking the pipeline.

**Task**  
I needed to set up an automated image‑scan workflow that met security standards, kept build times under 5 minutes, and let us surface only actionable vulnerabilities.

**Action**  
First, I switched our base to `python:3.10-alpine` to reduce the attack surface. Then I added a multi‑stage Dockerfile so the runtime image stayed lean (only `pip install --no-cache-dir -r requirements.txt`). For scanning, I integrated Trivy into the CI pipeline as a separate job that runs against the built image before pushing to ECR. I also enabled Docker’s buildkit cache and used `--squash` to merge layers, cutting the final size from 350 MB to 210 MB. To avoid false positives, I maintained an ignore list in Trivy’s config for known, non‑critical packages.

**Result**  
The new pipeline scanned images in under 45 seconds and we eliminated all high‑severity CVEs before deployment. The image size drop improved cold‑start latency by ~30 %. I learned that combining a minimal base, multi‑stage builds, and CI‑driven scanning is the most efficient way to keep Docker images secure without sacrificing speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
