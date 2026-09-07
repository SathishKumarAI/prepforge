---
qid: ing_bf645fab02__aws__local
question: 'Explain: Ace the System Design Interview — System Design Interview Cheat
  Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 606
total_tokens: 842
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:36:52-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession*, *Ownership*  
> **Behavioral:** STAR + data; *Dive Deep* and *Bias for Action*

---

### Situation
When I joined a fintech startup, the product team needed a scalable ML inference platform that could serve 50 k predictions per second while keeping latency under 100 ms. The existing monolithic Flask app was hitting CPU limits and had no SLA.

### Task
Design a **serverless ML inference micro‑service** that delivers low latency, high availability, and cost control, with a clear rollback plan.

### Action
1. **Requirements & Trade‑offs**  
   *Latency < 100 ms* → edge cache + warm containers.  
   *Throughput 50 k/s* → horizontal scaling.  
   *Cost*: avoid overprovisioned EC2; use pay‑as‑you‑go.

2. **Design & AWS Services**  
   - **API Gateway (v2)** for request routing, throttling, and WAF protection.  
   - **Lambda@Edge + Lambda**: Edge functions for 1 ms warm cache; core inference in Lambda with *Provisioned Concurrency* set to 200 to avoid cold starts.  
   - **SageMaker Endpoint (Realtime)** as the model host—auto‑scaling based on CPU utilization, with a 5× buffer during peak hours.  
   - **DynamoDB** for request logging and A/B test flags; *on-demand* capacity keeps costs low.  
   - **CloudWatch + X-Ray** for observability; alert if latency > 90 ms.

3. **Scalability & Availability**  
   *Multi‑region deployment*: primary in us-east-1, failover in eu-west-2 with Route 53 health checks (latency routing).  
   *Zero‑downtime* by blue/green SageMaker endpoints; can roll back within 30 s.

4. **Cost Optimization**  
   Estimated $3k/month vs. the prior $12k/mon for EC2 + GPU servers—an 80 % reduction, while maintaining SLA.

### Result
- Latency dropped to 60 ms average (down from 250 ms).  
- Throughput scaled to 70 k/s without throttling.  
- Cost cut by **$9k/month**.  
- Incident response time improved; automated rollback reduced downtime from 15 min to < 2 min.

### Learnings
*Dive Deep* into cold‑start profiles revealed the need for *Provisioned Concurrency*. I documented the failure case (a sudden traffic spike causing throttling) and built a dynamic scaling rule that now triggers before thresholds are breached. This ownership mindset keeps the system resilient and cost‑effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
