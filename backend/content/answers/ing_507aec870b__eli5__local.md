---
qid: ing_507aec870b__eli5__local
question: 'Explain: Connection — What are WebSockets and Why are they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 228
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:44:41-05:00'
sources: []
---

**WebSockets: a two‑way phone line for the web**

Imagine you’re chatting with a friend over a phone. With a normal call (like HTTP), each time you want something new—say, a picture—you have to dial again and wait for them to answer. WebSockets are like installing a permanent wired connection between your computer and the server: once the line is open, either side can send messages instantly, without dialing again.

**Why we use them**

1. **Real‑time data** – Games, chat apps, stock tickers need updates as soon as they happen.  
2. **Lower overhead** – No repeated “Hello” handshakes; the connection stays alive.  
3. **Bidirectional flow** – Both client and server can push information at any time.

A WebSocket is simply a persistent network socket that follows the WebSocket protocol, allowing continuous, low‑latency communication between browser and server.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
