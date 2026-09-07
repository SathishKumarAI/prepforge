---
qid: ing_6a4de7d586__aws__local
question: 'Explain: Read more — Latencynumbers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 540
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:24:58-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked with reducing the end‑to‑end inference latency of a recommendation model that served 3 M daily users on an e‑commerce platform. The current pipeline (SageMaker batch transform → Lambda → DynamoDB) averaged **1.2 s per request**, which hurt conversion rates.

**Action & Design**  
I owned the problem and dove deep into the trace logs:  
* **Model size** – 120 MB; inference time dominated by deserialization.  
* **Cold‑start latency** – Lambda was warming up on each request.  

To solve this I redesigned the stack:

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| Model hosting | SageMaker *Inference Endpoint* (Multi‑Model) | Keeps the model in memory, eliminates cold starts. |
| Request routing | API Gateway + Lambda@Edge | Low‑latency edge routing; removes extra hop to DynamoDB. |
| Feature store | Amazon Timestream (time‑series) | Sub‑ms read for user features, no hot spot on DynamoDB. |
| Monitoring | CloudWatch + SageMaker Model Monitor | Detect drift and latency spikes in real time. |

I leveraged **SageMaker’s “Bring Your Own Container”** to use a lightweight TorchScript model, cutting inference CPU cycles by 40 %. I also implemented *batch inference* for cold‑start requests (triggered via SNS) so that the endpoint stays warm.

**Result**  
Latency dropped from **1.2 s → 0.28 s** on average (77 % reduction). A/B testing showed a **3.5 % lift in click‑through rate** and a **2.1 % increase in revenue per session**, translating to ~$4.8 M additional annual revenue.

**Learnings & Bar‑raiser cues**  
*Ownership*: I took full responsibility from data ingestion to deployment, continuously iterating on metrics.  
*Dive Deep*: Detailed latency profiling revealed the true bottleneck was model deserialization, not network hops.  
*Quantified Impact*: Measured before/after latency and business KPIs.  
*Failure Reflection*: Early attempts with Lambda alone caused 200 ms spikes; we learned to avoid stateless functions for ML inference at scale.

This solution balances **scalability** (auto‑scaling endpoints), **availability** (multi‑AZ SageMaker), and **cost** (pay‑per‑use endpoint vs. reserved compute).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
