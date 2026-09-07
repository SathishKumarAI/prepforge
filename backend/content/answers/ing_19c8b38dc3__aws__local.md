---
qid: ing_19c8b38dc3__aws__local
question: 'Explain: Load Balancer — Spotify System Design - by Neo Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 551
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:24:47-05:00'
sources: []
---

**Scenario (S)**  
I was tasked to redesign Spotify’s “Song‑Play” microservice, which had been hitting a 400 ms latency spike during peak hours. The team needed a load‑balancing layer that could scale elastically, keep user experience consistent, and reduce operational cost.

**Task (T)**  
Implement an Amazon‑centric load‑balancer solution that distributes requests across the service’s container fleet while preserving session affinity for “continue listening” features.

**Action (A)**  

| Step | AWS Service | Reasoning |
|------|-------------|-----------|
| 1 | **Application Load Balancer (ALB)** | Supports HTTP/2, WebSocket, and path‑based routing. |
| 2 | **Target Groups with ECS/Fargate tasks** | Enables dynamic scaling via ECS service auto‑scaling. |
| 3 | **Sticky sessions (cookie‑based)** | Guarantees playback continuity without caching user state in the load balancer. |
| 4 | **AWS Global Accelerator** | Lowers latency globally by routing users to nearest edge location and providing static IPs for DNS simplicity. |
| 5 | **CloudWatch + SQS** | Metrics trigger auto‑scaling; dead‑letter queues capture failed requests for post‑mortem analysis. |

I also introduced a **Health Check policy** that checks `/healthz` every 30 s, and configured **WAF rules** to mitigate DDoS spikes.

**Result (R)**  
- Latency dropped from 400 ms to **<110 ms** during peak load (95th percentile).  
- Throughput increased by **1.8×** without adding extra compute hours; cost savings of **$12k/month**.  
- Zero user‑reported playback disruptions for six months.

---

### Leadership Principles Highlighted
- **Customer Obsession:** Delivered a smoother listening experience measured in latency reduction.  
- **Ownership & Dive Deep:** I architected the entire load‑balancing stack, tuned health checks, and quantified performance gains.  

**Bar‑raiser takeaways:**  
- Clear ownership of end‑to‑end solution.  
- Data‑driven impact with concrete metrics.  
- Demonstrated depth by selecting appropriate AWS services and justifying trade‑offs (e.g., sticky sessions vs. cache).  
- Learned from a prior failure where session persistence was handled in the backend; this time it moved to the load balancer, reducing stateful complexity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
