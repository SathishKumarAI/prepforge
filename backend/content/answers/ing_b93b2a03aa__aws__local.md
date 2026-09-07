---
qid: ing_b93b2a03aa__aws__local
question: 'Explain: SRV (Service) Record — DNS Record Types You Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 489
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:22:52-05:00'
sources: []
---

**Situation – Task**  
While leading a migration of our customer‑facing API gateway to AWS, I discovered that the existing on‑prem DNS setup was causing intermittent outages when scaling new microservices. The team needed an authoritative DNS record type that could route traffic across multiple AZs and support weighted routing for blue/green deployments.

**Action – Design & Implementation**  
I chose **SRV (Service) records** in Amazon Route 53 because they allow clients to query the desired protocol, port, and priority for a service—exactly what our API gateway required. I implemented:

| AWS Service | Role |
|-------------|------|
| **Route 53** | SRV record authoritatively delegating `api.example.com` to multiple endpoints (HTTP/HTTPS on different ports). |
| **AWS Global Accelerator** | Ensures low‑latency, highly available connections by routing traffic to the nearest healthy endpoint. |
| **CloudWatch Alarms** | Trigger alerts if a target’s health checks fail; automatically adjust SRV priority values via Lambda. |

*Scalability*: Route 53 scales horizontally, handling millions of queries per second without additional provisioning.  
*Availability*: Leveraging multiple AZs and Global Accelerator gives 99.999% availability.  
*Cost*: SRV records incur no extra charges beyond standard Route 53 queries; the cost savings from reduced failover traffic outweighed Global Accelerator’s $0.025/GB rate.

**Result – Impact**  
Post‑migration, DNS query latency dropped by **30 %**, and we eliminated the 5 min outage window during service updates—down from an average of **12 min** in the legacy system. Monthly DNS cost decreased by **$1,200** while maintaining higher reliability.

**Reflection – Bar‑raiser Signals**  
I demonstrated *Ownership* by re‑architecting the DNS layer without external vendor help; *Dive Deep* through detailed performance metrics and cost analysis; and *Bias for Action* by deploying within two sprints. The failure learning loop—monitoring SRV priority changes—enabled continuous improvement, aligning with Amazon’s focus on delivering customer‑centric results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
