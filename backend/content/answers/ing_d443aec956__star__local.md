---
qid: ing_d443aec956__star__local
question: 'Explain: Load Balancing — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 331
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:33:56-05:00'
sources: []
---

**Situation**  
I was leading the redesign of our recommendation engine for a streaming platform that served 10 M daily users. The previous single‑node inference service hit a 0.9 % error rate during peak traffic, and we had to roll back a major feature rollout because the system couldn’t handle the load.

**Task**  
I needed to build a highly available, low‑latency inference pipeline that could scale horizontally while guaranteeing consistent response times and zero single point of failure for the ML model serving layer.

**Action**  
1. Implemented a Kubernetes cluster with *Horizontal Pod Autoscaler* tuned on CPU/Memory metrics plus custom Prometheus alerts for request latency.  
2. Deployed an NGINX Ingress controller as a load balancer, using *least‑connection* and *session affinity* rules to spread traffic evenly across pods.  
3. Added a Redis cache layer in front of the model server to warm predictions for popular content, reducing inference load by ~30 %.  
4. Configured health checks that pinged the TensorFlow Serving endpoint; failed pods were immediately replaced, ensuring zero downtime.

**Result**  
Post‑deployment, peak latency dropped from 350 ms to 120 ms and error rates fell below 0.01 %. We achieved a 99.999% uptime SLA during a simultaneous global release. I learned that coupling autoscaling with intelligent request routing and caching is key to resilient ML systems at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
