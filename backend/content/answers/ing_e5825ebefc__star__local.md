---
qid: ing_e5825ebefc__star__local
question: 'Explain: Scale and fail independently — Event-Driven Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 337
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:06:51-05:00'
sources: []
---

**Situation**  
I was leading a team that built an online recommendation engine for a mid‑size e‑commerce platform. The service had to process millions of user events per day, and we noticed latency spikes during flash sales when the traffic doubled.

**Task**  
We needed to redesign the ingestion pipeline so that each microservice could scale on its own and continue operating even if one component failed, without affecting the overall recommendation throughput.

**Action**  
I introduced an event‑driven architecture using Kafka as a durable broker. Each domain (clickstream, purchase history, inventory updates) published events to separate topics. The ML inference service consumed only the “user‑activity” topic via a consumer group that could be scaled horizontally by adding more workers. We added circuit breakers in each consumer and used dead‑letter queues for malformed messages. For model training, we triggered asynchronous jobs with AWS Step Functions so that training failures didn’t block real‑time predictions. Finally, I set up Prometheus alerts to auto‑scale the consumer pods based on queue depth.

**Result**  
After deployment, our latency dropped from 450 ms to under 120 ms during peak traffic, and we achieved a 99.8% uptime for the inference service. The system could now handle a 3× surge in events without any single point of failure. I learned that decoupling services with an event bus not only improves scalability but also simplifies fault isolation, which is critical for production ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
