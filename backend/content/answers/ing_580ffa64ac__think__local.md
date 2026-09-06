---
qid: ing_580ffa64ac__think__local
question: 'Explain: 124: System Design Interview — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 526
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:49:39-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - Confirm we’re designing a *web crawler* (not just a scraper).  
   - Assume scalability (millions of URLs), politeness (robots.txt, rate‑limits), fault‑tolerance, and storage of fetched pages.  
   - Decide on language/stack constraints only if needed.

**2️⃣ Mental model / framework**  
   1. **Requirements** – functional & non‑functional.  
   2. **Core components** – URL frontier, fetcher, parser, deduplication, storage, politeness manager.  
   3. **Data flow** – how URLs move through the system.  
   4. **Scalability & fault tolerance** – sharding, replication, retries.  
   5. **Monitoring / metrics** – crawl depth, latency, error rates.

**3️⃣ Step‑by‑step reasoning**  
   - Start with a high‑level diagram: seed URLs → frontier → fetcher pool → parser → store + new URL extraction → back to frontier.  
   - Define the *URL frontier* (priority queue, Bloom filter for seen).  
   - Detail *politeness*: per-host rate limiter, robots.txt checker, exponential backoff.  
   - Choose a storage strategy: object store + metadata DB vs. distributed file system.  
   - Think about *parallelism*: worker threads/processes, task queues (Kafka/RabbitMQ), autoscaling.  
   - Add fault‑tolerance: checkpointing frontier state, idempotent fetchers, retry logic.

**4️⃣ Common traps to avoid**  
   - Forgetting robots.txt or crawl‑delay → legal & ethical issues.  
   - Over‑simplifying URL deduplication → duplicate data, wasted bandwidth.  
   - Ignoring politeness → IP bans.  
   - Assuming single‑node storage will scale; plan for sharding early.

**5️⃣ Sanity‑check & verbalize**  
   - Verify each requirement is addressed (e.g., “How do we guarantee no host gets hit more than once per second?”).  
   - Walk through a sample URL: seed → frontier → fetcher → store, then extraction → new URLs.  
   - Summarize trade‑offs: higher parallelism vs. politeness; heavier deduplication vs. memory usage.  

Follow this outline and you’ll communicate a clear, robust web crawler design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
