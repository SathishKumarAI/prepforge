---
qid: ing_323d7f8ae3__star__local
question: 'Explain: Step 3: Lightweight Multi-Agent Coding — AI Coding Workflow -
  by Neo Kim and Louis-Fran\u00e7ois Bouchard'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 375
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:08:53-05:00'
sources: []
---

**Situation:** At my previous startup we were building a real‑time recommendation engine that needed nightly batch jobs plus an interactive model tuning API. Our single monolithic pipeline was blowing up in memory and taking 12 hrs to run on the new GPU cluster.

**Task:** I had to redesign the workflow so each micro‑service could be coded, tested, and deployed independently while still coordinating across the whole system—essentially a lightweight multi‑agent coding architecture as described by Neo Kim and Louis‑François Bouchard.

**Action:**  
1. I split the pipeline into three autonomous agents: **Data Ingestor**, **Feature Transformer**, and **Model Trainer**. Each agent is a Docker container with its own CI/CD pipeline on GitHub Actions, using `docker-compose` for local orchestration.  
2. I introduced a lightweight message bus (Redis Streams) to hand off batches between agents, ensuring at‑least‑once delivery without full Kafka overhead.  
3. Each agent exposes a tiny REST API (FastAPI) that accepts a job ID and returns status via a shared SQLite state table—this keeps the interface simple yet observable.  
4. I wrote integration tests using `pytest` and `requests-mock`, and added a Prometheus exporter in each container to expose per‑agent latency metrics.

**Result:** The new architecture cut nightly processing time from 12 hrs to 3 hrs, reduced memory footprint by 40%, and allowed us to roll out feature updates to the trainer without redeploying the entire stack. I learned that a well‑defined agent boundary plus lightweight messaging can dramatically improve both developer velocity and system resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
