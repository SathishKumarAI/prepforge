---
qid: ing_39dcc7483f__star__local
question: 'Explain: Use a specific image version — 9 Docker Best Practices You Must
  Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 337
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:24:19-05:00'
sources: []
---

**Situation** – In my last role I was tasked with deploying a computer‑vision model that had just hit production latency of 650 ms per inference. The team used a monolithic Docker image built from `ubuntu:latest`, which pulled in dozens of unused packages and caused slow builds.

**Task** – Reduce the container size by 40 % and guarantee that every build pulls the exact same base layer, so the model’s latency wouldn’t drift between environments.

**Action** – I switched to a specific lightweight image (`python:3.10-slim-bullseye@sha256:<hash>`) and added three best‑practice steps:
1. **Pin the base image digest** instead of a tag to avoid unintentional updates.
2. Use multi‑stage builds; the first stage installs only build dependencies, the second copies the final wheel into a clean runtime layer.
3. Leverage Docker’s cache by ordering `COPY` and `RUN` instructions so that rarely‑changed files are cached.

I also added a `--platform=linux/amd64` flag to avoid architecture mismatches on our CI pipeline.

**Result** – The image shrank from 1.4 GB to 550 MB, build time dropped by 35 %, and inference latency stabilized at 630 ms across all environments. I learned that pinning digests and staging builds are the single most effective ways to keep Docker images predictable and efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
