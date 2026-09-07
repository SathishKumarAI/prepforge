---
qid: ing_6a48cc05cc__aws__local
question: 'Explain: Option1 - Partitioning based on UserID (problem of hot spots)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 435
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:24:48-05:00'
sources: []
---

**Situation & Task**  
In a recommendation service that processed ~5 M events per day, my team stored event logs in DynamoDB keyed by **UserID‑Timestamp**. We hit throttling on hot users (e.g., top 1 % of active accounts) and the latency spiked from 50 ms to >500 ms.

**Action**  
I redesigned the key schema to include a *shard prefix* (`hash(UserID)%N`) so that write traffic was spread across multiple partitions. I also added an **SNS topic** to trigger an Athena query nightly for analytics, and leveraged **DynamoDB Auto Scaling** with a target of 70 % utilization.  

I ran a controlled A/B test:  
- *Baseline*: 5 M writes/day, 95 % success rate, avg latency 300 ms.  
- *New design*: 5 M writes/day, 99.8 % success rate, avg latency 80 ms.  

**Result**  
The system handled the same load with a 3× reduction in throttling and a 70 % cost saving on read capacity units. It also enabled near‑real‑time dashboards via Athena without impacting OLTP traffic.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Reduced user wait times, improving UX for millions of customers.  
- **Ownership & Dive Deep**: Identified the root cause (partition skew), engineered a scalable solution, and measured impact quantitatively.

**Bar‑raiser Takeaways**  
- Clear ownership of problem scope.  
- Deep technical dive into DynamoDB partitioning and scaling mechanics.  
- Quantitative evidence of improvement.  
- Reflection on failure: we initially underestimated hotspot severity; the redesign prevented future outages.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
