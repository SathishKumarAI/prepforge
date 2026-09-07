---
qid: ing_cf2b1b9a08__aws__local
question: 'Explain: Make it customer-driven — Careers at Glean | Glean Work AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 347
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:09:24-05:00'
sources: []
---

**Situation / Task**  
At Glean I led the “Customer‑Driven AI” initiative to shift our recommendation engine from a data‑centric model to one that prioritizes user intent and feedback. The goal was to increase engagement by at least 20 % while keeping inference latency under 100 ms.

**Action**  
- **Ownership & Customer Obsession:** I set up a cross‑functional squad (Product, Engineering, Data Science) and introduced a *Voice of the User* loop: daily surveys, in‑app prompts, and real‑time clickstream analysis.  
- **Dive Deep:** We re‑engineered our feature extraction pipeline using Amazon SageMaker Feature Store to ingest user signals (search history, document interactions) with 1‑second freshness.  
- **Bias for Action & Invent & Simplify:** Deployed a lightweight inference service on AWS Lambda + API Gateway behind an Application Load Balancer, auto‑scaling per request volume.  
- **Deliver Results:** Within three months we saw a 27 % lift in time spent per session and a 15 % drop in bounce rate. Cost stayed below $0.02 per inference by leveraging spot instances for training.

**Result**  
The customer‑driven model not only exceeded our engagement target but also reduced churn by 8 %. I documented the failure points (initial overfitting to historical data) and iterated on the feedback loop, demonstrating continuous learning—exactly what a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
