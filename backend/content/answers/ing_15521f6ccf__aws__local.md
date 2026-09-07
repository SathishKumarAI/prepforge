---
qid: ing_15521f6ccf__aws__local
question: 'Explain: There''s going to be some hardware limit — System Design BASICS:
  Horizontal vs. Vertical Scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 368
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:13:14-05:00'
sources: []
---

**Situation & Task**  
I led a ML inference service for a video‑analytics platform that had to process 10 M frames per day. The team was debating whether to scale out (horizontal) or upgrade GPU nodes (vertical).  

**Action**  
1. **Dive Deep into Bottlenecks** – profiled CPU, GPU, and I/O; found inference latency dominated by GPU memory (≈80 % of time).  
2. **Design Choice** – opted for *horizontal scaling* with Amazon SageMaker Endpoint + Elastic Inference, plus a *state‑ful Redis cache* to keep intermediate tensors.  
3. **Cost & Availability** – used Spot Instances (cost ↓ 70 %) and Auto Scaling Groups; set up Multi‑AZ load balancing for 99.9 % uptime.  
4. **Metrics‑Driven Iteration** – implemented CloudWatch dashboards, tracking latency, error rate, and spot instance interruptions.

**Result**  
- Reduced average inference latency from 350 ms to 120 ms (−65 %).  
- Cut operational cost by $120K annually while maintaining 99.9 % availability.  
- Scaled from 4 GPU nodes to 32 with no code changes, proving true horizontal elasticity.

**Learning & Bar‑raiser Signals**  
I owned the end‑to‑end pipeline, dove deep into performance data, quantified impact (latency + cost), and iterated after a spot‑instance failure that taught us to add graceful degradation. This showcases *Customer Obsession* (fast, reliable service) and *Ownership* (full lifecycle responsibility).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
