---
qid: vq_0894342fae__faang__local
question: Why Lambda is used in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 395
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:56:31-05:00'
sources: []
---

**Clarify**  
The interviewer asks *“Why is `lambda` used in Python?”* – they want to hear the purpose of anonymous functions, typical use‑cases, and how they fit into functional‑style code.

**Approach**  
Explain that `lambda` creates a short, unnamed function; it’s syntactically concise. Outline where it shines: inline callbacks, sorting/comparison keys, simple one‑liner transformations, and as arguments to higher‑order functions (`map`, `filter`, `sorted`). Mention its limitations (single expression only) and why we rarely replace full‑blown `def` blocks.

**Depth**  
- **Syntax & semantics**: `lambda args: expr` produces a function object.  
- **Use‑cases**:
  - *Higher‑order functions*: `list(map(lambda x: x*2, nums))`.  
  - *Sorting*: `sorted(items, key=lambda i: i['age'])`.  
  - *Callbacks*: GUI event handlers or async callbacks (`threading.Timer`).  
- **Advantages**: brevity, avoids defining a named function when only used once.  
- **Trade‑offs**: readability can suffer; debuggers show `<lambda>` and stack traces lack context; cannot contain statements.

**Edge Cases**  
If the lambda grows beyond one or two lines, refactor to `def`. Avoid side effects inside lambdas; keep them pure for functional clarity. Test that the lambda correctly handles edge inputs (e.g., empty lists, None values).

**Optimize & Communicate**  
Mention alternatives: named functions (`def`) for reusable logic, `functools.partial` when you need pre‑filled arguments. Conclude by summarizing that lambdas are a tool for concise, one‑off function objects in Python’s functional programming idioms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
