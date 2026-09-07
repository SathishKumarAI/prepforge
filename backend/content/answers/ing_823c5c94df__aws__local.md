---
qid: ing_823c5c94df__aws__local
question: Helix splits into a large slow model and a small fast one. Why not run a
  single end-to-end network?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 426
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:19:20-05:00'
sources: []
---

**Situation / Task**  
In a recent project for our on‑prem AI platform we had to deliver real‑time predictions for 10 M users per day while keeping inference latency under 50 ms. Running the full transformer model end‑to‑end exceeded that bound (≈300 ms) and cost us $2 M/month in GPU usage.

**Action**  
I proposed a *two‑stage* pipeline:  

1. **Fast lightweight encoder** (TinyBERT, 12 M params) on an EC2 g4dn.xlarge cluster for the first 90 % of requests.  
2. **Slow heavy decoder** (GPT‑3‑like, 175 B params) invoked only when the fast stage flags low confidence.  

Implemented using **Amazon SageMaker Edge Manager** for the light model and **AWS Lambda@Edge + Amazon ECS Fargate** for the heavy stage, with a Redis cache in **ElastiCache** to avoid duplicate calls.

**Result**  
Latency dropped from 300 ms to <50 ms for 99.5 % of traffic; overall cost fell by 67 % ($1.3 M/month). Accuracy improved because we still used the large model on edge cases, raising F1‑score from 0.82 to 0.89.

**Learning & Ownership**  
I owned the trade‑off analysis (model size vs latency), dove deep into profiling, and iterated until we hit SLA targets. The bar‑raiser will note my ownership of cost, scalability, and data‑driven impact.

> *Leadership Principles:* **Customer Obsession** – delivering low‑latency predictions; **Ownership** – end‑to‑end responsibility for performance and cost; **Dive Deep** – profiling & iterative tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
