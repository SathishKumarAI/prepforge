---
qid: ing_08e65fcc2e__fp__local
question: How much data should you look at? — Your AI Product Needs Evals \u2013 Hamel\u2019s
  Blog
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 463
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:24:43-05:00'
sources: []
---

**How much data does an AI product really need?**

At its core, a model is a *statistical estimator* that learns a mapping \(f_\theta(x)\) from inputs to outputs.  
The estimator’s error decomposes into bias and variance; the variance term shrinks roughly as \(1/n\), where \(n\) is the number of *independent, representative samples*.  
Thus, the first principle is: **use enough data so that the model’s expected generalization error falls below your tolerance level**.  

From learning theory we know that a model with capacity \(C\) (e.g., VC dimension or effective parameter count) requires on the order of
\[
n \;\gtrsim\; C \log\!\frac{1}{\delta}
\]
samples to guarantee, with probability \(1-\delta\), that its empirical risk approximates true risk.  
In practice this translates into a *rule‑of‑thumb*: start with the smallest dataset that still covers all high‑level classes and feature combinations you care about; double it until validation loss plateaus.

**Non‑obvious insight:**  
The *quality* of data matters far more than sheer quantity when the training distribution diverges from deployment. A small, perfectly balanced, domain‑matched sample can outperform a massive, noisy corpus that misrepresents rare but critical cases.  

So, evaluate your product by:
1. Estimating model capacity \(C\).  
2. Computing the minimal \(n\) for desired error bounds.  
3. Ensuring representativeness (coverage of all decision‑critical subpopulations).  
4. Iteratively adding data only when validation performance shows a measurable lift.  

This principled, data‑driven approach guarantees you’re neither under‑ nor over‑sampling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
