---
qid: ing_de8d43d76c__think__local
question: 'Explain: Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 436
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:40:11-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**  
   - The user wants an *explanation* of CDC in a **system‑design** context.  
   - Assume they’re familiar with basic ML pipelines but new to data engineering concepts.  
   - Keep it high‑level yet concrete enough for design discussions.

**2️⃣ Adopt a “pipeline‑plus‑architecture” mental model**  
   - Think of CDC as the *data ingestion* layer that feeds downstream ML services.  
   - Map out: source DB → change capture mechanism → message broker/stream → consumer (pre‑processor) → storage / feature store → ML models.

**3️⃣ Step‑by‑step reasoning**  
   1. Identify data sources and their update patterns.  
   2. Choose a CDC technique (transaction log tailing, triggers, timestamps).  
   3. Decide on the transport medium (Kafka, Pulsar, Kinesis).  
   4. Define message schema & versioning strategy.  
   5. Build consumers that transform raw changes into feature updates.  
   6. Store in a feature store or data lake with lineage tracking.  
   7. Feed real‑time/ batch ML models.

**4️⃣ Common traps to avoid**  
   - Mixing *change detection* with *data transformation*: keep them separate.  
   - Ignoring idempotency; duplicate events can corrupt features.  
   - Underestimating latency vs throughput trade‑offs in the broker.  
   - Forgetting schema evolution support.

**5️⃣ Sanity‑check & communicate**  
   - Verify that every change in source DB eventually reaches the feature store *exactly once*.  
   - Outline failure modes (broker outage, consumer crash) and recovery paths.  
   - Summarize the design in a diagram: source → CDC → broker → consumer → feature store → ML.  

This structured approach lets you explain CDC’s role in system design while highlighting key decisions and pitfalls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
