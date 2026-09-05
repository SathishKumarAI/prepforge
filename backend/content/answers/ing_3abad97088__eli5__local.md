---
qid: ing_3abad97088__eli5__local
question: 'Explain: 1.11.1.1.6. Interaction constraints — 1.11. Ensembles: Gradient
  boosting, random forests, bagging, voting, stacking \u2014 scikit-learn 1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 336
total_tokens: 535
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:09:22-05:00'
sources: []
---

Think of a **machine‑learning ensemble** like a team of chefs preparing the same dish (the prediction).  
Each chef uses a different recipe (a base model) – one might use a spice blend, another a cooking technique, another a garnish.  
Because they all taste the final dish together, the errors each chef makes are likely to cancel out.

- **Bagging** is like giving every chef a slightly different pantry of ingredients (different training samples). They cook independently and then we mix their finished dishes equally—this reduces random mistakes.
- **Random forests** add another twist: every chef chooses a random subset of available spices for each decision, ensuring the group’s choices are diverse.
- **Gradient boosting** is a step‑by‑step improvement. The first chef makes a rough dish; the next chef looks only at where the first fell short and fixes those spots, then the third does the same on the remaining mistakes, and so on—building a stronger final plate.
- **Voting** simply lets every chef cast a “yes/no” for each ingredient, and we take the majority decision.  
- **Stacking** is like having a head‑chef who watches all the chefs’ dishes, learns from their patterns, and then decides how best to combine them.

In scikit‑learn you call these methods (e.g., `RandomForestClassifier`, `GradientBoostingRegressor`) with a few parameters; the library handles the “chefs” for you. The key idea: combining many imperfect models usually gives a more reliable prediction than any single one alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
