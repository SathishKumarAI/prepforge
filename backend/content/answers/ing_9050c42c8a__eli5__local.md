---
qid: ing_9050c42c8a__eli5__local
question: 'Explain: Soft Label Distillation (Temperature Scaling)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 223
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:25:37-05:00'
sources: []
---

Imagine you’re teaching a child to recognize animals.  
Instead of just saying “dog” or “cat,” you give the child a *soft* description: “It’s mostly a dog, but it also has some cat‑like features.” The more confident you are, the sharper that description becomes; if you’re unsure, you spread the confidence across several possibilities.

In AI, **soft label distillation** works the same way. A big, powerful model (the teacher) predicts not just one answer, but a whole set of probabilities for each class. Those probabilities are *scaled* by a “temperature” number:  
- High temperature → smoother, more spread‑out guesses.  
- Low temperature → sharper, more decisive guesses.

The smaller model (the student) learns from these softened hints rather than hard 0/1 labels, gaining subtle cues about how the teacher thinks different classes relate. This makes the student smarter and more flexible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
