---
qid: ing_a413a30a71__star__local
question: 'Explain: Order matters for caching — 9 Docker Best Practices You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 319
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:01:34-05:00'
sources: []
---

**Situation**  
While leading a migration of our recommendation engine from a monolith to microservices, we built 12 Docker images for the new services. The build pipeline was running nightly and each image took over 45 minutes due to repeated downloads of base layers and dependencies.

**Task**  
I needed to reduce the total build time by at least 30 % without compromising reproducibility or security.

**Action**  
I re‑ordered the Dockerfile instructions to maximize layer caching. First, I pulled the `python:3.10-slim` image once and added it before any `RUN` commands. Then I grouped all system package installations into a single `apt-get update && apt-get install -y --no-install-recommends ...` step, followed by a separate `COPY requirements.txt .` and `RUN pip install -r requirements.txt`. Finally, I moved the application source copy (`COPY . .`) to the very end. This ensured that changes in the code triggered only the final layer while cached layers for base image, system packages, and dependencies remained intact.

**Result**  
Build times dropped from 45 minutes to 27 minutes—a 40 % improvement—while CI throughput increased by 1.5×. I also learned that careful instruction ordering turns Docker’s caching into a powerful optimization tool rather than a hidden bottleneck.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
