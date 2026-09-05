---
qid: ing_2c1e67f191__eli5__local
question: 'Pair-programming: build a service that takes a user question, enriches
  it with data from a third-party API, and answers via a chat-model API. How do you
  structure it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 228
total_tokens: 413
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:45:25-05:00'
sources: []
---

Think of the whole system as a three‑layer sandwich maker.  
1️⃣ **The “user” layer** is the bread that carries your question.  
2️⃣ **The “API” layer** is the butter spreader: it takes that bread, slathers on fresh data from a third‑party service (like weather or stock prices), and sends the enriched bread back to the sandwich maker.  
3️⃣ **The “chat model” layer** is the chef who tastes the finished sandwich and writes a delicious reply.  

You build this by writing three small programs that talk to each other over HTTP: one receives the user’s text, passes it to the second which calls the external API and returns a richer prompt, then the third sends that prompt to the chat‑model API (like OpenAI) and streams back the answer. Keep each part independent so you can swap out the butter spreader or the chef without breaking the whole sandwich.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
