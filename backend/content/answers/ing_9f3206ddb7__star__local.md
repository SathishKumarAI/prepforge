---
qid: ing_9f3206ddb7__star__local
question: 'Explain: Heartbeat with Acknowledgement — How to Detect Node Failures in
  Distributed Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 334
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:50:27-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech firm, we had a real‑time payment orchestration service running on Kubernetes. The system consisted of dozens of microservices that needed to stay in sync; one node dropping out caused transaction delays and even double‑charges.

**Task:**  
I was tasked with building a lightweight health‑check mechanism that could detect node failures within 200 ms, notify the remaining nodes immediately, and trigger an automatic failover without manual intervention.

**Action:**  
I implemented a heartbeat protocol using Redis Streams. Each service instance publishes a timestamped message to its own stream every 100 ms. A separate “watchdog” goroutine listens on all streams with a consumer group. If it misses two consecutive heartbeats from any node, it marks that node as dead and writes an *acknowledgement* event to a shared “failure‑log” stream. Other services subscribe to this log; upon receiving the failure acknowledgement they immediately re‑route traffic to healthy replicas, update service discovery in Consul, and run a state reconciliation routine. To avoid false positives from network jitter, I added exponential backoff on heartbeat checks.

**Result:**  
The system now detects node failures in under 250 ms with a false‑positive rate of <0.5 %. We saw a 30 % reduction in transaction latency spikes and eliminated the double‑charge incidents that had plagued us for months. I learned how to combine simple pub/sub primitives with consumer groups to create an efficient, fault‑tolerant heartbeat mechanism without adding heavyweight monitoring tools.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
