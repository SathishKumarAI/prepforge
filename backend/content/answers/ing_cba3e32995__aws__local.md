---
qid: ing_cba3e32995__aws__local
question: 'Explain: TensorFlow Serving with Docker Stay organized with collections
  Save and categorize content based on your preferences.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 462
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:01:17-05:00'
sources: []
---

**Scenario – Building a Production ML Service**

*Situation*: I was tasked to expose an image‑classification model to 10 k concurrent users while keeping latency below 200 ms and cost under $500/month.

*Task*: Deploy the TensorFlow model with Docker, organize artifacts in S3 “collections”, and automate versioning.

*Action*:
1. **Infrastructure** – Built a Docker image that mounts `/models` from an EFS file‑system. The container runs `tensorflow/serving:2.6.0`, exposing port 8501.
2. **Collections** – Created S3 buckets (`ml-models-prod`, `ml-models-dev`) and used *prefixes* as collections (e.g., `prod/v1/`, `dev/latest/`). Implemented a simple Lambda that, on each new model upload, copies the `.pb` file to EFS and triggers an ECS task to restart the container.
3. **Scalability & Availability** – Deployed the service behind an Application Load Balancer with two Fargate tasks (auto‑scaling 2–10). Health checks ensured zero downtime during rollouts.
4. **Cost Control** – Used spot instances for dev, on‑demand for prod; overall spend fell to $350/month.

*Result*: Latency dropped from 350 ms to 120 ms (30% win), concurrency handled 12 k users with 0.5% error rate, and model rollout time shrank from 3 days to 4 hours.  

**Leadership Principles Highlighted**

- **Ownership** – Took end‑to‑end responsibility for reliability and cost.
- **Dive Deep** – Used CloudWatch metrics to pinpoint bottlenecks; iterated on EFS throughput until SLA met.

**Bar‑raiser Takeaway**

Listen for concrete ownership, depth of technical reasoning (e.g., why Fargate + ALB), quantified impact (latency & cost numbers), and evidence that failures (initial 350 ms latency) were analyzed and corrected.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
