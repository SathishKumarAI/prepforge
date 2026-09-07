---
qid: ing_d1b776424f__aws__local
question: 'Explain: AWS Availability Regions and Availability Zones'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 472
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:14:56-05:00'
sources: []
---

**Situation (S)**  
While launching a global e‑commerce platform in 2024, I had to guarantee > 99.999 % uptime for the checkout service that processed ~10 k orders per second. The risk was a single data center outage dropping revenue and damaging customer trust.

**Task (T)**  
Design an architecture that leverages AWS Availability Regions & Zones, meets SLA, and stays cost‑effective.

**Action (A)**  
I mapped the workload to **two adjacent regions** (US‑East‑1 & US‑West‑2) and deployed **three AZs per region**. I used:

| Service | Purpose | Scalability/Availability |
|---------|---------|--------------------------|
| Route 53 + latency‑based routing | Global DNS failover | 99.999% global health checks |
| ELB (ALB) across AZs | Load distribution & HA | Auto‑scales with traffic |
| Aurora Serverless v2 | Stateless DB, auto‑scaling | Multi‑AZ replication, pause when idle |
| S3 + CloudFront | Asset delivery | Edge caching, 99.999% availability |

**Result (R)**  
The architecture delivered **> 99.999 % uptime** during a week‑long cross‑region outage; traffic automatically rerouted to the healthy region with < 2 s latency spike. Cost was controlled: we avoided overprovisioning by using Aurora Serverless and paid only for compute used, saving ~15 % vs. provisioned RDS.

**Leadership Principles Reflected**

- **Customer Obsession** – ensured uninterrupted checkout experience.
- **Ownership & Dive Deep** – selected services, tuned replication, and quantified impact.
- **Bias for Action** – rolled out failover in 48 h, tested with chaos engineering.

This design shows how AWS Availability Regions/Zones can be orchestrated to deliver business‑critical reliability while maintaining cost discipline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
