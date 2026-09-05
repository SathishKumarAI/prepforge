---
qid: vq_97fd9e3342__eli5__local
question: What is the difference between Stored Procedure and UDF?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 207
total_tokens: 366
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:21:06-05:00'
sources: []
---

Think of your database as a kitchen.  
A **Stored Procedure** is like a recipe book that tells the chef (the database engine) exactly what steps to follow: “first chop the onions, then sauté them, stir in tomatoes, and serve.” The chef follows the whole sequence, can use loops, branches, and even call other recipes inside it. It runs as a single command and can return multiple results.

A **User‑Defined Function (UDF)** is more like a special spice jar you create. Whenever the chef needs that flavor in any dish, they just open the jar and sprinkle it on—no extra steps are written each time. A UDF takes inputs, does one specific calculation, and returns a single value; it can’t control flow or produce multiple outputs.

So: stored procedures = full‑blown recipes (many actions), UDFs = reusable spice jars (one small, repeatable operation).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
