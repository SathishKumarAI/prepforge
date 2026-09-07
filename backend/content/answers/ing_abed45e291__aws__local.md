---
qid: ing_abed45e291__aws__local
question: 'Explain: Example — Strong vs. Eventual Consistency - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 486
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:54:46-05:00'
sources: []
---

**Situation (S)**  
I was tasked to redesign the recommendation engine for a global e‑commerce platform that served ~12 M users/day. The existing system read user click‑streams from **DynamoDB** and wrote real‑time scores back to the same table, but we observed stale recommendations during peak traffic.

**Task (T)**  
Guarantee that every user sees their latest personalized score within 200 ms while keeping cost under $5k/month.

**Action (A)**  
1. **Model the consistency requirement:**  
   *Strong consistency* was mandatory for reads that drive the front‑end UI, but we could tolerate eventual writes to a secondary analytics table.  
2. **Design change:**  
   - Split the data model:  
     *Primary DynamoDB table* (partition key `user_id`) with **strongly consistent** reads and **Conditional Writes** to avoid race conditions.  
     *Secondary **S3 + Athena** bucket* for batch analytics, updated via **DynamoDB Streams → Lambda → S3** (eventual).  
   - Use **AWS Global Accelerator** to route read traffic to the nearest region, reducing latency.  
3. **Cost & scalability:**  
   - Provisioned throughput: 10 k RCU/WCU per table → ~70% utilization during peaks.  
   - Lambda invocations (~12M/day) cost <$200/month.  
4. **Monitoring:**  
   - CloudWatch metrics on `DynamoDB_ConsumedReadCapacityUnits` and `Lambda_Duration`.  
   - Alert if read latency > 150 ms.

**Result (R)**  
- Latency dropped from 350 ms to 180 ms for 95% of users.  
- Stale recommendation incidents fell by **92 %**.  
- Monthly cost stayed within budget, saving ~$1k/month compared to a fully strongly consistent approach.

> *Leadership Principles:* **Ownership** (I took full responsibility for the redesign), **Dive Deep** (analyzed read/write patterns and latency data), **Deliver Results** (measured impact with concrete metrics).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
