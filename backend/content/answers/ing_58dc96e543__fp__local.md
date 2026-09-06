---
qid: ing_58dc96e543__fp__local
question: 'Explain: Web Crawlers — Concurrency vs Parallelism - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 414
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:13:01-05:00'
sources: []
---

### Why a crawler needs *concurrency* or *parallelism*

A crawler’s job is to **maximize throughput** while staying within the bandwidth and politeness limits of every host it touches.  
The fundamental bottleneck is *latency*: an HTTP request may take hundreds of milliseconds, but the network can deliver data in microseconds once a connection is open.  
Thus, the crawler must keep many sockets “alive” so that one slow response does not stall all work.

---

#### Concurrency vs Parallelism

* **Concurrency**: interleaving multiple I/O‑bound tasks on a single thread or event loop (e.g., async/await). It lets the program *wait* for network I/O without blocking the CPU.  
* **Parallelism**: executing independent tasks simultaneously on multiple cores (threads/processes) to use CPU bandwidth, e.g., parsing HTML or hashing URLs.

For crawlers:

1. **I/O concurrency** is essential—without it, a single slow host would idle the entire crawl.  
2. **CPU parallelism** becomes useful when processing large responses, deduplicating URLs, or running policy checks.

The two are orthogonal: you can have many concurrent network requests while each request’s parsing runs on a separate core. Mixing them naïvely (e.g., spawning a thread per URL) wastes resources and harms politeness.

---

#### Non‑obvious insight

*Politeness is a **resource scheduling problem**.*  
Treat each host as a “queue” with a *fair share* of the crawler’s total concurrency budget. By modeling this as a weighted round‑robin scheduler (weights derived from historical latency), you automatically adapt to slow or fast sites without hard‑coding limits, achieving both fairness and throughput—something most crawlers ignore in favor of simple global caps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
