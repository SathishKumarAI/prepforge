---
qid: ing_4605b1f863__eli5__local
question: 'Explain: Change Types — Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 154
output_tokens: 278
total_tokens: 432
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:27:27-05:00'
sources: []
---

Imagine your software is a bakery that keeps making fresh loaves (your code) and delivering them to customers (the users).  
**Change Types** are the different ways you can tweak the recipe or delivery process:

| Change Type | What it means | Bakery step |
|-------------|---------------|--------------|
| **Feature** | Add something new, like a chocolate swirl. | Adding a new ingredient to the dough. |
| **Bug‑fix** | Patch a mistake, such as fixing a leaky oven. | Correcting a recipe error so every loaf turns out right. |
| **Refactor** | Clean up the recipe without changing taste—rearrange steps for efficiency. | Reorganizing the kitchen layout to bake faster. |
| **Release** | Send a batch of loaves to the store. | Packaging and shipping finished bread. |

In CI/CD, each change type goes through the same “bakery pipeline”: code is committed (baked), automatically tested, built into an artifact, and then deployed (shipped). The type just tells you *why* the loaf was altered—new flavor, fixed defect, or better process—so everyone knows what changed and why.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
