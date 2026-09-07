---
qid: ing_94e82a5cea__aws__local
question: 'Explain: Deciding Between Redundancy and Clustering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 508
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:02:33-05:00'
sources: []
---

**Situation & Task**  
I led a data‑science team at a fintech startup that built a real‑time fraud‑detection model. Our prod pipeline ran on an EC2 fleet behind an Application Load Balancer (ALB). We faced a dilemma: should we add *redundancy* (extra instances for failover) or switch to *clustering* (a single high‑performance node with multiple GPU containers)?

**Action**  
1. **Dive Deep into metrics** – I pulled CloudWatch logs and found 99.2 % uptime, but latency spiked from 45 ms to 180 ms during traffic surges.  
2. **Cost/Benefit analysis** –  
   *Redundancy*: Two identical EC2 g4dn.xlarge instances + Auto‑Scaling → $0.90/hr per instance, 99.9 % availability, ~20 % cost increase.  
   *Clustering*: One m5n.large + two GPU containers (ECS) → $1.20/hr total, same throughput but 2× faster inference (average 25 ms).  
3. **Design** – I proposed a hybrid: keep a small redundant “warm‑standby” cluster (two instances) and run the primary model in a Kubernetes cluster with pod autoscaling. Route 53 health checks shift traffic to standby if the primary fails.

**Result**  
- Latency dropped from 180 ms to 30 ms under peak load.  
- Uptime improved to 99.97 %.  
- Total cost increased by only 12 % versus a pure redundancy plan, and we avoided 3‑hour downtimes during a recent outage.

**Learning & Bar‑raiser cues**  
I took full ownership of the decision, quantified impact (latency, uptime, cost), and documented trade‑offs. I also built a post‑mortem process: every failure triggers a “root‑cause + improvement” ticket, ensuring continuous learning—exactly what Amazon looks for in a high‑performing candidate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
