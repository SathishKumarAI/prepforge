---
qid: ing_5314921ae5__aws__local
question: 'Explain: Speakers (new and certified refurbished)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 502
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:32:49-05:00'
sources: []
---

**Situation & Task**  
When I joined Amazon’s Consumer Electronics team, we launched a “Smart Speaker” line that included both *new* units and *certified‑refurbished* devices sold through the Marketplace. The business goal was to increase overall sales while keeping refurbished inventory turnover high and ensuring end‑user trust in quality.

**Action – Design & Implementation**  
I built an end‑to‑end **ML pipeline** on AWS that predicted each unit’s “quality score” from sensor logs, image embeddings (from camera scans), and historical repair data.  

*Data ingestion*: `Kinesis Data Streams` fed real‑time telemetry; `S3` stored batch images.  
*Feature engineering*: `Glue` crawled the data, `Lambda` extracted CNN features via a pre‑trained ResNet model on GPU instances.  
*Model training & serving*: I used **Amazon SageMaker** (Notebook, Training, and Endpoint) with an AutoML workflow to iterate quickly on XGBoost + LightGBM ensembles. The final model achieved **AUC‑ROC 0.94** in cross‑validation.  

The endpoint was deployed behind a `API Gateway` + `Lambda@Edge`, ensuring sub‑200 ms latency for the Alexa skill that queried quality scores during checkout.

**Result**  
* Refurbished inventory turnover rose from **32% to 48%** within three months, cutting holding costs by **$1.2M annually**.  
* New‑unit conversion rates improved by **7pp** because customers could see an AI‑generated confidence score before purchase.  
* The system handled a peak of **120k requests/sec** with 99.9 % availability, keeping cost per prediction below **$0.0005**.

**Learning & Ownership**  
I owned the end‑to‑end loop, from data collection to deployment, and instituted an A/B test that revealed a drop in user trust when predictions lagged >1 s. That feedback loop forced us to move the inference to edge, improving UX and reducing latency.  

This experience exemplifies **Customer Obsession** (delivering transparent quality info), **Ownership** (full responsibility for the ML stack), and **Dive Deep** (iterating on model choice & feature engineering).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
