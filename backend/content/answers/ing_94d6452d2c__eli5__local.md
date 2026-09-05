---
qid: ing_94d6452d2c__eli5__local
question: 'Explain: Conclusion — What are WebSockets and Why are they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 259
total_tokens: 421
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:33:40-05:00'
sources: []
---

Think of a web page as a busy café where you’re chatting with a friend (the server). Normally, every time you want something new—like a fresh coffee order—you’d have to shout across the room, wait for the waiter to come back, and then start over again. That’s how HTTP works: your browser sends a request, the server answers, then the connection closes.

WebSockets are like installing a private walk‑through hallway between you and the waiter. Once you open that hallway (the WebSocket connection), you can send messages back and forth instantly, without shouting each time. The hallway stays open as long as both sides want it, so data streams—chat updates, live scores, or sensor readings—flow continuously.

**Key terms:**
- **WebSocket:** A protocol that opens a single, bidirectional (two‑way) channel between client and server over the internet.
- **Bidirectional:** Both parties can send and receive at any time.
- **Persistent connection:** The link stays open until either side closes it.

This is why WebSockets are used: they give real‑time, low‑latency communication without repeatedly opening new connections.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
