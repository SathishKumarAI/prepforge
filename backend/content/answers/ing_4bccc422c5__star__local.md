---
qid: ing_4bccc422c5__star__local
question: 'Explain: What they emphasise — Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 357
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:00:00-05:00'
sources: []
---

**Situation:**  
In the summer of 2023 I joined a fintech startup to revamp its fraud‑detection model that was generating too many false positives, costing us roughly $1.2 M in lost legitimate transactions each month.

**Task:**  
My goal was to reduce false positives by at least 30% while keeping the true‑positive rate above 95%. I knew this meant tightening data pipelines and improving feature engineering—areas Harvey, our lead ML engineer, always stresses: “Data quality beats model complexity.”

**Action:**  
I started by mapping the entire ingestion flow with Apache Airflow, then used Great Expectations to validate incoming streams in real time. We identified that 12 % of features were corrupted or missing. Next, I built a feature‑selection routine in Scikit‑learn that pruned noisy variables and replaced them with engineered aggregates (e.g., rolling transaction averages). Finally, I retrained the XGBoost model on the cleaned dataset and deployed it via SageMaker, setting up an A/B test to monitor performance.

**Result:**  
Within two weeks of deployment, false positives dropped from 18% to 12%, saving us about $380 k per month. The true‑positive rate stayed at 96%. I learned that rigorous data validation—Harvey’s mantra—is the linchpin for reliable AI systems, and it saved the company a substantial operating cost while boosting customer trust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
