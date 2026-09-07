---
qid: ing_86ef871a3f__faang__local
question: 'Explain: At-least once — Delivery Semantics'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 507
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:57:46-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *at‑least‑once* delivery semantics—how a producer guarantees that every message reaches the consumer one or more times, even if retries are needed. I’ll assume we’re dealing with a distributed messaging system (Kafka, SQS, etc.) and focus on its impact on ML pipelines where data consistency matters.

**Approach**  
1. Define the guarantee.  
2. Explain why it’s useful for ML ingestion.  
3. Outline how producers/consumers implement it.  
4. Highlight trade‑offs versus *exactly‑once* or *at‑most‑once*.  

**Depth**  
- **Guarantee**: Each message is delivered *at least once*, meaning duplicates are possible but none lost.  
- **Why ML?**: Training data must be complete; missing records can bias models, yet duplicate features may be tolerable if deduped downstream.  
- **Implementation**:
  - Producer writes to a durable log and acknowledges receipt only after persistence.  
  - Consumer reads the log, processes, then commits an offset *after* successful processing. If it crashes before committing, the same message is re‑read → duplicate.  
  - Idempotent processing or de‑duplication (e.g., using unique IDs) mitigates duplicates.  
- **Complexity**: O(1) per record for writes; read complexity remains linear.  
- **Trade‑offs**: Simpler than *exactly‑once* (no transactional logs), lower latency, but requires downstream idempotence or duplicate handling.

**Edge Cases**  
- Consumer crash before offset commit → duplicate.  
- Network partition leads to re‑broadcasts.  
- Idempotent logic fails → model corruption.  
Testing: replay logs, simulate crashes, verify deduplication correctness.

**Optimize & Communicate**  
Explain that *at‑least‑once* is the default for many ML ingestion pipelines because it balances reliability with performance. If duplicates are unacceptable, we can layer idempotency or switch to *exactly‑once* semantics (e.g., Kafka transactions), noting higher overhead and complexity. This structured reasoning shows clear understanding of trade‑offs and system design—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
