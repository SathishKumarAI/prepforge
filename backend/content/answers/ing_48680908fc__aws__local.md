---
qid: ing_48680908fc__aws__local
question: 'Explain: Recommendations for partition keys — Choosing the Right DynamoDB
  Partition Key | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 454
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:09:09-05:00'
sources: []
---

**Situation (S)**  
I led a data‑science team that migrated an ad‑tech recommendation engine from a monolithic MySQL backend to **Amazon DynamoDB**. Our traffic spiked 3× during peak campaigns, and the old schema produced hot partitions, causing latency spikes above 400 ms.

**Task (T)**  
Design a partition‑key strategy that balances *throughput* with *cost*, while keeping the model’s inference latency < 50 ms for 99.9 % of requests.

**Action (A)**  
1. **Dive Deep into access patterns** – logged every request for 24 h, revealing that ~70 % of reads were “user‑by‑content” and 30 % “content‑by‑user”.  
2. **Choose composite keys** – used `{UserID}-{Timestamp}` for user‑centric queries (hot‑key mitigated by time bucketing) and `{ContentID}-{CategoryHash}` for content‑centric lookups, each hashed to evenly distribute items across partitions.  
3. **Leverage AWS services** – enabled **DAX** for read caching (reducing RCU consumption by 60 %) and **Global Tables** for multi‑region failover.  
4. **Implement auto‑scaling** with CloudWatch metrics, setting target utilization at 70 % to preemptively add capacity during campaign peaks.

**Result (R)**  
- Latency dropped from 400 ms to < 30 ms (99.9 th percentile).  
- RCU usage fell by **48 %**, saving ~35 $ per month.  
- The system handled a 4× traffic surge without throttling, proving *Ownership* and *Bias for Action*.  

**Bar‑raiser takeaways** – I owned the end‑to‑end migration, dove deep into real telemetry to justify key design, quantified impact with clear metrics, and learned that time‑based bucketing is essential when hot keys are unavoidable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
