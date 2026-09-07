---
qid: ing_ecfa29a04e__aws__local
question: 'Explain: Query a Present URL — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 497
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:14:07-05:00'
sources: []
---

**Situation & Task**  
I was asked to build a service that, given a user’s current URL, quickly tells whether it is *present* in a massive catalog (≈ 10⁹ entries) while keeping latency < 5 ms and cost <$0.01 per query.

**Action – Design**  

| Step | AWS Service | Why |
|------|-------------|-----|
| 1. Ingest URLs | **Amazon Kinesis Firehose → S3** | Continuous stream, durability. |
| 2. Build filter | **AWS Lambda + DynamoDB** | Generate a *Bloom‑filter* per partition (4 MB) and store in DynamoDB (partition key = hash bucket). |
| 3. Query path | **API Gateway → Lambda** → **DynamoDB GetItem** | Retrieve relevant bucket, run Bloom test locally. |
| 4. Fallback | If false positive → **S3 + Athena** | Full scan only on rare cases. |

*Key trade‑offs:*  
- **Scalability:** Each partition is independent; Lambda concurrency scales with traffic.  
- **Availability:** DynamoDB is multi‑AZ, API Gateway provides throttling.  
- **Cost:** Bloom filter size ≈ 0.1 % of raw data → < $5/month for storage + $0.0004 per query.  

**Result** – *STAR*  

> **S**: Implemented the above in 3 weeks.  
> **T**: Deliver a 5‑ms lookup service for 10⁹ URLs.  
> **A**: Deployed Lambda chain, DynamoDB partitions, and Athena fallback; tuned Bloom false‑positive rate to 0.01 %.  
> **R**: Achieved 99.9 % hit accuracy, < 4 ms average latency, and reduced query cost from $0.10 (S3 GET) to <$0.001.  

**Bar‑raiser cues** – I own the end‑to‑end flow, dove deep into false‑positive math, quantified impact in cost & latency, and iterated after a 12 % initial hit‑rate drop by adding a second filter level.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
