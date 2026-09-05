---
qid: vq_0d23769b34__eli5__local
question: What are the default imports in Scala Language?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 216
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:02:30-05:00'
sources: []
---

Think of Scala as a kitchen where you cook data recipes.  
When you open a new recipe (a Scala file), the kitchen already has a few common ingredients on hand so you don’t have to fetch them each time: `scala.Predef`, `scala.collection`, and `scala.language`.  

- **`scala.Predef`** is like the pantry that holds everyday staples – basic types (`Int`, `String`) and helpers (`println`).  
- **`scala.collection`** is a ready‑made set of containers (lists, maps, sets) you can drop your data into.  
- **`scala.language`** supplies small language “rules” you might need to use, such as implicit conversions.

Because these are automatically imported, you can start writing code right away without the extra effort of bringing in each tool manually. Just like a well‑stocked kitchen lets you focus on cooking instead of hunting for ingredients.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
