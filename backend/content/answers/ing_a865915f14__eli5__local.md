---
qid: ing_a865915f14__eli5__local
question: 'Explain: Consistency — The CAP Theorem in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 209
total_tokens: 375
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:05:02-05:00'
sources: []
---

**Consistency (CAP Theorem)**  
Think of a library that has many copies of the same book. *Consistency* means every reader who checks out a copy sees the exact same story, no matter which shelf they grab it from. In a database, consistency guarantees that after you write data, any later read will return the most recent value—every node in the system is in sync.

The CAP theorem says a distributed database can satisfy at most two of **C**onsistency, **A**vailability (always responding), and **P**artition tolerance (working even when connections break). If you choose consistency, you might sacrifice availability during network splits. The analogy helps: just as the library can decide to keep all copies identical (consistency) or let some readers get slightly out‑of‑date editions (availability), a database must balance these properties based on what matters most for its users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
