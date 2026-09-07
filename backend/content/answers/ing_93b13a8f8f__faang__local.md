---
qid: ing_93b13a8f8f__faang__local
question: 'Explain: Use cases: — Delivery Semantics'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 475
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:27:32-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *delivery semantics* in ML systems—i.e., how and when model predictions are served to downstream consumers (apps, pipelines). Key assumptions: (1) multiple inference endpoints exist; (2) latency, consistency, and fault‑tolerance matter; (3) the consumer expects deterministic or probabilistic guarantees.  

**Approach**  
1. Define the three classic semantics: *at‑most‑once*, *exactly‑once*, *at‑least‑once*.  
2. Map each to common ML deployment patterns (REST, gRPC, streaming).  
3. Discuss trade‑offs in latency vs. consistency and fault handling.  

**Depth**  
- **At‑most‑once**: The inference service may drop a request if the upstream system fails or times out. Used for real‑time ad click predictions where a single miss is tolerable. Low overhead, minimal retries.  
- **Exactly‑once**: Guarantees each request receives one result, no duplicates. Achieved via idempotent request IDs and stateful queues (Kafka + transactional writes). Ideal for billing or fraud detection—every event must be scored once. Complexity rises with distributed coordination and idempotency logic.  
- **At‑least‑once**: The system retries until a response is returned, potentially causing duplicates. Useful when predictions are non‑critical but high coverage is needed (e.g., recommendation scores). Requires downstream deduplication or stateless recomputation to avoid skewed analytics.  

**Edge Cases**  
- Network partitions can cause duplicate or missing responses.  
- Model drift may lead to stale semantics if the inference engine updates mid‑transaction.  
- Mixed‑traffic scenarios: batch vs. streaming pipelines need separate queues.  

**Optimize & Communicate**  
Start with *at‑most‑once* for low‑latency use cases, then layer a lightweight idempotent cache for critical paths. Use monitoring (latency histograms, duplicate counters) to surface violations early. Explain the cost/benefit curve: higher guarantees mean extra state management but protect downstream business logic. Conclude with a decision matrix guiding when each semantics is appropriate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
