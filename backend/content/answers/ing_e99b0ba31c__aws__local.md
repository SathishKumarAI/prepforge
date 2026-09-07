---
qid: ing_e99b0ba31c__aws__local
question: 'Explain: Least connection method — What is Load Balancing?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 426
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:06:17-05:00'
sources: []
---

**Situation (S)** – I was tasked to redesign the front‑end for a real‑time bidding platform that served millions of ad impressions per second. The existing single‑instance architecture hit 99.9 % latency SLA but crashed under traffic spikes.

**Task (T)** – Implement a highly available, cost‑effective load balancer that distributes requests across EC2 instances while keeping the “least connection” rule to avoid overloading any node.

**Action (A)** –  
1. **Load Balancing definition:** A layer‑4/7 proxy that forwards client traffic to healthy backend targets based on configurable algorithms.  
2. **Least Connection method:** The balancer tracks active connections per target and routes each new request to the instance with the fewest current connections, ensuring even distribution during bursty workloads.  
3. I chose **AWS Application Load Balancer (ALB)** because it natively supports the least‑connection algorithm, offers TLS termination, and integrates with Auto Scaling for elasticity.  
4. Configured health checks on a 10 s interval; used CloudWatch metrics to trigger scaling when `TargetConnectionCount` exceeded 80 %.  
5. Deployed **AWS WAF** for protection against DDoS, and enabled **X‑Ray** tracing for deep diagnostics.

**Result (R)** – Post‑migration, request latency dropped from 350 ms (peak) to 120 ms, throughput increased by 4×, and cost per thousand impressions fell by 18 % due to better resource utilization. The system now scales automatically up to 20 k concurrent connections with <0.1 % error rate.

**Learning:** I realized that choosing the right balancing algorithm is a *first‑order* decision; mis‑configuring it can lead to “hot spots” and wasted capacity. Future iterations will experiment with weighted least‑connection for heterogeneous instance types.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
