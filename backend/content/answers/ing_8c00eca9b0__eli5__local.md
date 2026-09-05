---
qid: ing_8c00eca9b0__eli5__local
question: How do you evaluate a reward model? Why is held-out pairwise accuracy not
  enough?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 265
total_tokens: 430
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:18:25-05:00'
sources: []
---

Imagine the reward model as a taste‑tester who rates two dishes and says which one is better.  
To check if the tester is good, we give it many new pairs (held‑out data) and ask which dish it prefers.  
If the tester’s “yes” matches our own preference 80 % of the time, that’s *pairwise accuracy*.  

But think of a chef who always picks the first dish in each pair because it’s easier to remember. The accuracy can stay high even though the chef isn’t really tasting anything—he just follows a simple rule.  
Similarly, a reward model might learn shortcuts: it could pick the higher‑scored prompt simply because it has more words or a certain style, not because it truly reflects quality.  

To catch this, we also evaluate *consistency* and *calibration*: does the model’s score rise smoothly as quality improves? Does it rank many different kinds of good content similarly? By looking at these extra metrics, we see whether the reward model is genuinely learning to value what matters, not just exploiting a pattern that works on the test set.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
