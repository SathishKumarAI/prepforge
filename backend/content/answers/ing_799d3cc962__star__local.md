---
qid: ing_799d3cc962__star__local
question: 'Explain: Hot Site / Multi-Site Configuration: — Cloud Disaster Recovery
  Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 359
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:36:48-05:00'
sources: []
---

**Situation:**  
In my last role at an e‑commerce company, we were launching a recommendation engine that fed personalized product suggestions in real time. Our data pipeline was hosted on AWS and relied heavily on Amazon SageMaker endpoints; any downtime would mean lost revenue and poor user experience. We had just hit a quarterly target of 15% uplift in conversion and the business required near‑zero latency.

**Task:**  
I needed to design a cloud disaster recovery strategy that ensured our ML inference service remained available even if an entire region went down, without compromising on cost or data consistency.

**Action:**  
I implemented a multi‑site hot‑standby architecture: we replicated the SageMaker endpoint and supporting DynamoDB tables to a second AWS region (US‑East‑2) using cross‑region replication. We set up Route 53 latency‑based routing with health checks, so traffic automatically shifted if the primary region failed. For model version control, I used SageMaker Model Registry and automated CI/CD pipelines in CodePipeline to push new models to both regions simultaneously. To keep inference latency low, we deployed a small caching layer (ElastiCache Redis) in each region and synchronized it via DynamoDB Streams.

**Result:**  
The system achieved 99.998% uptime during a simulated outage; the failover took under 4 seconds, keeping user experience intact. We avoided any revenue loss and gained confidence from stakeholders that our ML service could withstand regional disasters. I learned how to balance latency, consistency, and cost in a true multi‑region hot‑standby setup for production ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
