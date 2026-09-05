---
qid: ing_bd849e169a__star__local
question: 'Explain: Caching — Llm Gateway And Serving Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 340
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:49:55-05:00'
sources: []
---

**Situation:**  
When my team launched a real‑time chatbot for our e‑commerce site, the first week of traffic spiked to 15 k concurrent users. The LLM inference latency jumped from 350 ms to over 2 s, pushing us past the SLA and causing cart abandonment.

**Task:**  
I had to design a caching layer for the LLM gateway that would keep response times under 500 ms while ensuring model consistency and minimal cost.

**Action:**  
I implemented a two‑tier cache in Redis. For short‑lived user prompts, I cached embeddings and partial responses keyed by prompt hash, with an LRU eviction policy to keep memory usage at ~8 GB. For longer context passages, I stored the pre‑computed attention scores in a shared GPU tensor pool so subsequent requests reused them without recomputation. I wrapped the cache logic in our gateway’s async middleware using FastAPI and added a fallback to the primary inference engine if cache miss rates exceeded 10%. I also instrumented Prometheus metrics for hit/miss ratios, and set alerts when latency thresholds were breached.

**Result:**  
Cache hit rate climbed to 92 %, cutting average response time to 320 ms and reducing server costs by ~35 % due to fewer GPU calls. User engagement rose 18 % in the first month, and we stayed within SLA for every A/B test cycle. I learned that fine‑grained caching of attention maps can dramatically lower latency without sacrificing model fidelity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
