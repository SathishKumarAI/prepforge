---
qid: vq_0adb4ab603__faang__local
question: Fig. 2 –How to answer a coding question?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 434
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:56:55-05:00'
sources: []
---

**Clarify**  
The interview asks you to explain *how* to tackle a typical ML coding problem (e.g., train a model, evaluate it). Confirm assumptions:  
- Is the dataset small/large?  
- Are we in an online or batch setting?  
- Do we need interpretability or just accuracy?

**Approach**  
1. **Problem definition** – formalize input‑output mapping and evaluation metric.  
2. **Data pipeline** – load → clean → feature engineering → split.  
3. **Model selection** – start with a baseline (logistic regression, decision tree).  
4. **Training & validation** – use cross‑validation or hold‑out set; tune hyperparameters via grid/random search or Bayesian optimization.  
5. **Evaluation** – compute metric, plot learning curves, inspect residuals.  
6. **Deployment considerations** – serialization (Pickle/ONNX), inference latency, monitoring.

**Depth**  
- Use `sklearn` pipelines to chain preprocessing and estimator; this keeps code DRY.  
- For large‑scale data, switch to `spark.ml` or `tensorflow.data`.  
- Complexity: training is O(n·d) for linear models, but can be reduced with stochastic gradient descent (SGD).  
- Trade‑offs: simple models are faster and easier to explain; complex ensembles improve accuracy but increase inference time.

**Edge Cases**  
- Missing values → imputation or model that handles NaNs.  
- Class imbalance → resampling or class weights.  
- Non‑stationary data → periodic retraining and drift detection.

**Optimize & Communicate**  
Explain how you’ll iterate: start with a quick baseline, profile bottlenecks (time/CPU), then add feature importance analysis or dimensionality reduction if needed. Summarize in a concise slide deck, highlighting key metrics and next steps for production rollout. This structured narrative satisfies the SIGNAL framework—clear assumptions, systematic plan, technical depth, edge‑case awareness, and actionable optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
