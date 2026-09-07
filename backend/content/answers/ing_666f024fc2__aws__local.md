---
qid: ing_666f024fc2__aws__local
question: 'Why is Service Discovery Important? — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 607
total_tokens: 842
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:16:37-05:00'
sources: []
---

**Why Service Discovery Matters (Amazon Way)**  

*Leadership Principles:* **Customer Obsession** – customers expect zero‑downtime and instant feature rollouts; **Ownership** – I own the end‑to‑end reliability of our microservices.

---

### Situation
In 2023, a global e‑commerce platform migrated from monolith to 350 stateless services. The on‑prem DNS layer caused 12 % of outage incidents during traffic spikes because new instances weren’t registered in time.

### Task
Design a resilient service discovery mechanism that guarantees *100 ms* latency for lookups, scales to >10k services, and reduces incident rate by ≥20 %.

### Action
1. **Requirements & Design**  
   - *Dynamic registration/deregistration* → use **AWS Cloud Map** with health‑checks (EC2/ALB).  
   - *Low‑latency resolution* → cache endpoints in each service’s local **Redis** cluster, refreshed every 30 s from Cloud Map.  
   - *Failover & redundancy* → replicate Cloud Map data across two AZs; use **Route 53 Resolver** for cross‑account discovery.

2. **Implementation**  
   ```yaml
   Service:
     Type: AWS::ServiceDiscovery::Service
     Properties:
       Name: payment-service
       NamespaceId: !Ref PaymentNamespace
       HealthCheckCustomConfig: { FailureThreshold: 1 }
   ```

3. **Scalability & Cost**  
   - Cloud Map charges $0.001 per lookup; with 10k services and 5 M lookups/day → <$50/month.  
   - Redis cluster (cache) cost ~ $200/month, but cuts DNS traffic by 95 %.

### Result
- **Incident reduction:** 22 % drop in service‑unavailable incidents.  
- **Latency:** Average lookup <8 ms vs previous 120 ms.  
- **Operational cost:** <$250/month for discovery services.

---

**Bar‑raiser takeaways**

| What they listen for | Why it matters |
|----------------------|----------------|
| **Ownership** – I drove the entire migration, from requirement gathering to post‑deployment monitoring. | Shows end‑to‑end accountability. |
| **Dive Deep** – detailed cache strategy, health‑check thresholds, cost modeling. | Demonstrates depth of understanding. |
| **Quantified Impact** – 22 % incident reduction, <8 ms latency. | Concrete evidence of value delivered. |
| **Learning from Failure** – previous DNS spikes taught me the need for caching and cross‑AZ redundancy. | Indicates continuous improvement mindset. |

This approach aligns with Amazon’s customer‑centric focus while ensuring operational excellence at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
