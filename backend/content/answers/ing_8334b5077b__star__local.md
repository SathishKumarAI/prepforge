---
qid: ing_8334b5077b__star__local
question: 'Explain: Interviewers — Software Engineer Resume - by Austen McDonald and
  Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 371
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:55:45-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were rolling out a fraud‑detection engine for credit card transactions. The existing rule‑based system had an 18 % false‑positive rate, clogging the review queue and hurting customer experience.

**Task** – I was tasked with designing a machine‑learning model that reduced false positives to below 10 % while maintaining or improving true‑positive detection, all within a two‑week sprint before our next quarterly audit.

**Action** – First, I gathered transactional logs from the past year (≈2 M rows) and engineered features such as time‑of‑day, device fingerprint entropy, and merchant category clustering. Using Python’s scikit‑learn, I trained an XGBoost classifier with 5‑fold cross‑validation, tuning depth and learning rate to balance recall and precision. I deployed the model into our existing Flask microservice, added a CI/CD pipeline with Docker and Kubernetes for automatic scaling, and set up real‑time monitoring in Grafana. To handle class imbalance, I employed SMOTE oversampling on the training split.

**Result** – The new model cut false positives from 18 % to 8 %, saving the ops team ≈120 hours of manual review per month. It also improved true‑positive recall by 4 %. I learned that rigorous feature engineering and careful hyperparameter tuning are as critical as the algorithm choice, and that integrating ML models into production requires a solid DevOps foundation for reliability and observability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
