---
qid: ing_80c5f48632__aws__local
question: 'Explain: Routing Engine — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 487
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:16:08-05:00'
sources: []
---

**Situation / Task** – I was asked to build a routing engine that could balance traffic for a global SaaS product with 3 M daily active users while keeping latency <30 ms and ensuring zero single‑point failure.

**Action** –  
1️⃣ **Design**:  
- Use **Amazon Route 53 latency‑based routing** to direct clients to the nearest region.  
- In each region deploy an **Application Load Balancer (ALB)** that forwards to a fleet of containerized services in **EKS** with *Horizontal Pod Autoscaler* (CPU > 70 % → +1 pod).  
- ALBs feed into a **AWS Global Accelerator** for static IPs and DDoS protection.  
- Health checks on ALB + EKS ensure instant fail‑over; Route 53 health checks auto‑remove unhealthy endpoints.

2️⃣ **Scalability & Cost**:  
- ALB scales to 10 k requests/sec per region with *pay‑as‑you‑go* pricing (~$0.008 per LCU).  
- EKS autoscaling keeps pods between 5–20, keeping compute <30 % of peak during off‑peak hours (≈$200/month vs $800 for static fleet).  
- Global Accelerator adds ~$50/month but reduces latency and improves SLA.

3️⃣ **Monitoring** – CloudWatch metrics + X-Ray traces to detect 99.9 % uptime; automated Lambda rollback on degraded response times.

**Result** – After launch, we achieved <28 ms average latency globally, handled a 4× traffic spike during a product release with zero downtime, and cut infrastructure spend by **35 %** compared to the legacy single‑region setup.

---

### Leadership Principles Highlighted  
- **Customer Obsession**: Prioritized end‑user latency & reliability.  
- **Ownership**: Own architecture from edge to core; built automated health checks & rollback.  

Bar‑raiser cues: clear ownership, deep dive into AWS services, quantified cost/latency impact, and lessons learned (e.g., adding Global Accelerator after initial latency spike).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
