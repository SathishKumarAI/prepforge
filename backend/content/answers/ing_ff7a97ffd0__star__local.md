---
qid: ing_ff7a97ffd0__star__local
question: 'Explain: Prefix Caching — Short Term Context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 313
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:59:42-05:00'
sources: []
---

**Situation:**  
At my previous role we were deploying a GPT‑style chatbot for an e‑commerce site that had to handle thousands of concurrent sessions. The latency on the first user request was too high because each session started from scratch, reloading the entire model context.

**Task:**  
I needed to reduce the per‑session startup time by caching reusable parts of the model’s attention context while still keeping the system memory footprint manageable.

**Action:**  
I implemented a *prefix caching* strategy: for every new user session I stored the initial 2,000 tokens (the “prefix”) that represented the product catalog and FAQ knowledge base. These prefixes were pre‑computed embeddings and cached in an in‑memory key–value store keyed by session ID. When a request came in, we concatenated the short user query to the cached prefix and passed only this combined sequence to the transformer, bypassing recomputation of the entire static context. I tuned the cache eviction policy with LRU to keep memory usage below 12 GB on our GPU cluster.

**Result:**  
Startup latency dropped from ~750 ms to <200 ms for new sessions, improving overall throughput by 35%. We also saw a 20% reduction in GPU memory consumption, allowing us to serve more concurrent users. This exercise taught me how to balance precomputation and dynamic inference to optimize large‑model serving at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
