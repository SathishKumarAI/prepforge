---
qid: ing_585bebff95__star__local
question: 'Explain: Design a Distributed Job Scheduler - System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 310
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:24:17-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with building a job scheduler for our data‑processing platform that handled thousands of ETL jobs per day across a 12‑node Spark cluster. The existing single‑point scheduler often stalled when a node failed, causing SLA breaches.

**Task:**  
I needed to design a fault‑tolerant, distributed scheduler that could evenly balance load, guarantee at‑least‑once execution, and scale horizontally without central bottlenecks.

**Action:**  
I chose a leaderless architecture using ZooKeeper for cluster coordination. Each worker node ran a lightweight “worker agent” exposing a REST API to report health and fetch tasks. Jobs were stored in a sharded Cassandra table keyed by hash(job_id), enabling constant‑time lookup. I implemented a token‑bucket back‑pressure mechanism so workers could signal capacity, preventing overcommitment. For scheduling logic I used a priority queue per partition backed by Redis streams, ensuring FIFO ordering while allowing dynamic re‑prioritization. To handle failures I added an exponential backoff retry with dead‑letter queues in Kafka for jobs that exceeded retries.

**Result:**  
After deployment we saw a 35 % reduction in job turnaround time and eliminated the previous single‑point failure. SLA compliance rose from 92 % to 99.7 %. The experience taught me how sharding, leaderless coordination, and back‑pressure together build resilient distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
