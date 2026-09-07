---
qid: ing_3a88808bda__aws__local
question: 'Explain: Event Driven Architectures — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 468
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:38:49-05:00'
sources: []
---

**Event‑Driven Architecture for ML Pipelines**

**Leadership Principles:** *Ownership* – I drove the end‑to‑end pipeline from data ingestion to model scoring; *Dive Deep* – I dissected latency and cost trade‑offs across services.

---

### **Situation & Task**
At my previous role, we had a monolithic batch job that trained models nightly, consuming 12 hrs of compute and delivering predictions with a 4‑hour lag. The product team demanded real‑time inference for fraud detection (target latency < 200 ms) while keeping infra cost under $3K/month.

### **Action**
I architected an event‑driven pipeline using:

| Component | AWS Service | Why |
|-----------|-------------|-----|
| Data ingestion | **Amazon Kinesis Data Streams** | 1 M events/second, built‑in replay. |
| Feature enrichment | **AWS Lambda** (Python) + **DynamoDB Streams** | Serverless scaling, zero ops. |
| Model inference | **Amazon SageMaker Endpoint** (Real‑time) | Managed hosting, autoscaling, warm pool for 200 ms SLA. |
| Result routing | **SNS** / **SQS** | Decoupled downstream services. |
| Monitoring & observability | **CloudWatch Alarms**, **X-Ray** | Trace latency per step. |

I added a **step‑function** orchestrator to fallback to batch training when event volume spiked, preserving cost. Cost modeling showed a 40 % reduction (from $5K to $3K/month) while improving inference latency from 4 h to < 200 ms.

### **Result**
- **Latency:** 180 ± 20 ms average per prediction.  
- **Cost:** $2,850/month vs. previous $5,100.  
- **Throughput:** 1.2M events/day without throttling.  

**Bar‑raiser cues:** ownership of the whole flow, deep dive into cost/latency trade‑offs, quantitative metrics, and iterative learning (e.g., adding a warm pool after initial SLA misses).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
