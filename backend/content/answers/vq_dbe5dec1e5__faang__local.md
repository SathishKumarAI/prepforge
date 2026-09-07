---
qid: vq_dbe5dec1e5__faang__local
question: Is there an inherent do-while loop in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 425
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:38:13-05:00'
sources: []
---

**Clarify**  
The interviewer asks whether Python has a built‑in *do‑while* construct (loop that executes at least once before checking the condition). Clarify: “Do you mean a single keyword loop that guarantees one execution regardless of the guard?” and confirm they’re not referring to any third‑party library.

**Approach**  
Explain Python’s control flow primitives, then show how to emulate a do‑while with existing constructs. Mention that many languages expose this via a dedicated syntax; Python intentionally omits it to keep the language minimal.

**Depth**  
Python offers `while` and `for`. A classic emulation:

```python
while True:
    # body
    if not condition():
        break
```

or, more readably:

```python
condition_met = False
while not condition_met:
    # body
    condition_met = condition()
```

Both guarantee at least one execution. There is no dedicated `do` keyword; the language designers chose to keep looping simple and rely on `while True/False` with a break.

Complexity: O(1) per iteration, same as any loop. No hidden cost beyond the extra boolean check.

**Edge Cases**  
- Infinite loops if the guard never becomes false.  
- Forgetting to update the condition leads to `RuntimeError` (unreachable code).  
- Using `for` with an iterator that yields at least once can also emulate, but isn’t idiomatic for do‑while logic.

**Optimize & Communicate**  
If performance matters, the simple `while True: … break` is as fast as a language‑level do‑while. Emphasize readability: name the guard clearly (`condition_met`) and comment that this mimics a do‑while. Conclude: “Python does not have an inherent do‑while loop; you achieve the same effect with a `while True` and a break or by setting a flag.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
