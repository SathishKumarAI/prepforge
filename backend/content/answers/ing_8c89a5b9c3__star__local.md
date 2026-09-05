---
qid: ing_8c89a5b9c3__star__local
question: 'Explain: Load Balancer Redundancy — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 302
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:13:53-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a new e‑commerce microservice that handled checkout requests. During beta, our single NGINX load balancer on an EC2 instance crashed twice in a week due to hardware failures, causing a 4% spike in cart abandonment.

**Task:**  
I had to design and implement a highly available load balancing layer so that any single point of failure would not affect user experience or revenue.

**Action:**  
First, I introduced an AWS Elastic Load Balancer (ELB) as the front‑door gateway. I then set up two NGINX instances in separate Availability Zones behind it, each configured with health checks on `/health`. To keep session affinity consistent, I enabled sticky sessions via ELB’s cookie mechanism. For failover, I added Route 53 latency routing to direct traffic to the nearest healthy ELB endpoint and used CloudWatch alarms to auto‑scale the NGINX pool based on CPU usage. Finally, I wrote Terraform scripts to version control the entire infra and automated the deployment with CI/CD.

**Result:**  
After rollout, we observed a 99.97% uptime for the checkout service over three months, reducing cart abandonment by 12%. The team learned that coupling ELB with zone‑redundant application instances and health checks is essential for robust availability in distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
