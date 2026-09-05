---
qid: ing_b9dd9039f9__star__local
question: 'Explain: VI. Processes — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 367
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:42:57-05:00'
sources: []
---

**Situation:** While leading the deployment of a recommendation engine for a mid‑size e‑commerce platform, our team noticed that production latency spiked during traffic surges and feature updates caused rollbacks because models were tightly coupled with the app code.

**Task:** I had to refactor the ML pipeline into a 12‑factor compliant microservice so that it could scale independently, support zero‑downtime deployments, and simplify model version management.

**Action:** First, I containerized the inference service using Docker, exposing the model as a stateless REST API. I moved all environment configuration (model paths, batch size, GPU allocation) into 12‑factor-friendly env variables. For dependency isolation, I used a dedicated Conda environment inside the image and pinned exact package versions to avoid “works on my machine” bugs. I leveraged Flyway for database migrations to version the model metadata store, ensuring that each deployment could roll back if needed. Continuous integration pipelines were updated to push new images to a private registry and trigger Kubernetes Deployments with rolling updates, keeping the old pods alive until the new ones passed health checks.

**Result:** The inference service now scales horizontally on demand; during peak traffic we added two more replicas without impacting latency, reducing average response time from 350 ms to 210 ms. Deployment lead times dropped from ~3 hours to under 15 minutes, and rollback incidents fell by 80%. I learned that treating ML models as first‑class services—subject to the same rigor as any other code—dramatically improves reliability and agility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
