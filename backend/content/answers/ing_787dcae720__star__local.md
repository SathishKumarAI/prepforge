---
qid: ing_787dcae720__star__local
question: 'Explain: Golden-set construction and rotation — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 345
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:35:01-05:00'
sources: []
---

**Situation** – At my previous company we were launching a new AI‑powered recommendation engine for our e‑commerce platform. The release cycle was every two weeks, but we kept hitting production bugs that required emergency hotfixes, causing downtime and eroding customer trust.

**Task** – I had to design a reliable CI/CD pipeline that could automatically validate each new model build against a “golden set” of test cases, then rotate the golden reference when a genuine improvement was proven. The goal was to cut rollback incidents by 80 % while keeping deployment latency under 15 minutes.

**Action** – I implemented an evaluation gate in GitHub Actions that ran our unit tests and a custom script comparing inference outputs against the current golden set stored in S3. If the new build deviated beyond a 2 % MSE threshold, the pipeline would fail and auto‑rollback to the last stable tag. For rotation, I added a secondary job that executed only when the build passed all gates for three consecutive runs; it then promoted the new model’s outputs as the golden set after manual review via a lightweight web UI. We used Docker, Terraform, and Prometheus alerts to keep everything auditable.

**Result** – Within six weeks we reduced production incidents from 4 per month to zero, cut deployment time by 30 %, and increased customer satisfaction scores by 12 %. I learned that automated gates combined with controlled golden set rotation can make ML releases as safe as traditional software.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
