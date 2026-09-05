---
qid: ing_02a05fc908__star__local
question: 'Explain: Step 6 — Scaling Websites for Millions of Users'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 380
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:33:38-05:00'
sources: []
---

**Situation** – I was leading the launch of a recommendation engine for an e‑commerce platform that had just hit 1 million daily active users after a marketing blitz. The existing monolithic API couldn’t handle the traffic spike; latency rose to 2 seconds and error rates spiked to 7 %.  

**Task** – Redesign the deployment so the ML inference service could serve millions of concurrent requests with sub‑200 ms latency while keeping costs under $50k/month.  

**Action** – I split the system into three layers:  
1. **Edge Caching** – deployed a CloudFront distribution with Lambda@Edge to cache popular item embeddings, cutting downstream calls by 60%.  
2. **Model Serving** – containerized the PyTorch model in TensorFlow Serving and deployed it on an autoscaling GKE cluster with horizontal pod autoscaler set to target 70 % CPU; used GPU‑optimized nodes for batch inference.  
3. **Database Sharding** – moved user preference data from a single MongoDB instance to a sharded Atlas cluster, adding read replicas to handle high query volume. I also added Prometheus/Grafana dashboards and set up alerting thresholds at 300 ms latency.  

**Result** – Post‑deployment, average inference latency dropped to 120 ms; error rates fell below 0.5 %. The system handled 2 million concurrent requests during a flash sale with no downtime. I learned that combining edge caching, autoscaling containers, and sharded databases is the most cost‑effective way to scale ML services for massive user bases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
