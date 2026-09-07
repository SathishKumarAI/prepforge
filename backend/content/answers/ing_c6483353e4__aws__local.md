---
qid: ing_c6483353e4__aws__local
question: 'Explain: Questions — Abridge Software Engineer Interview Experience - United
  States'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 430
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:51:05-05:00'
sources: []
---

**Situation & Task**  
In my last role at a fintech startup I was tasked to build an end‑to‑end fraud detection pipeline that would flag suspicious credit‑card transactions in real time. The business required 99.9 % availability and < 2 s latency, while keeping the cost under $50K/month.

**Action (Design & Execution)**  
* **Data ingestion:** Used Kinesis Data Streams to stream ~10M events/day with auto‑scaling shards.  
* **Feature engineering:** Employed Lambda to enrich each event with user‑profile and device data stored in DynamoDB; this kept the processing stateless and horizontally scalable.  
* **Model serving:** Deployed a SageMaker endpoint (multi‑model hosting) behind an Application Load Balancer, auto‑scaling on CPU usage. The model was a Gradient‑Boosted Tree that achieved 97 % precision / 92 % recall on a held‑out test set.  
* **Alerting & rollback:** Integrated CloudWatch Alarms and SNS to trigger Lambda rollbacks if latency exceeded 1.8 s or error rate > 0.5 %.  

**Result**  
The pipeline reduced false positives by 35 %, cut fraud losses by $1.2M in the first quarter, and maintained 99.95 % uptime while staying $12K below budget.

**Leadership Principles Highlighted**  
* **Customer Obsession** – Delivered a reliable, low‑latency solution that protected users’ money.  
* **Ownership** – Took end‑to‑end responsibility from data capture to model deployment and cost monitoring.  

*Bar‑raiser focus:* I demonstrated deep technical dive (Kinesis shard sizing, Lambda cold start mitigation), quantified impact (fraud loss reduction, uptime), and reflected on a failed first attempt where insufficient shard scaling caused 0.3 s latency spikes—leading me to implement auto‑scaling rules before production launch.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
