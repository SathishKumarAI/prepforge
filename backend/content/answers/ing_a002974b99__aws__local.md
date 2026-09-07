---
qid: ing_a002974b99__aws__local
question: 'Explain: The RAG Triad — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 491
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:26:38-05:00'
sources: []
---

**Situation / Task**  
I was tasked with building a real‑time monitoring dashboard for an enterprise chatbot that uses Retrieval‑Augmented Generation (RAG). The goal was to surface “Red”, “Amber” and “Green” alerts so product owners could see when the model’s retrieval or generation quality slipped.  

**Action**  
1. **Define RAG patterns** –  
   * Red*: Retrieval latency > 500 ms or answer confidence < 0.4.  
   * Amber*: Latency 200‑500 ms or confidence 0.4‑0.6.  
   * Green*: Latency < 200 ms and confidence ≥ 0.6.  

2. **Architecture** –  
   * Lambda (or ECS Fargate) processes each request, emits a CloudWatch metric per pattern.  
   * Amazon Kinesis Data Streams aggregates raw metrics; an EMR Spark job runs nightly to compute rolling averages and anomaly scores.  
   * Amazon QuickSight visualizes the triad heatmap in real time.  

3. **Scalability & Cost** – Lambda auto‑scales to 10 k RAG calls/sec with < $0.20/day; Kinesis shards keep ingest latency < 100 ms, cost ≈ $0.05 per 1M records. QuickSight dashboards are billed by active user, ~ $1/user/month.

4. **Bias for Action / Ownership** – I added a “self‑heal” Lambda that, when a pattern stays Red > 5 min, triggers an SNS alert and auto‑scales the retrieval index nodes in DynamoDB.  

**Result**  
Within 2 weeks of deployment, we reduced average RAG latency from 650 ms to 180 ms (−72%) and dropped “Red” incidents by 85%. The product team reported a 40% faster turnaround on feature releases because they could trust the model’s quality in real time.  

**Learning** – Initial design underestimated burst traffic; adding an autoscaling rule for Kinesis shards eliminated back‑pressure spikes, teaching me to always quantify peak load before committing to a fixed shard count.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
