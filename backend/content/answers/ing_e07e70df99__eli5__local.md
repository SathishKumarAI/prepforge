---
qid: ing_e07e70df99__eli5__local
question: 'Explain: Problem — Pattern: Transactional outbox'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 221
total_tokens: 379
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:31:06-05:00'
sources: []
---

**Transactional Outbox**  
Think of it like a mail‑room that guarantees every letter leaves the office and reaches its destination without loss. In software, an *outbox* is a tiny table inside the same database where you first write a “message” (the letter) as part of your normal business transaction. Because the write happens in the same transaction, either both the business data and the message are saved together or none at all—no partial state.

Later, a separate *outbox‑reader* looks for unsent messages, copies them to a real messaging system (like Kafka), and marks them sent. If that copy fails, the reader can retry without duplicating work. This keeps your data consistent and guarantees reliable communication between services, just as a secure mail‑room ensures no letter is lost or duplicated.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
