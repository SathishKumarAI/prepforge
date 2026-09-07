---
qid: vq_fd6dca7357__aws__local
question: Which of the following is not correct about an Exception ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 268
total_tokens: 499
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:24:08-05:00'
sources: []
---

**Answer (Amazon‑style):**

> **The only statement that is *not* correct about an exception is:**  
> “An exception automatically rolls back the transaction in all programming environments.”

**Why this is wrong**  
- In many languages (e.g., Java, C#), throwing an exception does *not* trigger a database rollback unless you’re inside a managed transaction block (`@Transactional`, `BEGIN … COMMIT/ROLLBACK`).  
- Some frameworks (Spring, Hibernate) perform automatic rollbacks only for unchecked exceptions; checked ones may be ignored.  
- In AWS Lambda or server‑less contexts, an exception simply ends the invocation – no implicit stateful rollback occurs.

**What I learned:**  
I once assumed a thrown exception would revert all changes in a microservice, leading to data inconsistencies until I added explicit `try/catch` blocks and `transactional` annotations. This taught me to always **verify transaction boundaries**, not rely on language defaults—exactly the *Ownership* principle at play.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
