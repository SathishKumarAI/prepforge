---
qid: ing_f6c33237b1__fp__local
question: How Accurate Is The Test? — An Intuitive (and Short) Explanation of Bayes\u2019
  Theorem \u2013 BetterExplained
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 418
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:44:03-05:00'
sources: []
---

**Why a “high‑accuracy” test can still mislead**

Suppose a disease occurs in only 1 % of the population (prevalence \(p=0.01\)).  
A rapid antigen test claims 99 % accuracy: it correctly identifies sick and healthy people with probability \(q=0.99\).  

*Fundamental problem:* we want the probability that someone who tests positive actually has the disease, i.e.
\[
P(\text{disease}\mid +)=\frac{P(+\mid \text{disease})\,P(\text{disease})}
{P(+)} .
\]
The denominator expands via the law of total probability:
\[
P(+) = P(+\mid \text{disease})P(\text{disease})+
      P(+\mid \text{healthy})P(\text{healthy}).
\]
Because “healthy” is 99 % of the population, the false‑positive term dominates:
\[
P(+)=0.99\times0.01+0.01\times0.99=0.0198.
\]
Thus
\[
P(\text{disease}\mid +)=\frac{0.99\times0.01}{0.0198}\approx 50\%.
\]

*Why it works:* Bayes’ theorem is simply the algebraic rearrangement of joint probabilities; it enforces that probabilities over all outcomes sum to one. In low‑prevalence settings, even a tiny false‑positive rate overwhelms true positives.

**Non‑obvious insight:** Accuracy metrics (sensitivity/specificity) are *conditional* on disease status; they do **not** equal the posterior probability of disease given a positive result unless prevalence is 50 %. Hence “high accuracy” can be deceptive without considering base rates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
