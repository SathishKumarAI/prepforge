---
qid: ing_9248194475__aws__local
question: 'Explain: Details to know — Generative AI with Large Language Models | Coursera'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 439
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:56:53-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the migration of a 200‑person enterprise learning platform (Coursera‑style) to an on‑prem “AI‑enabled” content recommendation engine. The goal was to replace static course suggestions with generative AI that could draft personalized learning paths and micro‑content.

**Action**  
* **Ownership & Dive Deep:** I scoped the data pipeline, built a Spark job to ingest 3 TB of user interaction logs (clicks, time‑on‑page, completion rates) and engineered embeddings for each content item.  
* **AWS Architecture:**  
  * **Amazon SageMaker** – hosted a fine‑tuned GPT‑4 model (1.5 B parameters) wrapped in a REST endpoint with autoscaling via SageMaker Endpoint Auto Scaling.  
  * **Amazon DynamoDB** – stored user profiles and recommendation history, enabling sub‑millisecond reads for real‑time inference.  
  * **AWS Step Functions** orchestrated the end‑to‑end workflow: data extraction → embedding generation → model inference → response caching.  
* **Bias for Action & Deliver Results:** I deployed a canary roll‑out to 5 % of traffic, monitored latency (average 120 ms) and precision‑recall (0.68 vs 0.53 baseline). After A/B testing, we increased course completion by **12 %** and reduced drop‑off by **9 %** within three months.

**Result**  
* Achieved a 30 % reduction in inference cost by using SageMaker’s spot instances and caching frequent queries in DynamoDB Global Secondary Indexes.  
* Delivered the solution in 6 weeks, ahead of the 12‑week schedule, demonstrating strong ownership and rapid delivery.

**Bar‑raiser takeaways** – I showed deep technical depth (embedding pipeline, auto‑scaling), quantified impact (completion +12 %), and a learning loop: after initial latency spikes we introduced a “warm‑start” cache that cut response time by 35 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
