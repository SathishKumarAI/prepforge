---
qid: ing_e8f206f473__star__local
question: 'Explain: Tracing ​ — MLflow 3 for GenAI | Databricks on AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 350
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:14:06-05:00'
sources: []
---

**Situation:**  
When launching our generative‑AI chatbot on the new Databricks cluster in AWS, we noticed that latency spikes during inference were hard to diagnose—debugging in a distributed environment felt like finding a needle in a haystack.

**Task:**  
I had to implement end‑to‑end tracing so every request could be visualised from ingestion through model scoring to response delivery, and then use the insights to cut the average latency by 30 % while keeping cost under budget.

**Action:**  
I integrated MLflow 3’s new `mlflow.tracking` SDK with Databricks’ Structured Streaming. Each micro‑service logged a unique `run_id` and emitted span events (e.g., `preprocess`, `model_inference`, `postprocess`) to the central tracking store. I leveraged Spark’s `foreachBatch` to attach metadata, and used Databricks notebooks to build a custom dashboard that visualised trace timelines in real time. By correlating high‑latency spans with specific input patterns, I identified a GPU under‑utilisation issue and adjusted the executor memory settings. I also added automatic retries for transient network errors.

**Result:**  
The tracing pipeline reduced average inference latency from 750 ms to 520 ms—a 31 % improvement—while keeping AWS spend within the projected $5K/month cap. The visual dashboard became a standard tool for ops, and I documented best practices that were later adopted by two other AI teams on Databricks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
