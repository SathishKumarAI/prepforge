---
qid: ing_0a222ea3ec__star__local
question: 'Explain: Plan for Address Exhaustion — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 355
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:49:13-05:00'
sources: []
---

**Situation:**  
I was leading the rollout of a real‑time recommendation engine for a mobile game that had to serve millions of concurrent users in Asia and Europe. Our Kubernetes cluster on AWS consumed over 20 000 EIP addresses just for outbound traffic from inference pods, and we hit the account limit within weeks.

**Task:**  
Design a sustainable IP strategy that keeps latency low, avoids hitting AWS EIP caps, and still lets us audit traffic per model version.

**Action:**  
I re‑architected the network layer to use IPv6 for internal pod communication and a single NAT64 gateway for outbound traffic. I also introduced an Elastic Load Balancer with an Application Mesh that forwards requests via a shared set of 10 EIPs, using AWS Global Accelerator for cross‑region failover. For observability I attached per‑model tags to the EIP allocations so we could track usage in CloudWatch and enforce quotas programmatically.

**Result:**  
The new design cut external IP consumption from 20 000 to just 12, keeping us well below the limit while maintaining <30 ms latency. We also reduced cost by $15k annually on EIP charges and gained a clear audit trail that helped us identify a spike in traffic during a seasonal event. This experience taught me how to layer IPv6, NAT64, and selective EIPs to balance scalability with operational limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
