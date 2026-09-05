---
qid: ing_b0a0b016d7__eli5__local
question: 'Explain: Broker — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 210
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:17:06-05:00'
sources: []
---

Think of a machine‑learning pipeline like a busy kitchen where chefs (workers) need ingredients to cook dishes (model training or inference). The **broker** is the pantry door that keeps all ingredients (messages) in one place, and the **message queue** is the line of ingredient bags waiting to be opened.

When a data‑collector says “I have a new batch of images,” it drops a bag into the pantry. Chefs don’t have to chase each other; they simply pull the next bag from the line when ready. The broker guarantees that every bag is delivered once, even if a chef crashes or is busy elsewhere—just like a reliable queue stores messages until an available worker reads them.

So, in system design for ML, a broker/message‑queue decouples data producers from consumers, balances load, and makes the whole process robust and scalable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
