---
qid: ing_9a135f4d96__star__local
question: 'Explain: Practical System Design — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 323
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:40:55-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we had to redesign our fraud‑detection pipeline. The existing batch model lagged behind real‑time transactions by 10 minutes and was hitting 0.3% false positives, costing us $5k per day in legitimate users blocked.

**Task** – I needed to architect a scalable microservice that ingests streaming data, runs an ensemble of ML models, and returns predictions within 200 ms while keeping the deployment footprint under 50 GB.

**Action** – I started by mapping out the data flow with Kafka for ingestion, then used Kinesis Data Analytics for preprocessing. For model serving, I containerized a PyTorch inference engine on ECS Fargate, leveraging ONNX Runtime to cut latency by 40%. To manage versioning and A/B testing, I integrated SageMaker Model Registry and built a CI/CD pipeline in GitHub Actions that automatically promoted models based on a 95% precision threshold. I also set up Prometheus + Grafana dashboards to monitor latency, CPU, and error rates, and used CloudWatch alarms for automatic scaling.

**Result** – The new system cut prediction latency from 10 s to 150 ms, reduced false positives by 60%, and saved the company $18k per month. I learned that a solid observability stack combined with automated model governance is key to turning ML research into production‑grade services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
