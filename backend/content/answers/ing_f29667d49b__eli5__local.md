---
qid: ing_f29667d49b__eli5__local
question: 'Explain: For example, you have routing. If S2 — Detecting anomalies using
  Isolation Trees: Practical Machine Learning'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 191
total_tokens: 362
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:58:26-05:00'
sources: []
---

Imagine a library where each book is a data point and the shelves are “normal” paths.  
Isolation trees work like a librarian who randomly decides to pull books from different shelves, one at a time.  
If a book (data point) is an oddball—say it’s a rare first‑edition that doesn’t belong on any shelf—the librarian will quickly pull it out because it keeps getting separated by random cuts.  
In contrast, ordinary books stay together for many pulls before being isolated.  

So, the tree builds many such random “pulls” (splits). The number of pulls needed to isolate a book tells us how unusual it is: few pulls = anomaly; many pulls = normal. This simple, random‑cut process is what Isolation Trees use to spot outliers in any dataset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
