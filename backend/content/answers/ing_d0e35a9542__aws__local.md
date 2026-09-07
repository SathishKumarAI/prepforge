---
qid: ing_d0e35a9542__aws__local
question: 'Explain: Summary — Proxy vs Reverse Proxy (Explained with Examples)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 558
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:13:18-05:00'
sources: []
---

**Behavioral (Amazon way)**  
*Situation*: While leading a migration of an on‑prem microservice architecture to AWS for a fintech client, the team hit latency spikes during peak load.  
*Task*: I had to design a solution that would expose internal services securely while keeping response times under 50 ms.  
*Action*: I introduced **reverse proxies** (NGINX + ALB) in front of each service cluster, and used **regular proxies** (Squid) inside the VPC for outbound calls. I configured path‑based routing, TLS termination at the ALB, and added WAF rules to block malicious traffic.  
*Result*: Latency dropped from 180 ms to 35 ms (−80%), cost decreased by 15% due to fewer EC2 instances, and customer complaints fell by 90%. I documented the trade‑offs in a run‑book that is now part of our DevOps playbooks.

**Technical / System**  
| Concept | Proxy | Reverse Proxy |
|---------|-------|---------------|
| **Purpose** | Client → External server (e.g., corporate VPN, web crawler). | Internal service → Client (load balancing, TLS offloading). |
| **Typical Use‑Case** | Squid caching for outbound HTTP traffic; SOCKS5 for SSH tunneling. | NGINX/HAProxy in front of a fleet of containerized services; AWS ALB routing to ECS tasks. |
| **AWS Services** | *N/A* (run on EC2 or Fargate). | Application Load Balancer, Network Load Balancer, API Gateway, CloudFront. |
| **Scalability** | Scales horizontally by adding proxy hosts; relies on client‑side concurrency. | Auto‑scales with target groups; integrates with ECS/EKS scaling policies. |
| **Availability** | Depends on the external endpoint’s uptime; can use failover zones. | High availability baked into ALB/ELB; can route to healthy targets only. |
| **Cost Trade‑Offs** | Low overhead if using spot instances; higher for persistent caching layers. | ALB costs per rule & GB processed; reduces EC2 count but adds small per‑request charge. |

**Bar‑raiser signals**: Ownership (I drove the change end‑to‑end), depth (detailed cost/latency analysis), quantified impact, and learning from a failed initial attempt that misused a simple forward proxy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
