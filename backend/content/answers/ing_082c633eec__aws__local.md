---
qid: ing_082c633eec__aws__local
question: 'Explain: Metrics, SLOs, and the throughput - latency curve'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 499
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:44:18-05:00'
sources: []
---

**Situation & Task**  
When launching a real‑time recommendation service for our e‑commerce platform, I had to define *metrics*, *SLOs*, and the *throughput–latency* trade‑off so that we could scale without compromising user experience.

**Action (Technical Design)**  
I scoped the system around **Amazon Kinesis Data Streams** (ingest), **Lambda** (pre‑processing), **Amazon SageMaker Endpoint** (model inference), and **DynamoDB** (feature store).  
- *Metrics*: request latency, 95th percentile latency, error rate, and throughput (requests/sec).  
- *SLOs*: 99.5 % of requests ≤ 120 ms, < 0.1 % error, and ≥ 10 k req/s during peak.  
I used **AWS CloudWatch** for real‑time dashboards and **X-Ray** to drill down on latency spikes.

To balance throughput vs. latency I applied the *throughput–latency curve*: increasing batch size in Lambda reduces per‑request cost but raises latency; conversely, smaller batches improve latency at higher compute cost.  
I modeled this with a simple linear regression (λ = α·t + β) and chose a 5 ms per‑batch overhead that hit our SLOs while keeping costs under \$0.05/1k requests.

**Result**  
After deployment, we achieved **99.7 % latency ≤ 115 ms**, **throughput of 12 k req/s**, and cut inference cost by **18 %** compared to the previous monolithic approach—meeting all SLOs with a 30 % headroom for growth.

**Leadership Principles Highlighted**  
- *Customer Obsession*: Ensured sub‑120 ms latency for a seamless shopping experience.  
- *Dive Deep*: Built quantitative models and used X-Ray traces to iterate on batch sizing.  

**Bar‑raiser takeaways**  
I demonstrated ownership by defining measurable SLOs, deep technical dive into throughput–latency dynamics, quantified impact (cost & performance), and learned from early latency spikes to refine the batching strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
