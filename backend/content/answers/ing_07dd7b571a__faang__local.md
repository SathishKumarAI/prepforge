---
qid: ing_07dd7b571a__faang__local
question: 'Explain: Payments — Top 20 Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 701
total_tokens: 932
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:02:23-05:00'
sources: []
---

**Payments – 20 Core ML Questions (FAANG‑style)**  

| # | Topic | Typical Interview Prompt |
|---|-------|--------------------------|
|1|Fraud Detection|“How would you build a real‑time fraud detector?”|
|2|Anomaly Detection|“Explain unsupervised methods for spotting anomalous transactions.”|
|3|Feature Engineering|“Which features matter most for predicting chargebacks?”|
|4|Data Quality|“What strategies handle missing or noisy payment data?”|
|5|Model Drift|“How do you detect and mitigate performance decay over time?”|
|6|Explainability|“Why is interpretability critical in payments, and how would you achieve it?”|
|7|Latency & Throughput|“Describe how to deploy a model that meets sub‑50 ms latency.”|
|8|Scalable Training|“What distributed training pipeline would you use for billions of transactions?”|
|9|Imbalanced Data|“Which loss functions or sampling techniques help with rare fraud cases?”|
|10|Regulatory Compliance|“How do GDPR/PCI‑DSS constraints influence model design?”|
|11|Feature Store|“Why is a feature store essential, and how would you architect one?”|
|12|Edge vs. Cloud|“When should inference run on device versus cloud in mobile payments?”|
|13|Model Serving|“Explain A/B testing of two fraud models at scale.”|
|14|Multi‑class Classification|“How to handle multi‑currency fraud categories?”|
|15|Ensemble Methods|“Which ensembles perform best for transaction risk scoring?”|
|16|Adversarial Robustness|“Can attackers game your model? How do you defend?”|
|17|Cold Start | “Predict risk for new merchants with no history.” |
|18|Time‑Series Forecasting| “Forecast daily fraud volume to allocate resources.” |
|19|Graph ML| “Model relationships between accounts, cards, and devices.” |
|20|Cost‑Benefit Analysis| “Quantify ROI of a new fraud model versus manual review.” |

**How to answer:**  
1. **Clarify** – restate the problem, confirm data availability (labels, volume), latency targets, regulatory constraints.  
2. **Approach** – outline pipeline: ingestion → preprocessing → feature store → model choice → training → evaluation → deployment → monitoring.  
3. **Depth** – discuss algorithm trade‑offs (XGBoost vs. deep nets), loss functions (Focal Loss for imbalance), SHAP for explainability, distributed TF‑On‑Spark for scale, low‑latency inference with ONNX or TensorRT. Complexity: training O(n log n) for tree ensembles; inference <10 ms with quantized models.  
4. **Edge cases** – data sparsity, concept drift after new payment methods, adversarial spoofing. Test on hold‑out fraud bursts, simulate attack vectors.  
5. **Optimize & Communicate** – emphasize monitoring dashboards (precision@k), automated retraining triggers, cost per prediction, and how to present findings to business stakeholders.

Keep the answer under 200 words while demonstrating structured reasoning, technical depth, and awareness of real‑world constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
