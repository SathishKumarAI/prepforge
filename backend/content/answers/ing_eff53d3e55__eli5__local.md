---
qid: ing_eff53d3e55__eli5__local
question: 'Explain: HTTP: — What are WebSockets and Why are they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 203
total_tokens: 366
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:54:37-05:00'
sources: []
---

Think of the web as a busy post office where your browser is a customer sending letters (HTTP requests) to a mailbox (the server). With ordinary HTTP, each letter requires a new round trip: you drop it in, wait for the reply, then close the line. WebSockets are like opening a private, continuous phone line with that mailbox. Once the line is set up, both sides can talk freely and instantly—no need to keep re‑connecting.

**What they are:** A WebSocket is an open, bidirectional channel between client and server, created after an initial HTTP “handshake.”  
**Why use them:** They let real‑time apps (chat, live games, dashboards) push updates instantly without the overhead of repeated HTTP requests. This reduces latency, saves bandwidth, and keeps the connection alive for continuous data flow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
