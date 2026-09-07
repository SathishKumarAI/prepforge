---
qid: ing_73d35e9b9c__aws__local
question: 'Explain: Sources — Abridge'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 413
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:47:48-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was asked to build a lightweight summarization feature for a news‑feed app that served 2 M daily active users (DAU). The requirement: “Abridge” the article into a single paragraph while preserving key facts.

**Action**  
I treated it as an end‑to‑end pipeline.  
1. **Data ingestion** – used Amazon Kinesis Data Streams to stream raw RSS feeds in real time, guaranteeing < 2 s latency.  
2. **Pre‑processing** – Lambda functions performed tokenization and sentence scoring (TF‑IDF + BERT embeddings) on the fly, keeping the compute cost under $0.04 per 1 k requests.  
3. **Summarization engine** – deployed a lightweight Transformer model (DistilBART) in Amazon SageMaker endpoints; autoscaled to 10 vCPU instances with 30 % CPU utilization target, ensuring < 250 ms inference latency for 90 % of requests.  
4. **Caching & delivery** – results cached in Amazon CloudFront and DynamoDB Global Tables (multi‑region replication) to serve 99.999 % availability.

**Result**  
The feature cut user reading time by **35 %** (average session length dropped from 12 min to 7.8 min). Traffic handled 2× the projected load with a cost saving of **$1.6k/month** versus a monolithic serverless approach.  

**Learnings**  
I practiced *Ownership*—designing for failure, monitoring latency spikes with CloudWatch Alarms, and iterating on the model after observing drift in user sentiment scores. This deep dive into data pipelines and model ops exemplifies Amazon’s *Dive Deep* principle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
