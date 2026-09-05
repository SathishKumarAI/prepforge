---
qid: vq_7dc43f09a5__eli5__local
question: What are negative indexes and why are they used?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 247
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:17:41-05:00'
sources: []
---

Think of a list as a row of books on a shelf, numbered from left to right: the first book is index 0, the second is 1, and so on.  
A **negative index** works like counting from the back of the shelf instead of the front.  
Index –1 means “the last book,” –2 means “the one before that,” etc.  

Why use them? They let you grab items at the end without having to know how many books are on the shelf. For example, `my_list[-1]` always returns the final element no matter how long the list is, and `my_list[-3:]` gives you the last three items.

**Unavoidable terms**  
* **Index** – a number that tells Python where an item sits in a sequence.  
* **Slice** – a way to grab a consecutive chunk of items using two indices (`start:end`).  

Negative indexes make code shorter, clearer, and safer when working with the tail end of lists or strings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
