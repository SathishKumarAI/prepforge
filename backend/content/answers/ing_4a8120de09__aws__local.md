---
qid: ing_4a8120de09__aws__local
question: What is stratified sampling? — What is Stratified Cross-Validation in Machine
  Learning? | Towards Data Science
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 370
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:13:46-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Leadership Principles:** *Ownership*, *Dive Deep*  
> **Situation (S):** In a recent fraud‑detection project I was tasked with building a model that could generalize across regions, but the training data were heavily skewed—only 5 % of transactions were fraudulent.  
> **Task (T):** I needed to ensure every fold in cross‑validation contained a representative proportion of fraud cases so that performance metrics wouldn’t be inflated by class imbalance.  
> **Action (A):**  
> 1. Implemented *stratified sampling* to split the dataset: each fold preserved the exact fraud‑to‑non‑fraud ratio (~5 %).  
> 2. Built a custom `StratifiedKFold` pipeline in scikit‑learn, wrapped it with `Pipeline` (feature scaler → XGBoost).  
> 3. Deployed the pipeline on an Amazon SageMaker training job using `DistributedDataParallel` to scale across 8 ml.m5.xlarge instances, saving cost by leveraging spot instances and enabling early stopping after 10 % of epochs if validation loss plateaued.  
> **Result (R):** The stratified CV gave a more realistic AUC‑ROC estimate—0.89 vs. the naïve 0.95—and the final model achieved a 12 % lift in true positive rate at the same false‑positive threshold, translating to ~$1.2M annual savings for the client.  
> **Reflection:** I learned that naive random splits can mask overfitting; future projects will include automated stratification checks and a bias‑for‑action loop to adjust class weights on the fly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
