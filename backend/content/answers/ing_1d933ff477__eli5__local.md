---
qid: ing_1d933ff477__eli5__local
question: 'Explain: What is gRPC? When should we use — What is RPC? gRPC Introduction.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 316
total_tokens: 484
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:23:09-05:00'
sources: []
---

**What’s an RPC?**  
Think of a phone call between two people in different rooms: one person (the client) asks for something—“Can you tell me the weather?” The other person (the server) answers. In computing, that “ask‑and‑answer” pattern is called *Remote Procedure Call* (RPC). You write a function on your computer, but it runs somewhere else; the two sides just speak a common language so they can exchange data.

**What’s gRPC?**  
gRPC is a modern version of RPC built by Google. It uses a simple, compact “protocol‑buffer” format to describe the messages and the methods you can call, then turns those descriptions into ready‑to‑use code in many languages. Imagine a bilingual translator who instantly converts your English questions into the server’s language and back again—gRPC does that automatically.

**When to use it?**  
Use gRPC when you need fast, reliable communication between services (microservices, mobile apps, IoT devices) and want strong typing, automatic code generation, and efficient binary traffic. It shines for real‑time streaming, low‑latency APIs, and cross‑language ecosystems. If your needs are simple REST/JSON or you’re just prototyping, a lighter approach may be enough—but for high‑performance, typed, bi‑directional calls, gRPC is the go‑to tool.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
