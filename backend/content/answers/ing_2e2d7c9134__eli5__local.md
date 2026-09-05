---
qid: ing_2e2d7c9134__eli5__local
question: 'Explain: Automated Evaluators — Langsmith Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 204
total_tokens: 361
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:48:59-05:00'
sources: []
---

Think of an automated evaluator like a “digital referee” that watches a game (your AI model) play and keeps score on how well it follows the rules. In LangSmith, the evaluator is a tiny program that runs right after your model produces an answer. It checks the output against a set of quality criteria—does it contain the requested facts? Is it in the correct format? Does it avoid bias? The evaluator then writes a “report card” (a score or flag) and sends it to LangSmith’s observability dashboard.

LangSmith collects all these report cards, so you can see at a glance which models are doing well, where they’re slipping, and how changes in your code affect performance. It’s like having a coach who not only watches the game but also keeps detailed stats for every play, letting you fine‑tune the team faster.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
