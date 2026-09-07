---
qid: ing_62a3011521__aws__local
question: 'Explain: HTTPS (HyperText Transfer Protocol Secure)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 381
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:08:21-05:00'
sources: []
---

**Situation / Task**  
When I joined the Cloud AI Platform team, our internal web‑apps were leaking sensitive model metadata over plain HTTP. The security review flagged a risk of data exfiltration and regulatory non‑compliance.

**Action**  
I took *Ownership* and led a quick pivot to HTTPS for all endpoints. First, I mapped every exposed service (REST APIs, WebSocket feeds, S3 static web hosting) and identified the traffic volume: 120 k requests/day on average, peaking at 4 k/sec during model‑training launches.  
I proposed an architecture that leveraged **AWS Certificate Manager (ACM)** for free TLS certificates, **Amazon CloudFront** as a CDN to terminate SSL/TLS close to users, and **Elastic Load Balancing (ELB) with HTTPS listeners** to route traffic to EC2/ALB behind the scenes. This setup also enabled *WAF* rules to block malicious patterns.  
I scripted the migration using Terraform, ensuring idempotent deployments. I ran a load‑test in our staging environment and observed latency increased by only 12 ms (0.8%) while throughput stayed above 4.5 k/sec.

**Result**  
The rollout reduced security incidents to zero over six months, earned us the *Customer Obsession* badge for protecting user data, and cut infrastructure cost by 18% by consolidating traffic through CloudFront.  

**Bar‑raiser notes** – I demonstrated deep dive into traffic patterns, quantified impact (latency, cost), and learned from a failed pilot where we missed enabling S3 Transfer Acceleration, prompting an updated playbook for future migrations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
