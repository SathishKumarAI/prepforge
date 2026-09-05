---
qid: ing_9b1c6b9e08__eli5__local
question: 'Explain: Replication Between Services — Change Data Capture (CDC) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 213
total_tokens: 377
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:43:27-05:00'
sources: []
---

**Change‑Data‑Capture (CDC)** is like a *real‑time diary* that records every edit you make to a book. Whenever someone changes a page, the diary writes down what changed and when.

Imagine two friends running a bakery: one friend (Service A) keeps the master recipe book; the other (Service B) runs the kitchen. Whenever Service A updates a recipe—adding an ingredient or tweaking a quantity—the CDC “diary” notes that change. Service B reads the diary and immediately applies the same edit to its own copy of the recipe book, so both books stay in sync without Service B having to ask for the whole file again.

Thus, CDC is a lightweight, continuous replication mechanism: it captures only the differences (“edits”) between services, ensuring each service has an up‑to‑date snapshot while keeping bandwidth and processing low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
