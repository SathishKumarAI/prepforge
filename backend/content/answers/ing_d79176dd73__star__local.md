---
qid: ing_d79176dd73__star__local
question: 'Explain: Step 3 — Scaling Websites for Millions of Users'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 342
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:39:52-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, our recommendation engine was built as a monolithic Flask app serving personalized loan offers. Within two months of launch we hit 1 M active users and the API latency jumped from 120 ms to over 2 s during peak hours.

**Task:**  
I had to redesign the deployment so that the model inference could handle millions of concurrent requests with sub‑200 ms latency, while keeping cost in check for a $50k/month budget.

**Action:**  
First I containerized the model using Docker and deployed it on Kubernetes, adding an autoscaling group based on CPU utilization. I replaced the single‑node PostgreSQL cache with Redis Streams to offload read traffic and used Ray Serve to shard inference across 8 GPU nodes. For traffic routing I introduced a Cloudflare Workers edge layer that cached the top 10 % of predictions in memory, reducing round‑trips by 70%. Finally, I set up Prometheus + Grafana dashboards to monitor request latency, error rates, and scaling events in real time.

**Result:**  
The system sustained 3 M concurrent users with average inference latency dropping to 150 ms. Traffic spikes were handled automatically without manual intervention, cutting our monthly compute spend by 35%. I learned that a hybrid edge‑cache + distributed inference architecture is key for ML workloads at scale, and that observability is as critical as performance tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
