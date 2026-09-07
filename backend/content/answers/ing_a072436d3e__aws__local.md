---
qid: ing_a072436d3e__aws__local
question: 'Explain: Cons of Vertical Scaling — Vertical vs Horizontal Scaling | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 440
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:27:58-05:00'
sources: []
---

**Situation / Task**  
I was leading the redesign of a recommendation engine that served 3 M active users. The existing monolith ran on a single EC2 instance (vertical scaling). When traffic spiked during holiday sales we hit CPU‑and‑memory ceilings, causing >30 % latency increase and a 12 % drop in conversion.

**Action**  
I proposed shifting from vertical to horizontal scaling with **Amazon ECS + Fargate** containers plus an **Elastic Load Balancer (ELB)**.  
1. *Containerize* the model inference service (Python/Flask).  
2. Use **AWS App Mesh** for fine‑grained traffic routing and observability.  
3. Deploy a **Serverless Lambda layer** for feature extraction, triggered by SQS events.  
4. Store cached predictions in **Amazon ElastiCache‑Redis** to avoid recomputation.  
5. Implement **Auto Scaling Groups (ASG)** on ECS with target tracking based on CPU < 70 %.  

**Result**  
- Latency dropped from 1.2 s to 0.4 s (66 % improvement).  
- Conversion increased by 8 %, translating to ~$3 M additional revenue per quarter.  
- Operational cost fell by 18 % due to pay‑as‑you‑go Fargate and reduced idle capacity.  

**Reflection**  
Ownership: I owned the migration roadmap, coordinated cross‑team effort, and presented quarterly ROI to executives.  
Dive Deep: I ran chaos‑engineering tests (fault injection) to validate resilience under node failures.  
Learning: The first attempt had a 5 % error rate from stale cache entries; we fixed it by adding a TTL of 60 s and an on‑demand fallback.  

**Leadership Principles Highlighted**  
- **Customer Obsession** – Faster, reliable recommendations improve user experience.  
- **Ownership & Deliver Results** – Delivered measurable revenue gains while reducing cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
