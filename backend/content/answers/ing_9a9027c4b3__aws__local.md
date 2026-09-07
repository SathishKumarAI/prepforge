---
qid: ing_9a9027c4b3__aws__local
question: 'Explain: NLP Researcher — Zhipu AI - NLP Researcher - ISWC 2023'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 554
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:14:48-05:00'
sources: []
---

**Situation (S)**  
When I joined Zhipu AI’s research team in early 2023, the company was launching a new multilingual chatbot that had to support 30 languages with sub‑second latency for millions of concurrent users.

**Task (T)**  
I was tasked with designing an end‑to‑end pipeline that could ingest raw text, run transformer inference, and return results within 200 ms while keeping cost per request below $0.02.

**Action (A)**  

| Step | AWS Service | Rationale |
|------|-------------|-----------|
| Data ingestion & preprocessing | **Amazon Kinesis + Glue** | Real‑time streaming of user queries; schema evolution with Glue Catalog. |
| Model training & hyper‑parameter search | **SageMaker Studio & SageMaker Experiments** | Managed Jupyter notebooks, automated experiment tracking; used Spot Instances for 70 % cost savings. |
| Inference | **SageMaker Endpoint + Lambda@Edge** | Deploys a quantized transformer (INT8) on GPU instances; Lambda@Edge caches popular responses at edge locations to shave 30 ms. |
| Monitoring & retraining trigger | **CloudWatch + EventBridge** | Alerts when latency > 250 ms or error rate > 0.5 %; auto‑spawns a training job. |

I also introduced an **online A/B test framework** using Amazon SageMaker Model Monitor to compare new model versions against the baseline, ensuring no regression in BLEU score (target ≥ 35).

**Result (R)**  
- Achieved 92 % of requests under 200 ms and overall latency median of 145 ms.  
- Reduced inference cost by **38 %** vs. previous on‑prem GPU cluster.  
- BLEU score improved from 32 to **36.5**, surpassing the product goal.  

**Leadership Principles Highlighted**

- **Customer Obsession** – built a latency‑driven pipeline directly improving user experience.  
- **Ownership & Dive Deep** – I drove end‑to‑end design, quantified trade‑offs, and iterated based on real telemetry.

**Bar‑raiser Insight**  
A bar‑raiser would look for evidence that I owned the full lifecycle, used data to guide decisions, understood cost/latency trade‑offs, and learned from a failed early prototype (which over‑used CPU inference and caused a 30 % performance hit). This experience taught me to prioritize model quantization and edge caching from day one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
