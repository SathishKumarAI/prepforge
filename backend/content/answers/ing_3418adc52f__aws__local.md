---
qid: ing_3418adc52f__aws__local
question: 'Explain: 3.2 Adaptive Computation via Gating Mechanism'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 360
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:22:41-05:00'
sources: []
---

**Situation** – At my last role I was asked to reduce inference latency of a real‑time fraud model that served ~10 M requests/day while keeping accuracy above 0.95 AUC.  
**Task** – Implement an *adaptive computation* layer so the model could skip expensive sub‑networks for “easy” instances.

**Action** – I introduced a lightweight **gating network** (a shallow MLP) that predicts whether to run the full feature extractor or just a linear baseline.  
- Built on **Amazon SageMaker Pipelines** for reproducible training, using **SageMaker Processing** to generate gate labels from historical data.  
- Deployed with **AWS Lambda + API Gateway** behind an **Elastic Load Balancer**; each request first hits the gate Lambda (≈0.3 ms). If the gate predicts “hard”, the request is routed to a **GPU‑enabled SageMaker Endpoint**; otherwise it goes to a CPU endpoint that only runs the linear model.  
- Leveraged **Amazon CloudWatch** for real‑time monitoring of gate accuracy and latency, triggering auto‑scaling on both endpoints.

**Result** – Latency dropped from 250 ms to 90 ms (64% reduction) while cost fell by ~35 %. A/B tests confirmed no drop in fraud detection performance.  

*Leadership Principles*: **Customer Obsession**—delivered faster decisions for merchants; **Ownership & Dive Deep**—tuned gate thresholds using detailed metrics and iterated until the sweet spot.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
