---
qid: ing_b286442033__eli5__local
question: 'Explain: Memory — TypeScript AI Framework for Agents and Apps | Mastra'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 205
total_tokens: 367
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:19:45-05:00'
sources: []
---

Imagine a tiny library inside each AI agent. **Memory** is the shelf where it keeps all the books (facts, past conversations, and rules) it has read so far. When the agent needs to answer a question or decide what to do next, it first looks on that shelf instead of searching the whole internet.

In the Mastra TypeScript framework, this library lives in a **Memory store** – a special place you can plug into your code. You tell the agent which books (data) belong there and how long they should stay. When the agent talks to a user or calls another service, it can pull relevant pages from its memory, mix them with new information, and then write any updates back.

So, Memory in Mastra is like a smart, reusable filing cabinet that lets your AI remember context across conversations without re‑learning everything each time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
