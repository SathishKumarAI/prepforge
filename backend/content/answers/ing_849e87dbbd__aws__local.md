---
qid: ing_849e87dbbd__aws__local
question: 'Explain: So you can actually handle a lot — Building Software Systems At
  Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 393
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:24:53-05:00'
sources: []
---

**Situation & Task**  
At Google I led the end‑to‑end pipeline that powers real‑time fraud detection for over **$30 B** of daily ad spend. The goal was to drop false positives by 25% while keeping latency under 50 ms.

**Action (Technical)**  
*Designed a horizontally scalable streaming architecture*:  
- **Data ingestion** – Pub/Sub → Cloud Dataflow (Apache Beam) for windowed deduplication.  
- **Feature store** – BigQuery + Vertex AI Feature Store, cached in Memorystore for sub‑10 µs lookups.  
- **Model serving** – Managed TensorFlow Serving on GKE autoscaling pods; added a “model shadow” branch to test new weights with zero risk.  
*Implemented robust monitoring*: Cloud Monitoring dashboards with anomaly detection; automatic retraining triggers when drift > 0.3.  

I practiced **Dive Deep** by profiling CPU/GPU usage, discovering that a 16‑bit quantization cut inference time from 12 ms to 5 ms without accuracy loss.

**Result**  
- False positives dropped **28%**, saving ~$2.4 M/month in wasted spend.  
- Latency consistently < 45 ms, meeting SLA.  
- Cost of the pipeline reduced by **18%** through efficient autoscaling and serverless components.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Directly improved advertiser ROI.  
- **Ownership**: Took end‑to‑end responsibility from ingestion to deployment.  

*Bar‑raiser takeaways*: Demonstrated ownership, deep technical insight, quantified business impact, and a clear lesson—continuous monitoring is as critical as model accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
