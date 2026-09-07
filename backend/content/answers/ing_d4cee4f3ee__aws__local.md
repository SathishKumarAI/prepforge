---
qid: ing_d4cee4f3ee__aws__local
question: 'Explain: Throughput vs Bandwidth — Latency vs Throughput vs Bandwidth |
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 481
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:21:02-05:00'
sources: []
---

**Situation & Task (S)**  
In my last role I led the redesign of a real‑time recommendation engine that served 4 M users per day. The team was debating whether to focus on *latency* or *throughput* while scaling our data pipeline.  

**Action (A)**  
I first mapped out the **system flow**: ingestion → feature store → inference → personalization API. I used **Amazon Kinesis Data Streams** for high‑bandwidth ingestion, **AWS Glue** to batch‑process features, and **Amazon SageMaker endpoints** for inference. To compare *latency* vs *throughput*, I instrumented the pipeline with CloudWatch metrics:  
- **Latency** = 90th percentile API response < 150 ms (customer‑obsessed).  
- **Throughput** = 20 k records/s on Kinesis (scalable, cost‑efficient).  

I performed a *dive deep* analysis of the bottleneck at the inference layer. Switching from SageMaker’s default `ml.m5.large` to `ml.g4dn.xlarge` GPUs cut latency by **35 %** while keeping throughput > 25 k/s. I also introduced **Amazon API Gateway throttling** (rate limit 2 k reqs/sec) to protect downstream services, ensuring high availability.

**Result (R)**  
The new architecture delivered a 30 % reduction in average response time and handled a 40 % traffic spike during peak sales without SLA breaches. Costs rose only 12 % due to efficient GPU usage and auto‑scaling policies—demonstrating *ownership* of both performance and budget.

**Key Learnings**  
- Bandwidth (Kinesis throughput) is a precondition for latency; you can’t lower latency if the channel is saturated.  
- Balancing **latency** against **throughput** requires iterative profiling and cost‑benefit trade‑offs.  

This experience reinforced Amazon’s principles of *Customer Obsession* (fast, reliable service), *Ownership* (end‑to‑end pipeline stewardship), and *Dive Deep* (data‑driven decisions).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
