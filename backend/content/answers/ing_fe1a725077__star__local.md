---
qid: ing_fe1a725077__star__local
question: 'Explain: Measuring Scalability — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 385
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:56:52-05:00'
sources: []
---

**Situation** – In my last role I was tasked with launching a real‑time recommendation engine for an e‑commerce platform that served 3 million active users per day. The existing batch model had a latency of 2 seconds and could only handle 500 requests per second, so the product team flagged it as a bottleneck during peak traffic.

**Task** – I needed to design a scalable pipeline that would reduce inference latency below 200 ms while supporting at least 10 k concurrent users without exceeding our cost budget of $5K/month on AWS.

**Action** – First, I instrumented the current system with Prometheus and Grafana to capture per‑request latency, CPU, GPU utilization, and queue depth. Using these metrics I identified that the model size (250 MB) was the main bottleneck. I applied TensorRT for model optimization, reducing inference time by 4×. Next, I containerized the service with Docker and deployed it behind an AWS Fargate cluster, using autoscaling policies based on CPU usage and request latency thresholds. I also introduced a lightweight cache layer (Redis) to serve frequent requests instantly, cutting redundant GPU calls by 30 %. Finally, I set up CloudWatch alarms to trigger manual reviews if latency exceeded 250 ms.

**Result** – After the rollout, inference latency dropped to an average of 120 ms, and we handled 15 k concurrent users during a flash sale with no outages. Monthly compute costs fell from $8K to $4.2K. I learned that continuous metric collection and targeted hardware acceleration are key to achieving both performance and cost‑efficiency in ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
