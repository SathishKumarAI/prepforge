---
qid: ing_51ffec414d__star__local
question: 'Explain: Interview Follow-Up Questions — Fraud Detection'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 288
total_tokens: 522
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:12:23-05:00'
sources: []
---

**Situation:**  
During my senior year I worked on a capstone project for a fintech startup that was launching an AI‑powered fraud detection system for credit card transactions. The beta version flagged only 60% of known fraudulent transactions, and the false‑positive rate was 8%, which would overwhelm their support team.

**Task:**  
I needed to improve both recall and precision so the system could reliably catch at least 90% of frauds while keeping false positives below 3%.

**Action:**  
I began by profiling the data pipeline in Apache Spark, identifying that our feature set was missing temporal patterns. I engineered lag‑based features (e.g., transaction velocity over the last hour) and used a LightGBM model with cross‑validation to tune hyperparameters. To reduce false positives, I added an isolation forest outlier detector as a second stage filter. We deployed the pipeline on AWS Lambda for real‑time scoring and set up Grafana dashboards to monitor key metrics.

**Result:**  
After two iterations, recall rose from 60% to 92%, and the false‑positive rate dropped to 2.5%. The startup reported a 30% reduction in manual review time within the first month of production. I learned how to balance model complexity with operational constraints and that continuous monitoring is critical for AI systems in finance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
