---
qid: ing_a620328784__aws__local
question: 'Explain: 4.1 Requirement 1: Traffic Distribution — Design Load Balancer
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 520
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:42:35-05:00'
sources: []
---

**Situation / Task**  
At my last role I was tasked with redesigning the ingress layer for a video‑on‑demand platform that served > 3 M daily users. The requirement: distribute traffic evenly across micro‑services while guaranteeing < 50 ms latency and 99.9 % availability.

**Action (Design)**  
I proposed a **multi‑layered load balancing** strategy:

| Layer | AWS Service | Rationale |
|-------|-------------|-----------|
| Global DNS routing | Amazon Route 53 | Latency‑based routing to nearest region; health checks reduce failover time. |
| Edge CDN | CloudFront | Caches static assets, offloads origin traffic, and provides TLS termination. |
| Regional LB | Application Load Balancer (ALB) with **dynamic target weighting** | Uses target group weights that auto‑adjust based on CPU/latency metrics via CloudWatch alarms. |
| Auto Scaling | EC2 Auto Scaling Groups + ECS Service Auto Scaling | Scale capacity by 30 % above baseline during traffic spikes; spot instances cut cost by ~35 %. |

*Scalability*: ALB can handle > 1 M requests/sec; Route 53 scales globally.  
*Availability*: Multi‑AZ deployments with health checks keep SLA > 99.9 %.  
*Cost*: Spot + reserved instance mix → 40 % total cost reduction.

**Result (Metrics)**  
After deployment, page load times dropped from **120 ms to 45 ms** (63 % improvement). Traffic churned evenly—no target exceeded 1.2× the average request rate—and we observed a **30 % lower peak CPU utilization**, translating to a **$12k/month cost saving**.

**Reflection (Bar‑raiser cues)**  
I owned the end‑to‑end pipeline, dived deep into CloudWatch telemetry to fine‑tune weights, and quantified every change. The biggest learning: initial static weight settings caused hotspoting; iterative A/B testing with real traffic revealed the dynamic approach was essential. This demonstrates ownership, bias for action, and a data‑driven mindset—exactly what Amazon looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
