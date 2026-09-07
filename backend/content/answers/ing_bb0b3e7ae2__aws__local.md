---
qid: ing_bb0b3e7ae2__aws__local
question: 'Explain: Latency Comparison Numbers — Latencynumbers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 460
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:26:32-05:00'
sources: []
---

**Situation / Task**  
I was asked to benchmark the inference latency of two production‑grade models (a LightGBM ensemble vs a PyTorch neural net) for an ad‑tech real‑time bidding system that must respond within 10 ms.

**Action**  
1. **Gather metrics** – I instrumented each model with `perf_counter` and ran 100k concurrent requests on an EC2 g4dn.xlarge (GPU for PyTorch, CPU for LightGBM).  
2. **Design** – I wrapped the models in a **Lambda@Edge** function behind CloudFront to reduce network hop time, then moved the heavier model to an **ECS Fargate task** with spot capacity and autoscaling based on 95th‑percentile latency.  
3. **AWS services** – Lambda (cold‑start mitigated via provisioned concurrency), ECS/Fargate (scalable CPU), CloudWatch (metrics + alarms), AppConfig for feature toggling between models.  
4. **Cost/availability trade‑off** – The GPU instance cost ~$0.75/hr vs the Fargate task at $0.10/hr; latency improved from 18 ms (PyTorch) to 7 ms (LightGBM) after scaling.

**Result**  
- Achieved a **46% reduction in 95th‑percentile latency** (from 18 ms to 7 ms).  
- Reduced inference cost by **$1,200/month** while maintaining ≥99.9 % uptime.  
- Rolled out the LightGBM model globally with zero service disruption.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivering sub‑10 ms latency for end‑user bids.  
- **Ownership & Dive Deep** – I owned the entire pipeline, from profiling to deployment, and drilled into cold‑start and resource allocation nuances.

*Bar‑raiser note:* Look for evidence of ownership, deep technical dive, quantified impact, and lessons learned (e.g., switching to Fargate after spotting GPU cost inefficiency).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
