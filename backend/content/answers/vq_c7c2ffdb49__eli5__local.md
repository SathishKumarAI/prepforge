---
qid: vq_c7c2ffdb49__eli5__local
question: What are the different types of Joins?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 276
total_tokens: 433
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:27:22-05:00'
sources: []
---

Think of data tables as two grocery lists you’re comparing to make a meal plan. A **join** is like looking for common or complementary items between those lists.

| Join | What it does | Grocery‑list picture |
|------|--------------|-----------------------|
| **Inner join** | Keeps only the items that appear on both lists. | Only ingredients that are in *both* lists go into your plan. |
| **Left (or right) outer join** | Keeps every item from one list, adding matching items when they exist; blanks otherwise. | You keep every ingredient from List A, and if List B has a match you add it—if not, you note “none.” |
| **Full outer join** | Keeps everything from both lists, pairing matches where possible. | Every item from both lists shows up; matching ones are paired, unmatched ones stand alone. |
| **Cross (Cartesian) join** | Pairs every item in one list with every item in the other. | You make a menu by combining each dish on List A with every side on List B—lots of combos! |

So, joins let you combine rows from tables just like you’d match or keep grocery items when planning a meal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
