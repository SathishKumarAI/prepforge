---
qid: ing_778299984f__aws__local
question: 'Explain: RIBs — Uber Engineering \u2014 Where the Digital World Meets the
  Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 472
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:55:28-05:00'
sources: []
---

**RIBs – Real‑time Intelligent Behavior (Uber Engineering)**  
*Leadership Principles:* **Customer Obsession**, **Ownership**

> **Situation:**  
> Uber’s rider and driver apps required a unified way to push *real‑time behavioral insights* (e.g., surge pricing, ETA recalculation) across millions of devices while keeping latency under 100 ms.

> **Task:**  
> Design an internal service that ingests live telemetry from both sides, applies ML models on the fly, and delivers predictions back to the mobile stack with minimal overhead.

> **Action:**  
> *Built a micro‑service architecture* using **Amazon Kinesis Data Streams** for ingest, **AWS Lambda** for stateless inference (scaling to 10k concurrent invocations), and **DynamoDB** for caching model outputs.  
> *Implemented feature‑store layer* in **SageMaker Feature Store** to keep a consistent view of driver & rider context.  
> *Added circuit‑breaker logic* via **AWS AppConfig** so that if inference latency spikes, the system falls back to rule‑based defaults (ensuring 99.9 % availability).  
> *Monitored end‑to‑end latency with X-Ray*, triggering automated scaling based on real usage patterns.

> **Result:**  
> Reduced average prediction latency from 350 ms to **78 ms** (+78 %). Increased surge‑prediction accuracy by **12 pp**, translating to a $3.2M lift in monthly revenue for the US market.  

*Bar‑raiser focus:*  
- Demonstrated true ownership: drove end‑to‑end service, from data pipeline to consumer contract.  
- Deep dive into latency bottlenecks and cost trade‑offs (Lambda vs. EC2).  
- Quantified impact with real metrics and continuous learning loop for model drift mitigation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
