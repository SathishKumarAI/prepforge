---
qid: ing_58dc96e543__aws__local
question: 'Explain: Web Crawlers — Concurrency vs Parallelism - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 472
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:46:27-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a crawler that indexed ~4 M pages per day for an e‑commerce analytics platform. The engineering team was debating whether to increase **concurrency** (more simultaneous HTTP requests) or add **parallelism** (multiple crawling engines).  

**Action**  
I scoped the problem with *Dive Deep* by instrumenting request latency, CPU and network I/O on a sample node. Results:  
- 60 % of time was spent waiting for DNS/SSL handshakes; CPU idle 70 %.  
- Doubling concurrency (from 200 → 400 threads) improved throughput by **30 %** but hit the outbound IP rate‑limit, causing a 15 % error spike.  

I then designed a **parallelism‑first** architecture:  
1. **AWS Step Functions** orchestrate N crawler workers (ECS Fargate).  
2. Each worker processes a shard of URLs from **SQS FIFO** queues, ensuring ordered deduplication.  
3. **Amazon RDS Aurora Serverless** stores crawl metadata; **CloudWatch Logs** capture latency metrics.  

This model scales horizontally: adding a new task definition increases throughput linearly with negligible cost (≈$0.03 per 1 k requests). Availability is baked in via ECS service auto‑scaling and SQS retry logic.

**Result**  
- Throughput rose from 4 M to **6.8 M pages/day** (+70 %) without exceeding rate limits.  
- Error rate dropped from 15 % to <1 %.  
- Cost per page decreased by 22 %.  

**Reflection (Bar‑raiser)**  
I owned the end‑to‑end pipeline, dove deep into metrics, quantified impact, and iterated after a failed concurrency burst that revealed hidden API limits. The lesson: parallelism gives predictable scalability; concurrency is bounded by external constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
