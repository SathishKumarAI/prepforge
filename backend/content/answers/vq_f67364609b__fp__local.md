---
qid: vq_f67364609b__fp__local
question: How does continue, break, and pass work?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 370
total_tokens: 539
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:04:01-05:00'
sources: []
---

In a loop, the interpreter repeatedly evaluates an *iteration expression* until it raises `StopIteration` (or the explicit condition fails).  
The trio **continue**, **break**, and **pass** intervene at the level of the *statement list* that follows the header:

| Statement | Effect on the iteration | Why it must work this way |
|-----------|------------------------|--------------------------|
| `continue` | Skips the remainder of the current body, jumps to the next loop‑iteration expression. | The loop’s invariant is “execute the body *once* per iteration”. `continue` preserves that invariant by aborting the current run early. |
| `break` | Aborts the entire loop immediately; control leaves the loop block. | A loop’s purpose is to iterate until a condition holds. `break` implements an **early exit**—the natural counterpart to the implicit exit when the header condition fails. |
| `pass` | Does nothing; merely a syntactic placeholder. | Allows a body that must be syntactically non‑empty (e.g., a stub, abstract method). It does not alter control flow, so it can be inserted anywhere without side effects. |

**Non‑obvious insight:**  
`continue` is *not* equivalent to “go to the next iteration expression” in all contexts; it also **flushes pending `finally` blocks** and unwinds any active exception handlers for that iteration. Thus, a `continue` inside a `try/except/finally` will still execute the corresponding `finally`, ensuring resource cleanup—an essential guarantee for correctness that many overlook when refactoring loops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
