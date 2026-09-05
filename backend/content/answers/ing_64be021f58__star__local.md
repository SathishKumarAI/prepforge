---
qid: ing_64be021f58__star__local
question: What are the three places where one can place LB’s in a scalable, reduntant
  web application?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 386
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:49:07-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with revamping a cloud‑native e‑commerce platform that had been hitting 60 % CPU on the API gateway during flash sales, causing latency spikes for customers.

**Task:**  
I needed to design a highly available, horizontally scalable architecture that could absorb traffic surges while keeping response times below 200 ms and ensuring zero single points of failure.

**Action:**  
1. **Edge Load Balancer (public face):** I deployed an AWS Application Load Balancer in front of the API gateway cluster. It distributes HTTPS requests across multiple EC2 instances, automatically scaling with CloudWatch alarms.  
2. **Service‑to‑Service LB (internal traffic):** Inside the VPC I added a Network Load Balancer to route calls from the API gateway to the microservices (catalog, cart, checkout). This decouples service discovery and lets us roll out new instances without downtime.  
3. **Database Proxy LB:** For the PostgreSQL cluster I introduced PgBouncer behind an internal TCP load balancer, balancing read replicas for queries and routing writes to the master. This reduces lock contention and keeps write latency low.

**Result:**  
After deployment, we saw a 45 % drop in average API response time during peak traffic, a 99.98 % uptime over six months, and a cost saving of ~15 % by right‑sizing instances. I learned that placing load balancers at the edge, between services, and on the database layer is key to building resilient, scalable web apps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
