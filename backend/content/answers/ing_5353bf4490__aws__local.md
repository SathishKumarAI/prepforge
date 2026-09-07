---
qid: ing_5353bf4490__aws__local
question: 'Explain: A partner reports that Harvey missed a change-of-control clause
  in a contract it reviewed. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 429
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:33:14-05:00'
sources: []
---

**Situation / Task**  
Harvey’s legal‑review partner flagged that our automated contract‑audit service missed a change‑of‑control clause in a $12 M SaaS agreement. If we miss such clauses we risk non‑compliance and potential litigation, so I owned the investigation.

**Action**  
1. **Dive Deep into logs & model outputs** – I pulled the raw PDF → OCR → NLP pipeline logs from CloudWatch and S3, noting that the clause was present but our NER model had a 2 % false‑negative rate for “change‑of‑control” tokens.  
2. **Model retraining** – Using SageMaker Ground Truth, I annotated an additional 5 k clauses (including 1 k change‑of‑control examples) and re‑trained the transformer with a learning‑rate schedule that reduced F1 from .84 to .94.  
3. **Pipeline update** – Deployed the new model via SageMaker Endpoint behind API Gateway, added a CloudWatch metric “missed_clause_count” for real‑time monitoring, and scheduled nightly batch jobs on Glue to re‑process any backlog.  
4. **Cost & Availability** – The new endpoint cost $0.12/hr (≈$90/month) vs the previous $0.06/hr; we added a second AZ for HA, keeping latency < 200 ms.

**Result**  
- Missed‑clause rate dropped from 2 % to <0.1 %.  
- Annual risk exposure reduced by an estimated $500k in potential penalties.  
- Partner satisfaction score rose to 4.8/5 on post‑deployment survey.  

**Reflection** – I learned that continuous monitoring of key business metrics (missed_clause_count) turns a one‑off bug into a self‑healing system, embodying *Ownership* and *Bias for Action*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
