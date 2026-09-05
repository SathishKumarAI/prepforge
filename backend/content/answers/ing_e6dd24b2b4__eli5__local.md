---
qid: ing_e6dd24b2b4__eli5__local
question: 'Explain model merging: task arithmetic, TIES, DARE and SLERP. When does
  merging actually work?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 333
total_tokens: 502
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:40:53-05:00'
sources: []
---

Imagine each AI model is a chef who has learned to cook one specific dish—say, a tomato soup (the task). **Model merging** is like having several chefs combine their secret recipes so that the new chef can make many dishes at once.

* **Task arithmetic**: The new recipe is just a straight‑line blend of two old ones. If you mix equal parts Chef A’s and Chef B’s tomato soups, the resulting soup tastes like a balanced average of both.  
* **TIES (Tensor Interpolation with Exponential Scaling)**: Instead of mixing linearly, TIES blends recipes in a way that keeps each chef’s special flavor intensity unchanged; it’s like adding spices proportionally to how strong they are in each original dish.  
* **DARE (Dynamic Attention-based Retrieval and Ensembling)**: Think of a smart pantry that decides which ingredient from each chef’s recipe should dominate at every step, so the final soup uses the best parts dynamically.  
* **SLERP (Spherical Linear Interpolation)**: Picture rotating smoothly on a globe between two chefs’ kitchens; SLERP ensures the transition keeps the overall “taste direction” steady, avoiding sharp jumps.

Merging works well when the tasks are related—chefs who share many ingredients or cooking techniques—so their recipes can be blended without losing flavor. If the dishes are completely different (e.g., a tomato soup vs. a chocolate cake), blending will produce a confusing result, and the merged chef may fail to cook either dish properly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
