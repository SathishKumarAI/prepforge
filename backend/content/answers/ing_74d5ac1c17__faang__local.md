---
qid: ing_74d5ac1c17__faang__local
question: 'Explain: Exactly once — Delivery Semantics'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 463
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:16:24-05:00'
sources: []
---

**Exactly‑Once Delivery Semantics (ML context)**  

---

### 1️⃣ Clarify  
*Question:* “Explain exactly‑once delivery semantics.”  
Assumptions to confirm:  
- We’re talking about message/streaming pipelines that feed ML models (e.g., feature stores, training data).  
- The goal is *idempotent* ingestion of events—no duplicates or missed records.  

### 2️⃣ Approach  
1. Define the guarantee: each event reaches downstream exactly one time.  
2. Identify components: producer → broker → consumer → ML system.  
3. Show how idempotency and deduplication are achieved at each hop.  

### 3️⃣ Depth  
- **Producer** writes with a unique identifier (UUID) or logical timestamp, often using *idempotent* write APIs.  
- **Broker (e.g., Kafka)** assigns offsets; consumer commits the offset only after successful processing.  
- **Consumer** stores the UUID in a deduplication store (cache/DB). If the same ID appears again, it is discarded.  
- **ML pipeline** ensures that feature extraction or training data ingestion records the event ID before persisting to model storage.  

*Complexity:* Amortized O(1) lookup for dedup store; linear in stream size for offset management. Trade‑off: higher storage for IDs vs. risk of duplicates.

### 4️⃣ Edge Cases  
- Producer retries → duplicate IDs handled by consumer deduplication.  
- Consumer crash before commit → broker replays event; consumer checks dedup store to skip.  
- Clock skew → use monotonically increasing logical timestamps or sequence numbers.  

### 5️⃣ Optimize & Communicate  
- Use *exactly‑once semantics* APIs in Kafka (e.g., idempotent producers + transactional writes) to reduce manual dedup logic.  
- Explain to interviewers how this pattern prevents “double‑counting” in feature engineering, keeps model drift minimal, and is critical for compliance.  

> **Key takeaway:** Exactly‑once delivery guarantees that every training or inference event influences the ML system only once, preserving data integrity and model reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
