---
qid: ing_99872fb198__aws__local
question: 'Explain: Content Delivery Network — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 413
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:12:46-05:00'
sources: []
---

**Situation & Task**  
At my previous company we had a global media platform that delivered millions of video streams daily. The CDN layer was a single‑point bottleneck and our latency spiked to 300 ms in Asia during peak hours. I owned the redesign to reduce cost by 25 % while slashing latency by 40 %.  

**Action (Design)**  
I proposed a multi‑region **Amazon CloudFront** distribution backed by **S3** for origin storage and **Lambda@Edge** for real‑time personalization.  
- *Scalability*: CloudFront automatically scales to handle 10× traffic spikes; S3’s request‑level scalability eliminated hot‑spotting.  
- *Availability*: Edge locations globally ensured ≥99.999 % uptime; health checks routed around failed origins.  
- *Cost*: By enabling **Cache Behavior TTL** of 24 h for static assets and using **S3 Intelligent-Tiering**, we cut storage costs by 18 %.  
- *Trade‑offs*: Added a small cold‑start latency (~2 ms) from Lambda@Edge, but this was acceptable for personalization logic.  

**Result**  
Post‑deployment, average end‑to‑end latency dropped to 180 ms (≈40 % improvement), and CDN spend fell by **$120k annually** (25 % cost reduction). User engagement increased by 12 % due to smoother playback.  

**Reflection**  
I practiced *Ownership* by driving the entire project, *Dive Deep* in performance metrics, and *Bias for Action* in iterating on edge logic. The bar‑raiser will note my data‑driven impact, architectural depth, and lessons from initial cold‑start experiments that guided the final TTL strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
