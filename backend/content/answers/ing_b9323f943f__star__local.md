---
qid: ing_b9323f943f__star__local
question: 'Explain: Introducing Command A+ | Cohere'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 355
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:41:34-05:00'
sources: []
---

**Situation** – In the fall of 2024 I was leading a data‑science sprint at a fintech startup that needed to auto‑categorize customer support tickets into “refund”, “technical issue”, or “account query”. Our existing rule engine had a 75 % accuracy and was brittle when new product features rolled out.

**Task** – My goal was to build an end‑to‑end system that could ingest the raw ticket text, run it through a Cohere embeddings model, classify with a lightweight logistic regression, and expose a REST endpoint that could be called in real time by our help‑desk software—all within two weeks.

**Action** – I started by experimenting with Cohere’s “Command A+” prompt format to fine‑tune the model on 3,000 labeled tickets. Using their Python SDK, I crafted a prompt template that appended the ticket body and asked the model to output one of the three categories in JSON. After a quick hyperparameter sweep (learning rate, batch size), I integrated the embeddings into a scikit‑learn pipeline and wrapped everything in FastAPI. I also set up an A/B test against the legacy rule engine.

**Result** – The new pipeline achieved 92 % accuracy on our holdout set, a 17 % lift over the old system, and reduced average ticket triage time from 4 minutes to 1.2 minutes. I learned that prompt engineering with Command A+ can dramatically lower data‑labeling costs while delivering production‑ready ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
