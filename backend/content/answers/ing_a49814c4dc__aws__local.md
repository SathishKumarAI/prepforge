---
qid: ing_a49814c4dc__aws__local
question: 'Explain: Cohere System Design — Ai Companies Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 424
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:39:37-05:00'
sources: []
---

**Situation / Task**  
I was asked to design a real‑time language‑model inference platform for Cohere that could serve millions of requests per day while keeping latency under 50 ms and cost below \$2M/yr.

**Action**  
* **Ownership & Customer Obsession** – I scoped the user journey (API call → tokenization → model forward pass → post‑processing) and set SLAs based on actual customer traffic spikes.  
* **Dive Deep & Invent & Simplify** – Chose a modular micro‑service architecture:  
  * **Amazon SageMaker Endpoint** for hosting multiple transformer models with autoscaling.  
  * **AWS Lambda + API Gateway** to orchestrate request routing and tokenization, keeping the compute footprint small.  
  * **Amazon ElasticCache (Redis)** for caching frequent prompts and embeddings.  
  * **Kinesis Data Streams** feeding a real‑time analytics pipeline in Athena/QuickSight to monitor latency, error rates, and cost per inference.  
* **Bias for Action & Deliver Results** – Implemented a “shadow” mode that runs new model versions in parallel to production, automatically rolling back if latency exceeds 60 ms or accuracy drops >2%.  

**Result**  
Within 3 months:  
* Sustained <45 ms average latency at peak 1.5M RPS.  
* Reduced inference cost by **32%** (from \$2.8M to \$1.9M).  
* Achieved a 99.7% uptime SLA, exceeding the original 99.5%.  

**Bar‑raiser takeaway** – I owned the end‑to‑end flow, dived into real traffic data for tuning, quantified impact with clear cost & latency metrics, and iterated rapidly from failure (latency spikes) to a robust, scalable solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
