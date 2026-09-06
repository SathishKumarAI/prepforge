---
qid: ing_9625ffd231__think__local
question: 'Explain: Event-Driven Systems — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 471
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:02:34-05:00'
sources: []
---

**1. Clarify the ask and set assumptions**  
   - Confirm whether “event‑driven” refers to architecture (publish/subscribe, message queues) or ML pipelines (triggered training).  
   - Assume interviewers want you to explain how events decouple components, scale, and enable real‑time ML inference.

**2. Adopt a mental model**  
   - Think of the system as three layers: *Event source → Event bus → Event consumers*.  
   - Map each layer to common patterns (Kafka topics, AWS SQS, serverless functions) and show how they fit into ML workflows (data ingestion, feature extraction, inference).

**3. Step‑by‑step reasoning**  
   1. **Identify events**: user actions, sensor readings, model predictions.  
   2. **Define event schema**: payload, metadata, versioning.  
   3. **Choose transport**: low‑latency vs durable (e.g., Redis Streams vs Kafka).  
   4. **Design consumers**: stateless workers for feature pipelines, stateful services for model serving.  
   5. **Guarantees & retries**: at‑least‑once, exactly‑once semantics; dead‑letter queues.  
   6. **Observability**: tracing (OpenTelemetry), metrics (Prometheus).  
   7. **Scaling strategy**: partitioning topics, consumer groups.

**4. Common traps to avoid**  
   - Mixing data and control events → leads to tight coupling.  
   - Over‑engineering the event bus when a simple queue suffices.  
   - Ignoring idempotency in consumers → duplicate predictions or retraining.  

**5. Sanity‑check & communicate**  
   - Verify that every component can be independently redeployed and scaled.  
   - Use analogies (e.g., “the event bus is like a traffic light system” for intuition).  
   - Conclude with benefits: loose coupling, real‑time inference, easier rollback of ML models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
