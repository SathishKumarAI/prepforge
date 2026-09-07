---
qid: ing_31fbc47f1e__aws__local
question: 'Explain: have added here and we have added — UBER System design | OLA system
  design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 436
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:17:59-05:00'
sources: []
---

**Situation / Task**  
At my last role I was tasked to build a real‑time ride‑matching service for a city‑wide mobility platform (similar to Uber/Ola). The goal was to reduce passenger wait time by 30 % while keeping operational costs < 15 %.  

**Action**  
I designed a stateless microservice architecture on **AWS Lambda** + **API Gateway** to handle request bursts, and used **Amazon DynamoDB** for fast read/write of driver–passenger state (lat/long, status). For geospatial queries I leveraged **DynamoDB Global Secondary Indexes** with **Geo Library**.  
To scale the matching engine I introduced a **Kinesis Data Stream** that feeds into an **AWS Fargate** container running a lightweight Python service using *scikit‑learn* to predict ETA and cluster drivers by proximity (k‑means). The predictions are cached in **ElastiCache (Redis)** for sub‑100 ms lookup.  
I added a **CloudWatch anomaly detector** on latency metrics; when spikes exceeded 2× the mean, an auto‑scale rule spun up additional Fargate tasks.  

**Result**  
After deployment, average passenger wait time dropped from 8 min to 5.3 min (a 33 % reduction), and cost per trip fell by 12 %. The system handled a peak of 50k concurrent trips with <1 ms latency for 95 % of requests.  

**Reflection**  
I practiced *Ownership* by iterating on feedback loops, *Dive Deep* into latency traces, and *Bias for Action* by rolling out the Lambda layer before full production testing. The biggest failure was an initial over‑provisioned DynamoDB table that inflated costs; learning it to enable auto‑scaling resolved the issue.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
