---
qid: ing_af98a58ba4__star__local
question: 'Explain: Storage — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 378
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:23:08-05:00'
sources: []
---

**Situation**  
I was hired by a fintech startup that needed to launch a real‑time fraud detection model within six weeks. The data set was growing at ~10 GB/day, and the team had no dedicated data lake.

**Task**  
Design a cost‑effective storage architecture that could handle the velocity of new data while keeping retrieval latency under 200 ms for model inference.

**Action**  
I started with a back‑of‑the‑envelope estimate: if we keep 30 days of raw logs and store them in an object store, that’s roughly 10 GB/day × 30 ≈ 300 GB. Using AWS S3 at $0.023/GB/month gives ~\$6.90/mo for storage plus a small transfer cost.  
For fast reads I layered an Amazon DynamoDB table with 1 MB items (each containing a hashed transaction ID and feature vector). Calculated that each write would be about 10 kB, so 300 GB/day ≈ 30 M writes; at $0.25 per million write‑capacity units the monthly cost is ~\$7.50.  
I added an in‑memory cache (Redis) for the last 5 minutes of traffic, costing ~$1.20/mo. I also set up a nightly Spark job to materialize feature tables into Parquet on S3, using spot instances to keep compute under $15/day.

**Result**  
The final architecture ran within a $25/month budget, met the latency target, and scaled linearly as data grew. I learned that a quick cost‑model can prevent over‑engineering while still delivering a production‑ready ML pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
