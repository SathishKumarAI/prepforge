---
qid: ing_0d65e5e130__faang__local
question: 'Explain: Model Selection Guide — Models | Sarvam API Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 478
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:15:14-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise walkthrough of the *Model Selection* section in the Sarvam API documentation—specifically how to pick a machine‑learning model based on data characteristics and business goals.

**Approach**  
1. List key decision factors (data size, feature type, interpretability, latency).  
2. Map each factor to recommended Sarvam models (Linear Regression, Random Forest, XGBoost, etc.).  
3. Show the API call structure for selecting a model.  

**Depth**  
- **Data Size**: < 10K rows → *LogisticRegression* or *ElasticNet*. 10‑100K → *RandomForestRegressor*; > 1M → *XGBoost* (GPU).  
- **Feature Type**: Categorical only → *CatBoostClassifier*; mixed numeric/cat → *LightGBM*.  
- **Interpretability**: Need SHAP explanations → choose *LinearRegression* or *DecisionTreeRegressor*.  
- **Latency**: Real‑time inference (< 50 ms) → *ONNX Runtime* version of the model; batch jobs → *TensorFlow Serving*.  

API example (JSON):  
```json
{
  "model_type": "RandomForestRegressor",
  "hyperparameters": {"n_estimators":200, "max_depth":12},
  "train_split":0.8,
  "metrics":["rmse","r2"]
}
```

**Edge Cases**  
- Missing values → fallback to *Imputer* before training.  
- Highly imbalanced classes → use *class_weight="balanced"* or *SMOTE*.  
- Extremely high dimensionality (> 10K features) → apply PCA first.

**Optimize & Communicate**  
After initial selection, run a quick 5‑fold cross‑validation; if RMSE > threshold, auto‑switch to *XGBoost* with tuned learning rate. Explain trade‑offs: simpler models train faster but may underfit; complex ensembles offer higher accuracy at the cost of inference time. This structured path aligns with Sarvam’s “Model Selection Guide” and showcases clear decision logic—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
