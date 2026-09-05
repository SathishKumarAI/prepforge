---
qid: vq_e55255521c__eli5__local
question: What are the similarities between Scala’s Int and Java’s java.lang.Integer?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 209
total_tokens: 372
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:32:01-05:00'
sources: []
---

Imagine you have two identical toy blocks that look the same from the outside but belong to different playsets.  
Scala’s **Int** is a *primitive* block – it’s just raw number data, light and fast. Java’s **java.lang.Integer** is a *boxed* block – it wraps the same number inside a small container that lets it behave like an object (so you can put it in lists or call methods on it).  

Both blocks hold exactly the same 32‑bit whole number; they convert to each other automatically. When Scala code needs an Integer, it “boxes” its Int into a java.lang.Integer, and when Java code passes an Integer to Scala, it’s unboxed back to an Int. The only difference is that the boxed version carries extra object overhead and can be `null`, while the primitive cannot. Thus they are interchangeable in value but differ in how they’re stored and used.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
