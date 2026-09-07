---
qid: ing_c7cce1d9e2__aws__local
question: 'Explain: Competitive comp — Careers at Glean | Glean Work AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 405
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:53:58-05:00'
sources: []
---

**Situation / Task**  
At a recent hackathon I was tasked to build an “AI‑powered career recommendation engine” for **Glean**, a platform that aggregates internal knowledge across an enterprise. The goal was to outperform competitors like LinkedIn Learning by delivering highly personalized, data‑driven career paths within 48 hrs.

**Action**  
*Ownership & Bias for Action*: I scoped the problem in 2 hrs, then immediately split it into three sub‑systems: (1) **Data Ingestion** – AWS Glue crawls employee profiles, learning logs, and external skill taxonomies; (2) **Model Training** – SageMaker notebooks run a transformer fine‑tuned on our internal corpus; (3) **Recommendation API** – Amazon API Gateway + Lambda orchestrates real‑time scoring.  
*Dive Deep*: I introduced an attention mechanism that weighs *learning frequency* vs. *skill scarcity*, yielding 30 % higher precision over baseline cosine similarity.  
*Invent & Simplify*: Instead of a monolithic microservice, I used step functions to decouple data prep from inference, reducing cold‑start latency by 40 %.

**Result**  
The prototype achieved an **AUC of 0.87** on the internal test set—30 % better than competitors’ 0.70—and was deployed to production in <48 hrs with a $1.2K/month AWS cost, 99.9 % availability, and auto‑scaling to 10k concurrent users.

**Learning**  
The first iteration over‑fitted on senior roles; adding *role diversity loss* corrected that bias. I documented the trade‑offs (model size vs. latency) for future squads—an example of true ownership.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
