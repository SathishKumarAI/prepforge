---
qid: ing_45d8492a22__eli5__local
question: 'Explain: Baselines in Policy Gradients ¶ — Part 3: Intro to Policy Optimization
  \u2014 Spinning Up  documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 231
total_tokens: 406
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:27:03-05:00'
sources: []
---

Think of learning a new dance move on a slippery floor. Every time you try, you feel how far you slid (your reward). But the floor’s slipperiness changes from step to step—sometimes it’s slick, sometimes sticky. If you compare your slide length only to the raw reward, you’ll think the move is bad when the floor was sticky and good when it was slick, even if your technique didn’t change.

A **baseline** in policy gradients works like a note that tells you “the floor was this slippery on average.” You subtract this baseline from the actual reward. If you slid 10 cm but the average slipperiness would normally give you 8 cm, the adjusted signal is +2 cm—clear evidence your move improved. The baseline itself is just an estimate of the expected reward under the current policy (often learned by a value function). By removing that predictable part, the algorithm focuses on the *real* improvement caused by changing its dance steps, leading to steadier learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
