---
qid: ing_58dc96e543__faang__local
question: 'Explain: Web Crawlers — Concurrency vs Parallelism - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 653
total_tokens: 894
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:10:05-05:00'
sources: []
---

**1️⃣ Clarify**  
*Question*: “Explain the difference between concurrency and parallelism in web crawlers.”  
Assumptions: we’re talking about distributed crawling of millions of URLs, latency‑critical, limited I/O bandwidth, and the goal is to maximize throughput while respecting politeness policies.

---

**2️⃣ Approach**  
1. Define each term in isolation.  
2. Illustrate with a crawler’s typical workflow (fetch → parse → enqueue).  
3. Show how concurrency and parallelism manifest at different layers (threads, async I/O, multiple machines).  
4. Highlight trade‑offs: CPU vs I/O bound, contention, failure modes.

---

**3️⃣ Depth**  

| Aspect | Concurrency | Parallelism |
|--------|-------------|--------------|
| **Goal** | Interleave tasks to hide latency; increase responsiveness. | Execute independent tasks simultaneously for speedup. |
| **Typical Implementation in Crawlers** | *Async I/O* (e.g., `asyncio` event loop) or a thread pool that reuses workers to issue many HTTP requests without blocking the main loop. | Multiple CPU cores or machines each running their own crawler instance, often coordinated via a distributed task queue (Kafka, Redis). |
| **Resource Usage** | One process/ thread handles many connections; memory footprint grows with outstanding I/O operations. | More processes/ nodes → more RAM & network overhead but higher aggregate throughput. |
| **Failure Handling** | A stalled request blocks the event loop unless timeouts are used; graceful fallback to retries. | If one node crashes, others keep working; task re‑queueing ensures no URL is lost. |
| **Scalability** | Limited by single process/thread limits (e.g., GIL in CPython). | Scales linearly with added nodes until network or politeness constraints dominate. |

---

**4️⃣ Edge Cases**  

- *I/O bound*: Concurrency shines when CPU is idle; parallelism adds little if requests are slow.  
- *CPU‑bound parsing*: Parallelism needed to parse HTML faster.  
- *Politeness & rate limits*: Too much concurrency can violate domain policies, causing bans.  
- *Fault tolerance*: Concurrent async code is harder to debug; distributed systems need idempotent task handling.

---

**5️⃣ Optimize & Communicate**  

*Optimization*: Use a hybrid model—async I/O for network latency and multi‑node parallelism for CPU‑heavy parsing. Tune timeouts, backoff, and respect `robots.txt`.  
*Communication*: Emphasize that concurrency improves *latency*, while parallelism boosts *throughput*. In an interview, map this to real crawler metrics (requests per second, pages indexed) and show how you’d monitor each dimension.

---

**Bottom line:**  
- **Concurrency** = “doing many things at once” by overlapping I/O waits.  
- **Parallelism** = “doing many things truly simultaneously” across cores or machines. Both are essential; the right mix depends on whether latency or throughput is the bottleneck.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
