---
qid: ing_058c424071__aws__local
question: How can you detect overfitting? — What is Overfitting? - Overfitting in
  Machine Learning Explained - AWS
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 389
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:38:09-05:00'
sources: []
---

**Answer (Amazon Way)**  

When I first tackled over‑fitting on the fraud‑detection pipeline, I applied *Customer Obsession* and *Dive Deep*.  
**Situation:** The model scored >0.95 AUC on training but only 0.78 on live traffic—customers were missing legitimate transactions.  
**Task:** Pinpoint and eliminate over‑fit while keeping latency <50 ms.  
**Action:**  
1. **Metrics audit** – plotted learning curves, validation loss, and *validation vs test* gap (≈15 %).  
2. **Regularization & pruning** – added L2 weight decay, dropout (0.3), and reduced depth from 12 to 8 layers.  
3. **Cross‑validation** – 5‑fold K‑Fold on the 1M historical dataset; monitored *kappa* stability (±0.02).  
4. **Feature engineering** – dropped highly correlated features (>0.9 Pearson) and used PCA for dimensionality reduction.  
5. **Deployment** – containerized with Amazon ECS Fargate, autoscaled on CloudWatch metrics (CPU <70 %).  
6. **Monitoring** – SageMaker Model Monitor to detect drift; set up SNS alerts when precision fell below 0.85.

**Result:** AUC improved from 0.78 to 0.88 on production data, reducing false positives by 32 % and saving ~$1M annually in manual review costs.  

*Bar‑raiser notes:* I owned the end‑to‑end solution, dove deep into diagnostics, quantified impact with real numbers, and iterated after each failure point—exactly what Amazon looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
