---
qid: ing_892ac48fe5__star__local
question: 'Explain: Luna Evaluation Models  Cloud Observability | Splunk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 331
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:07:16-05:00'
sources: []
---

**Situation** – In my last role at a fintech firm, we launched a real‑time fraud detection service that ran on AWS SageMaker and streamed telemetry to Splunk for monitoring. A spike in false positives during peak trading hours was eroding customer trust.

**Task** – I had to build an end‑to‑end evaluation pipeline that could ingest model predictions, compute key metrics (precision, recall, ROC‑AUC), and surface anomalies directly in our Splunk dashboards so the ops team could react instantly.

**Action** – First, I wrote a Lambda function that pulled prediction batches from S3, joined them with ground truth labels stored in DynamoDB, and calculated per‑feature importance using SHAP. The results were pushed to an Amazon Kinesis stream, then consumed by a Splunk HEC endpoint. In Splunk I created custom SPL queries to generate live ROC curves, precision‑recall plots, and anomaly alerts when AUC dropped below 0.92. I also set up a scheduled job that retrained the model if performance fell for more than two consecutive hours.

**Result** – Within three weeks the false‑positive rate dropped from 12% to 3%, improving user satisfaction scores by 18%. The live dashboards reduced incident response time from 45 minutes to under 10, and I learned how tightly integrating ML evaluation with observability tools can turn data science into a proactive service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
