---
qid: ing_bbb6993aab__aws__local
question: 'Explain: AI Safety and the Age of Dislightenment — fast.ai\u2014Making
  neural nets uncool again \u2013 fast.ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 370
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:28:20-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional team that built an NLP product for a public‑sector client, I noticed the model was becoming “black‑box” and hard to audit. The client’s regulatory team demanded transparency, but our existing fast.ai pipelines made it difficult to trace decisions or explain failures.

**Action**  
I owned the safety review by **dive deep** into the training pipeline:  
- Replaced the default `fastai` learner with a custom **Explainable AI (XAI) wrapper** that logged attention weights and SHAP values for every inference.  
- Integrated these logs into an **AWS Athena / Glue** ETL, storing them in S3 for auditability.  
- Implemented a **Lambda‑driven CI/CD** gate that flagged any model whose explainability score fell below 0.7, automatically rolling back to the last safe version.  
- Trained a lightweight **DistilBERT** surrogate on SageMaker to keep inference latency < 200 ms while preserving accuracy.

**Result**  
The audit passed in the first review cycle—reducing compliance risk by **87%** and cutting manual investigation time from 3 days to 2 hours. Model explainability scores improved from 0.45 to 0.82, boosting stakeholder trust. The cost of the added services stayed under $1k/month, a 15% reduction versus the previous on‑prem GPU cluster.

**Reflection**  
I learned that **Ownership + Customer Obsession** mean turning regulatory pain into product value. Future failures will be mitigated by embedding explainability checks in every model iteration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
