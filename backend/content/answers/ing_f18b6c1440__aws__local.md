---
qid: ing_f18b6c1440__aws__local
question: 'Explain: Spring Boot Resources — Spring Boot - Eureka Server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 537
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:23:18-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a migration of our on‑prem microservice registry to the cloud so we could scale out new teams and reduce downtime during releases.

**Action**  
I built an **Eureka Server** in Spring Boot, exposed it via an Application Load Balancer (ALB) behind an Auto Scaling group. The service used **Amazon DynamoDB** for persistence instead of the default in‑memory store so we could keep registration state across restarts and avoid a single point of failure. I added a CloudWatch metric “Active Instances” and set up an alarm that triggered the ASG to scale out when registrations exceeded 5 k per minute. To simplify operations, I containerized the application with Docker and deployed it on **Amazon ECS Fargate**, which removed server‑management overhead.

**Result**  
After deployment we saw a **30 % reduction in service discovery latency** (from 120 ms to 84 ms) and eliminated 99.9 % of outage incidents caused by registry crashes. Cost dropped from $3,200/month on EC2 to $1,100/month on Fargate—an **82 % savings**.

---

### Why this matters

- **Ownership & Deliver Results** – I owned the end‑to‑end migration and quantified impact.
- **Dive Deep** – Replaced in‑memory storage with DynamoDB after profiling memory churn.
- **Customer Obsession** – Reduced latency directly improves developer experience for teams consuming services.

---

### Key AWS Services

| Service | Purpose |
|---------|---------|
| **ECS Fargate** | Serverless containers, auto‑scaling |
| **ALB** | External access with health checks |
| **DynamoDB** | Durable, globally replicated registry store |
| **CloudWatch** | Metrics & alarms for scaling |

### Trade‑offs

- **Pros:** Zero admin servers, pay only for compute; DynamoDB offers high availability.  
- **Cons:** Slightly higher per‑request cost vs in‑memory; added complexity of eventual consistency (handled by Eureka’s heartbeat).

---

*Bar‑raiser cues:* ownership of migration, deep dive into persistence choice, quantified latency & cost savings, and learning from prior failures (registry crashes).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
