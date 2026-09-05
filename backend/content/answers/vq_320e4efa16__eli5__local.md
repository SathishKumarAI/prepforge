---
qid: vq_320e4efa16__eli5__local
question: Explain List of Activities in ADF ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 394
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:07:52-05:00'
sources: []
---

Think of Azure Data Factory (ADF) as a kitchen where you’re preparing a big meal for many guests. Each **activity** is like a cooking step that takes an ingredient, does something to it, and hands the result off to the next step.

| Activity | What it does (the “cooking” part) | Where it ends up |
|----------|-----------------------------------|------------------|
| **Copy** | Moves data from one pantry (source) to another table (sink). | A new table or blob. |
| **Data Flow** | Applies a recipe—filters, joins, aggregates—to many rows at once, like chopping and sautéing in bulk. | Transformed data ready for storage. |
| **Lookup** | Looks up a single value from a database, like checking a spice jar for the right amount of salt. | A small piece of data you’ll use later. |
| **If Condition / Switch** | Decides which recipe to follow based on a condition (like “if it’s hot outside, make ice cream”). | Branches the pipeline flow. |
| **ForEach** | Repeats an activity for many items—think making 10 cupcakes one after another. | Multiple outputs or actions. |
| **Web / REST** | Calls an external service, like ordering ingredients from a supplier’s online catalog. | Response data to use in the pipeline. |
| **Azure Function / Databricks** | Runs custom code (Python, Scala) for complex logic, similar to a sous‑chef handling a special sauce. | Results returned to ADF. |

So, an ADF pipeline is your recipe book: you string together these activities like steps in a dish, moving data from raw ingredients to finished meals across cloud services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
