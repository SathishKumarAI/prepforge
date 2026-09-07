---
qid: ing_d8b110ce9d__aws__local
question: 'Explain: Think Big — Leadership Principles'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 393
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:29:22-05:00'
sources: []
---

**Think Big – ML Solution for Global Fraud Detection**

**Situation (S)**  
In 2023 I led a cross‑functional team at an online marketplace that was losing ~12 % of revenue to fraud. The existing rule‑based engine could only process 200 transactions per second and missed high‑value patterns.

**Task (T)**  
Design a scalable, real‑time ML system that could ingest millions of events daily, learn new attack vectors automatically, and reduce fraud losses by >30 %.

**Action (A)**  
- **Ownership & Dive Deep**: I scoped the data pipeline (Kafka → Kinesis Data Streams), chose SageMaker for model training, and leveraged Redshift for feature store.  
- **Invent & Simplify**: Built a streaming inference service on Lambda + API Gateway that routed each transaction to a pre‑trained XGBoost model hosted in SageMaker Endpoint.  
- **Bias for Action**: Deployed the first prototype in 2 weeks; iterated using A/B testing with an 8 % lift in detection rate within 48 h.  
- **Customer Obsession**: Integrated real‑time alerts to merchants, reducing false positives by 40 %.

**Result (R)**  
- Fraud losses dropped from $15 M/year to $10 M/year (33 % reduction).  
- Latency ≤ 120 ms per transaction; throughput >1 M transactions/day.  
- Cost decreased 25 % via spot instances and auto‑scaling.

**Bar‑raiser Takeaway**  
Demonstrated ownership, deep technical chops, measurable impact, and rapid learning from early failures (e.g., shifting from batch to streaming after latency spikes).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
