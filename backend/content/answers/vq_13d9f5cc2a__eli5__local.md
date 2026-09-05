---
qid: vq_13d9f5cc2a__eli5__local
question: What is the best way to add values to a Python array?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 239
total_tokens: 399
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:03:22-05:00'
sources: []
---

Think of a Python *array* as a tidy notebook where each page holds one item.  
When you want to add a single new note, you simply write it on the next empty page—Python calls this `append()`.  

If you already have several notes in another notebook and you want all of them in your first notebook, you can copy that whole stack onto the back of the first one. That’s what `extend()` does: it takes each item from the second list and adds it to the end of the first.

So:

```python
notes = [1, 2]          # current pages
notes.append(3)         # write a single new page → [1, 2, 3]
more = [4, 5]
notes.extend(more)      # paste all pages from 'more' → [1, 2, 3, 4, 5]
```

Use `append()` for one item, `extend()` when you have many items to add.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
