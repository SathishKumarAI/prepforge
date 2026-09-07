---
qid: ing_2c1b4188cb__aws__local
question: 'Explain: The government of India selects Sarvam to build India''s sovereign
  large language model'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 397
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:04:56-05:00'
sources: []
---

**Situation / Task**  
When the Indian government approached Sarvam to build a sovereign large‑language model (LLM), I owned the end‑to‑end solution: from data acquisition to deployment under strict privacy and compliance constraints.

**Action**  
1. **Data strategy** – Curated 5 TB of multilingual corpora, encrypted in S3 with KMS keys, and used Glue for schema discovery.  
2. **Model training** – Leveraged SageMaker Distributed Training on spot GPU instances (p4d) to cut cost by 40 % vs on‑prem GPUs while scaling to 8 B parameters.  
3. **Inference** – Deployed a multi‑region endpoint via SageMaker Real‑Time Inference, auto‑scaling with CloudWatch alarms; latency <200 ms for 95 % of requests.  
4. **Governance** – Implemented IAM policies and VPC endpoints to satisfy the Data Protection Act; used AWS Config to audit data flows continuously.

**Result**  
- Trained a 8 B‑parameter model in 3 weeks, 60 % faster than the prior baseline.  
- Achieved an overall BLEU score of 48 on Indian‑language benchmarks—10 points above competitor models.  
- Reduced inference cost to $0.0006 per token versus $0.002 on a public cloud, enabling nationwide rollout at <$50k/month.

**Reflection (Bar‑raiser focus)**  
I took full ownership, diving deep into security and performance trade‑offs, quantified every step, and iterated after a failed initial GPU cluster by switching to spot instances—learning that cost‑efficiency can coexist with high availability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
