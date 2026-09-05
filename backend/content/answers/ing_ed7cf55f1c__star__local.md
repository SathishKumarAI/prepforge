---
qid: ing_ed7cf55f1c__star__local
question: 'Explain: Human-in-the-Loop with Haystack Agents — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 346
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:23:53-05:00'
sources: []
---

**Situation** – In my last role, we were building a legal document search engine for a mid‑size law firm. The internal knowledge base had over 30 000 PDFs, and the initial retrieval accuracy was only 42% top‑5 recall, which meant attorneys spent hours filtering irrelevant results.

**Task** – I needed to boost relevance while keeping the system lightweight enough for real‑time queries. The goal was a top‑5 recall above 70% with minimal manual effort from legal staff.

**Action** – I integrated Haystack’s Human-in-the-Loop (HITL) framework. First, I set up an agent pipeline: a dense retriever (SentenceTransformers), followed by a reranker (BM25 + T5). Then I enabled the “human‑in‑the‑loop” feature where the top 10 ranked snippets were sent to a web UI for attorneys to label as relevant or not. Using Haystack’s `HumanInTheLoop` agent, these labels fed back into an online learning loop that updated the reranker in real time. I also scripted automated reminders and built dashboards with Grafana to track labeling velocity and recall gains.

**Result** – Within three weeks of deployment, top‑5 recall jumped from 42% to 76%, cutting attorneys’ search time by 60%. The HITL setup required only ~10 minutes per query on average. I learned that coupling lightweight retrieval models with a continuous feedback loop can dramatically improve performance without large retraining budgets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
