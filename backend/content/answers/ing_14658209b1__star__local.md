---
qid: ing_14658209b1__star__local
question: 'Explain: The Paperclip Pattern (Hierarchical Agents at Scale)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 311
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:09:02-05:00'
sources: []
---

**Situation:**  
At my last company we were building a smart‑home assistant that needed to handle thousands of concurrent voice requests while keeping latency below 150 ms. The single monolithic model was choking on the load and our SLA slipped from 95% to 70%.

**Task:**  
I had to redesign the architecture so it could scale horizontally, reduce inference time, and still deliver consistent responses across diverse domains (music, weather, device control).

**Action:**  
I introduced a *paperclip pattern* hierarchy: a lightweight “master” agent that parses intent and routes each request to a specialized sub‑agent. The master uses a tiny BERT encoder; sub‑agents run domain‑specific fine‑tuned models on separate GPU nodes. I wrapped the routing logic in Ray Serve, enabling automatic scaling based on queue depth. For stateful interactions, I added a Redis-backed memory store so each sub‑agent could fetch context without re‑running the master.

**Result:**  
The new system cut average latency from 180 ms to 95 ms and increased throughput from 1.2k RPS to 4.8k RPS. SLA compliance rose back to 97%. I learned that a hierarchical, modular approach not only improves scalability but also makes debugging and continuous deployment far simpler.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
