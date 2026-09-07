---
qid: ing_928f49933f__aws__local
question: 'Explain: Robots and Exclusions — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 487
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:57:36-05:00'
sources: []
---

**Situation & Task**  
While leading a data‑science team at my previous company, we needed to build a **web‑crawler** that respected `robots.txt` and other exclusion rules. The goal was to collect high‑quality training data for an NLP model while staying compliant with legal constraints.  

**Action**  
I owned the architecture:  

1. **Service Layer** – AWS Lambda (Python) orchestrated crawl jobs, triggered by EventBridge schedules.  
2. **Queueing & Scaling** – Amazon SQS held URL batches; the DLQ captured malformed or disallowed URLs.  
3. **Exclusion Engine** – A small DynamoDB table cached `robots.txt` directives per domain; a Lambda layer fetched and parsed them on demand, caching results in ElastiCache Redis for 24 h to reduce latency.  
4. **Storage & Processing** – Fetched pages were stored in S3 (Object Lifecycle: archive after 90 days). A Glue job transformed raw HTML into JSONL for downstream ML pipelines.  

I introduced a **retry policy** that capped requests per domain at 2 req/s to honor crawl‑rate limits, and used CloudWatch metrics to enforce compliance thresholds.

**Result**  
Within three months the crawler processed **12 M pages**, yielding a 35% higher recall in our NER model compared to prior data. Operational costs dropped by **28 %** versus our legacy on‑prem solution because of serverless scaling and efficient caching.  

**Leadership Principles Highlighted**  
- *Ownership* – I drove the end‑to‑end design, from compliance checks to cost optimization.  
- *Dive Deep* – I dissected `robots.txt` parsing, latency trade‑offs, and DynamoDB capacity planning.  

**Bar‑raiser Takeaway**  
The interviewer will look for clear ownership, measurable impact (page count & model improvement), deep technical decisions (caching strategy, rate limiting), and an honest reflection on the initial over‑provisioning that led to the cost savings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
