---
qid: ing_8f17ee15e6__eli5__local
question: Compare MCP's transports. When would you choose each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 534
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:23:51-05:00'
sources: []
---

Imagine you’re sending a message to a friend who lives far away.  
You have three ways to do it:

| Transport | How it works (plain) | When it’s best |
|-----------|----------------------|---------------|
| **HTTP/REST** | Think of mailing a postcard: you write the content, put it in an envelope, and let the post office deliver it. The server replies with another postcard that contains the answer. | You need simple “request‑and‑reply” calls, lots of different services, or when you’re working with web browsers that already understand HTTP. |
| **gRPC** | Picture a telephone call where both sides speak the same language and can ask for many things in one conversation. gRPC keeps the connection open, so you can send multiple messages back‑and‑forth without opening a new line each time. | When your application needs low‑latency, high‑throughput communication—like real‑time AI inference or microservices that talk to each other frequently. |
| **WebSocket** | Imagine a live chat room where both sides stay connected and can push messages whenever they want. The connection stays open forever, so you can receive updates instantly. | When your AI app must push data in real time (e.g., streaming sensor readings or live model predictions) and the client can maintain a persistent link. |

**Bottom line:**  
*Use HTTP/REST for simple, stateless API calls; gRPC when you want fast, efficient, bidirectional RPCs; WebSocket when you need continuous, low‑latency streams.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
