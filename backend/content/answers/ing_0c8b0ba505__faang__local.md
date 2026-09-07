---
qid: ing_0c8b0ba505__faang__local
question: 'Explain: Pattern B: Multi-Server Fan-Out — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 445
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:13:09-05:00'
sources: []
---

**Pattern B – Multi‑Server Fan‑Out (also called “fan‑out” or “publish/subscribe”)**

| Step | What to do |
|------|------------|
| **Clarify** | Restate: We want a single request to trigger many downstream services.  Assume the initiator is stateless, each worker can run in parallel, and we care about latency & reliability. |
| **Approach** | 1) Accept the request → enqueue a “job” into a broker (Kafka/Redis Streams). 2) Spin up *N* consumer workers that read the queue independently. 3) Each worker performs its task and writes back a result to another topic or storage. 4) The caller can poll or subscribe for completion, or we aggregate results in a “coordinator” service. |
| **Depth** | • **Scalability** – each consumer scales horizontally; the broker handles high throughput. <br>• **Fault‑tolerance** – if one worker dies its message stays in the queue until re‑processed. <br>• **Latency trade‑off** – initial request is instant, but total time = max(worker latency) + coordination overhead. <br>• **Complexity** – need idempotent workers and a reliable broker; eventual consistency is common. |
| **Edge Cases** | • Duplicate messages → dedupe by key or use exactly‑once semantics of the broker. <br>• Slow worker causing backpressure → set consumer prefetch limits or use rate‑limiting. <br>• Failure to aggregate results → fallback to timeout + partial response. |
| **Optimize & Communicate** | • Use topic partitioning to parallelize by key (e.g., user ID). <br>• Cache common results in a distributed cache to avoid recomputation. <br>Explain: “We offload heavy work to workers via a broker, guaranteeing each job is processed once and allowing the system to scale linearly with demand.” |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
