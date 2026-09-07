---
qid: ing_8b3105764c__aws__local
question: 'Explain: Load Balancing — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 631
total_tokens: 863
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:40:30-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑function team to redesign our real‑time telemetry platform for an IoT startup that shipped 1 M+ messages per second into a data lake. The backlog had latency spikes of up to **250 ms** on the TCP path and packet loss on UDP, hurting downstream ML model accuracy (10% drop in prediction confidence). I was tasked with proposing a load‑balancing strategy that kept **99.9 % availability**, reduced jitter below **30 ms**, and stayed under $200k/yr.

**Approach & Design**  
I evaluated *TCP* vs *UDP*:

| Metric | TCP | UDP |
|--------|-----|-----|
| Reliability | ✔ (handshake, retransmission) | ✖ (no ACK) |
| Latency | ↑ (stateful, 3‑way handshake) | ↓ (stateless) |
| Throughput | Limited by congestion control | Higher raw throughput |

**Solution:**  
1. **Dual‑path ingestion** – split traffic into a *TCP* channel for critical configuration updates and a *UDP* channel for bulk telemetry.  
2. Use **AWS Global Accelerator** with *client IP affinity* to route UDP packets to an **Elastic Load Balancer (ELB) NLB** backed by **EC2 Auto Scaling**; TCP goes through **ALB** with HTTP/2 support.  
3. Deploy **Amazon Kinesis Data Streams** per protocol, then a Lambda fan‑out that writes to **S3 Glacier Deep Archive** (cost‑effective for historic data).  
4. Implement *Health Checks* at the NLB level and use **AWS WAF** to filter malformed UDP packets.

**Result**  
- Latency dropped from 250 ms → **45 ms** (90% reduction).  
- Packet loss fell from 5% → **<0.1%**.  
- Cost stayed under $190k/yr, a **15% savings** vs the previous on‑prem design.

**Leadership Principles & Bar‑Raiser Lens**  

| Principle | How I Demonstrated It |
|-----------|-----------------------|
| Customer Obsession | Delivered sub‑30 ms latency for real‑time ML inference. |
| Ownership | Took full responsibility for architecture, cost, and SLA. |
| Dive Deep | Analyzed protocol stats, tuned NLB target health checks, and measured jitter per second. |
| Bias for Action | Deployed a phased rollout (blue/green) in 3 days. |

**Learning from Failure**  
Initial prototype used a single ELB; we saw *stateful* overload on UDP. We pivoted to NLB + WAF after a failed test that exposed packet loss at peak load, demonstrating rapid iteration and resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
