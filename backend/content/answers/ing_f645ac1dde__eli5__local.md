---
qid: ing_f645ac1dde__eli5__local
question: 'Explain: Sources of Leakage — Llm Security'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 226
total_tokens: 382
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:04:53-05:00'
sources: []
---

Imagine your language model as a very chatty kitchen that learns recipes from every cookbook it can find. **Leakage** is like the smell of those books drifting into the pantry: the model accidentally “smells” and later whispers bits of private recipes (data) to anyone who asks.  

There are three main ways this happens:

1. **Training leakage** – The model memorizes entire passages from its training books, so if you ask a question that matches one, it can regurgitate it.
2. **Prompt leakage** – If you feed the kitchen a private note (prompt), the model may echo that note in its answer.
3. **Output leakage** – Even without seeing the secret, the model’s general knowledge can let it guess or reconstruct sensitive information.

Protecting against leakage is like sealing books in glass cases, wearing gloves when handling secrets, and training the kitchen to keep a low‑profile.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
