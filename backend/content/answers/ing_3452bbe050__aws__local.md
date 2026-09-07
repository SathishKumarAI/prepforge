---
qid: ing_3452bbe050__aws__local
question: 'Explain: cells that way we can filter out — UBER System design | OLA system
  design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 581
total_tokens: 827
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:23:06-05:00'
sources: []
---

**Customer Obsession & Dive Deep**

*Situation*: In 2023 my team at Amazon was tasked with reducing “ghost‑ride” fraud in the Prime Video recommendation engine—customers who paid for but never streamed content. The fraud rate had risen to **7% of all streams**, costing $12 M annually.

*Task*: Build a real‑time cell‑level filter that flags suspicious user sessions before they hit the catalog, without hurting legitimate traffic (≤0.5 % false positives).

*Action*:  
1. **Data pipeline** – Ingested session logs into **Amazon Kinesis Data Streams**, partitioned by region and user ID.  
2. **Feature extraction** – A Lambda function transforms raw events into per‑session feature vectors (time on page, click depth, device type).  
3. **Model training** – Trained a Gradient‑Boosting model in **SageMaker**, using historical fraud labels; we performed hyperparameter sweeps with SageMaker Experiments to keep inference latency <10 ms.  
4. **Real‑time scoring** – Deployed the model as an endpoint behind **Amazon API Gateway + Lambda@Edge** so that each session is scored before the catalog service receives it. If probability >0.92, we route the request to a “sandbox” content bucket and flag for manual review.  
5. **Observability** – Emitted metrics (score distribution, false‑positive rate) to **Amazon CloudWatch**; set up alerts to trigger re‑training when drift is detected.

*Result*: After launch, fraud dropped from 7 % to **2.3 %**, saving $4.8 M annually. The system processed >200k sessions/sec with <1 ms latency per request, and the false‑positive rate stayed at **0.32 %**. Cost was under $15 k/month (Kinesis + Lambda + SageMaker endpoint), a 35 % reduction from the previous batch‑processing approach.

*What the bar‑raiser looks for*:  
- **Ownership**: I led cross‑functional design, from data ingestion to deployment, and owned post‑launch monitoring.  
- **Dive Deep**: Detailed understanding of Kinesis sharding, Lambda concurrency, model latency constraints, and drift detection.  
- **Quantified Impact**: Precise metrics (fraud %, cost savings, latency).  
- **Learning from Failure**: Early prototype suffered high false positives; we iterated on feature engineering and introduced a secondary “confidence” threshold before blocking traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
