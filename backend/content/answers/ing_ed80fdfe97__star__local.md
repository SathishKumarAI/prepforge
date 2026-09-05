---
qid: ing_ed80fdfe97__star__local
question: 'Explain: Execution Service — Design a Distributed Job Scheduler - System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 395
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:23:54-05:00'
sources: []
---

**Situation:**  
At my last company we launched a new analytics platform that required running nightly ETL jobs across hundreds of data sources. The existing single‑node scheduler could not keep up; job queues grew to 10,000 tasks and latency hit 30 minutes, breaking our SLA.

**Task:**  
I was tasked with designing an execution service: a distributed job scheduler that scales horizontally, guarantees at‑least‑once execution, handles failures, and respects job priorities while keeping costs low.

**Action:**  
I chose a microservice architecture on Kubernetes. The core components were:
- **Job Manager** (Python/Flask) to accept REST requests, validate schemas, and push jobs into a Redis Streams queue.
- **Worker Nodes** (Go) that pull from the stream, lock tasks via RedLock, execute using Docker containers for isolation, and report status back through gRPC.
- A **Circuit Breaker** layer to throttle retries, and an **Event‑driven retry policy** with exponential backoff.
For high availability I deployed a statefulset of Redis Sentinel nodes; metrics were sent to Prometheus, and alerts triggered when queue depth exceeded 5 k jobs. We also introduced a priority tag that the scheduler respected by pulling from multiple streams.

**Result:**  
The new system handled 150 k jobs per night with average latency under 3 minutes, meeting our SLA. Queue backlog dropped from 10 k to <500 tasks. The cost of running the scheduler was 35% lower due to autoscaling and container reuse. I learned that careful choice of message broker and lock strategy is critical for distributed reliability, and that exposing a simple REST API keeps the system approachable for data teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
