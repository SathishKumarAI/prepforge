---
qid: ing_1869cac96a__star__local
question: 'Explain: Evolution and Scale of Uber''s Delivery Search Platform'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 315
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:17:35-05:00'
sources: []
---

**Situation** – In early 2022 I joined the Uber Eats tech team as a senior ML engineer, tasked with revamping our delivery search platform that matched riders to orders. The existing system was built on a monolithic Flask app and served only about 10k requests per second; it struggled during peak hours, causing a 12% drop in rider acceptance rates.

**Task** – I had to redesign the architecture for horizontal scalability, reduce latency by at least 30%, and enable real‑time learning of rider preferences so that the matching algorithm could adapt within minutes of new data.

**Action** – First, I broke the monolith into microservices using Docker/K8s, exposing a REST API for candidate generation. For the core ranking engine, I migrated from a hand‑tuned gradient boosting model to a distributed XGBoost pipeline on Spark, adding a streaming layer with Kafka to ingest rider behavior in real time. I implemented an online learning loop that updated feature weights every 5 minutes using a lightweight Lambda architecture. Finally, I set up Prometheus/Grafana dashboards for SLA monitoring and automated A/B testing via Feature Flags.

**Result** – The new platform handled 45k QPS during lunch rush with sub‑50 ms latency, boosting rider acceptance by 18% and reducing order wait times by 22%. I learned that coupling containerized microservices with streaming ML pipelines is key for real‑time, large‑scale recommendation systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
