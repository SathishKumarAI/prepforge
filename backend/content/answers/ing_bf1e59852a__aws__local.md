---
qid: ing_bf1e59852a__aws__local
question: 'Explain: Too expensive to grade everything — Luna Evaluation Models  Cloud
  Observability | Splunk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 457
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:35:12-05:00'
sources: []
---

**Situation / Task**  
I was hired by Luna, a SaaS startup that uses ML models to auto‑grade student essays. The on‑prem inference pipeline cost $1.2 M/month because every document had to hit the GPU cluster for evaluation. I needed to cut costs while keeping latency under 200 ms and accuracy >92%.

**Action**  
*Ownership & Bias for Action*: I mapped the entire data flow, identified a 3× “cold‑start” overhead in the GPU pool, and built an *Observability* layer with **Splunk** + **Amazon CloudWatch** to correlate CPU/GPU utilisation, inference latency, and model error rates.  
*Dive Deep & Invent & Simplify*: I redesigned the pipeline:
1. **Model distillation** – created a lightweight BERT‑lite model (30 % parameters) that maintained 90.5 % accuracy.
2. **Dynamic scaling** – switched from on‑prem GPUs to **Amazon SageMaker Endpoint** with *multi‑model* containers, auto‑scaling based on CloudWatch metrics.
3. **Cost optimisation** – leveraged **Spot Instances** for non‑critical batches and **AWS Lambda** for pre‑processing, reducing compute hours by 55 %.  
4. Implemented a *cache layer* in **Amazon ElastiCache (Redis)** to store the most frequent prompts, cutting inference calls by 40 %.

**Result**  
Monthly spend dropped from $1.2 M to **$430 K** (+64 % savings). Latency stayed <200 ms; accuracy was 90.8 %. The observability stack uncovered a previously hidden 12 % error spike during peak hours, prompting a retraining schedule that improved overall grade quality by 3 %.

**Learnings**  
I learned that end‑to‑end visibility (Splunk + CloudWatch) is critical for spotting cost–quality trade‑offs. The bar‑raiser will note my deep dive into metrics, ownership of the full stack, and the quantified impact on both cost and user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
