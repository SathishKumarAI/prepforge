---
qid: ing_fc90fe8a8b__star__local
question: 'Explain: Daily Storage Calculation — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 345
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:53:34-05:00'
sources: []
---

**Situation**  
When I joined the data platform team at a fast‑growing photo app, we were hitting a wall: our daily storage budget was shrinking while user uploads were doubling each quarter. The product managers needed an estimate of how much disk space we'd consume per day so they could negotiate better cloud contracts.

**Task**  
I had to design a lightweight, real‑time calculation that would predict the daily storage footprint for the next 30 days, factoring in new posts, edits, and deletions, all while running on our existing Spark/Presto pipeline without adding latency.

**Action**  
First, I modeled each image’s size as a function of resolution, compression ratio, and format. Using the last 90 days of upload logs, I built a per‑user histogram of these attributes in Delta Lake. Then I wrote a UDF that, given a user’s current profile (image count, average size), projected their daily growth using an exponential smoothing factor. To handle deletions, I added a “time‑to‑live” decay term that subtracts the expected churn from the forecast. The final metric was aggregated per hour and pushed to Grafana via Kafka for real‑time dashboards.

**Result**  
The model delivered 95 % accuracy against the next month’s actual usage, saving us $120K in over‑provisioned storage each quarter. I learned that combining simple statistical decay with schema‑aware size estimation can turn raw logs into actionable capacity planning without heavy engineering overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
