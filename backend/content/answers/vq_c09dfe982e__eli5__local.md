---
qid: vq_c09dfe982e__eli5__local
question: WHAT IS AN UNPIVOT OPERATION IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 287
total_tokens: 447
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:26:15-05:00'
sources: []
---

Imagine you have a recipe card that lists all the ingredients for several dishes, but each dish is in its own column:

| Dish | Tomato | Onion | Garlic |
|------|--------|-------|--------|
| Salad | 2 | 1 | 0 |
| Soup | 3 | 2 | 1 |

An **UNPIVOT** operation flips that layout so every ingredient becomes a separate row instead of a column. After unpivoting you get:

| Dish   | Ingredient | Quantity |
|--------|------------|----------|
| Salad  | Tomato     | 2        |
| Salad  | Onion      | 1        |
| Salad  | Garlic     | 0        |
| Soup   | Tomato     | 3        |
| Soup   | Onion      | 2        |
| Soup   | Garlic     | 1        |

Here, “Dish” is the identifier that stays, while the former columns (Tomato, Onion, Garlic) are turned into rows under two new columns: **Ingredient** and **Quantity**.  
Unpivoting lets you analyze or aggregate data that was spread across many columns in a more natural, row‑based way—just like turning a wide table of measurements into a tall list of “what, how much” pairs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
