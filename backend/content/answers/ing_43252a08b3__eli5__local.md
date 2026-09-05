---
qid: ing_43252a08b3__eli5__local
question: What are vanishing and exploding gradients? What causes them, and what does
  modern architecture design do about them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 239
total_tokens: 408
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:22:52-05:00'
sources: []
---

Imagine a long hallway where you’re passing notes from one student to the next.  
**Vanishing gradients** are like the note getting lighter and lighter as it travels—by the time it reaches the last student, it’s almost invisible. **Exploding gradients** are the opposite: the note gets blown up by each hand until it shatters at the end.

In a neural network the “note” is a gradient, a tiny piece of information that tells earlier layers how to adjust their weights. If many layers multiply small numbers (the hallway’s students with weak hands), the gradient shrinks toward zero—vanishing gradients—and learning stalls. If they amplify large numbers, it blows up—exploding gradients—causing instability.

Modern architectures fight this by  
1) using **skip connections** that let the note skip over some steps (like a direct line to the end), and  
2) carefully initializing weights so each student starts with balanced strength. These tricks keep the gradient’s size in check, letting the network learn smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
