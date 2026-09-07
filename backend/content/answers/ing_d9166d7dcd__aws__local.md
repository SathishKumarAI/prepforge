---
qid: ing_d9166d7dcd__aws__local
question: 'Explain: Your agent''s prompt cache hit rate is 20% when you expected 90%.
  Walk me through the debugging.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 500
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:30:00-05:00'
sources: []
---

**Situation (S)**  
I was leading a serverless LLM‑driven chatbot on **AWS Lambda + API Gateway**. The prompt cache, backed by **DynamoDB Global Tables**, was only 20 % hit—far below the 90 % target we’d promised to stakeholders.

**Task (T)**  
Restore the cache hit rate while keeping latency < 200 ms and cost <$0.05 per invocation.

**Action (A)**  

| Step | What I did | AWS services used |
|------|------------|-------------------|
| 1️⃣ **Metrics & alerts** | Added CloudWatch metrics for `CacheHitRate`, `Latency`, and `ProvisionedThroughputExceeded`. | CloudWatch, SNS |
| 2️⃣ **Data‑deep dive** | Queried DynamoDB logs to find key patterns; discovered hot keys were distributed over 3 partitions, causing uneven traffic. | DynamoDB Streams, Athena |
| 3️⃣ **Partition redesign** | Implemented a composite partition key (`prompt_hash#user_id`) and increased read capacity units to 4× per region. | DynamoDB |
| 4️⃣ **Cache warm‑up** | Scheduled nightly Lambda to pre‑load the most frequent prompts into the cache using an SQS queue. | Lambda, SQS |
| 5️⃣ **Cost control** | Switched to on‑demand capacity for low‑traffic regions and enabled auto‑scaling. | DynamoDB Auto Scaling |

**Result (R)**  
- Cache hit rate jumped from **20 % → 92 %** within 48 h.  
- Average latency dropped to **85 ms**.  
- Monthly cost decreased by **18 %** ($1,200 saved).  

**Leadership Principles Highlighted**  
- **Customer Obsession**: Delivered a faster, cheaper experience for end users.  
- **Ownership & Dive Deep**: Took full ownership of the failure, drilled into logs, and engineered a scalable solution.  

*Bar‑raiser note*: I quantified impact (hit rate %, latency, cost), showed deep analysis (partitioning logic), and reflected on the initial mis‑configuration to avoid future “hot key” drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
