---
qid: ing_5c563ff65f__aws__local
question: How to view a specific player’s rank and score?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 441
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:54:02-05:00'
sources: []
---

**Situation / Task**  
In a live e‑sports platform I was asked to expose *real‑time* rank and score for any player while keeping latency under 50 ms and cost below $0.05 per query.

**Action**  
1. **Data ingestion** – Scores were streamed from game servers into Kinesis Data Streams, then processed by an AWS Lambda that writes a single record to DynamoDB (partition key `player_id`, sort key `timestamp`).  
2. **Ranking engine** – A scheduled SageMaker batch transform job runs every 5 minutes on the latest 1 M scores, producing a sorted list of top‑N ranks. The output is written to an S3 object (`rankings/2024-09-07.json`) and an Amazon CloudFront edge cache serves it with < 2 ms latency.  
3. **API layer** – API Gateway + Lambda authorizer queries DynamoDB for the player’s current score, then performs a binary search on the cached ranking JSON (retrieved from S3 via CloudFront) to compute rank in O(log N).  

**Result**  
- Latency: 35 ms average, 99th percentile < 70 ms.  
- Cost: $0.023 per request (Lambda + DynamoDB), <$5/month for the batch job and S3/CloudFront.  
- User satisfaction: A/B test showed a 12% increase in session length after adding instant rank lookup.

**Reflection**  
I owned the end‑to‑end pipeline, *dove deep* into DynamoDB read capacity planning, and iterated on the ranking algorithm to reduce cold‑start overhead. The trade‑off was accepting a 5‑minute staleness window; we mitigated this by pushing real‑time score updates to the player’s own client when they play. This showcases Ownership, Dive Deep, and Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
