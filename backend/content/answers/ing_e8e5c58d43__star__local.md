---
qid: ing_e8e5c58d43__star__local
question: 'Explain: ​ Evaluation types — Evaluation concepts - Docs by LangChain'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 332
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:13:51-05:00'
sources: []
---

**Situation** – In a recent project building a question‑answering chatbot for an e‑commerce platform, the initial model scored only 68 % on our internal relevance test set, and users complained about irrelevant answers.

**Task** – I needed to validate and improve the system’s performance by applying LangChain’s evaluation framework: unit tests, chain‑level metrics, and end‑to‑end user simulations, so we could iterate quickly without manual QA cycles.

**Action** – First, I wrote unit tests for each LLM prompt using `langchain.evaluation.Evaluator`, specifying a reference answer and a similarity threshold. Next, I created a chain‑level evaluation script that ran the entire retrieval–generation pipeline on 500 real user queries, collecting ROUGE‑L and BLEU scores via `ChainEval`. Finally, I set up an automated A/B test harness that fed live traffic into two branches—original vs. tweaked prompts—and logged click‑through rates with LangChain’s integration to Weights & Biases.

**Result** – The refined chain achieved a 12 % lift in ROUGE‑L (from 0.42 to 0.48) and a 15 % increase in user satisfaction scores, while the A/B test showed a 10 % higher click‑through rate for the improved version. I learned that combining unit, chain, and real‑world evaluations accelerates debugging and yields measurable gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
