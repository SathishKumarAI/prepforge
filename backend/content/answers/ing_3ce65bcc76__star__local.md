---
qid: ing_3ce65bcc76__star__local
question: 'Explain: Making the lock safe with fencing — How to do distributed locking
  \u2014 Martin Kleppmann\u2019s blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 336
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:29:55-05:00'
sources: []
---

**Situation:**  
When I joined a real‑time bidding platform, our ad‑serve microservice was scaling out to dozens of nodes. A shared Redis cache held the inventory counter for each ad slot, and we noticed that concurrent requests sometimes oversold slots, causing billing errors.

**Task:**  
I had to design a fault‑tolerant distributed lock so that only one node could decrement an inventory counter at a time, even if some nodes crashed or network partitions occurred.

**Action:**  
I implemented Martin Kleppmann’s fencing token approach using ZooKeeper. Each lock acquisition request first increments a monotonically increasing sequence number in ZooKeeper and receives a unique “fence” ID. The node then writes this fence ID to Redis along with the lock key, but only if its own ID is higher than any existing one (using an atomic `SETNX` + `GET` check). When releasing, it deletes the key only if the stored fence matches its own. This guarantees that a stale lock from a crashed node can’t be re‑used by another node because its fence number is lower. I also added exponential backoff and retry logic to avoid livelocks.

**Result:**  
After deployment, inventory oversell incidents dropped from 3% of requests to <0.01%. The system handled 10 k concurrent bids per second with a lock acquisition latency under 2 ms. I learned that coupling ZooKeeper’s strong ordering guarantees with lightweight Redis checks yields a robust fencing‑based lock without sacrificing throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
