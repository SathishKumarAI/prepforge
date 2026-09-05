---
qid: vq_eb88238390__eli5__local
question: How do you copy an object in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 248
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:32:47-05:00'
sources: []
---

When you write `b = a` in Python you’re not making a new object; you’re only giving the name **b** another label for the same thing that **a** already points to.  
Think of it like borrowing a book from a library: both your name and your friend’s name are now on the *same* copy. If either of you puts a bookmark in the middle, the other sees it too.

To create an independent copy you need to “copy” the book itself. Python offers two ways:

1. **Shallow copy** – `b = copy.copy(a)` makes a new container (like a new box) but keeps the items inside pointing to the original objects.
2. **Deep copy** – `b = copy.deepcopy(a)` copies everything recursively, so even nested objects become fresh copies.

Use shallow when you only need a new wrapper; use deep when every piece must be separate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
