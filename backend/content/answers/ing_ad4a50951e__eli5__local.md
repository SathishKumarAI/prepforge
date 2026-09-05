---
qid: ing_ad4a50951e__eli5__local
question: 'Explain: 28 System Design - WebSockets — What are WebSockets and Why are
  they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 246
total_tokens: 414
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:12:02-05:00'
sources: []
---

**WebSockets** are a special kind of “phone line” that lets two computers talk to each other nonstop after an initial handshake.  
Imagine you’re on a walk‑and‑talk bike: when you first hop on, the bike’s chain locks into place (the WebSocket handshake). From then on, every pedal push instantly sends a signal down the chain without needing to start a new ride each time. In web terms, that means your browser and server stay connected with one open “socket,” so data can flow in either direction immediately—no waiting for a new request.

Why use them?  
- **Real‑time updates**: chat apps, live scores, or collaborative editors need instant pushes.  
- **Lower overhead**: after the handshake, no extra HTTP headers are sent, saving bandwidth and latency.  
- **Full duplex**: both sides can send messages at any moment, like two people talking over a walkie‑talkie.

So WebSockets keep a steady, efficient conversation alive between client and server, perfect for anything that needs quick, bidirectional data exchange.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
