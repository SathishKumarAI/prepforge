---
qid: ing_789f22dbbd__aws__local
question: 'Explain: Read Replicas — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 406
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:58:03-05:00'
sources: []
---

**Situation / Task**  
In my last role I led the migration of a customer‑facing analytics platform from a single RDS instance to a highly available, read‑scalable architecture. The app had 30 k concurrent users and generated ~200 GB of transactional data daily; query latency on heavy OLAP workloads was >4 s, hurting our *Customer Obsession* KPI.

**Action**  
I introduced **Aurora MySQL read replicas** (3 nodes) behind an Application Load Balancer. All write traffic hit the primary; all SELECTs were routed to the nearest replica using a custom middleware tag‑based router. To keep data fresh, I implemented a *Change Data Capture* pipeline with AWS DMS + Kinesis that pushed changes to replicas within 2 s, satisfying our *Bias for Action* principle. I also added CloudWatch metrics and an Auto Scaling group that spun up new replicas during peak hours (12–18 h daily), keeping costs down.

**Result**  
Read throughput increased from 1 k QPS to 15 k QPS; query latency dropped from 4.2 s to 0.8 s, improving the *Customer Obsession* score by 27 %. The Auto Scaling policy saved ~18 % on monthly RDS spend while maintaining >99.99 % availability.

**Reflection (Bar‑raiser)**  
I owned every layer—network routing, replica lag tuning, cost controls—and dove deep into replica lag logs to identify a stale partition that caused a 5 s spike. After fixing the schema, we saw a 12 % further latency reduction. I documented lessons in our knowledge base, ensuring future teams could replicate success without re‑inventing the wheel.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
