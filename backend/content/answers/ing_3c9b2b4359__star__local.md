---
qid: ing_3c9b2b4359__star__local
question: 'Explain: Rate Limiting at the Job Queue Level — Design a Distributed Job
  Scheduler - System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 380
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:29:26-05:00'
sources: []
---

**Situation**  
I was leading a team that had to process 250 k ML training jobs per day across multiple GPU clusters. The existing scheduler would launch jobs as soon as resources freed, causing spikes of 120% CPU usage and queue latency jumps from <1 s to >30 s during peak hours.

**Task**  
Design a distributed job scheduler that enforces rate limits per tenant at the queue level while keeping throughput high and guaranteeing fair GPU allocation.

**Action**  
I introduced a two‑layer architecture: (1) a Kafka topic per tenant where producers publish job descriptors; (2) a Redis‑backed priority queue that aggregates jobs from all tenants. A “RateLimiter” service consumes from Kafka, checks the tenant’s token bucket (tokens regenerated at 200 jobs/min), and pushes eligible jobs into Redis with a score based on urgency. Worker nodes poll Redis using ZRANGEBYSCORE, pulling only one job per tick to avoid bursty consumption. We added an exponential back‑off retry for over‑rate jobs and exposed metrics via Prometheus (queue depth, token usage). The scheduler ran on Kubernetes with a lightweight Go daemon, scaling horizontally by adding more RateLimiter instances.

**Result**  
Latency dropped from 30 s to <2 s during peak times, GPU utilization stabilized at 70%–80%, and we reduced job failures due to resource contention by 35%. I learned that coupling token‑bucket logic with a Redis priority queue gives fine‑grained control over per‑tenant rates while keeping the system horizontally scalable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
