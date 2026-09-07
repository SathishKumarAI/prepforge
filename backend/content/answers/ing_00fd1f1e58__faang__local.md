---
qid: ing_00fd1f1e58__faang__local
question: 'Explain: When to Use Pub/Sub — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 514
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:46:43-05:00'
sources: []
---

**When to Use Pub/Sub in ML Pipelines**

| **Clarify** | We’re deciding whether a publish‑subscribe messaging layer (e.g., Kafka, Google Cloud Pub/Sub) is the right fit for our ML workflow. Key assumptions:  
• Multiple producers (data collectors, sensor streams).  
• Multiple consumers (feature extraction, training jobs, monitoring).  
• Decoupled, asynchronous processing with possible back‑pressure handling.  

| **Approach** | 1️⃣ Identify data sources and sinks.  
2️⃣ Map out event types (raw telemetry, feature updates, model checkpoints).  
3️⃣ Decide on topic partitioning strategy for scaling.  
4️⃣ Implement schema registry & message validation to avoid drift.  

| **Depth** | *Use Pub/Sub when:*  
- **Real‑time ingestion** is required: e.g., streaming log data → feature store.  
- **Decoupling** is critical: producers don’t need to know consumer state; new ML services can subscribe without changes.  
- **Scalability & fault tolerance** are non‑negotiable: partitions + replication ensure high throughput and durability.  
- **Replayability** matters: you may reprocess events for model retraining or debugging.  

*Avoid it when:*  
- Data is strictly batch‑centric with no need for asynchronous handling.  
- Latency constraints are sub‑10 ms (Pub/Sub adds a few ms).  
- Your system already uses a tightly coupled queue like SQS without the need for multi‑consumer semantics.  

| **Edge Cases** | • Schema evolution: test backward compatibility via Avro/Protobuf.  
• Topic exhaustion: monitor partition limits and plan rollovers.  
• Consumer lag spikes: implement back‑pressure or dead‑letter queues.  

| **Optimize & Communicate** | Start with a minimal topic set, then shard as throughput grows. Use consumer groups for parallelism but keep at least one “stateful” consumer (e.g., feature store) to enforce consistency. When explaining to stakeholders, emphasize:  
- *Loose coupling* → faster iteration on ML models.  
- *Durability & replay* → robust debugging and regulatory compliance.  

This structured rationale aligns with FAANG interview expectations—clear assumptions, systematic plan, technical depth, edge‑case awareness, and a communication strategy that ties design decisions to business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
