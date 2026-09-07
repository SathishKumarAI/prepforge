---
qid: ing_eb0d00bdbe__aws__local
question: 'Explain: What is feature scaling? Compare normalization and standardization,
  and tell me which models actually need it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 448
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:09:25-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* – we care about model accuracy for end users; *Ownership* – I own the preprocessing pipeline from data ingestion to deployment.

### Situation & Task  
I led a fraud‑detection team that shipped a new ML service to merchants. Our raw transaction features (amount, time, merchant score) had wildly different scales, causing slow convergence and unstable predictions in our XGBoost model.

### Action  
1. **Explored scaling options** – implemented both *normalization* (`min-max`) and *standardization* (`z‑score`).  
2. Benchmarked on 5 M transactions:  
   * Normalization → training time ↓ 30%, AUC ↑ 0.003  
   * Standardization → training time ↓ 45%, AUC ↑ 0.006  
3. **Model selection** – only *distance‑based* (k‑NN, SVM) and *gradient‑boosted trees* with regularization are sensitive to feature scale; tree‑only models (Random Forest, CatBoost) do not require it.  
4. Deployed standardization in the data pipeline (AWS Glue → Lambda → SageMaker Endpoint).  

### Result  
The updated pipeline cut inference latency by 20 ms per request and increased fraud detection precision from 88 % to 92 %. The feature‑scaling module now logs distribution stats to CloudWatch, enabling drift alerts.  

**Key takeaways:**  
* Standardization is preferable when variance matters; normalization works if all features must lie in a fixed range.  
* Only scale models that depend on Euclidean geometry or gradient descent—most deep nets and tree ensembles are agnostic.  

> **Bar‑raiser check:** I demonstrated *ownership* by redesigning the entire pipeline, *dive deep* into statistical metrics, quantified impact (AUC & latency), and learned from failed experiments (initially applied scaling to all models, causing unnecessary compute).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
