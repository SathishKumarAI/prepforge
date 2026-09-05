---
qid: ing_88dfdfc15b__star__local
question: 'Explain: Hands-On Exercises (Upcoming) — Course Introduction | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 355
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:06:25-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup we were launching a new credit‑risk model. The data team had built a prototype in Python but the product owners wanted an end‑to‑end pipeline that could ingest streaming transaction logs, train nightly and expose predictions via a REST API.

**Task**  
I was tasked with designing a system that would move the prototype from a local Jupyter notebook into a production‑grade architecture: scalable ingestion, reproducible training, low‑latency inference, and easy monitoring for data drift.

**Action**  
First I chose Kafka for real‑time log capture and Spark Structured Streaming for batch‑to‑stream conversion. For model training I built a Dockerized PyTorch workflow that ran on Kubernetes nightly jobs, storing checkpoints in S3 with versioning. I wrapped the trained model in FastAPI, containerized it, and deployed it behind an NGINX ingress with horizontal pod autoscaling. To monitor drift I added a Prometheus exporter that fed metrics into Grafana dashboards, triggering alerts when feature distributions shifted >5%. I also set up CI/CD pipelines with GitHub Actions to automatically run unit tests and linting on each model commit.

**Result**  
The pipeline processed 1 M transactions per hour, reducing prediction latency from ~10 s in the prototype to <200 ms. The system ran continuously for two months with zero outages; the drift alerts prevented a potential 12% error spike. I learned that balancing batch and stream processing, coupled with automated CI/CD, is critical for reliable ML production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
