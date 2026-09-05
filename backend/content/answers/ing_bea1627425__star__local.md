---
qid: ing_bea1627425__star__local
question: What is semantic caching, how is it different from prompt/prefix caching,
  and what are its failure modes?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 342
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:52:13-05:00'
sources: []
---

**Situation:**  
While leading a data‑science sprint for our recommendation engine, we noticed that repeated user queries to the LLM were causing latency spikes—each new prompt triggered a full forward pass even when only minor context changes existed.

**Task:**  
I had to design a caching strategy that would reduce inference time without compromising answer fidelity. The goal was to keep per‑request latency under 200 ms while handling a 10× traffic surge during peak hours.

**Action:**  
I implemented **semantic caching**, storing embeddings of past query contexts and their corresponding outputs. When a new request arrived, we computed its embedding and performed cosine similarity against the cache; if similarity exceeded 0.92, we returned the cached response instead of re‑invoking the model. This differs from **prompt/prefix caching**—which merely reuses identical prompt strings—because semantic caching works across paraphrased or contextually similar queries. I also built a TTL mechanism and an LRU eviction policy to keep memory usage under 12 GB, and added a fallback that re‑computes responses when similarity fell below threshold.

**Result:**  
The cache hit rate climbed from 0% to 68%, cutting average inference latency from 450 ms to 110 ms during peak periods. We reduced GPU utilization by ~35%. I learned that semantic caching’s failure modes include over‑reliance on similarity thresholds (leading to stale or incorrect answers) and the overhead of embedding computation, which must be balanced against cache lookups.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
