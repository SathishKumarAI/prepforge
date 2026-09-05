---
qid: ing_a60ea0a9ef__eli5__local
question: 'Explain: Microservices architecture — Introduction to Apollo Federation
  - Apollo GraphQL Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 221
total_tokens: 384
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:01:18-05:00'
sources: []
---

Think of a city where each neighborhood runs its own local government (microservice). Every block has its own mayor, council, and services—some handle roads, others parks, some waste, some schools. If you want to know the whole city’s layout, you need a map that stitches all neighborhoods together.

Apollo Federation is like a master city planner who builds one giant “city‑wide” map from those neighborhood maps. Each microservice publishes its own GraphQL schema (the local map). The federation layer collects them, connects related parts (roads linking to parks), and creates a single GraphQL endpoint. Clients ask the planner for data—Apollo will route the question to the right neighborhood service, merge responses, and return one coherent answer.

**Key terms**
- **Microservice:** an independent component that does one job.
- **GraphQL schema:** a description of the data types and queries a service can provide.
- **Federation:** the process of combining multiple schemas into one unified API.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
