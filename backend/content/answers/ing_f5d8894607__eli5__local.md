---
qid: ing_f5d8894607__eli5__local
question: 'Explain: Sorting within nested objects. — Sort search results | Elasticsearch
  Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 187
total_tokens: 349
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:03:54-05:00'
sources: []
---

Imagine you’re looking at a box of books that have tiny booklets inside them—each booklet is like a *nested object*.  
When you ask Elasticsearch to “sort by the author’s name,” it can’t just look at the outer book; it has to open every inner booklet and read the author field there.  

In practice, you tell ES: “For each parent document, pick one of its nested items (e.g., the first booklet) and use that item’s field for sorting.”  
If a parent has many booklets, you can choose whether to sort by the smallest value, the largest, or any custom rule.  

So sorting nested objects is like deciding which inner booklet’s author should decide the order of the whole box—Elasticsearch does the opening and comparison automatically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
