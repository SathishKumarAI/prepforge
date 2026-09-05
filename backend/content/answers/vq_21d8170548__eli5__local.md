---
qid: vq_21d8170548__eli5__local
question: Example•Probability of fire P(F) = 1%•Probability of smoke P(S) = 10%•Prob
  of smoke given there is a fire P(S F) = 90%•What is the probability that there is
  a fire given we see a smoke P(F S)?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 285
total_tokens: 492
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:05:22-05:00'
sources: []
---

Imagine you’re at a kitchen where two things can happen: a **fire** (F) or just **smoke** (S).  
* “Fire happens in 1 out of every 100 days” → P(F)=0.01.  
* “Smoke appears on 10 out of 100 days, even when there’s no fire” → P(S)=0.10.  
* When a fire does happen, smoke shows up most of the time (90 %): P(S | F)=0.90.

You spot smoke and wonder: *Is there really a fire?*  
Think of it like guessing whether a cake is actually on fire when you see steam.  
Using Bayes’ rule (the recipe that flips cause and effect), the chance the fire is real given the smoke is

\[
P(F\,|\,S)=\frac{P(S\,|\,F)\,P(F)}{P(S)}=
\frac{0.90\times0.01}{0.10}=0.09.
\]

So there’s about a **9 %** chance that the smoke means an actual fire.  
The rest of the time (91 %) it’s just harmless steam or something else causing the smoke.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
