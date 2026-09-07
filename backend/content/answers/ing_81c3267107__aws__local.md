---
qid: ing_81c3267107__aws__local
question: 'Explain: Summary — Latency vs Throughput vs Bandwidth | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 492
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:18:12-05:00'
sources: []
---

**Situation / Task**  
When I led the redesign of our recommendation engine at *Acme Media*, we were asked to expose a new inference API that had to process 10 k requests/sec while keeping latency below 50 ms for 99th‑percentile users. The team was concerned about how *latency, throughput, and bandwidth* would trade off.

**Action**  
I framed the problem using the **Customer Obsession** and **Dive Deep** principles: “What does a customer experience if our API is slow versus if it’s back‑pressured?” I built a micro‑benchmark harness in Python, injecting synthetic traffic and measuring per‑request latency, total throughput (req/sec), and peak outbound bandwidth.  

With those metrics, I proposed an **Elastic Container Service (ECS) + Fargate** deployment that spawns task groups behind an Application Load Balancer (ALB).  
- **Latency** is bounded by a 2 ms per‑task processing window; we set the ALB target health check to 10 ms.  
- **Throughput** scales linearly with task count, capped at 15 k req/sec.  
- **Bandwidth** is limited by container network interfaces (ENI); we reserve 100 Mbps per ENI and use AWS App Mesh for traffic shaping.

We added a **Redis‑cached feature vector layer** to reduce model inference time from 30 ms to 12 ms, cutting latency by 60 % while keeping throughput intact.  

**Result**  
Post‑deployment, we achieved:  
- **99th‑percentile latency** of 42 ms (vs 78 ms baseline).  
- **Throughput** sustained at 12 k req/sec without throttling.  
- **Bandwidth utilization** stayed under 80 % of the reserved capacity, keeping cost 18 % lower than a raw EC2 cluster.

**Reflection**  
The exercise taught me that *latency* is often the first customer‑visible metric; pushing throughput without regard to latency can degrade experience. I also learned to quantify trade‑offs early and iterate on design, which is critical when scaling ML services in AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
