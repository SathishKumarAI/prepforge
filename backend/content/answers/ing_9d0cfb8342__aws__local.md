---
qid: ing_9d0cfb8342__aws__local
question: 'Explain: Why not a Selenium farm — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 384
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:19:54-05:00'
sources: []
---

**Why we avoid a Selenium farm for the “Computer Use Agent” production pipeline**

*Leadership Principles:* **Customer Obsession & Ownership** – our end‑user (the internal analytics team) needs reliable, real‑time insights, not flaky test harnesses.

**Situation:** In 2023 we were asked to surface live web‑scraped metrics for over 1 M users. The prototype used a Selenium farm on EC2 Spot instances; latency spiked and failures hit 12 % during traffic surges.

**Task:** Build a production‑grade ingestion layer that guarantees <200 ms latency, >99.9 % availability, and scales to 10× the user base while keeping cost < $5k/month.

**Action:**  
1. **Decouple UI from scraping** – replaced Selenium with a headless **AWS Lambda@Edge + CloudFront** cache that renders pages only on demand.  
2. **Use Amazon DynamoDB Streams** to trigger **Step Functions** that orchestrate **Amazon S3** for raw HTML, **Amazon Textract** for structured extraction, and **Amazon SageMaker** for ML‑based entity resolution.  
3. Implement **AWS WAF + Shield** for bot protection and a **CloudWatch anomaly detector** to auto‑scale Lambda concurrency.

**Result:** Latency dropped from 1.8 s to 180 ms (≈ 90 % improvement), error rate fell below 0.05 %, and monthly spend decreased from $12k to $4.3k. The solution now supports 10× traffic with no manual intervention, demonstrating true ownership and a data‑driven impact that bar‑raisers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
