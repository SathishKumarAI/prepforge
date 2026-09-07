---
qid: ing_fe4f8117b7__aws__local
question: 'Explain: Evolution of AI Agents (2020-2025) — Agent Building Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 419
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:53:06-05:00'
sources: []
---

**Situation & Task**  
In my last role as ML Lead at a fintech startup (Jan 2020‑Feb 2025), we had to shift from rule‑based fraud detection to autonomous AI agents that could adapt in real time. The goal was to reduce false positives by 30% while keeping latency under 200 ms.

**Action – Technical Design**  
1. **Data Pipeline:** Built an event‑driven ingestion layer with **Amazon Kinesis Data Streams** → **Glue** for schema enforcement → **Lake Formation** data lake.  
2. **Model Training:** Leveraged **SageMaker Pipelines** for reproducible training, using **Neural Architecture Search (NAS)** to auto‑tune models across 8 GPU instances.  
3. **Inference Engine:** Deployed a multi‑model endpoint on **SageMaker Runtime**, fronted by **API Gateway + Lambda** for request routing. Added an **Edge TPU** layer via **Greengrass** for low‑latency edge inference in branch offices.  
4. **Feedback Loop:** Implemented a continuous‑learning loop with **Amazon DynamoDB Streams** feeding back predictions to retrain models nightly.

**Result**  
- False positives dropped from 12% to 8.5% (≈ 30% reduction).  
- Average latency: 145 ms, meeting SLA.  
- Operational cost fell 18% by auto‑scaling GPU workers during low traffic periods.

**Learning & Ownership**  
I owned the entire end‑to‑end stack, continuously diving deep into model drift metrics and iterating on the pipeline. After a mis‑tuned hyperparameter caused a spike in latency, I instituted automated health checks that prevented future regressions.  

*Leadership Principles:* **Customer Obsession**, **Ownership**, **Dive Deep**, **Bias for Action**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
