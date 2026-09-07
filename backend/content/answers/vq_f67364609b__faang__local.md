---
qid: vq_f67364609b__faang__local
question: How does continue, break, and pass work?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 450
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:42:46-05:00'
sources: []
---

**Clarify**  
The interview asks how the three loop control statements—`continue`, `break`, and `pass`—behave in Python. I’ll assume a for/while context, that they’re used inside a single loop body, and that no decorators or generators are involved.

**Approach**  
1. Define each keyword’s semantics.  
2. Explain their effect on the current iteration.  
3. Show a minimal code example illustrating all three in one loop.

**Depth**  

| Keyword | What it does | Flow impact |
|---------|--------------|-------------|
| `continue` | Skips the rest of the body and jumps to the next iteration (evaluates the loop condition). | The current cycle ends; any statements after `continue` are not executed. |
| `break` | Exits the entire loop immediately, regardless of the loop condition. | Control passes to the statement following the loop block. |
| `pass` | Does nothing – a no‑op placeholder. | Loop proceeds normally as if the keyword weren’t there. |

```python
for i in range(5):
    if i == 1:
        continue          # skip printing 1
    if i == 3:
        break             # stop after 2
    print(i)              # executed for 0, 2 only
# pass could be used instead of the empty block above
```

**Edge cases**  
- `break` inside nested loops exits only the innermost loop.  
- `continue` can appear in a `try/except/finally`; the `finally` block still runs.  
- Using `pass` inside an abstract method or class body satisfies syntax but has no runtime effect.

**Optimize & communicate**  
I’d emphasize that `break` and `continue` are for flow control, while `pass` is purely syntactic sugar—use it only when a statement is required (e.g., stub methods). I’d finish by noting that overusing these can make code hard to read; prefer clear conditionals or refactor into functions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
