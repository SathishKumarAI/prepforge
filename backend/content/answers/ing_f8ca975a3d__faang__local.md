---
qid: ing_f8ca975a3d__faang__local
question: 'Explain: System Requirements — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 501
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:18:22-05:00'
sources: []
---

**Clarify**  
We need a scalable, fault‑tolerant web crawler that fetches pages, respects politeness (robots.txt, rate limits), deduplicates URLs, and stores content for downstream indexing. Assume millions of domains, high throughput, and the ability to restart from checkpoints.

**Approach**  
1. **Frontier** – a distributed priority queue (e.g., Kafka/Redis Streams) holding seed URLs with crawl‑depth metadata.  
2. **Scheduler** – shards frontier per domain; each shard owns an HTTP client pool enforcing per‑host rate limits and robots.txt rules.  
3. **Fetcher workers** – pull URL batches, perform GET requests, parse HTML for new links, and emit them back to the frontier with depth+1.  
4. **Deduplication** – a Bloom filter (for space) plus a distributed hash table (e.g., DynamoDB/Consul KV) for exact hits to avoid re‑fetching.  
5. **Storage** – write raw pages and metadata into an append‑only log (Kafka or object store like S3) for later indexing.

**Depth**  
- *Politeness*: per‑host timers, exponential backoff on 429/503.  
- *Robots.txt*: cached per domain with TTL; obey crawl-delay and disallow directives.  
- *Fault tolerance*: workers checkpoint URL offsets in a durable store; on failure they resume from the last committed offset.  
- *Scalability*: adding shards scales linearly; Bloom filter false‑positive rate kept <1% by sizing to expected URL count.

**Edge Cases**  
- Extremely large pages → stream response, limit body size.  
- Cyclic links → depth cap and visited set.  
- Dynamic content (JS) → optional headless browser fallback with a separate queue.  

**Optimize & Communicate**  
To reduce memory, we keep only URL hashes in the dedup filter; full URLs are stored only when fetched. For latency, pre‑fetch next depth while parsing current page. I’d present this diagrammatically to interviewers: *Frontier → Scheduler → Workers ↔ Storage*, highlighting backpressure points and recovery paths. This shows clear trade‑offs (space vs false positives, throughput vs politeness) and a production‑ready design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
