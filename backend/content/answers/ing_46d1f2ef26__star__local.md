---
qid: ing_46d1f2ef26__star__local
question: 'Explain: Designing Subnets in Cloud Systems — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 328
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:50:16-05:00'
sources: []
---

**Situation:**  
In a recent migration of our customer‑support platform to AWS, the legacy on‑prem network had a flat /16 address space that caused IP exhaustion and made it hard to isolate services for security reviews. We needed a clean split between front‑end web servers, API gateways, internal microservices, and a data lake.

**Task:**  
Design a subnet architecture that maximizes IP efficiency, enforces least‑privilege communication, and supports future scaling up to 10k VMs without re‑addressing.

**Action:**  
I chose a CIDR of /14 for the VPC, then carved it into five subnets: public (web) /20, private API /21, internal microservices /19, database tier /22, and data lake /23. I applied Network ACLs to restrict inbound traffic to only required ports and used security groups for fine‑grained IAM between services. For the database subnet I enabled VPC flow logs and enforced encryption in transit via TLS. To future‑proof scaling, I reserved a /20 block for burst capacity and set up Terraform modules that auto‑generate CIDR blocks based on region load.

**Result:**  
The new design reduced IP waste by 40%, cut unauthorized access attempts by 70% (measured from CloudTrail logs), and allowed us to spin up an extra 2,000 microservice instances within minutes. I learned the value of aligning subnet sizing with real traffic patterns and the importance of separating concerns early in cloud architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
