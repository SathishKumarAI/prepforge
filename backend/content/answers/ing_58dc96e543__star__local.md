---
qid: ing_58dc96e543__star__local
question: 'Explain: Web Crawlers — Concurrency vs Parallelism - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 364
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:25:09-05:00'
sources: []
---

**Situation:**  
At my last role, we were tasked with building a high‑throughput crawler for a news aggregation platform that had to index 50,000 new articles per hour while keeping latency below 10 seconds per URL.

**Task:**  
I needed to design the crawling engine so it could handle the load without overloading target servers or our own infrastructure, ensuring we respected politeness policies and avoided bottlenecks.

**Action:**  
I first profiled a single‑threaded crawler: it stalled on network I/O, wasting CPU cycles. To improve, I introduced *concurrency* by spawning 200 lightweight threads (using Python’s `asyncio` event loop) that all shared a priority queue of URLs. Each coroutine performed nonblocking HTTP requests and parsed responses asynchronously—this kept the CPU busy while waiting for network I/O.

Next, to truly scale, I added *parallelism*: I spun up four worker processes on separate machines, each running its own async crawler instance. We used a distributed task broker (RabbitMQ) to partition URL space and prevent duplicate visits. This allowed us to run 800 concurrent connections across the cluster, effectively multiplying throughput while keeping per‑process memory low.

**Result:**  
The crawler’s throughput jumped from ~300 URLs/min to over 8,000 URLs/min, meeting our SLA. We reduced average latency by 70 % and avoided IP bans because each process respected domain limits. I learned that concurrency optimizes resource usage within a single machine, while parallelism scales across machines—both are essential for large‑scale web crawling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
