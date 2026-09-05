---
qid: vq_d0f4562d91__eli5__local
question: Difference between case class vs Struct type?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 252
total_tokens: 408
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:28:57-05:00'
sources: []
---

Think of a **case class** like a recipe card you hand out at a potluck: it lists every ingredient (fields) and says *“this is how we want the dish.”* When someone else follows the card, they get a ready‑made meal that fits exactly what you described. In code, a case class gives you an immutable object with named fields, built‑in comparison, copying, and easy pattern matching.

A **Struct type** is more like a kitchen drawer’s *“generic container”* label: it tells the system “I need a box that can hold several items, but I’m not yet telling what each item is.” In Spark, a StructType defines a schema for data rows—field names and data types—but doesn’t create actual objects. It’s used to describe tabular data (like a spreadsheet) so the engine knows how to read or write it.

So: case class = concrete recipe card that creates an object; Struct type = generic drawer label that describes the shape of data without making objects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
