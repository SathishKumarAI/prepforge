---
qid: ing_3decc3d6ed__aws__local
question: 'Explain: Use vertical partitioning to scale data efficiently in Amazon
  DynamoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 478
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:45:58-05:00'
sources: []
---

**Situation (S)**  
At my last role I built a recommendation engine that stored user‑behavior logs in DynamoDB. By the end of year 2 our table grew to ~3 TB and read latency spiked from 5 ms to >200 ms during peak traffic, hurting the “Customer Obsession” principle.

**Task (T)**  
I needed to reduce latency while keeping costs under the $10k/month budget, without redesigning the entire data model—so I applied **vertical partitioning**.

**Action (A)**  
1. **Analyzed access patterns**: 70 % of reads were for “profile” attributes (age, gender) and 30 % for “activity” logs.  
2. Created two tables:  
   * `UserProfile` – PK = `user_id`, sort key = `partition_type='PROFILE'`.  
   * `UserActivity` – PK = `user_id#date`, sort key = activity ID.  
3. Used **Global Secondary Indexes (GSIs)** on `activity_type` for quick analytics.  
4. Deployed a small **Lambda** to sync profile changes across tables, ensuring consistency (**Ownership**).  
5. Monitored with CloudWatch; latency dropped from 200 ms to <15 ms, throughput stayed within provisioned limits, and the cost fell by 18 % due to fewer read/write units.

**Result (R)**  
- **Customer Obsession**: Faster recommendations improved CTR by 12 %.  
- **Deliver Results**: Reduced ops cost by $1.8k/month and maintained 99.9 % availability.  
- Learned that *vertical partitioning* is a lightweight, high‑impact strategy—no schema rewrite, just smarter table design.

> **Bar‑raiser takeaway:** Show ownership of the problem, dive deep into usage data, quantify the impact (latency, cost, CTR), and reflect on lessons learned from the initial failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
