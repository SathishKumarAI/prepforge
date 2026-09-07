---
qid: ing_4ca5315d38__aws__local
question: 'Explain: Add More Application Servers — Client-Server Architecture | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 443
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:18:19-05:00'
sources: []
---

**Situation & Task**  
I led a 12‑person team tasked to scale an on‑line recommendation engine that served 2 M active users and generated $4 M/month in revenue. The monolithic client‑server stack was hitting CPU > 95 % during peak hours, causing 15 % latency increase and a 3 % drop in conversion.

**Action (Design & Implementation)**  
* *Customer Obsession / Ownership*: I rewrote the backend as a **microservice architecture** on AWS, splitting the recommendation logic into stateless Lambda functions behind an Application Load Balancer (ALB).  
* *Dive Deep*: Benchmarked current CPU and memory usage with CloudWatch; identified that each request required 300 ms of computation.  
* *AWS Services*:  
  - **Amazon ECS (Fargate)** for containerized services (cost‑effective, zero infra ops).  
  - **Amazon DynamoDB** for session caching (high write throughput, low latency).  
  - **Amazon CloudFront** to cache static assets globally.  
  - **AWS X-Ray** for tracing and automated alerts on SLA breaches.  

* *Scalability & Cost*: Autoscaling based on CPU > 70 % triggered additional task counts; this kept average cost at $18k/month versus the prior $30k. Availability hit 99.99 % (single‑AZ) by adding an ELB health check and a standby ECS cluster in another AZ.

**Result**  
Latency dropped from 450 ms to 120 ms, converting 3 % more users → $120k/month incremental revenue. The solution also reduced operational overhead by 40 %, allowing the team to focus on feature development.

**Bar‑raiser takeaways** – I demonstrated *ownership* (full ownership of redesign), *dive deep* (metrics‑driven decisions), quantified impact, and learned from a failure: initially over‑provisioned Lambda memory which we later tuned for cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
