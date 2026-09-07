---
qid: ing_46d1f2ef26__aws__local
question: 'Explain: Designing Subnets in Cloud Systems — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 609
total_tokens: 843
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:05:50-05:00'
sources: []
---

**Situation & Task**  
I was leading a migration of a 20‑node ML inference cluster from on‑prem to AWS for a fintech client that needed low‑latency predictions (< 10 ms). The goal was to design a subnet architecture that maximized **Availability** and **Cost Efficiency** while meeting strict security requirements.

**Action (Design & Implementation)**  
1. **VPC & Subnet Layout** – Created a single VPC with 4 public subnets (AZ‑wide) for load balancers and NAT gateways, and 8 private subnets (2 per AZ) for EC2 Inference workers and S3 access points.  
2. **IP Scheme** – Allocated /22 CIDR blocks per AZ to give > 500 usable IPs per subnet, allowing future scale without re‑addressing.  
3. **Security & Traffic Flow** – Used **Network ACLs** for zone isolation, **security groups** for fine‑grained port access, and **VPC Endpoints (Gateway + Interface)** to keep all S3/TensorFlow Serving traffic inside the AWS backbone.  
4. **Auto Scaling & Spot Integration** – Linked the private subnets to an Auto Scaling group that spun up GPU instances on a spot‑price threshold, with a 30 % capacity buffer for burst traffic.

**Result (Data‑driven Impact)**  
- Reduced inference latency from 25 ms to 8 ms (≈ 68 % improvement).  
- Cut monthly compute costs by **$12k** through spot usage and subnet‑level scaling.  
- Maintained 99.99 % SLA with zero single‑point failures during a 6‑month test period.

---

### Leadership Principles Highlighted
| Principle | How it Shaped the Solution |
|-----------|----------------------------|
| **Ownership** | I drove the end‑to‑end subnet design, taking responsibility for both performance and cost. |
| **Dive Deep** | I analyzed AZ latency metrics, spot pricing trends, and IP utilization to make data‑backed decisions. |

---

### Bar‑Raiser Signals
- **Quantified Impact:** 68 % latency drop & $12k/month savings.  
- **Depth of Knowledge:** Detailed subnet sizing, ACL/SG interplay, VPC endpoint types.  
- **Learning from Failure:** After a brief outage caused by an incorrectly sized NAT gateway, I introduced a health‑check guardrail and documented the fix in our post‑mortem, ensuring repeatability.

---

**Key AWS Services Used:** VPC, EC2 Auto Scaling, Spot Instances, Elastic Load Balancing, S3 VPC Endpoints, CloudWatch Alarms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
