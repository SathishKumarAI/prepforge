---
qid: ing_7cc673f63d__faang__local
question: 'Explain: F3: Adapter cache thrash under traffic spike'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 461
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:34:04-05:00'
sources: []
---

**Clarify**  
We’re asked to explain why an **adapter cache** (e.g., a local proxy or connection pool) can “thrash” when traffic spikes. I’d confirm: *What adapter is it?* Is it a DNS resolver, HTTP client cache, or database connection manager? What eviction policy does it use (LRU, FIFO)? And what constitutes a spike—hundreds of concurrent requests in milliseconds?

**Approach**  
1. Define thrashing in caching terms.  
2. Map traffic spike to increased request rate → cache misses → load on backend.  
3. Explain how eviction policy can’t keep up: items evicted before reused.  
4. Show the feedback loop that amplifies latency.

**Depth**  
When a burst of requests arrives, each thread looks up an entry in the adapter cache. If the key is absent (or stale), it must fetch from the backend and populate the cache. Meanwhile, other threads are waiting for the same resource. The cache’s limited size forces LRU eviction; high churn means frequently accessed items get evicted before reuse—this is *thrashing*.  
The result:  
- Backend overload (many concurrent lookups).  
- Increased latency because requests must wait for data to be reloaded.  
- Potential cascading failures if the backend times out.

**Edge Cases**  
*Cold start*: first-time traffic spike always thrashes until warmed up.  
*High concurrency with small cache*: eviction rate > hit rate → constant misses.  
*Backpressure not applied*: threads keep spinning, exhausting CPU.

**Optimize & Communicate**  
Mitigations:  
- Increase cache size or use a more adaptive policy (LFU).  
- Add request coalescing to deduplicate concurrent fetches.  
- Apply backpressure or rate‑limiting to throttle spikes.  
I’d narrate by walking through the request flow diagram, highlighting where eviction happens, and quantify the hit/miss ratio before and after a spike, showing how thrashing inflates latency. This structured explanation demonstrates clear problem framing, systematic analysis, and actionable solutions—key for FAANG interview success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
