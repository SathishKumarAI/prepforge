---
qid: ing_a097150d83__aws__local
question: When is Data High Dimensional and Why Might That Be a Problem?
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 469
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:28:15-05:00'
sources: []
---

**When data becomes high‑dimensional, each feature adds an extra axis to the search space—often thousands of columns for a single record.**  
In my last role building a fraud‑detection pipeline, we hit ~3 k features per transaction after one‑hot encoding user and device attributes.  

| **S** | **T** | **A** | **R** |
|-------|-------|-------|-------|
| *Situation* | 3 k columns caused the gradient‑boosted tree model to overfit (train AUC 0.99, test AUC 0.78). | *Task* | Reduce dimensionality while preserving predictive power. |
| *Action* | Applied **Principal Component Analysis** and feature selection via SHAP values; pruned features with <0.1% variance contribution. Deployed the pipeline on **AWS SageMaker** (Python notebooks → production endpoint) and scheduled nightly retraining using **Step Functions** to orchestrate data prep, training, and model promotion. | *Result* | Reduced feature set to 350 components, restoring test AUC to 0.94 with a 70 % reduction in GPU‑hour cost on **EC2 P3** instances. |

### Why it’s problematic  
1. **Curse of Dimensionality** – distance metrics become meaningless; models overfit and training time explodes.  
2. **Sparse Data** – most feature combinations never occur, leading to unreliable statistics.  

### AWS‑centric Mitigation  
*Use SageMaker Feature Store* for centralized metadata management, *Glue* for automated schema discovery, and *EMR Spark* for scalable PCA. The trade‑off: dimensionality reduction can hide rare but critical signals; we monitored drift with **Amazon CloudWatch** alarms on feature importance shifts.

> **Bar‑raiser focus:** Ownership (took full responsibility for the end‑to‑end pipeline), Dive Deep (quantified variance thresholds, SHAP analysis), Quantified Impact (AUC lift + cost savings), and Learning from Failure (identified overfitting early via cross‑validation).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
