---
qid: ing_e70c5169f8__star__local
question: 'Explain: LinkedIn System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 284
total_tokens: 521
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:10:20-05:00'
sources: []
---

**Situation:**  
At my previous role, we were tasked with revamping LinkedIn’s skill‑recommendation feature after user engagement dropped by 18% over six months.

**Task:**  
I needed to design a scalable ML pipeline that could ingest real‑time profile updates, train embeddings for skills and jobs, and serve personalized skill suggestions within milliseconds for millions of users.

**Action:**  
I architected an event‑driven architecture using Kafka streams to capture profile changes, stored raw events in S3, and employed Spark Structured Streaming to update a feature store in DynamoDB. For the model I used a pairwise learning‑to‑rank algorithm (LambdaMART) trained on user interaction logs; embeddings were generated with a GraphSAGE network over the professional network graph. The inference layer was deployed as a low‑latency gRPC service behind an AWS Lambda edge function, caching top‑10 suggestions in Redis per region.

**Result:**  
Within three months of deployment, click‑through rate on skill recommendations rose 32%, and overall user session time increased by 12%. I learned the critical balance between model complexity and latency constraints, and how to iterate quickly with a data‑driven feature store.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
