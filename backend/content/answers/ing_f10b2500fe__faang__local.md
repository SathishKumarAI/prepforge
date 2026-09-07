---
qid: ing_f10b2500fe__faang__local
question: 'Explain: Problem — Pattern: Event sourcing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 574
total_tokens: 805
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:00:01-05:00'
sources: []
---

**Clarify**  
You’re asking me to describe *Event Sourcing* as a design pattern, especially its relevance to machine‑learning workflows. I’ll assume you want: 1) what the pattern is, 2) why it matters for data‑centric systems, and 3) how to apply it when building ML pipelines.

**Approach**  
1. Define Event Sourcing in general terms (immutable event log).  
2. Map the concept to ML life‑cycle stages (data ingestion, feature engineering, model training/serving).  
3. Highlight benefits: auditability, reproducibility, rollback, incremental learning.  
4. Note trade‑offs and typical pitfalls.  

**Depth**  
Event Sourcing stores every state change as a *domain event* in an append‑only log (e.g., Kafka, DynamoDB Streams). The current system state is reconstructed by replaying events. In ML pipelines:

- **Data ingestion**: each record arrival becomes an `RawRecordCreated` event; transformations emit `FeatureComputed`, `LabelAssigned`.  
- **Training**: a `ModelTrained` event captures hyper‑parameters, training data snapshot hash, and evaluation metrics.  
- **Serving**: every inference request is logged as `InferenceRequested`; the response can be stored as `PredictionGenerated`.

Because events are immutable, we can replay from any point to regenerate features or retrain models, ensuring deterministic reproducibility—critical for regulatory compliance (e.g., GDPR “right to explanation”). Incremental learning becomes trivial: new events simply extend the log; a downstream consumer re‑computes only affected aggregates.

**Edge Cases**  
- **Event loss or corruption** → use cryptographic hashing and distributed consensus.  
- **Schema evolution** → versioned event payloads and backward‑compatible serializers (Avro/Protobuf).  
- **Performance bottlenecks** → materialized views for frequent queries; compaction strategies to limit replay time.

**Optimize & Communicate**  
To improve, combine Event Sourcing with *CQRS*: keep a read‑optimized projection of the ML state while writing all changes as events. This decouples heavy training jobs from real‑time inference traffic. I’d explain this trade‑off by showing that write latency stays low (just appending to the log), while reads benefit from pre‑computed aggregates, yielding sub‑millisecond predictions. In a FAANG interview, I’d finish with a short code sketch of an event handler and a projection builder, emphasizing time/space complexity: O(n) replay for n events, but constant‑time queries on projections.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
