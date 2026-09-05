---
qid: ing_352c741f4e__eli5__local
question: 'Explain: uv'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 151
output_tokens: 254
total_tokens: 405
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:59:54-05:00'
sources: []
---

**What are U and V in machine‑learning “matrix factorisation”?**

Think of a huge spreadsheet that shows how many points each student earned on every test. The rows are students, the columns are tests, and the cell values are scores.  
In matrix factorisation we want to *guess* missing scores by breaking the big table into two smaller tables:

- **U** (students × “interest factors”) – a portrait of each student in terms of hidden tastes or strengths.
- **V** (tests × “interest factors”) – a portrait of each test in the same hidden space.

Imagine a movie‑recommendation site: U tells us what kind of movies a user likes, V tells us what a movie is about.  
Multiplying U and V gives an estimate of how much that user would enjoy that movie (or student would score on a test).  

So **U** and **V** are the two pieces we learn so that their product reconstructs the original data as closely as possible, letting us fill in gaps with plausible guesses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
