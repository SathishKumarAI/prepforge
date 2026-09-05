---
qid: vq_21d8170548__star__local
question: Example•Probability of fire P(F) = 1%•Probability of smoke P(S) = 10%•Prob
  of smoke given there is a fire P(S F) = 90%•What is the probability that there is
  a fire given we see a smoke P(F S)?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 285
output_tokens: 412
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:51:18-05:00'
sources: []
---

**Situation:**  
At my previous job I worked on an industrial safety system that monitored sensor data for early fire detection in a large warehouse. The system had to decide whether to trigger alarms based solely on smoke detector readings, knowing that false positives could cause costly shutdowns.

**Task:**  
I needed to calculate the probability of an actual fire given we detect smoke (P(F|S)) so I could set a reliable alarm threshold and reduce unnecessary disruptions.

**Action:**  
Using Bayes’ theorem:  
- Prior probability of fire P(F) = 0.01  
- Prior probability of smoke P(S) = 0.10  
- Likelihood of smoke given fire P(S|F) = 0.90  

First, compute the marginal probability of smoke:  
P(S) = P(S|F)·P(F) + P(S|¬F)·P(¬F).  
We can solve for P(S|¬F):  
P(S|¬F) = (P(S) – P(S|F)·P(F)) / P(¬F)  
= (0.10 – 0.90·0.01) / 0.99 ≈ 0.099.  

Now apply Bayes:  
P(F|S) = [P(S|F)·P(F)] / P(S)  
= (0.90 · 0.01) / 0.10 ≈ 0.09, or **9 %**.

**Result:**  
With this figure, we set the alarm trigger to fire only when smoke probability exceeds 15 %, reducing false alarms by ~70 % while still catching true fires with >95 % confidence. I learned that even simple probabilistic reasoning can drastically improve operational efficiency and safety in real‑world ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
