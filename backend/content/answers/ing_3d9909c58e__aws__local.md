---
qid: ing_3d9909c58e__aws__local
question: 'Explain: Least bandwidth method — What is Load Balancing?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 447
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:45:01-05:00'
sources: []
---

**Least‑Bandwidth Load Balancer – A Quick Walk‑through**

**Situation / Task**  
I was tasked to redesign the traffic routing for a global e‑commerce recommendation engine that was hitting 30 % CPU saturation on the primary inference cluster during peak hours. The goal was to improve latency while keeping cost under $50k/month.

**Action (Technical Design)**  
- **Requirement Clarification** – We needed *real‑time* bandwidth awareness, low overhead, and compatibility with existing EC2 Auto Scaling groups.  
- **Design** – Implement a **Least‑Bandwidth Load Balancer (LB)** as an AWS Lambda@Edge function that inspects the `Content-Length` header of incoming requests and forwards to the target instance with the lowest current outbound data rate.  
  - *AWS Services*: API Gateway + Lambda@Edge, CloudWatch metrics for per‑instance bandwidth, Elastic Load Balancing (classic) for fallback.  
  - *Scalability & Availability* – The LB runs in every edge location; each request is routed instantly with <1 ms latency. If a target becomes unreachable, the function retries another instance.  
  - *Cost Trade‑offs* – Lambda@Edge invocation cost (~$0.20/10k requests) far below running an additional NLB tier; bandwidth metrics are pulled via CloudWatch Agent at 1‑minute granularity, negligible network overhead.

**Result**  
- Latency dropped from **350 ms to 180 ms** (48% improvement).  
- CPU utilization on the primary cluster fell to **12 %**, freeing capacity for new features.  
- Monthly cost increased by only **$3k**, staying well below budget.  

**Reflection** – I learned that *dive deep* into metrics (not just surface traffic counts) can reveal hidden bottlenecks. The solution kept ownership: we owned the whole request path, from edge to inference, and maintained a single source of truth for bandwidth data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
