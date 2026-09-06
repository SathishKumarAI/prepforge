---
qid: vq_f67364609b__think__local
question: How does continue, break, and pass work?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 652
total_tokens: 840
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:40:50-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**

- Assume the user knows basic `for`/`while` loops but wants explicit semantics of each keyword.
- They’re probably curious about scope, control‑flow differences, and when each is appropriate.

**2️⃣ Adopt a “control‑flow table” mental model**

| Keyword | Effect on loop | What happens next? |
|---------|----------------|--------------------|
| `continue` | Skip the rest of the current iteration. | Jump to the next loop cycle (next item or condition). |
| `break` | Exit the loop immediately. | Control jumps to the statement following the loop block. |
| `pass` | Do nothing; syntactically required placeholder. | Execution proceeds normally to the next line in the block. |

Treat each keyword as a *token* that alters the “next step” pointer.

**3️⃣ Reason through examples step‑by‑step**

1. **continue**  
   ```python
   for n in range(5):
       if n % 2 == 0:
           continue     # skip printing even numbers
       print(n)
   ```
   Walk through values 0–4, noting that when `n` is even the loop jumps to the next iteration before reaching `print`.

2. **break**  
   ```python
   for n in range(5):
       if n == 3:
           break        # stop looping entirely
       print(n)
   ```
   Show that once `n==3`, the loop terminates and control moves after the `for` block.

3. **pass**  
   ```python
   for n in range(2):
       pass            # placeholder, nothing executed
   ```
   Emphasize that `pass` is only needed when a syntactically required block would otherwise be empty.

**4️⃣ Avoid common traps**

- *Misconception*: `continue` behaves like a “skip to next loop” but still counts the current iteration.  
  Clarify: it simply jumps over remaining statements in that cycle; the loop counter or iterator still advances.
- *Mix‑up with `return`*: `break` exits only the innermost loop, not the entire function.
- *Using `pass` for “do nothing” logic*: Remember that `pass` is a no‑op; it does **not** skip code like `continue`.

**5️⃣ Sanity‑check & verbalize**

- Verify each keyword’s effect by mentally stepping through a short loop, noting the line numbers executed.
- Explain to the user: “Think of `break` as pulling the exit rope from the loop, `continue` as waving a hand that says ‘next round’, and `pass` as an empty sentence that satisfies syntax but changes nothing.”  
- Encourage them to experiment in an interpreter: write tiny loops with each keyword and watch the output.

By following this structured approach—clarify → model → example → trap‑check → sanity‑check—you can explain how `continue`, `break`, and `pass` manipulate loop flow in Python.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
