---
qid: ing_452861ef4a__star__local
question: 'Explain: High Availability — System Design Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 369
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:47:06-05:00'
sources: []
---

**Situation** – I was leading the rollout of a recommendation engine for an e‑commerce platform that had to stay online 24/7 during peak holiday traffic. The existing single‑node inference service crashed under sudden load spikes and caused a 12 % drop in conversion rates.

**Task** – Design a highly available, low‑latency inference pipeline that could auto‑scale, recover from node failures within 5 seconds, and keep the model accuracy stable.

**Action** – I split the architecture into three layers: (1) an **API gateway** with AWS API Gateway + Lambda for request routing; (2) a **model serving cluster** using TensorFlow Serving behind an Elastic Load Balancer, deployed in two AZs on spot EC2 instances with Auto Scaling Groups that monitor CPU/latency thresholds; (3) a **data caching layer** with Redis‑Cluster to store the top 1 M user embeddings. I added a health‑check endpoint and implemented a “warm‑up” script that preloads the model into memory before traffic hits. For fault tolerance, I used S3 for immutable model checkpoints and set up CloudWatch alarms to trigger SNS notifications and automated rollback if error rates spiked.

**Result** – After deployment, the system maintained 99.97 % uptime during the holiday surge, latency dropped from 350 ms to 120 ms, and conversion rates recovered by 8 %. I learned that combining elastic scaling with proactive health checks and caching is key to balancing cost, availability, and performance in ML production systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
