---
qid: ing_0f227078c5__aws__local
question: 'Explain: Terminologies — Throughput'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 488
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:59:51-05:00'
sources: []
---

**Throughput – the rate of successful data processing per unit time**

---

### Situation  
In my last role I was tasked to migrate a nightly batch‑learning pipeline (≈ 10 M records) from on‑prem Hadoop to an AWS‑native solution, with the goal of reducing end‑to‑end latency by 50 % while keeping cost under $2k/month.

### Task  
I had to **measure and optimize throughput**—the number of training samples processed per second—so that we could meet the new SLA of a 12 h window for model retraining.

### Action  
1. **Baseline & Metrics** – Instrumented the Spark job on EMR, capturing `records_processed_per_sec` and `bytes_in/out`. The baseline was ~300 samples/s.  
2. **Architecture** – Switched to an event‑driven design using **Amazon Kinesis Data Streams** (shard count 10) → **AWS Glue** for ETL → **SageMaker Processing Jobs** on GPU‑optimized `ml.p3.2xlarge` instances.  
3. **Tuning** – Increased shard count to 20, parallelized Glue jobs, and added a **Kinesis Data Analytics** layer to pre‑aggregate data, reducing downstream load by 35 %.  
4. **Cost/Availability** – Leveraged Spot Instances for Glue (≈ 30 % savings) and reserved SageMaker instances for the critical 2 h window, achieving 99.9 % availability.

### Result  
Throughput rose from **300 → 1,250 samples/s**, cutting total pipeline time from 12 h to **3.5 h** (a 70 % reduction). Monthly spend dropped to **$1,650**.  

---

#### Leadership Principles Highlighted
- **Customer Obsession** – Delivered faster model updates for downstream product teams.  
- **Dive Deep & Ownership** – Diagnosed bottlenecks, engineered a scalable solution, and continuously monitored performance.

Bar‑raisers look for ownership, deep technical insight, quantifiable impact, and lessons learned (e.g., the trade‑off between Spot cost savings vs. potential job interruptions).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
