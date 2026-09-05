---
qid: ing_fcb60934b8__eli5__local
question: You're adapting a pretrained model to a new task. What do you freeze, what
  do you train, and how do you decide?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 264
total_tokens: 437
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:14:58-05:00'
sources: []
---

Imagine the pre‑trained model as a well‑cooked soup that already has all the basic flavors (the “feature extractor” layers).  
**Freeze** means you keep those flavor‑storing pots untouched—just pour them into your new dish. These layers have learned useful patterns (edges, shapes, words) that work for many tasks.  

**Train** the top few pots (the “classification head”). Here you add spices and adjust seasoning to suit a specific taste: a new label set or domain. By updating only these parts, you keep the soup’s core flavor while customizing it.

You decide what to freeze by asking: *How similar is my new task to the original?*  
- If the tasks are close (e.g., classifying cats vs dogs), freeze almost everything and fine‑tune a few layers.  
- If they differ more (e.g., translating images into text), you may unfreeze deeper layers so the model can learn new visual–linguistic patterns.

So, keep the solid base frozen, tweak the head for the new job, and adjust depth based on similarity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
