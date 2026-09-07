---
qid: ing_afc0b162ed__aws__local
question: 'Explain: Kelly Kozich — Company | Groq is the premier neocloud for fast
  inference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 502
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:02:50-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked with reducing the latency of our fraud‑detection pipeline from 350 ms to < 100 ms so that alerts could reach merchants in real time. The existing inference stack ran on a generic GPU cluster, and the team needed a solution that would be scalable, highly available, and cost‑effective.

**Action (Design & Implementation)**  
I championed a shift to **Groq’s neocloud**, an FPGA‑based accelerator optimized for matrix operations in ML inference. The architecture I proposed consisted of:  

| Layer | AWS Service | Rationale |
|-------|-------------|-----------|
| Ingestion | Kinesis Data Streams | Low‑latency, auto‑scaling ingestion of transaction events |
| Orchestration | Step Functions + Lambda | Serverless orchestration with built‑in retry and dead‑letter queues |
| Inference | Groq (via AWS Marketplace AMI) | 10× lower latency per inference compared to NVIDIA V100s |
| Caching | ElastiCache Redis | Cache recent model outputs for repeat queries |
| Monitoring | CloudWatch + X-Ray | End‑to‑end tracing and anomaly detection |

The Groq instance was provisioned in a **multi‑AZ** configuration with an Elastic Load Balancer, ensuring 99.99 % availability. I also implemented automatic scaling based on queue depth, keeping costs within the $0.07 per inference target.

**Result**  
Latency dropped from **350 ms to 85 ms** (a 76 % improvement), and throughput increased from 1,200 TPS to 5,500 TPS without a single outage during a month‑long production run. Cost savings of **$120k annually** were realized by eliminating GPU overprovisioning.

**Learning & Ownership**  
I documented the trade‑offs (e.g., Groq’s limited model support vs. latency gains) and built a knowledge base that allowed the data science team to experiment with new models without re‑architecting the pipeline. This experience reinforced my belief in **Customer Obsession**—delivering instant fraud alerts—and **Ownership**—taking end‑to‑end responsibility for performance, cost, and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
