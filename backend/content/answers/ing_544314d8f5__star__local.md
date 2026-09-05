---
qid: ing_544314d8f5__star__local
question: 'Explain: Types of RPC — Remote Procedure Call (RPC) in Operating System
  - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 301
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:16:33-05:00'
sources: []
---

**Situation:** In my senior year capstone, we were building a distributed recommendation engine that needed real‑time data from several microservices hosted on separate servers. The team struggled with latency and consistency when we first used plain HTTP requests.

**Task:** I was tasked with designing an efficient inter‑process communication layer so the services could call each other like local functions while maintaining low overhead and strong fault tolerance.

**Action:** I introduced two RPC paradigms: *synchronous* (blocking) and *asynchronous* (non‑blocking). For synchronous calls, we used gRPC over HTTP/2 with protocol buffers to serialize requests; this gave us predictable latency (~1 ms on the LAN). For asynchronous communication, we employed ZeroMQ’s request–reply pattern combined with a message queue for back‑pressure handling. I also added a lightweight health‑check RPC that returned service status in real time, enabling graceful degradation when a node failed.

**Result:** The new RPC layer cut inter‑service latency from 15 ms to under 2 ms on average and reduced dropped requests by 97%. It also allowed us to scale the recommendation engine horizontally without rewriting core logic. I learned that choosing the right RPC type—based on call frequency, data size, and fault tolerance needs—is critical for building robust distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
