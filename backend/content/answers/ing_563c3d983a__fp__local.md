---
qid: ing_563c3d983a__fp__local
question: 'Explain: So this number 10, is in the — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 379
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:08:03-05:00'
sources: []
---

In Python, **list indices start at 0**, not 1.  
When you write something like  

```python
my_list = [3, 7, 10, 12]
print(my_list[2])          # → 10
```

you’re asking the interpreter to fetch the element whose *index* is 2.  
Because indexing begins at 0, the mapping is:

| index | element |
|-------|---------|
| 0     | 3       |
| 1     | 7       |
| 2     | 10      |
| 3     | 12      |

So `my_list[2]` returns **10**.  
Why zero‑based indexing? It’s a consequence of how memory is addressed in low‑level languages: the address of element i is calculated as `base_address + i * sizeof(element)`. Starting at 0 means that the address of the first element is simply `base_address`, simplifying pointer arithmetic and reducing off‑by‑one errors in loops.  

A non‑obvious insight: because Python’s slices are *half‑open* (`start:end` includes `start` but excludes `end`), a zero‑based index also lets you express “all elements up to the nth” cleanly: `my_list[:n]` gives the first n items, with no need for special handling of the last element. This design choice propagates through many Python APIs and is why learning the zero‑based convention early saves headaches later.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
