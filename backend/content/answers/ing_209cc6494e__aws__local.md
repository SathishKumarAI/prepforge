---
qid: ing_209cc6494e__aws__local
question: 'Explain: NIST AI RMF and the GenAI Profile — Ai Governance And Compliance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 416
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:40:50-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team that had to demonstrate compliance for a new GenAI product before launch. The customer was a regulated fintech client, so we needed to map NIST AI Risk Management Framework (RMF) and the newly released GenAI Profile into an end‑to‑end pipeline.

**Action**  
1. **Ownership & Customer Obsession:** I created a *Compliance Canvas* that translated each NIST control (e.g., “Model Bias,” “Explainability”) into measurable checkpoints tied to user experience metrics.  
2. **Dive Deep & Technical Design:**  
   - Built an *Observability Layer* on top of SageMaker Pipelines, using CloudWatch Metrics + X-Ray for inference latency and bias scores.  
   - Implemented a *Policy-as-Code* engine with AWS IAM & AWS Config rules that auto‑flag non‑conforming models.  
   - Stored audit logs in Amazon S3 Glacier Deep Archive (cost‑effective) while keeping recent logs in DynamoDB for quick queries.  
3. **Bias for Action:** We ran a 30‑day pilot, iterating on the bias‑score threshold until it aligned with the client’s risk appetite (≤ 0.02 false‑positive rate).  

**Result**  
- Reduced compliance review time from 4 weeks to 1 week (75% faster).  
- Achieved zero audit findings in the first external assessment.  
- Cost of monitoring stayed under $2k/month, a 40% reduction vs. legacy on‑prem solutions.  

**Bar‑raiser takeaway** – I demonstrated ownership by owning the end‑to‑end compliance loop, dove deep into AWS services to meet scalability & cost goals, quantified impact with clear metrics, and learned that early automation of policy checks prevents costly post‑launch fixes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
