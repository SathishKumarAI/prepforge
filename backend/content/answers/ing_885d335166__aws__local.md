---
qid: ing_885d335166__aws__local
question: Compare L1 and L2 regularization. Why does L1 produce sparse weights?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 522
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:32:35-05:00'
sources: []
---

**Situation / Task**  
At a fintech startup I led the migration of our fraud‑detection pipeline to SageMaker. The model had 12 k features and overfitting was hurting precision by ~4 %. I needed to decide between L1 (lasso) and L2 (ridge) regularization for the logistic regression.

**Action**  
I ran a controlled A/B test:  
- **L1** shrank the feature set from 12 k to 3.5 k (≈70 % sparsity).  
- **L2** kept all weights, only reduced magnitudes.  

Using SageMaker’s `HyperparameterTuningJob`, I tuned λ on a grid and monitored validation AUC. L1 produced an AUC of 0.92 vs. 0.89 for L2, while inference cost dropped by 25 % because fewer features meant lighter CPU usage.

**Result**  
The sparse model reduced storage from 200 MB to 45 MB on EFS, cut EC2 `ml.m5.large` inference time from 18 ms to 12 ms, and improved customer experience (fraud‑alert latency < 50 ms). The savings translated into a $30K annual cost reduction.

**Why L1 yields sparsity**  
L1 adds the absolute value of weights to the loss:  

\[
J(\beta)=\text{Loss} + \lambda\sum|\beta_i|
\]

The gradient of |β| is constant (±1), so small coefficients receive a large penalty relative to their magnitude, driving many βᵢ exactly to zero. L2 penalizes squared weights, which shrinks but never forces them to zero.

**Leadership Principles Highlighted**  
- **Ownership & Deliver Results:** I took full ownership of the model’s performance and quantified impact on cost/latency.  
- **Dive Deep & Bias for Action:** I dissected the regularization math, ran experiments, and acted quickly with SageMaker tooling.  

**Bar‑raiser cues** – I demonstrated deep technical understanding (gradient behavior), quantified business impact (costs, latency), and showed a learning loop: if L1 had failed I’d have pivoted to ElasticNet or feature selection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
