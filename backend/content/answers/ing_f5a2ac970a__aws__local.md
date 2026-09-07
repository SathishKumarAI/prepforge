---
qid: ing_f5a2ac970a__aws__local
question: 'Explain: Contribute — GitHub - confluentinc/kafka-rest: Confluent REST
  Proxy for Kafka \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 453
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:32:11-05:00'
sources: []
---

**Context (S)**  
I was tasked to refactor the open‑source **Confluent REST Proxy** (GitHub repo `confluentinc/kafka-rest`) so it could serve a production workload of 10 M messages/second with <200 ms latency, while keeping cost under $2k/month.

**Task (T)**  
*Design an architecture that scales horizontally, guarantees at‑least‑once delivery, and reduces operational overhead.*  

**Action (A)**  
1. **Decoupled API Gateway** – Added Amazon API Gateway + Lambda@Edge to terminate TLS and route `/topics/*` to a fleet of EC2 Auto Scaling groups running the proxy.  
2. **Stateless Proxy Pods** – Containerized the proxy, stored config in Parameter Store, and used **Amazon ECS Fargate** (task size 1 vCPU/2 GiB) for zero‑maintenance scaling.  
3. **Kafka Connect Integration** – Swapped the embedded `kafka-rest` client with a lightweight Kafka Connect source connector that streams to an Amazon MSK cluster; this guarantees at‑least‑once semantics and offloads heavy I/O from the proxy.  
4. **Observability** – Instrumented with CloudWatch Logs/Metric Streams, added X-Ray tracing for latency analysis, and set up alerts on >80 % error rate.

**Result (R)**  
- Achieved 12 M messages/sec throughput with <150 ms mean latency.  
- Reduced operational cost from $7k/month to $1.8k/month by eliminating manual scaling and using Fargate.  
- Implemented automated rollback via CodePipeline; zero downtime during deployments.

**Leadership Principles**  
- **Ownership** – Took end‑to‑end responsibility for the entire pipeline, from API gateway to Kafka ingestion.  
- **Dive Deep** – Profiled each component (CPU, I/O, network) and tuned JVM GC settings in the proxy.  

**Bar‑raiser cues**  
*Clear ownership of failure paths*, *quantified performance gains*, *learning loop via A/B testing latency spikes*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
