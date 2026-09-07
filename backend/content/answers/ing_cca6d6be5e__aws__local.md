---
qid: ing_cca6d6be5e__aws__local
question: 'Explain: Text generation · Hugging Face — Text generation \u00b7 Hugging
  Face'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 456
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:03:37-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the launch of an internal chatbot that used Hugging Face’s GPT‑2 to generate product support answers. The goal was a 30 % reduction in manual ticket triage while keeping answer quality above 85 % NPS.

**Action**  
I scoped the solution with *Customer Obsession* and *Ownership*:  

1. **Data pipeline** – Raw logs → S3 bucket → Glue ETL to produce fine‑tuning corpora (≈ 500 k QA pairs).  
2. **Model training** – SageMaker notebook trained GPT‑2 on 4 p3.xlarge GPUs for 12 h; we achieved a perplexity drop from 45 to 22, correlating with an NPS lift of +6 points in pilot.  
3. **Inference** – Deployed as a fully managed SageMaker endpoint (ml.m5.large) behind API Gateway + Lambda. Autoscaling capped at 10 RPS with 99.9 % latency SLA; cost ≈ $0.005 per inference, saving $12k/month vs. custom EC2 infra.  
4. **Monitoring** – CloudWatch metrics and SageMaker’s Model Monitor flagged drift; we retrained quarterly, maintaining quality without manual intervention.

**Result**  
The chatbot handled 25 % of tickets instantly, cutting triage time by 35 %. Customer satisfaction rose from 78 % to 84 %, and the team reclaimed 12 engineer‑hours weekly.  

**Bar‑raiser notes I’d listen for** – clear ownership, deep dive into trade‑offs (GPU vs. cost, latency vs. scaling), quantified impact, and evidence of learning from a model drift incident that prompted automated retraining.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
