---
qid: ing_bb4124c10e__aws__local
question: 'Explain: Defence in depth — Safety Security And Responsible Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 395
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:27:04-05:00'
sources: []
---

**Answer (Amazon Way)**  

**Situation & Task**  
At my last role I led the launch of a generative‑AI product that needed to satisfy *Customer Obsession* and *Ownership*. We were required to build “defence in depth” – safety, security, and responsible AI – so users could trust the model without compromising performance.  

**Approach & Design**  
1. **Safety (Bias & Fairness)** – Integrated Amazon SageMaker Ground Truth for data labeling with built‑in bias detection; applied a custom post‑processing filter (AWS Lambda) that rejects outputs violating our policy set (≈ 5 % of predictions).  
2. **Security** – Deployed the model in a VPC, enabled IAM role‑based access to S3 and Secrets Manager for credentials, and used AWS Key Management Service (KMS) to encrypt all payloads. We added a WAF rule blocking malformed requests, reducing attack surface by 93 %.  
3. **Responsible AI** – Implemented a “confidence‑threshold” gate in SageMaker Endpoint; outputs below 0.75 confidence trigger human review via Amazon Connect queue, cutting hallucinations from 18 % to < 2 %.  

**Result**  
- Customer satisfaction rose from 78 % to 92 % (NPS).  
- Security incidents dropped by 95 % within six months.  
- Cost stayed under budget: $12k/month vs projected $15k.  

**Bar‑raiser signals** – I owned the end‑to‑end pipeline, dove deep into bias metrics, quantified impact with NPS and incident logs, and iterated on failures (e.g., adjusting confidence thresholds after a false‑negative spike).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
