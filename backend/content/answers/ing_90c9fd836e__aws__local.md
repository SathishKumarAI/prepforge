---
qid: ing_90c9fd836e__aws__local
question: 'Explain: For time series, you use something called'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 483
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:53:30-05:00'
sources: []
---

**Situation & Task**  
While leading a fraud‑detection team, we needed to forecast daily transaction volume so that the scaling policy could pre‑emptively spin up EC2 Auto Scaling groups. The data were highly seasonal and contained abrupt regime shifts (e.g., holiday spikes).

**Action – Technical Design**  
I chose an **SARIMA** model because it captures both trend and seasonality while remaining interpretable for compliance teams.  
* Requirements: 1‑day granularity, 12‑month horizon, < 5 % MAPE.  
* Architecture:  
  * **Amazon Kinesis Data Streams** → ingest raw logs in real time.  
  * **AWS Glue** ETL job to aggregate per‑hour counts into daily features (lag terms, rolling windows).  
  * **Amazon SageMaker Notebook** for model training; I used the built‑in SARIMA implementation from `statsmodels`.  
  * **SageMaker Endpoint** exposes a Lambda‑driven inference API that runs nightly predictions and writes results to an S3 data lake.  
* Scalability: The Glue job partitions by month, enabling parallelism across multiple workers (cost ~$0.25/hr per worker). Availability is ensured with SageMaker’s automatic retraining triggers.  
* Cost: total monthly spend < $300, compared to $1,200 for a fully custom TensorFlow pipeline.

**Result**  
The model achieved **4.3 % MAPE** on the test set and reduced over‑provisioning by 18 %, saving ~$45k annually. It also enabled the ops team to hit their SLA of < 30 min for scaling decisions.

**Reflection – Bar‑raiser Lens**  
I took full ownership: from data prep to model deployment, I documented assumptions and performed a post‑mortem after an initial 7 % MAPE spike (caused by a missing holiday flag). That failure taught me to incorporate domain signals early. The end result demonstrates **Customer Obsession** (better service for downstream users) and **Ownership** (end‑to‑end delivery).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
