---
qid: ing_07a4939542__aws__local
question: 'Explain: Implementing k-fold cross-validation without stratified sampling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 411
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:43:03-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was responsible for delivering a recommendation model that had to be validated on a massive click‑through dataset (≈ 200 M rows). The business required *k‑fold cross‑validation* but the data were highly imbalanced, and we did not have the luxury of stratified sampling due to regulatory constraints.  

**Action**  
I built an end‑to‑end pipeline in **SageMaker** that performed a plain *k‑fold* split while preserving the overall class distribution through a custom **EMR Spark job**. The job shuffled the data, assigned each row a fold ID deterministically (hash(row\_id) % k), and wrote separate Parquet files for each fold to S3.  
The training step used **SageMaker Processing** with a container that read only its designated fold as validation, while all other folds were combined into the training set. I added a small **Lambda layer** to monitor GPU utilization; if usage dropped below 30 % it automatically scaled up the instance count via SageMaker Auto‑Scaling, keeping cost < $1.2 k per run.  

**Result**  
The model achieved an AUC of **0.87** (up 3 pts from the previous stratified baseline) while cutting validation time by 40 %. The pipeline now runs in under 12 h on a single EMR cluster, and I documented failure scenarios where hash collisions caused fold leakage—leading to a new checksum guard that prevented future regressions.  

**Leadership Principles**  
*Customer Obsession* – delivered higher‑quality predictions for the business.  
*Dive Deep* – engineered a fault‑tolerant, cost‑aware solution with measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
