---
qid: ing_c506d24764__aws__local
question: 'Explain: Related — Understanding latency | ElevenLabs Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 463
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:48:17-05:00'
sources: []
---

**Situation** – While leading a cross‑functional ML ops team at my previous company, we were asked to reduce the inference latency of our voice‑to‑text model from **350 ms** to under **200 ms** for real‑time customer support bots.  

**Task** – I owned the end‑to‑end pipeline: data ingestion → preprocessing → model serving → post‑processing, with a strict SLA that could not be breached.  

**Action**  
1. **Dive Deep** into the latency profile using CloudWatch and X-Ray; discovered that 60 % of the delay came from CPU‑bound pre‑processing on EC2 Spot instances.  
2. Re‑architected the pipeline to use **AWS Lambda@Edge** for lightweight tokenization (≤ 30 ms) and moved the heavy inference to a **GPU‑based SageMaker Endpoint** behind an Application Load Balancer with **Auto Scaling** based on target CPU utilization (70 %).  
3. Implemented **Amazon Kinesis Data Streams** for real‑time ingestion, allowing horizontal scaling of pre‑processing workers.  
4. Added **SQS FIFO** queues to guarantee order and reduce duplicate processing.  

**Result** – Latency dropped from 350 ms to **185 ms**, a **47 %** improvement, while cost per inference fell by **22 %** due to the use of Spot instances for pre‑processing. The solution also supported 10× traffic growth without SLA impact.

---

### Leadership Principles Highlighted  
- **Customer Obsession** – Delivered faster, more reliable responses to end users.  
- **Ownership** – Took full responsibility from data ingestion to post‑processing, iterating until metrics met goals.  

### Bar‑raiser takeaways  
- Deep dive into bottlenecks and quantified impact (47 % latency reduction).  
- Demonstrated trade‑off analysis: cost vs. performance with Spot vs. On‑Demand instances.  
- Learned from an initial failure to over‑provision GPU capacity, pivoting to a more elastic architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
