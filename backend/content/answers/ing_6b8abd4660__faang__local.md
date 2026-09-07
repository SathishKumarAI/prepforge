---
qid: ing_6b8abd4660__faang__local
question: 'Explain: So, the picture looks something like this'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 523
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:53:52-05:00'
sources: []
---

**Clarify**  
The interviewer seems to be asking for a high‑level walk‑through of a standard machine learning “picture” (data → model → deployment). I’ll assume they want an explanation of each stage, the key decisions, and why we structure it that way.

**Approach**  
1. **Data collection & labeling** – source, volume, quality, privacy.  
2. **Pre‑processing & feature engineering** – cleaning, scaling, encoding, dimensionality reduction.  
3. **Model selection & training** – algorithm choice (tree vs neural net), hyper‑parameter tuning, validation strategy.  
4. **Evaluation & calibration** – metrics (accuracy, AUC, F1), bias/variance analysis, calibration curves.  
5. **Deployment & monitoring** – serving infrastructure, latency constraints, drift detection, rollback plan.

**Depth**  
- *Data*: Use stratified sampling to preserve class balance; apply SMOTE if minority classes are under‑represented.  
- *Pre‑processing*: StandardScaler for Gaussian features; OneHotEncoder for categorical.  
- *Model*: For tabular data, a gradient‑boosted tree (XGBoost) often wins; for images, a ResNet backbone fine‑tuned on 80 k samples.  
- *Evaluation*: Compute ROC AUC and PR AUC; use cross‑validation to estimate generalization error.  
- *Deployment*: Containerize with Docker, serve via TensorFlow Serving or TorchServe, expose an HTTP endpoint. Monitor predictions vs ground truth in real time; trigger alerts if accuracy drops >5 %.  

**Edge Cases**  
- Missing values → impute or flag.  
- Concept drift → schedule periodic retraining.  
- Imbalanced data → adjust class weights or use focal loss.  
- Latency constraints → prune model depth or quantize weights.

**Optimize & Communicate**  
Explain trade‑offs: heavier models give higher accuracy but increase inference latency; simpler pipelines are easier to maintain. Highlight that the diagram is iterative—feedback from deployment loops back to data collection. Conclude by stressing continuous monitoring as a key differentiator in production ML at FAANG companies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
