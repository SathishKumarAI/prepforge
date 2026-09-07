---
qid: ing_71431f7a13__aws__local
question: 'Explain: wake up if I do give that — The Many Meanings of Event-Driven
  Architecture \u2022 Martin Fowler \u2022 GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 407
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:41:38-05:00'
sources: []
---

**Situation / Task**  
I was asked to refactor a legacy batch‑processing system that generated nightly reports for a global SaaS product (≈ 2 M users). The client wanted real‑time analytics and the ability to trigger downstream processes on demand—essentially an event‑driven architecture.

**Action**  
1. **Customer Obsession & Ownership:** I mapped every user journey to a stream of events (`user_signup`, `purchase`, `feature_flag_toggle`).  
2. **Dive Deep & Design:** Built a *Kafka* cluster (managed via MSK) for ingestion, partitioned by region to keep latency < 50 ms.  
3. **AWS Services:**  
   - **Amazon Kinesis Data Streams** → low‑cost, auto‑scaling input.  
   - **Lambda** (Python 3.9) → stateless consumers that update a *DynamoDB* table for real‑time metrics.  
   - **Step Functions** orchestrate complex workflows (e.g., fraud check).  
   - **EventBridge** routes events to microservices, enabling *serverless* decoupling.  
4. **Scalability & Cost:** Auto‑scaling Kinesis shards keep throughput proportional to traffic; Lambda concurrency throttles prevent cold starts. Estimated cost reduction: 35 % vs. previous EC2 batch jobs.  
5. **Bias for Action & Deliver Results:** Deployed in two weeks, reduced report latency from 24 h to < 10 s and increased feature adoption by 18 %.

**Result**  
The client now receives real‑time dashboards; support tickets dropped 42 % due to instant issue visibility. I documented the architecture in Confluence and led a workshop that upskilled the dev team, ensuring long‑term ownership.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
