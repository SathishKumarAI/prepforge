---
qid: ing_ff7a97ffd0__eli5__local
question: 'Explain: Prefix Caching — Short Term Context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 200
total_tokens: 356
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:19:35-05:00'
sources: []
---

**Prefix caching – short‑term context in AI**

Think of a language model as a very attentive reader who can only keep the last few sentences in mind while writing. *Prefix caching* is like giving that reader a sticky note with the first paragraph of a story so they never have to reread it each time they add a new sentence. The “prefix” (the sticky note) is stored once, and every time the model predicts the next word it re‑uses that prefix instantly instead of recomputing it from scratch.

- **Prefix**: the initial part of the text you want the model to remember.  
- **Caching**: saving this prefix in memory so future calculations skip repeating the same work.

By caching, the model runs faster and uses less energy, just as a writer who has the opening paragraph handy can focus on fresh ideas without constantly looking back.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
