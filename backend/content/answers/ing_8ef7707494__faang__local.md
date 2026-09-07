---
qid: ing_8ef7707494__faang__local
question: 'Explain: Rate Limiting at the Worker Node Level — Design a Distributed
  Job Scheduler - System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 508
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:16:55-05:00'
sources: []
---

**Clarify**

You’re asked to design a *distributed job scheduler* that throttles work per worker node (rate limiting).  
Key questions:  
- What is the job granularity (short tasks vs long jobs)?  
- How many workers, jobs per second, and what SLA?  
- Do we need global ordering or just local throughput control?  

**Approach**

1. **Central coordinator** (e.g., Kafka/Redis Streams) publishes job metadata.  
2. **Worker nodes** subscribe to a *rate‑limited* queue: each node tracks its own token bucket (capacity = max QPS, refill rate).  
3. When a worker’s bucket is empty, it pauses pulling from the stream; when tokens arrive, it resumes.  
4. Use a lightweight heartbeat/lease system so the coordinator knows which workers are alive and can re‑balance jobs if a node dies.

**Depth**

- **Token bucket per worker**: O(1) space, O(1) update on each job.  
- **Job assignment**: push‑based (Kafka consumer groups) to avoid polling overhead; rate limiter lives inside the consumer loop.  
- **Fault tolerance**: if a node fails, its pending jobs stay in Kafka and get re‑assigned by another group member.  
- **Scalability**: each worker is independent; coordinator only tracks heartbeats → O(N) where N = #workers.

**Edge Cases**

- Sudden spike → workers hit bucket limits → backpressure flows to the coordinator.  
- Clock drift between nodes could mis‑sync token refills—use monotonic timers or NTP sync.  
- Network partitions: a node may think it has tokens but can’t pull jobs; heartbeat timeouts trigger re‑assignment.

**Optimize & Communicate**

- Cache job metadata locally to reduce coordinator load.  
- Tune bucket size based on observed burstiness (e.g., 5× peak QPS).  
- Log token usage for observability and alerting.  

Explain the trade‑off: central coordination simplifies global ordering but adds a single point of failure; decentralizing rate limits keeps workers autonomous but requires more complex lease logic. This balanced design satisfies FAANG’s emphasis on clear assumptions, systematic planning, technical depth, edge‑case awareness, and concise communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
