---
qid: ing_45666c067b__eli5__local
question: 'Explain: Pattern: Naive RAG — Design Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 194
total_tokens: 352
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:26:32-05:00'
sources: []
---

Think of writing an essay with a giant library in your back pocket. You ask a question, pull out the most relevant book (the **retrieval** step), read its key points, and then rewrite those ideas into your own words (the **generation** step).  

In *naive RAG* you do exactly that: the system first fetches documents from a database, then feeds them plus your prompt into a language model. The model freely mixes the retrieved text with its own knowledge to produce an answer. It’s “naive” because it treats the fetched content like any other input—there’s no extra guard to check if the cited facts are accurate or if the model is hallucinating. So you get quick, context‑rich responses, but sometimes they can be wrong or over‑confident.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
