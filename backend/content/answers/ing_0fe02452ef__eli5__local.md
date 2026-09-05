---
qid: ing_0fe02452ef__eli5__local
question: 'Explain: Ledger Databases — 15 Types of Databases and When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 289
total_tokens: 454
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:00:35-05:00'
sources: []
---

Think of a **ledger database** like a giant, digital *accounting book* that records every transaction in a business—who bought what, who sold it, how much money changed hands, and when.  
In machine‑learning projects you often need to keep track of many different kinds of data: raw sensor readings, model weights, training logs, user interactions, or audit trails. The “ledger” style keeps each record immutable (once written, it can’t be altered) and timestamps every entry, just like a bank book.

**When to use a ledger database?**

| Use case | Why the ledger shines |
|----------|-----------------------|
| **Audit‑ready logs** | Every change is permanently recorded. |
| **Event sourcing** | The full history of an object’s state changes is stored as events. |
| **Blockchain or crypto apps** | Trust requires tamper‑proof records. |
| **Financial data** | Compliance demands immutable transaction histories. |
| **Versioned ML models** | Each model snapshot can be logged with its parameters and performance metrics. |

So, if you need a reliable, time‑ordered record of every change—like a master accounting book—pick a ledger database. It gives you the audit trail and immutability that most machine‑learning pipelines secretly depend on.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
