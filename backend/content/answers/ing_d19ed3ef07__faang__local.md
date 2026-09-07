---
qid: ing_d19ed3ef07__faang__local
question: 'Explain: Request Body — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 502
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:47:46-05:00'
sources: []
---

**Clarify**  
We’re designing a system that receives HTTP POSTs from external services (webhooks). The payload contains arbitrary JSON (“request body”) that our platform must ingest, validate, and forward to downstream consumers. I’ll assume: 1) high volume (thousands/sec), 2) need for reliability (at‑least‑once delivery), 3) low latency for the sender, 4) compliance with GDPR (no data loss).  

**Approach**  
1. **Ingress Layer** – API gateway or load balancer to route traffic.  
2. **Validation Service** – a stateless microservice that parses JSON, runs schema checks, and rejects malformed payloads with 400/422.  
3. **Queueing** – push valid events into a durable message broker (Kafka / Pulsar) with idempotent keys.  
4. **Processing Workers** – consume from the queue, enrich if needed, then publish to downstream topics or APIs.  
5. **Monitoring & Back‑pressure** – expose metrics (queue depth, processing latency), auto‑scale workers, and implement dead‑letter queues for persistent failures.  

**Depth**  
*Parsing*: use a streaming JSON parser (e.g., Jackson) to avoid OOM on large bodies. *Idempotency*: include webhook ID + timestamp as the Kafka key; consumers dedupe via RocksDB or an external cache. *Retries*: broker guarantees at‑least‑once; workers implement exponential backoff and circuit breaker. Complexity: Ingress O(1), Validation O(n) (n = payload size), Queueing O(log k) per message, Workers O(1).  

**Edge Cases**  
*Burst traffic*: queue capacity limits trigger 429 responses. *Malformed JSON*: returns 400 immediately. *Duplicate webhooks*: dedupe logic ensures single downstream event. *Schema drift*: validation service updates via feature flag.  

**Optimize & Communicate**  
To reduce latency, we can batch small messages in the queue and use zero‑copy serialization (Avro). For scalability, partition the Kafka topic by webhook domain. I’d explain each trade‑off to interviewers: throughput vs. complexity, idempotency overhead vs. reliability, etc., showing a clear, maintainable design that meets FAANG standards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
