---
qid: vq_2fbb22dc2a__eli5__local
question: What is an Orthogonal Matrix?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 154
output_tokens: 234
total_tokens: 388
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:07:40-05:00'
sources: []
---

Think of an orthogonal matrix as a “magic mirror” that can rotate or flip a shape without stretching or squishing it. Imagine you have a set of perfectly perpendicular arrows (like the x‑, y‑, and z‑axes in 3D space). A magic mirror will take any arrow and turn it into another arrow that is still exactly at right angles to all the others, and its length stays the same.  

In math, an orthogonal matrix \(Q\) has two key properties:  
1. **Rows (or columns) are perpendicular** – each pair of rows has a dot product of 0.  
2. **Each row (and column) is unit‑length** – their dot product with themselves equals 1.  

Because of these rules, multiplying by \(Q\) keeps distances and angles unchanged; it’s just a pure rotation or reflection. That’s why orthogonal matrices are so useful in graphics, physics, and data science: they shuffle coordinates without distorting the geometry.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
