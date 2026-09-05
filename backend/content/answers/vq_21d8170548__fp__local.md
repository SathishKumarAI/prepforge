---
qid: vq_21d8170548__fp__local
question: Example•Probability of fire P(F) = 1%•Probability of smoke P(S) = 10%•Prob
  of smoke given there is a fire P(S F) = 90%•What is the probability that there is
  a fire given we see a smoke P(F S)?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 219
output_tokens: 754
total_tokens: 973
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:26:23-05:00'
sources: []
---

**Derivation from first principles**

Let  
- \(F\) = “there is a fire”, \(P(F)=0.01\).  
- \(S\) = “smoke is observed”, \(P(S)=0.10\).  
- \(P(S|F)=0.90\).

We want the posterior \(P(F|S)\), i.e. the probability that a fire exists *given* smoke.

---

### 1. Compute the likelihood of smoke when there is no fire

Using the law of total probability,

\[
P(S)=P(S|F)P(F)+P(S|\bar F)P(\bar F).
\]

Solve for \(P(S|\bar F)\):

\[
0.10 = 0.90(0.01)+P(S|\bar F)(0.99)
     \;\Longrightarrow\;
P(S|\bar F)=\frac{0.10-0.009}{0.99}\approx0.0920.
\]

So when there is no fire, smoke appears only about \(9.2\%\) of the time.

---

### 2. Apply Bayes’ theorem

\[
P(F|S)=\frac{P(S|F)P(F)}{P(S)}
      =\frac{0.90\times0.01}{0.10}
      =0.09.
\]

**Result:** \(P(F|S)\approx 9\%\).

---

### Why this works

Bayes’ rule is the *optimal* way to update beliefs when new evidence arrives, because it maximises the expected log‑likelihood of the posterior (an information‑theoretic principle). The calculation shows that even a highly reliable indicator (\(P(S|F)=90\%\)) can be outweighed by a high false‑positive rate (\(P(S|\bar F)\approx9.2\%\)), especially when the prior probability of the event is tiny.

**Non‑obvious insight:**  
The posterior depends on *both* the reliability of the indicator and its baseline frequency in the population. A 90 % detection rate does **not** guarantee a high chance of fire; if smoke frequently appears for non‑fire reasons, the evidence is far less informative than it first seems. This subtle balance between likelihoods and priors is central to every decision‑making system that uses probabilistic evidence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
