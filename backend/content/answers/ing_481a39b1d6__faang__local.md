---
qid: ing_481a39b1d6__faang__local
question: 'Explain: Duplicate Processing — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 440
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:31:33-05:00'
sources: []
---

**Duplicate Processing – Message Queues (System Design)**  

| Step | What I’d do |
|------|-------------|
| **Clarify** | *Problem:* A consumer must process each message exactly once even if the broker re‑delivers duplicates (e.g., due to network hiccups or at‑least‑once guarantees). <br>*Assumptions to confirm:* persistence of messages, throughput requirements, idempotence of business logic, whether ordering matters, and cost constraints. |
| **Approach** | 1️⃣ Assign a *unique message ID* (UUID or hash) on publish.<br>2️⃣ Persist the ID in a fast key‑value store (Redis/ DynamoDB).<br>3️⃣ On consume, perform an atomic “check‑and‑set” (e.g., Redis `SETNX`). If set succeeds → process; else skip. <br>4️⃣ For idempotent operations, keep the last processed state and apply a merge strategy if needed. |
| **Depth** | *Complexity:* O(1) per message for lookup/insert. Storage cost ≈ ID size × retention period. Trade‑off: strong consistency (Redis) vs. eventual (DynamoDB). If ordering is required, use partition keys that preserve order and still dedupe within each partition. |
| **Edge Cases** | • Message ID collision → use a cryptographic hash.<br>• Consumer crash before processing → store “in‑flight” flag with TTL to avoid permanent lock.<br>• High cardinality may exhaust key‑space → compact IDs or use Bloom filters with false‑positive tolerance. |
| **Optimize & Communicate** | • Batch dedupe lookups (pipeline Redis commands) for high throughput.<br>• Evict old IDs after business window expires to bound memory.<br>Explain that the system trades a tiny chance of duplicate processing (Bloom filter) for scalability, and how we monitor metrics (`duplicate_rate`, `processing_latency`) to adjust thresholds. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
