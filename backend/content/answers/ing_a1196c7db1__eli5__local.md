---
qid: ing_a1196c7db1__eli5__local
question: Compare JSON mode with schema-constrained decoding. How does constrained
  decoding actually enforce the schema?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 273
total_tokens: 438
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:53:10-05:00'
sources: []
---

Imagine you’re baking a cookie recipe that says “use 2 cups of flour, 1 cup of sugar, and no more than one egg.” The recipe is the **schema**—it tells the oven (the AI) exactly what ingredients are allowed and in what amounts.

When the AI writes JSON, it’s like filling out a grocery list. In **JSON mode**, the AI can write anything: “2 cups of flour,” “1 cup of sugar,” or even “3 apples.” The list is free‑form; you trust the cook to get the right things later.

**Schema‑constrained decoding** is the oven’s built‑in check that reads the recipe before it starts baking. It looks at each item the AI writes and verifies:
* **Name matches** a field in the schema (e.g., “flour” exists).
* **Type matches** (a number for cups, not a word).
* **Value satisfies constraints** (≤ 1 egg).

If an entry fails any check, the oven rejects it or forces the AI to correct it immediately. This way the final list is guaranteed to fit the recipe exactly—just like how constrained decoding ensures every piece of JSON follows the predefined schema before the model can finish its output.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
