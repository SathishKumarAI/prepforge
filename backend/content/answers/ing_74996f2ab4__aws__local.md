---
qid: ing_74996f2ab4__aws__local
question: 'Explain: Approach #1: Synchronous communication — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 460
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:49:26-05:00'
sources: []
---

**Situation & Task**  
At a previous e‑commerce start‑up I led the redesign of our product‑recommendation crawler that ran every hour to ingest competitor listings. The existing batch job took ~12 h, causing stale data and a 4 % drop in conversion.

**Action – Synchronous Design**  
I re‑architected the crawler as an **event‑driven microservice** using **AWS Lambda** (Python) triggered by **Amazon EventBridge** every 15 min. Each Lambda pulls the target URL, parses the HTML with **BeautifulSoup**, and writes a JSON payload to **S3**. A downstream **Step Functions** state machine orchestrates parallel calls, ensuring that all URLs in a batch finish before moving to analytics.

*Key AWS services:*  
- EventBridge (schedule) – low‑cost, high‑resolution timer  
- Lambda – serverless, scales to thousands of concurrent invocations; pay per 100 ms  
- S3 – durable object store for raw crawl data  
- Step Functions – coordination and error handling  

**Result**  
*Latency*: Crawl completion time dropped from 12 h to <30 min (≈90 % faster).  
*Cost*: Lambda reduced compute spend by 70 % vs EC2‑based workers.  
*Accuracy*: Real‑time data improved conversion lift by **3.5 %** in A/B test.

**Reflection – Bar‑raiser notes**  
- *Ownership*: I owned the end‑to‑end pipeline and rolled it out with zero downtime.  
- *Dive Deep*: We logged latency per URL, identified a 400 ms bottleneck in DNS resolution, and added **Route 53 Resolver endpoints** to cut it by 60 %.  
- *Learning from Failure*: The first rollout hit throttling; we introduced exponential back‑off in Step Functions, turning an outage into a resilience lesson.  

*Leadership Principles invoked:* **Customer Obsession**, **Ownership**, **Bias for Action**, and **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
