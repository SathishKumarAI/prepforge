---
qid: ing_a1d4eebf6d__eli5__local
question: 'Explain: From your test set evaluation (Step 6 from Chapter 4)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 235
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:54:19-05:00'
sources: []
---

Imagine you’re a chef learning to bake the perfect loaf of bread.  
You first practice with a handful of recipes (the *training set*), tweaking flour, water and yeast until the dough rises just right.  
When you think you’ve nailed it, you give your loaf a taste test— but only by letting people who haven’t tried any of those recipes try it (the *test set*).  
That’s what Step 6 does for an AI: after the model has learned from its training data, we hand it brand‑new examples it never saw before and ask it to predict their labels.  

If the predictions match the true answers, the AI is “well‑baked” and likely to perform well on real‑world data.  
If not, it means the model was overfitted— like a chef who only knows how to bake with a single recipe—and we need to adjust its learning.  
This external check guarantees that the AI’s performance isn’t just memorizing but truly understanding patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
