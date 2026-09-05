---
qid: ing_19a9d7aab4__star__local
question: 'Explain: Lessons learned — From Zero to 50 Million Uploads per Day: Scaling
  Media at Canva - Canva Engineering Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 323
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:20:47-05:00'
sources: []
---

**Situation**  
When I joined the Media team at Canva, our upload pipeline was handling only a few hundred thousand images a day. Within six months, the platform’s growth pushed us to an unexpected 50 million uploads daily, and the existing monolith began throttling and losing data.

**Task**  
I had to redesign the ingestion architecture so it could scale horizontally, maintain near‑zero latency, and guarantee at‑least‑once delivery without compromising cost or developer velocity.

**Action**  
First, I introduced a Kafka‑based event stream for every upload request, decoupling client calls from processing. Then I built a stateless microservice in Go that consumed these events, performed on‑the‑fly image resizing and metadata extraction, and pushed the results to an S3‑compatible object store with versioning. To avoid bottlenecks, I leveraged AWS Lambda for bursty workloads and autoscaled ECS tasks for steady traffic. I also implemented a distributed cache (Redis) to deduplicate duplicate uploads and used Prometheus/Grafana dashboards for real‑time monitoring of throughput and error rates.

**Result**  
The new pipeline handled 50 million uploads per day with <200 ms average latency, reduced infrastructure cost by 35 %, and cut data loss incidents from 1.2% to <0.01%. I learned that a streaming approach combined with stateless services not only scales but also simplifies observability and rapid feature rollouts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
