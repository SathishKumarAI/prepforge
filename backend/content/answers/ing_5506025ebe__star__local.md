---
qid: ing_5506025ebe__star__local
question: 'Explain: Use official images — 9 Docker Best Practices You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 352
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:18:08-05:00'
sources: []
---

**Situation** – In my last role I was tasked with deploying a production‑grade image classification model to our Kubernetes cluster. The existing Dockerfile pulled a custom Ubuntu base, installed Python from source, and bundled a huge conda environment. Build times were over an hour and the final image weighed 1.8 GB, which caused slow pod startup and high ECR storage costs.

**Task** – I needed to reduce build time, shrink the image size by at least 40 %, and make the deployment reproducible for CI/CD pipelines.

**Action** – I switched to the official `python:3.11-slim-buster` base image. Leveraging Docker’s multi‑stage builds, I first installed only the runtime dependencies (`pip install -r requirements.txt --no-cache-dir`) in a temporary stage that also included my training script. Then I copied the minimal `site-packages` and the compiled model weights into the slim final stage, avoiding the heavy conda metadata. I also added `--link=python3.11-slim-buster` to pin the exact OS layer version for reproducibility.

**Result** – The build time dropped from 70 minutes to just 12 minutes, and the image shrank to 860 MB— a 52 % reduction. Pod startup latency fell below 2 seconds, and storage costs decreased by $1,200 annually. I learned that selecting an official base image and using multi‑stage builds are powerful first steps toward lean, maintainable ML deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
