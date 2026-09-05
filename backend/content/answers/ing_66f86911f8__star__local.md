---
qid: ing_66f86911f8__star__local
question: 'Explain: i would like you to design a — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 340
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:53:45-05:00'
sources: []
---

**Situation**  
At my previous company we were launching a smart parking solution for downtown malls. The pilot had 1,500 spots and the existing manual system was causing over‑90 % occupancy confusion during peak hours.

**Task**  
I needed to design an end‑to‑end architecture that would track spot availability in real time, predict short‑term vacancies, and provide a mobile interface for drivers—all while staying within a $250k budget and scaling to 10,000 spots.

**Action**  
I chose a microservices stack: Node.js for the API gateway, Kafka for event streaming, and PostgreSQL with TimescaleDB for temporal analytics. Sensors on each bay sent occupancy events to Kafka; an ML inference service (Python + scikit‑learn) ran a time‑series model that predicted vacancy probability 5 minutes ahead. The mobile app consumed this stream via WebSockets. I used Docker Compose for local dev and Helm charts for Kubernetes deployment on AWS EKS, with autoscaling based on CPU usage. For cost control, spot instances were used for the inference nodes, and we set up CloudWatch alerts to trigger scaling.

**Result**  
Within three months of rollout, real‑time occupancy accuracy rose from 58 % to 92 %, and predicted vacancy windows reduced average driver wait time by 38 %. The system handled a peak load of 20k concurrent users without any outages. I learned how to blend streaming data pipelines with lightweight ML models in production, and the importance of monitoring latency at every hop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
