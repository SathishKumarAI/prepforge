---
qid: ing_4909b48bea__aws__local
question: 'Explain: Service discovery — A pattern language for microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 419
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:10:49-05:00'
sources: []
---

**Situation & Task**  
I was leading a team that built a serverless e‑commerce platform on AWS. The product had 12 stateless microservices written in Go and Python that needed to locate each other dynamically as we scaled from 200 to 10,000 concurrent users daily. Our goal: reduce latency of inter‑service calls by 30 % while keeping costs below $5k/month.

**Action (Dive Deep + Invent & Simplify)**  
I introduced **Service Discovery** using a pattern language that maps each service’s name → endpoint, version, and health status.  
* **AWS Cloud Map** was the core – it stores DNS records and integrates with Route 53 for low‑latency lookups.  
* Each microservice registers itself on startup via a Lambda trigger that writes its IP/port to Cloud Map and sets a TTL of 60 s.  
* Consumers query Cloud Map using **AWS SDK**; if the record is stale, they fall back to an internal cache (Redis‑compatible ElastiCache).  
* For high availability I enabled *cross‑region replication* in Cloud Map and used *Route 53 health checks* to fail over automatically.

**Result**  
- Latency dropped from 120 ms to 78 ms on average (+35 %).  
- Operational overhead decreased by 70 % (no manual config updates).  
- Cost remained $4.2k/month, a 15 % saving compared to the previous Consul‑based approach.

**Reflection & Ownership**  
I documented the pattern as an internal “Microservice Playbook,” mentored junior engineers on Cloud Map usage, and set up automated tests that assert discovery correctness after each deployment. This experience reinforced my belief in **Customer Obsession**—making our platform resilient for users—and **Ownership**—owning both design and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
