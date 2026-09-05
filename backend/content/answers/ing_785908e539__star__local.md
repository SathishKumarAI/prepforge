---
qid: ing_785908e539__star__local
question: 'Explain: Pending Jobs (Not Started) — Design a Distributed Job Scheduler
  - System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 366
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:34:46-05:00'
sources: []
---

**Situation:**  
At my last startup we built a micro‑service platform that processed user data pipelines in real time. We hit a bottleneck: our single‑node scheduler could only queue ~300 “pending” jobs before the queue stalled, causing 15 % of daily batch runs to miss SLA windows.

**Task:**  
I was tasked with designing a distributed job scheduler that could handle thousands of pending jobs across multiple regions while guaranteeing fair resource allocation and minimal latency for high‑priority tasks.

**Action:**  
I architected a two‑layer system:  
1. **Central coordination layer** using ZooKeeper for leader election, storing job metadata in a sharded Redis cache (TTL‑based locks). Each worker node subscribes to a topic via Kafka; the broker routes new jobs to the least loaded queue.  
2. **Local execution layer** on each node that pulls jobs from its dedicated Redis list, applies backpressure by checking CPU/Memory thresholds, and reports status to the coordinator through gRPC streams.  
I introduced a priority queue algorithm (weighted round‑robin) and implemented exponential backoff for failed retries. We also added a “job aging” metric to prevent starvation.

**Result:**  
After deployment, pending job capacity jumped from 300 to over **12,000** per node with average queuing latency dropping from 1.8 s to <200 ms. SLA compliance improved from 85 % to 99.5 %. I learned that coupling lightweight coordination (ZooKeeper) with fast local queues (Redis) and a publish/subscribe broker (Kafka) delivers both scalability and resilience in distributed job scheduling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
