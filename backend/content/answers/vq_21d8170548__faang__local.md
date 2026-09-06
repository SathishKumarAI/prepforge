---
qid: vq_21d8170548__faang__local
question: Example•Probability of fire P(F) = 1%•Probability of smoke P(S) = 10%•Prob
  of smoke given there is a fire P(S F) = 90%•What is the probability that there is
  a fire given we see a smoke P(F S)?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 282
output_tokens: 662
total_tokens: 944
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:01:34-05:00'
sources: []
---

**Clarify**  
We’re asked for the posterior probability of a fire given that smoke is observed:  

\[
P(F|S)=?
\]

Assumptions to confirm:  
- All events are binary (fire/no‑fire, smoke/no‑smoke).  
- The only supplied probabilities are \(P(F)\), \(P(S)\), and \(P(S|F)\).

**Approach**  
Use Bayes’ theorem. We first need the likelihood of smoke under no fire, \(P(S|\bar F)\), which can be derived from the law of total probability.

**Depth**  

1. **Compute \(P(S|\bar F)\):**  
   \[
   P(S)=P(S|F)P(F)+P(S|\bar F)P(\bar F)
   \]
   Plugging in:  
   \[
   0.10=0.90(0.01)+P(S|\bar F)(0.99)\Rightarrow
   P(S|\bar F)=\frac{0.091}{0.99}\approx0.092.
   \]

2. **Apply Bayes:**  
   \[
   P(F|S)=\frac{P(S|F)P(F)}{P(S)}
          =\frac{0.90\times0.01}{0.10}
          =0.09 \;\text{or}\; 9\%.
   \]

**Edge cases**  
- If \(P(S)=0\), the posterior is undefined (division by zero).  
- Very small priors or likelihoods can lead to numerical underflow in large‑scale systems.

**Optimize & communicate**  
In production, we’d cache pre‑computed priors and use log‑probabilities to avoid underflow. I’d explain that Bayes’ theorem provides a principled update of our belief about a fire once smoke is observed, highlighting the intuitive result: seeing smoke raises the fire probability from 1 % to 9 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
