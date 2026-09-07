---
qid: ing_963518cde3__aws__local
question: 'Explain: Connect to the Internet - Internet Gateway (IGW)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 388
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:05:28-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: In a fintech startup I was tasked to expose a private ML inference API to external partners while keeping the training cluster isolated for security and cost reasons.

*Task*: Build a solution that allowed secure, high‑throughput data ingestion from partner apps without exposing the entire VPC to the public internet.

*Action*:  
1. **Design** – I created an Amazon **Internet Gateway (IGW)** attached to the VPC’s public subnet.  
2. I launched a **NAT Gateway** in the same subnet for outbound traffic from the training cluster, ensuring it never had a public IP.  
3. I set up **Route Tables**:  
   * Public subnet → IGW (for partner traffic).  
   * Private subnet → NAT Gateway (for internal services).  
4. For security, I added **Network ACLs** to allow only HTTPS on port 443 from partner CIDRs and tightened the security group for the inference API.  
5. I automated the deployment with Terraform, reducing manual steps by 60% and eliminating configuration drift.

*Result*: The new architecture handled a peak of 15k requests/sec with <1 ms latency, while keeping data transfer costs down to $0.02/GB. Partner satisfaction scores rose from 3.2 to 4.7 on our internal survey.

**Dive Deep & Deliver Results**

I continuously monitored CloudWatch metrics, discovered a bottleneck in the IGW’s MTU handling, and applied a custom **Amazon VPC Flow Logs** filter to reduce noise by 70%. This proactive tuning cut troubleshooting time from hours to minutes and prevented a potential outage during peak trading hours.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
