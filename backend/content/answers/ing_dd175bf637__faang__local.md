---
qid: ing_dd175bf637__faang__local
question: 'Explain: Approach #2: Choreography — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 590
total_tokens: 828
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:12:31-05:00'
sources: []
---

## 1️⃣ Clarify  
We’re asked to design a **web‑crawler** that operates in a *choreographic* style—each worker knows only its own responsibilities and communicates via messages, rather than a centralized orchestrator.  
Key assumptions:  
- The crawler must scale horizontally (many workers).  
- It should respect politeness (rate limits per host).  
- We need fault tolerance and deduplication of URLs.

## 2️⃣ Approach  
1. **URL frontier** as a distributed queue (e.g., Kafka or Redis Streams).  
2. **Workers** poll the queue, fetch pages, parse links, and enqueue new URLs.  
3. **Politeness controller** per domain—workers check a local cache of last‑fetch timestamps or use a token bucket service.  
4. **Deduplication** via a distributed Bloom filter / HyperLogLog in Redis/Memcached.  
5. **Failure handling**: workers re‑enqueue failed URLs with back‑off; dead‑letter queue for persistent failures.

## 3️⃣ Depth  
- **Queue**: Kafka topics partitioned by domain hash → natural load balancing and isolation.  
- **Worker logic**:  
  ```python
  url = queue.pop()
  if not dedup.is_seen(url):
      content = fetch(url)
      links = parse(content)
      for l in links:
          queue.push(l, priority=score(l))
      dedup.mark(url)
  ```
- **Politeness**: each worker maintains a local `last_fetched[domain]`; before fetching, it sleeps until `now - last_fetched >= delay`.  
- **Complexity**: O(1) per URL for enqueue/dequeue; dedup check is amortized O(1).  
- **Scalability**: Adding workers just increases parallelism; Kafka handles partition rebalancing.

## 4️⃣ Edge Cases  
- **Crawl loops**: Bloom filter false positives may miss URLs—acceptable trade‑off.  
- **Rate limit violations**: if many workers target same domain, the token bucket may throttle all.  
- **Dynamic robots.txt**: workers must fetch and cache robots rules per domain.

## 5️⃣ Optimize & Communicate  
- Replace Kafka with a lightweight in‑memory queue for low‑latency workloads.  
- Use a sharded Redis instance to reduce single‑point bottleneck.  
- Explain trade‑offs: central orchestrator simplifies coordination but limits horizontal scaling; choreography gives elasticity at cost of more complex consistency logic.  

*By structuring the crawler as autonomous workers with shared queues and per‑domain politeness, we achieve high throughput while preserving robustness—exactly what a FAANG interview expects.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
