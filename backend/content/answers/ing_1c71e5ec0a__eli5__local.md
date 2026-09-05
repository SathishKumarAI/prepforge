---
qid: ing_1c71e5ec0a__eli5__local
question: 'Explain: Reranking — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 196
total_tokens: 352
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:21:17-05:00'
sources: []
---

Imagine you’re looking for the best recipe on a cooking website. First, you type “chocolate cake” into Google. It shows you a list of ten pages—these are your **retrieval** results, like a quick scan that pulls any page containing the words you asked for.  

Now, you read each snippet and decide which one looks most promising. That’s **reranking**: you take the raw list and reorder it so the most useful recipes sit on top. In AI, a model first fetches documents (retrieval) and then re‑orders them based on how well they match the user’s intent (reranking). This two‑step process keeps answers fast—because we only read a few pages—and accurate—because we let the system judge which page truly matters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
