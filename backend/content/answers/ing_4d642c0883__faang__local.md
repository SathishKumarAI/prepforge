---
qid: ing_4d642c0883__faang__local
question: 'Explain: Remote Procedure Call — RabbitMQ: One broker to queue them all
  | RabbitMQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 430
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:44:13-05:00'
sources: []
---

**Clarify**  
You’re asking how a single RabbitMQ broker can act as an RPC server for many clients, queuing their calls and returning responses. I’ll assume: (1) all calls are idempotent, (2) the broker is the only message‑passing layer, and (3) latency constraints are modest.

**Approach**  
1. Each client sends a request to a *request queue* with a unique correlation ID and reply‑to queue.  
2. The broker routes messages to one or more worker queues bound to the same exchange.  
3. Workers consume requests, process them, then publish responses to the specified reply‑to queue using the correlation ID.

**Depth**  
- **Queues & Exchanges**: Use a direct or topic exchange so all workers share the same routing key. The broker’s single instance handles all traffic; scaling is achieved by adding worker processes.  
- **Message Flow**: `client → request_queue (reply_to, corr_id) → worker queue → worker → reply_queue`.  
- **Reliability**: Enable publisher confirms and use durable queues with message persistence. Acks ensure workers delete only after successful processing.  
- **Complexity**: O(1) routing per message; broker overhead grows linearly with traffic but remains bounded by its single‑instance capacity.

**Edge Cases**  
- *Burst load*: queue length can grow; monitor and autoscale workers.  
- *Correlation ID collision*: use UUIDs.  
- *Broker failure*: failover to a mirrored cluster or a hot standby.

**Optimize & Communicate**  
To reduce latency, pre‑allocate worker threads per CPU core and batch acknowledgments. Explain that while one broker centralizes management, horizontal scaling of workers keeps throughput high. Emphasize monitoring queue depth and response times as key metrics. This structure shows clear problem framing, a practical design, complexity awareness, edge‑case handling, and performance tuning—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
