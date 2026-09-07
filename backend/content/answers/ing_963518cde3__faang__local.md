---
qid: ing_963518cde3__faang__local
question: 'Explain: Connect to the Internet - Internet Gateway (IGW)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 530
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:33:18-05:00'
sources: []
---

**Clarify**  
The question asks how an *Internet Gateway* (IGW) enables a VPC in AWS to reach the public Internet. I’ll assume we’re talking about EC2 instances that need outbound or inbound traffic and that the interviewer wants both networking fundamentals and practical configuration details.

**Approach**  
1. Define what an IGW is and its placement.  
2. Explain how routing tables use it for external traffic.  
3. Describe security implications (NAT, public IPs).  
4. Mention common pitfalls and how to verify connectivity.

**Depth**  
An Internet Gateway is a horizontally‑scalable, redundant VPC component that attaches to the VPC’s virtual backbone. It provides two key functions:  

* **Route resolution** – The IGW appears as a target in a route table for CIDR `0.0.0.0/0` (IPv4) or `::/0` (IPv6). Traffic destined for outside the VPC is forwarded to the IGW, which then uses the AWS backbone to reach the Internet.  
* **Network address translation** – For instances with public IPs, the IGW performs source/destination NAT automatically; outbound packets get their source IP replaced by the instance’s Elastic IP or assigned public IP, and inbound return traffic is mapped back to the private IP.

When an instance has a public subnet (route table pointing to IGW) and a public IP, it can directly reach the Internet. For instances without public IPs, you’d place them in a private subnet and use a NAT Gateway/Instance that forwards traffic through the IGW.

**Edge Cases**  
* Forgetting to add `0.0.0.0/0` route → no outbound traffic.  
* Security group or network ACL blocks port 80/443 → HTTPS fails even with IGW.  
* Using an IGW in a non‑default VPC without proper DNS resolution can break hostname lookups.

**Optimize & Communicate**  
I’d emphasize that the IGW is stateless; it’s just a virtual router, so scaling is automatic. I’d suggest verifying connectivity with `curl` or `traceroute`, and checking CloudWatch metrics for “Packets in/out” to debug throttling. Conclude by noting that using an IGW directly exposes resources to the Internet; hence we pair it with security groups, ACLs, or a NAT for private workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
