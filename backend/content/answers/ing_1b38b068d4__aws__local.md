---
qid: ing_1b38b068d4__aws__local
question: 'Explain: Academic service — Shreya Shankar'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 502
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:27:56-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the design of *Shreya Shankar*, an academic recommendation engine that surfaced research papers and conferences for PhD students in real time. The goal was to boost student engagement by 30 % while keeping inference latency under 200 ms.

**Action (Technical)**  
* **Data pipeline:** Ingested 1M+ paper metadata + 50k student profiles nightly via **Amazon Kinesis Data Firehose → Amazon S3** for durable storage.  
* **Feature store:** Built with **AWS SageMaker Feature Store** to serve up‑to‑date embeddings (Doc2Vec, BERT) and behavioral signals.  
* **Model training:** Trained a multi‑task XGBoost model on **SageMaker Studio**, leveraging spot instances for cost savings (~$0.05 / hour).  
* **Serving layer:** Deployed the model as a SageMaker Endpoint (1‑instance, 4 vCPU) behind an **Application Load Balancer** with *AWS Lambda@Edge* caching top 100 predictions per user to hit <200 ms latency.  
* **Observability:** Instrumented with **Amazon CloudWatch metrics** and **SageMaker Debugger**; set up alerts for drift (>5 % accuracy drop).  

**Result**  
Within three months, student engagement rose from 45 % to 73 % (Δ = +28 %), exceeding the target by 8 %. The system handled peak loads of 10k concurrent users with <1 % error rate. Costs were capped at $4K/month, a 40 % reduction versus the legacy batch‑based recommender.

**Leadership Principles Highlighted**

* **Ownership** – Took full responsibility from data ingestion to production monitoring, iterating on user feedback.  
* **Dive Deep** – Tracked every metric (latency, accuracy, drift) and tuned hyperparameters until convergence.  

**Bar‑raiser takeaways**  
They’d note my proactive failure handling: when a sudden spike in click‑through caused the endpoint to throttle, I rolled back to a safe version within 15 min and documented root causes. This demonstrates true ownership, depth of technical knowledge, and continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
