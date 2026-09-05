---
qid: ing_8c30176af0__star__local
question: 'Explain: Scaling from one session to hundreds requires its own infrastructure'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 334
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:13:05-05:00'
sources: []
---

**Situation:**  
During my last role at a fintech startup we launched a predictive churn model that ran in a single Jupyter notebook for internal testing. The product team wanted to expose it as a real‑time API for our mobile app, expecting millions of users to hit the endpoint each day.

**Task:**  
I had to scale the prototype from a one‑session script to an infrastructure capable of handling hundreds of concurrent requests with sub‑100 ms latency and zero downtime.

**Action:**  
First I containerised the model using Docker and pushed it to our Kubernetes cluster, creating a stateless microservice. I added Redis for in‑memory caching of frequent predictions and implemented rate‑limiting via Envoy to protect downstream services. To handle burst traffic I configured Horizontal Pod Autoscaling with custom metrics from Prometheus. For monitoring, I set up Grafana dashboards showing request latency, error rates, and CPU usage, and used Alertmanager to trigger Slack alerts when thresholds were breached. Finally, I performed chaos engineering tests with Chaos Mesh to ensure resilience under node failures.

**Result:**  
The API now handles 500 req/s with a 95th‑percentile latency of 72 ms, reducing churn predictions time from 5 s in the notebook to <100 ms live. Our uptime improved from 99.2% to 99.98%, and the engineering team can iterate on new features without redeploying the entire stack. I learned that scaling is as much about observability and resilience as it is about raw compute power.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
