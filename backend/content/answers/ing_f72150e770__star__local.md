---
qid: ing_f72150e770__star__local
question: 'Explain: Problem Categories and Distribution — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 397
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:42:55-05:00'
sources: []
---

**Situation:** While preparing for my senior data‑science interview at a fintech startup, I had to quickly review the Neetcode 150 list of machine‑learning problems. The interviewer asked me to explain how those problems are grouped into categories and what distribution types they typically involve.

**Task:** My goal was to map each problem type—classification, regression, clustering, dimensionality reduction, reinforcement learning—to its common data‑distribution assumptions, so I could discuss trade‑offs in model choice and preprocessing.

**Action:** I started by listing the main categories: *supervised* (classification/regression), *unsupervised* (clustering, anomaly detection, PCA), and *reinforcement learning*. For each, I identified typical distributions: classification often assumes a multinomial or Bernoulli outcome with class imbalance; regression usually relies on Gaussian residuals but can involve heavy‑tailed Laplace noise; clustering presumes multimodal data with clear cluster separation. I then matched Neetcode problems to these groups—for example, “Logistic Regression” falls under binary classification with a Bernoulli likelihood, while “K‑Means Clustering” assumes spherical clusters drawn from a mixture of Gaussians. I highlighted how mis‑specifying the distribution (e.g., treating count data as Gaussian) can bias parameter estimates and degrade performance.

**Result:** In the interview, my concise mapping helped me score a 4/5 on the technical question, and I learned that explicitly stating distribution assumptions clarifies model selection and diagnostic strategies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
