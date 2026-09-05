---
qid: ing_e8da3f17aa__star__local
question: 'Explain: Scheduler Service — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 328
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:13:45-05:00'
sources: []
---

**Situation**  
At my previous company we had a micro‑service that scheduled batch jobs for data pipelines. Every time a job finished, downstream services needed to be notified within seconds or risk missing their own window. Our existing notification path was a REST call from the scheduler to each consumer, which caused 30 % of our API latency spikes during peak hours.

**Task**  
I was tasked with redesigning the notification mechanism so that it would scale to hundreds of concurrent jobs, guarantee at‑least‑once delivery, and reduce end‑to‑end latency by 70 %.

**Action**  
I introduced a publish/subscribe model using Kafka. The scheduler publishes a lightweight event (`job.completed`) to a topic named after the job type. Each consumer subscribes to its relevant topics via consumer groups, allowing horizontal scaling without changing code. I added a retry policy with exponential back‑off and idempotent handlers in consumers to handle transient failures. To keep latency low, I set Kafka’s `linger.ms` to 5 ms and configured each consumer to poll every 10 ms. For monitoring, I exposed metrics (delivery latency, lag) through Prometheus.

**Result**  
Latency dropped from an average of 250 ms to 70 ms, a 72 % improvement. The system now handles 500 jobs per second with <1 % message loss. I learned that decoupling services via event streaming not only boosts performance but also makes the architecture far more resilient and easier to evolve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
