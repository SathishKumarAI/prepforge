---
qid: ing_069cc4ef59__aws__local
question: 'Explain: 3.2. Self-Registration — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 418
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:40:48-05:00'
sources: []
---

**Situation & Task (S)**  
While building a multi‑tenant SaaS platform for automated marketing campaigns, I was asked to design the “Self‑Registration” flow that lets new merchants spin up their own environment without manual ops intervention. The core requirement was *Service Discovery* – enabling each tenant’s microservice instances to locate one another dynamically in a highly available and secure way.

**Action (A)**  
I chose **AWS Cloud Map** as the discovery registry because it natively integrates with ECS/EKS, supports health‑check filtering, and is cost‑effective. Each tenant’s services register under a namespace (`tenant-<id>.example.com`) using the AWS SDK; health checks run every 30 s against the ECS task’s `/health` endpoint.  

To keep latency low I paired Cloud Map with **AWS App Mesh** so that inter‑service traffic flows through Envoy proxies, giving me fine‑grained traffic policies and metrics via Prometheus. For cross‑region failover I configured a Route 53 *Failover* record set that points to the primary region’s Cloud Map namespace; if health checks fail, DNS automatically routes to a standby region.

**Result (R)**  
After launch, tenant onboarding time dropped from 4 days to **under 10 minutes**, and we saw a **35% reduction in manual ops tickets**. The architecture handled >200k concurrent registration requests during peak promotion periods with <5 ms average lookup latency, all while keeping monthly costs under $2k.

**Reflection (D)**  
I learned that “Dive Deep” into the health‑check mechanics was critical; a misconfigured check caused 15 % of false positives. Moving forward I’ll add automated rollback logic for failed registrations and explore **AWS PrivateLink** to eliminate public DNS exposure, reinforcing *Ownership* and *Customer Obsession*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
