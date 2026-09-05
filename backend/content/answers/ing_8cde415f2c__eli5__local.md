---
qid: ing_8cde415f2c__eli5__local
question: How do you choose k in clustering, and how do you evaluate a clustering
  when you have no labels?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 270
total_tokens: 438
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:19:55-05:00'
sources: []
---

**Choosing k**  
Imagine you’re arranging friends into groups for a game. If you put everyone in one group (k = 1) or each person alone (k = n), the game is pointless. A good number of groups lets people who play well together stay together while still leaving room to move around. In clustering, we try several k values and look for a “sweet spot” where adding another group doesn’t make the groups much tighter.

**Evaluating without labels**  
Think of a recipe that tells you how many dishes to serve but not what each dish should taste like. You can still judge it by checking two things:  

1. **Compactness** – Are people in the same group close friends? In data, we measure how tight each cluster is (e.g., average distance inside the cluster).  
2. **Separation** – Do different groups feel distinct? We check how far apart clusters are from one another.

If a clustering has tight groups that are well‑separated, it’s likely good even though you don’t know the “true” labels. This is like saying the recipe makes tasty, distinct dishes without knowing exactly what each should be.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
