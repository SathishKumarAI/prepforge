---
qid: ing_2f16d52e50__star__local
question: 'Explain: Pull-Based Heartbeat — How to Detect Node Failures in Distributed
  Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 331
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:02:44-05:00'
sources: []
---

**Situation**  
In our micro‑service platform I was tasked with ensuring high availability for a fleet of stateless worker nodes that processed real‑time telemetry. The monitoring stack only exposed an HTTP endpoint per node, and we had no built‑in cluster heartbeat.

**Task**  
I needed to detect node failures quickly (within 5 s) without adding heavy instrumentation or polling overhead, so the system could trigger a graceful rebalancing of tasks.

**Action**  
I implemented a pull‑based heartbeat using a lightweight “heartbeat collector” service. Each worker exposed `/healthz` that returned its last seen timestamp and a CRC of its current state. The collector ran every 2 s, pulling these endpoints concurrently with an HTTP client pool (using Go’s `net/http` with timeouts). If a node failed to respond or returned a stale timestamp (>4 s), the collector flagged it as dead and sent a message to the scheduler via Kafka. To avoid false positives during network partitions, I added exponential back‑off retries and a quorum check: only if 2 out of 3 consecutive pulls failed would the node be considered down.

**Result**  
Failure detection latency dropped from ~30 s (manual logs) to <5 s. During a simulated outage we observed instant task migration with <0.7 % service interruption, and CPU overhead on workers stayed below 1 %. The experience taught me how pull‑based heartbeats can be both low‑cost and resilient when combined with intelligent retry logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
