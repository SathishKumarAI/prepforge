---
qid: ing_ac51c00c60__star__local
question: 'Explain: Use case: User enters a paste''s url and views the contents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 345
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:17:16-05:00'
sources: []
---

**Situation:**  
At a previous fintech startup I was tasked with building a lightweight data‑capture tool for our compliance team. They needed to quickly review code snippets posted on Pastebin by potential fraudsters and decide if they warranted deeper investigation.

**Task:**  
Create an end‑to‑end system where the user pastes a URL, the app fetches the raw text, runs it through NLP pipelines, and returns a concise summary with risk tags—all within 5 seconds.

**Action:**  
I first wrote a microservice in Go that hit Pastebin’s API, cached responses in Redis, and streamed the payload to a Python worker. In Python I used spaCy for tokenization, a fine‑tuned BERT model for intent classification (malicious vs benign), and GPT‑3‑Turbo for zero‑shot summarization. The worker produced a JSON with `summary`, `tags`, and a confidence score, which the Go service returned to the front end via GraphQL. I also added circuit‑breaker logic so that if the external API lagged we’d fall back to local cache.

**Result:**  
The prototype reduced compliance review time from 30 minutes per paste to under 5 seconds for 90% of cases, cutting manual triage costs by ~70%. I learned how to orchestrate micro‑services around heavy ML models and the importance of latency budgets in real‑world tooling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
