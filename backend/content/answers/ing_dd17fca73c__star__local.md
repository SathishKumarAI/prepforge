---
qid: ing_dd17fca73c__star__local
question: 'Explain: Large Containers or Bloated Images — Cloud Native Anti-Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 296
total_tokens: 536
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:50:13-05:00'
sources: []
---

**Situation:**  
At my last job we were migrating a micro‑service that processed user analytics into Kubernetes. The Docker image grew to 2 GB because every build pulled the full Python runtime, all test dependencies, and a copy of the raw training data.

**Task:**  
I had to reduce the container size below 400 MB without breaking CI/CD or runtime performance, so we could spin up dozens of replicas under strict cost limits.

**Action:**  
First I switched from the official `python:3.12-slim` base to a multi‑stage build: a build stage that installed only the production libraries and compiled the model, then copied the minimal wheel into a tiny Alpine image. I removed unused test packages, stripped debug symbols, and used `pip download --no-binary :all:` to avoid pulling prebuilt wheels that bundled C extensions unnecessarily. Finally, I added a Docker layer cache and automated size checks in CI.

**Result:**  
The final image was 350 MB—an 80% reduction. Deployment time dropped from 90 s to 25 s, and memory usage fell by 35%. The team now runs over 200 replicas for peak traffic without hitting the budget ceiling, and we’ve documented this as a reusable pattern for future services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
