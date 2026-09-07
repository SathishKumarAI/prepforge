---
qid: ing_8f17ee15e6__aws__local
question: Compare MCP's transports. When would you choose each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 620
total_tokens: 850
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:49:56-05:00'
sources: []
---

**Context (S)**  
While modernizing our on‑premise integration hub to the MuleSoft Cloud Platform (MCP), I led a team that had to decide between three key transports: **HTTP**, **JMS (ActiveMQ)**, and **TCP**. The goal was to expose legacy services securely while keeping latency below 200 ms for downstream e‑commerce APIs.

**Task (T)**  
Select the appropriate transport per service type, justify trade‑offs in scalability, availability, and cost, and document a migration plan that preserves 99.9% uptime.

**Action (A)**  

| Transport | When to Use | Key AWS Services & Design |
|-----------|-------------|--------------------------|
| **HTTP/HTTPS** | Stateless REST endpoints, public APIs, or when we need built‑in TLS termination and throttling. | API Gateway + Lambda or EC2 Auto Scaling Group; use WAF for DDoS protection. |
| **JMS (ActiveMQ)** | Heavy‑weight, message‑driven workflows requiring guaranteed delivery and transactional support (e.g., order processing). | Amazon MQ (ActiveMQ) in a VPC with CloudWatch metrics; auto‑scale brokers via AWS OpsWorks or ECS. |
| **TCP** | Legacy protocols (e.g., FIX, proprietary sockets) that cannot be wrapped in HTTP. | EC2 instances behind an Application Load Balancer with target groups; use Elastic IPs for stable endpoints. |

I performed a cost/latency analysis:  
- HTTP via API Gateway saved ~$1k/month vs. running 3 dedicated EC2 instances for TCP.  
- JMS on Amazon MQ reduced operational overhead by 40% (no in‑house broker maintenance).  

**Result (R)**  
Post‑migration, we achieved **99.95% availability**, cut integration latency from 350 ms to 180 ms, and lowered ops cost by **$12k/month**. The team adopted a “Zero‑Downtime” rollout plan that met the *Deliver Results* principle while *Owning* every phase of the migration.

**Bar‑raiser notes**  
- Demonstrated ownership: I owned the full decision matrix and risk mitigation.  
- Dive Deep: I quantified latency, cost, and SLA impacts for each transport.  
- Learned from failure: The initial TCP rollout hit a bottleneck; we switched to NLB + Auto Scaling, learning that load balancing is essential for socket‑based traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
