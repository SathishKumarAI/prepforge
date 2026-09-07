---
qid: ing_03718c3184__aws__local
question: 'Explain: Interruption — CachesExplained \u00b7 google/guava Wiki \u00b7
  GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 406
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:32:00-05:00'
sources: []
---

**Situation & Task**  
When I joined the AI inference platform team at Amazon, our latency SLA was 30 ms for every request. The in‑memory cache (Guava) we used for model weights kept getting evicted during traffic spikes, causing a 45 % spike in cold starts and an average 200 ms latency increase. My goal: design a robust “interruption‑aware” caching layer that keeps critical data resident while still honoring eviction policies.

**Action**  
I first **dived deep** into the cache’s `RemovalListener` API, discovering that evictions were triggered by size limits rather than access patterns. I proposed a two‑tier cache:  
1. **Hot tier** – Guava with an LRU policy and a custom `RemovalListener` that pushes evicted entries to an S3‑backed “warm” store.  
2. **Warm tier** – Amazon ElastiCache Redis, preloaded on demand from the listener.  

I added a **bias for action** by implementing a lightweight metrics exporter (CloudWatch) that triggered alerts when eviction rates exceeded 10 %. This allowed us to auto‑scale the hot tier’s heap size during traffic surges.

**Result**  
After deployment, cache hit rate improved from 68 % to 92 %, and average latency dropped from 200 ms to **115 ms**, a 42 % reduction. The new design also cut cost by 15 % because we avoided over‑provisioning the hot tier.

**Learning & Ownership**  
I documented the failure mode in our internal wiki, enabling other teams to replicate the solution. I also created a post‑mortem that highlighted how **ownership** and **customer obsession** guided every design choice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
