---
qid: ing_d11338a382__star__local
question: 'Explain: High-level architecture — Ai System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 305
total_tokens: 539
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:27:35-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were tasked with building an AI‑driven fraud detection platform for real‑time transaction monitoring. The existing rule‑based engine was hitting latency limits and couldn’t scale to the projected 10 M transactions per day.

**Task** – I needed to design a high‑level architecture that would ingest streaming data, train models on the fly, and serve predictions with sub‑200 ms latency while remaining cost‑effective on AWS.

**Action** – I chose an event‑driven microservice stack: Kafka for ingestion, Lambda functions for feature extraction, SageMaker Pipelines for nightly batch training, and an inference layer built on EC2 Spot instances behind a Global Accelerator. To keep stateful session data, we used Redis Streams. For model monitoring, we integrated Evidently to track drift and automatically trigger re‑training. I also set up a CI/CD pipeline with Terraform to enforce infrastructure as code and enable rapid rollback.

**Result** – The new architecture cut prediction latency from 750 ms to 180 ms, increased detection accuracy by 12% (from 78% to 90%), and reduced operating costs by 30%. I learned that marrying serverless event processing with managed ML services can deliver both speed and reliability in a production AI system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
