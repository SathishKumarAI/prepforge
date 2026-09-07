---
qid: ing_f5c5e01fa5__aws__local
question: 'Explain: Model inference latency — Conversational AI latency: What is it
  and why it matters?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 387
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:32:25-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* My team built a real‑time customer support chatbot for an e‑commerce platform that handled ~200 k queries/day. Users complained of 2–3 s delays, causing churn.

*Task:* Reduce conversational AI inference latency to <300 ms while keeping cost ≤$0.02 per request.

*Action:*  
1. **Dive Deep into metrics** – profiled SageMaker endpoint (CPU, GPU utilization) and network RTT via CloudWatch traces.  
2. **Model & Architecture Optimization** – pruned the transformer to 6 layers, added batch‑norm, and quantized weights to INT8.  
3. **Infrastructure** – switched from a single `ml.m5.large` instance to an autoscaling group of `ml.g4dn.xlarge` behind an Application Load Balancer (ALB) with Lambda@Edge for request routing.  
4. **Caching & CDN** – cached frequent intent responses in Amazon CloudFront, reducing endpoint hits by 45%.  
5. **Monitoring & Feedback Loop** – set up Prometheus + Grafana dashboards; automated rollback if latency >400 ms.

*Result:* Latency dropped from 2.1 s to **280 ms** (−87%), cost per inference fell from $0.05 to **$0.015**. Customer satisfaction scores rose by 12% within one month, and the bot handled a 50% traffic spike during holiday sales without degradation.

*Learning:* Early profiling prevented over‑engineering; continuous monitoring turned a one‑off fix into an ongoing improvement loop—key for owning the product lifecycle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
