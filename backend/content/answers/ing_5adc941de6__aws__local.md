---
qid: ing_5adc941de6__aws__local
question: 'Explain: Classifying Documents & Queries by Language'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 417
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:51:02-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a project to build an end‑to‑end document‑and‑query language classifier for a global e‑commerce platform that served >10 M users daily. The goal was to route content and search queries to the correct language model, improving user experience and reducing latency by 30 %.

**Action (Design)**  
* **Data ingestion** – S3 + Kinesis Firehose streamed raw PDFs/HTML and query logs into an analytics pipeline.  
* **Feature extraction** – AWS Comprehend Language Detection and custom regex identified candidate tokens; a SageMaker model fine‑tuned on 200 k labeled samples produced a confidence score per language.  
* **Routing layer** – An API Gateway + Lambda function evaluated the score, applied a threshold (0.85), and forwarded to the appropriate downstream microservice via EventBridge.  
* **Monitoring & retraining** – CloudWatch metrics tracked accuracy; every 24 h an automated SageMaker training job updated the model with new data.

**Result**  
Accuracy rose from 82 % to **95 %**, query latency dropped by **32 %**, and we saved ~\$15k/month in compute costs by eliminating unnecessary language‑specific processing.  

**Leadership Principles**  
* **Customer Obsession** – Delivered a faster, more accurate experience for millions of users worldwide.  
* **Dive Deep & Ownership** – Built the pipeline from scratch, tuned hyperparameters, and continuously iterated on failure signals.

**Bar‑raiser cues**  
I owned the entire lifecycle, quantified impact (latency & cost), and learned that early integration with monitoring allowed rapid rollback when accuracy dipped during a language spike.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
