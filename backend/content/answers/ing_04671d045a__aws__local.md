---
qid: ing_04671d045a__aws__local
question: 'Explain: Cons of Horizontal Scaling — Vertical vs Horizontal Scaling |
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 554
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:34:39-05:00'
sources: []
---

**Situation & Task**  
I was asked to design a recommendation engine for an e‑commerce platform that had to serve 10 M users daily with <1 s latency. The team debated whether to scale the inference service vertically (bigger machines) or horizontally (more pods).  

**Action – Deep Dive into Scaling Trade‑offs**  
*Vertical*: A single GPU instance (p3.16xlarge) can process ~200 requests/sec. Adding more GPUs means buying a larger, expensive node, but each request still traverses one network hop and the cost grows linearly with compute.  
*Horizontal*: Deploy 200 g5.xlarge pods behind an Application Load Balancer (ALB). Each pod handles ~100 req/s. Autoscaling based on CPU >70% keeps cost proportional to load, adds no single point of failure, and allows rolling updates.

I modeled the two approaches in CloudWatch:  
- **Vertical**: 24‑hour cost ≈ $2,400, latency jitter 15–20 ms, 0.99 availability (single node).  
- **Horizontal**: 24‑hour cost ≈ $1,800, latency <10 ms, 0.9999 availability (ALB + 200 pods), and 30 % better request throughput under bursty traffic.

I presented these metrics to the leadership team, highlighting that horizontal scaling leveraged AWS services—EKS for orchestration, ALB for failover, and S3 for model storage—while keeping the system fault‑tolerant.  

**Result**  
The product manager approved the horizontal strategy; we rolled out 200 pods in two weeks, reducing average latency from 18 ms to 8 ms and increasing revenue by 12% during a flash sale (captured by CloudWatch and A/B testing).  

---

### Leadership Principles Reflected
- **Ownership** – I drove the decision to adopt horizontal scaling, owning both design and implementation.  
- **Dive Deep** – Detailed cost/latency modeling proved my recommendation was data‑driven.  
- **Bias for Action** – We moved from a single node prototype to a production‑ready cluster within 10 days.

### Bar‑raiser Takeaway
A bar‑raiser will look for:  
1. Clear ownership and end‑to‑end responsibility.  
2. Quantified impact (cost, latency, revenue).  
3. Depth in trade‑off analysis (vertical vs horizontal).  
4. Learning loop—if a horizontal rollout had failed, I’d document the root cause and adjust autoscaling thresholds accordingly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
