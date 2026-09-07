---
qid: ing_dd5b3c1f24__faang__local
question: What are the 4 basics of machine learning?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 523
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:13:12-05:00'
sources: []
---

**1️⃣ Clarify**  
The interview asks for the “four basics” that underpin any machine‑learning project.  
Assumptions I’d confirm:  
- They refer to conceptual pillars (not code libraries).  
- The answer should be concise yet complete enough for a senior data‑science role.

---

**2️⃣ Approach**  
I’ll structure the reply as **(1) Data & Features, (2) Model Architecture/Algorithm, (3) Loss / Objective Function, (4) Evaluation & Deployment**—the classic pipeline that every FAANG team follows.

---

**3️⃣ Depth**

| # | Pillar | Why it matters | Typical examples |
|---|--------|----------------|------------------|
| 1 | **Data & Features** | The foundation; garbage in → garbage out. Feature engineering, preprocessing, and labeling drive model performance. | Image scaling, tokenization, one‑hot encoding, embeddings. |
| 2 | **Model / Algorithm** | Encodes assumptions about the data’s structure (linear, tree‑based, neural nets). Choice determines capacity & bias–variance trade‑off. | Linear regression, Random Forests, Transformer networks. |
| 3 | **Loss / Objective Function** | Quantifies how well a model matches targets; guides gradient descent or other optimizers. | MSE for regression, cross‑entropy for classification. |
| 4 | **Evaluation & Deployment** | Validates generalization (train/val/test splits, k‑fold CV) and operationalizes the model (serving, monitoring). | ROC AUC, latency budgets, A/B testing. |

---

**4️⃣ Edge Cases**

- *Imbalanced data*: loss functions like focal loss or class weighting.  
- *Non‑stationary streams*: online learning or retraining schedules.  
- *Explainability needs*: choosing simpler models or adding SHAP/LIME.

---

**5️⃣ Optimize & Communicate**

I’d finish by stressing that these four pillars are iterative: insights from evaluation often loop back to feature engineering and model choice. In a FAANG interview, I’d emphasize clear communication of trade‑offs (e.g., higher capacity vs. interpretability) and readiness to prototype quickly using frameworks like PyTorch or TensorFlow. This shows both depth and practical mindset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
