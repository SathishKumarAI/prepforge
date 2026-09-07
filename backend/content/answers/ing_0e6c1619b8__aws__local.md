---
qid: ing_0e6c1619b8__aws__local
question: 'Explain: 4.2 Requirement 2: Handling Offline Users'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 493
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:58:19-05:00'
sources: []
---

**Situation (S)** – Our recommendation engine was built on a real‑time pipeline that served personalized ads to millions of users. When a user’s device lost connectivity for >30 min, the model stopped delivering relevant content, driving a 12 % drop in click‑through rate (CTR) during those periods.

**Task (T)** – I had to design an “offline‑user” fallback that kept the experience high quality while keeping costs low and latency <200 ms.

**Action (A)** –  
1. **Batch‑driven cache**: Every 15 min a Lambda function pulls the latest user embeddings from DynamoDB, runs a lightweight inference on SageMaker Edge containers deployed to AWS IoT Greengrass devices, and writes the top‑10 item IDs back to an encrypted S3 bucket.  
2. **Edge sync**: Devices pull the cached list when offline and serve it locally; if connectivity resumes, they push any interaction events to Kinesis Data Firehose for real‑time re‑ranking.  
3. **Cost & scalability**: Using Lambda + Greengrass reduces per‑device compute from $0.0004 / hour (cloud) to <$0.00005 / hour. S3 storage costs <1 ¢ per GB/month, and Kinesis scales horizontally with no operational overhead.

**Result (R)** – The fallback lifted CTR for offline users back to 95 % of online levels, a 30 % lift in overall revenue. Latency stayed under 200 ms, and we cut inference costs by 40 %.  

> **Bar‑raiser cues**: I owned the problem from data loss to solution rollout; dove deep into latency trade‑offs between Lambda vs Greengrass; quantified impact with CTR and cost metrics; learned that edge caching can replace expensive cloud calls when connectivity is intermittent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
