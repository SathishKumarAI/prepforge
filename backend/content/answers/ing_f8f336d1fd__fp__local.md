---
qid: ing_f8f336d1fd__fp__local
question: 'Explain: However if an applicant has a criminal — Python Full Course for
  Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 384
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:48:46-05:00'
sources: []
---

**Why “criminal” features hurt a model – an optimization‑perspective view**

Suppose we train a classifier to predict whether a loan applicant will default. The data contain a binary *criminal* flag (1 = convicted, 0 = clean). If the training set is biased—e.g., a disproportionate share of criminal records comes from a minority group—then the empirical risk minimizer will learn a decision rule that penalizes that group more heavily.  

From an **information‑theoretic** angle, the *criminal* feature carries mutual information about the label only through its correlation with the protected attribute (race, gender). The model’s objective is to minimize expected loss; it will exploit any statistically predictive pattern, even if that pattern is spurious or ethically undesirable. Thus the *criminal* flag becomes a proxy for discrimination rather than a genuine risk indicator.

A deeper principle at play is **causal versus correlational learning**: the objective optimizes over *observed* correlations but ignores the causal graph. If we had a structural equation model where “criminal record” is caused by socioeconomic status (which itself causes both crime and default), conditioning on criminality blocks part of the causal pathway, leading to bias.

**Non‑obvious insight:**  
A single “binary” flag can *indirectly* encode an entire spectrum of demographic information. Even if you drop the flag, models may still infer it from correlated features (e.g., zip code). Hence a proper fix is not merely removing the feature but rethinking the learning objective—e.g., adding fairness constraints or performing causal inference to isolate genuine risk factors.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
