---
qid: ing_f1a513bc4c__faang__local
question: 'Explain: Realtime infrastructure for collaborative AI.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 491
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:01:31-05:00'
sources: []
---

**Clarify**  
The interviewer wants a high‑level design of an infrastructure that supports *real‑time, multi‑user collaboration* (e.g., multiple users editing a document while an AI model suggests completions or edits). I’ll assume: (1) latency < 200 ms for user actions; (2) stateless core services; 3) data is stored in a distributed DB; 4) we need horizontal scaling and strong consistency for shared state.

**Approach**  
1. *Front‑end*: WebSocket/HTTP2 clients push edits to a **gateway service**.  
2. *Real‑time engine*: A message broker (Kafka or Pulsar) streams events to an **AI inference microservice** that runs the model in containers, returning suggestions.  
3. *State sync*: Use a distributed lock (Redis RedLock) and a conflict‑free replicated data type (CRDT) store (e.g., Yjs backed by DynamoDB) for document state.  
4. *Observability*: Distributed tracing (OpenTelemetry), metrics (Prometheus/Grafana).  
5. *Autoscaling*: Kubernetes with HPA based on queue depth.

**Depth**  
- **Latency**: Keep inference in a low‑latency region; batch small requests to reduce overhead.  
- **Throughput**: Partition topics by document ID; use consumer groups for parallel inference.  
- **Consistency**: CRDT guarantees eventual consistency without locks, but we enforce a “last‑write‑wins” policy on conflicting AI edits.  
- **Fault tolerance**: Stateless services with retries; broker replicas protect against node loss.

**Edge Cases**  
- Network partitions → stale local state, resolved by periodic sync checkpoints.  
- Model drift → A/B test new model versions in separate inference pods.  
- High edit bursts → back‑pressure via broker’s max queue size.

**Optimize & Communicate**  
Future improvements: use *model distillation* for edge inference to cut round‑trip time; implement a *priority queue* so critical user edits get instant responses while AI suggestions are queued. I’d conclude by highlighting that this design balances low latency, horizontal scalability, and strong consistency—key for a production collaborative AI platform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
