---
qid: ing_f587cd1de6__aws__local
question: 'Explain: Task-Specific LLM Evals that Do & Don''t Work'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 484
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:32:05-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a team that built a *Task‑Specific LLM Evaluation Suite* for an internal chatbot used by 50 k support agents. The goal was to benchmark model responses on “policy compliance” and “sentiment alignment” while keeping latency <200 ms.

**Action & Technical Design**  
I scoped the problem with clear acceptance criteria: (1) automated scoring against a gold‑standard dataset, (2) real‑time inference in production, (3) cost ≤$0.02 per evaluation.  

*Design*:  
- **Data pipeline** – S3 for raw logs → Glue ETL → DynamoDB for candidate–gold pairs.  
- **Inference** – SageMaker Runtime + Lambda “warm pool” to keep at least 2 endpoints active, reducing cold‑start latency.  
- **Evaluation engine** – Step Functions orchestrate parallel scoring: a) *exact match* (works best for compliance), b) cosine similarity via OpenSearch embeddings (fails on nuanced sentiment).  

We added a *confidence‑threshold gate* that flagged low‑score responses for human review, cutting false positives by 35 %.

**Result**  
After two sprints the evaluation suite reduced manual reviews from 12 k/month to 7.8 k, saving $18k/yr and improving agent satisfaction scores by 4 points (measured via NPS). The system ran at 99.9% availability with an average cost of $0.015 per eval.

**Reflection & Bar‑raiser Signals**  
- *Ownership*: I owned the end‑to‑end pipeline, from data ingestion to SLA monitoring.  
- *Dive Deep*: Investigated why cosine similarity underperformed on sentiment; discovered that domain‑specific tokenization was required.  
- *Quantified Impact*: Clear metrics (review count reduction, cost savings, NPS lift).  
- *Learning from Failure*: Adjusted the evaluation strategy after initial false‑positive spikes, demonstrating rapid iteration and resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
