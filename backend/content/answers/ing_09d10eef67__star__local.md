---
qid: ing_09d10eef67__star__local
question: 'Explain: MongoDB atlas search — Mongoatlassearch'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 322
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:48:49-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we were building a real‑time fraud detection dashboard. The data set grew to over 8 million transaction documents in MongoDB Atlas, and our search for suspicious patterns was sluggish—full collection scans took minutes.

**Task** – I needed to implement a fast, scalable full‑text search that could filter by merchant name, transaction amount range, and flag anomalies within seconds, all while staying within the Atlas free tier’s limits.

**Action** – I created an Atlas Search index on the `merchant` field with a custom analyzer (lowercase + edge n-gram) to support partial matches. Using the `$search` aggregation stage, I combined a `text` query for merchant names with a `range` filter on `amount`. I also added a `compound` score that boosted documents where the amount exceeded our threshold. To keep costs low, I used Atlas’s “index tier” and monitored the index size via the Atlas UI, pruning unused fields.

**Result** – Query latency dropped from ~4 s to <200 ms on average, handling 300+ concurrent searches without impacting write throughput. The dashboard now flags high‑risk transactions in real time, improving our fraud detection rate by 35%. I learned how Atlas Search’s hybrid text + structured querying can replace expensive full scans while remaining cost‑effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
