---
qid: ing_636ef621c1__aws__local
question: 'Explain: Public APIs — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 674
total_tokens: 907
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:10:04-05:00'
sources: []
---

**What’s a public API?**  
A *public API* is a contract that lets external developers call into your service over the network (HTTP/REST, gRPC, etc.). It exposes resources—e.g., “Get‑User”, “Predict‑Score”—and defines input/output schemas, authentication, and rate limits.  

---

## STAR – Customer Obsession & Ownership  
**S**ituation: Our ML platform had an internal inference endpoint that was slow (≈250 ms) and tightly coupled to our monolith. External partners complained that they couldn’t embed predictions in real‑time dashboards.  
**T**ask: Expose a *public* inference API with <50 ms latency, 99.9% availability, and zero downtime during upgrades.  
**A**ction:  
1. **Decouple** the model from the monolith; deploy each model as a container on ECS Fargate behind an Application Load Balancer (ALB).  
2. Use **Amazon API Gateway** to provide a REST endpoint with OAuth 2.0 and throttling (5 req/s per client).  
3. Cache recent predictions in **ElastiCache‑Redis** (TTL 30 s) to reduce compute load.  
4. Implement **Lambda@Edge** for request validation, ensuring only whitelisted IP ranges hit the backend.  
5. Enable **CloudWatch Alarms** on latency and error rate; auto‑scale ECS tasks based on CPU utilization.  

**R**esult: Latency dropped from 250 ms to 42 ms (−83%), uptime improved to 99.95%, and partner usage grew 4× in the first quarter, generating an additional $1.2M ARR.

---

## Technical Design Highlights  
| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| Load Balancing | ALB + API Gateway | Layer‑7 routing & throttling |
| Compute | ECS Fargate | No server management, auto‑scaling |
| Caching | ElastiCache‑Redis | Reduces inference cost by 30% |
| Security | Cognito/OAuth + WAF | Protects public surface |
| Observability | CloudWatch + X-Ray | Trace latency and error root causes |

**Scalability:** Fargate tasks scale horizontally; Redis scales via cluster mode.  
**Availability:** Multi‑AZ deployments, ALB health checks, API Gateway’s regional endpoints.  
**Cost:** Pay‑as‑you‑go for compute; caching reduces GPU usage.  

---

### Bar‑raiser signals I’d listen for  
- **Ownership:** Did the candidate take end‑to‑end responsibility?  
- **Dive Deep:** How did they measure latency, identify bottlenecks, and quantify improvements?  
- **Quantified Impact:** Real numbers (latency %, revenue) show depth.  
- **Learning from Failure:** Mentioned fallback to monolith if API fails—shows risk mitigation.

---

**Bottom line:** A public ML inference API is a well‑defined contract that exposes model predictions over the network, built with AWS services that balance speed, reliability, and cost while keeping the customer’s needs at the core.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
