---
qid: ing_f5654d7c51__star__local
question: 'Explain: Enterprise Sales Engineer, Financial Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 334
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:39:05-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, we were pitching our AI‑driven fraud detection platform to a large bank that had been losing $12 M annually to unauthorized transactions. The bank’s compliance team was skeptical because their legacy system only offered rule‑based alerts.

**Task:** I needed to demonstrate how our machine‑learning model could reduce false positives by at least 30% while maintaining zero tolerance for missed fraud, all within a two‑week demo period and without exposing proprietary data.

**Action:** First, I mapped the bank’s transaction schema into a secure sandbox using AWS Glue and SageMaker. I then retrained their existing rule engine with an XGBoost model, tuning class weights to penalize missed fraud heavily. To address compliance, I built an SHAP‑based explanation dashboard in Streamlit so analysts could see feature importance per alert. I also set up automated CI/CD pipelines on GitHub Actions to deploy the model into a Docker container on Azure Kubernetes Service, ensuring low latency (<50 ms) for real‑time scoring.

**Result:** The demo showed a 38% drop in false positives and a 5× increase in fraud detection accuracy over their baseline. The bank signed a $4 M contract within three weeks, and we later rolled out the solution to two additional regional branches, saving them an estimated $18 M annually. I learned that marrying explainability with rapid deployment is key to winning trust in regulated sectors.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
