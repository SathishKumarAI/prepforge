---
qid: ing_243abb4907__aws__local
question: What is a Reverse Proxy? — Proxy vs Reverse Proxy (Explained with Examples)
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 574
total_tokens: 810
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:48:56-05:00'
sources: []
---

**Answer**

> *“A reverse proxy sits in front of one or more web servers and forwards client requests to them while hiding the backend topology.”*  

---

### Behavioral (STAR)

**Situation:** At my previous role we had a legacy micro‑service architecture behind an on‑prem load balancer.  
**Task:** Reduce latency, enforce TLS termination, and enable A/B testing without redeploying services.  
**Action:** I proposed deploying **AWS Application Load Balancer (ALB)** as a reverse proxy. Configured path‑based routing (`/api/* → svc‑api`, `/admin/* → svc‑admin`), enabled *WAF* for OWASP rules, and set up *Lambda@Edge* to rewrite URLs for blue/green releases.  
**Result:** Latency dropped 35 % (from 250 ms to 160 ms), TLS handshake cost was offloaded from back‑ends, and we cut operational costs by $4k/month compared with a custom Nginx cluster.  

---

### Technical / System

| Requirement | Design Choice | AWS Service | Scalability | Availability | Cost |
|-------------|---------------|------------|-------------|--------------|------|
| TLS termination | Offload to proxy | ALB + ACM | Auto‑scales by request rate | 99.99 % SLA | Pay per GB processed |
| Routing & load balancing | Path/host based routing | ALB | Horizontal scaling, zero‑downtime deployments | Built‑in HA across AZs | Minor increase over ELB |
| Security filtering | WAF + Shield | AWS WAF / Shield | Global edge caching | 99.95 % SLA | Pay per rule and requests |
| Edge logic (e.g., auth rewrite) | Serverless rewrites | Lambda@Edge | Scales with CloudFront | Edge‑location failover | Pay per invocation |

**Trade‑offs:** Using ALB keeps us within AWS managed services, reducing ops. The only trade‑off is the slight increase in request latency (~5 ms) due to extra hop; however, this is offset by the 35 % overall performance gain from backend offloading.

---

### Bar‑raiser Focus

- **Ownership:** I owned the migration and rolled it out with zero downtime.  
- **Dive Deep:** I benchmarked TLS handshake times and quantified latency improvements.  
- **Quantified Impact:** $4k/month savings, 35 % latency reduction.  
- **Learning from Failure:** Initial mis‑configuration caused a brief spike; we added CloudWatch alarms to catch such regressions early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
