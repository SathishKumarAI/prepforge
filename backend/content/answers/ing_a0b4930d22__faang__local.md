---
qid: ing_a0b4930d22__faang__local
question: 'Explain: Durability — What does ACID mean?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 403
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:58:03-05:00'
sources: []
---

**Durability & ACID (Structured FAANG‑style answer)**  

| Step | Content |
|------|---------|
| **Clarify** | “You’re asking about durability in the context of database transactions, specifically the ACID properties.” |
| **Approach** | 1. Define each letter succinctly.<br>2. Explain why durability matters for ML pipelines (model checkpoints, feature stores).<br>3. Mention typical storage engines that enforce ACID. |
| **Depth** | **A – Atomicity:** a transaction is all‑or‑nothing; either every write succeeds or none does. <br>**C – Consistency:** a transaction moves the database from one valid state to another, preserving constraints (e.g., schema, foreign keys). <br>**I – Isolation:** concurrent transactions don’t interfere; each sees a serializable view. <br>**D – Durability:** once committed, changes survive failures—implemented via write‑ahead logs, checkpoints, and replicated storage. In ML, this guarantees that once you persist a model checkpoint or feature vector, it’s safe to reload after a crash. |
| **Edge Cases** | • Partial writes due to power loss before log flush.<br>• Stale reads in read‑committed isolation.<br>• Long‑running transactions causing lock contention. Test by simulating node failures and concurrent updates. |
| **Optimize & Communicate** | Highlight that many NoSQL systems relax ACID for scalability; recommend using a hybrid approach: use an ACID‑compliant service (e.g., PostgreSQL) for critical metadata, while leveraging distributed logs (Kafka) for streaming features. Conclude by tying durability to ML reliability: “If a model training job crashes, we can resume from the last durable checkpoint without data loss.” |

*Word count:* ~210 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
