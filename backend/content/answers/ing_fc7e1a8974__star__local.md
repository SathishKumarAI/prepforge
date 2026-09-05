---
qid: ing_fc7e1a8974__star__local
question: 'Explain: Running with Docker Compose — GitHub - getzep/graphiti: Build
  Real-Time Knowledge Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 341
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:53:25-05:00'
sources: []
---

**Situation:**  
At my last internship I was tasked with prototyping a real‑time knowledge graph for an AI assistant. The team had already forked the `getzep/graphiti` repository, but every developer kept spinning up separate containers manually on their laptops, which caused version drift and inconsistent performance.

**Task:**  
I needed to create a single, reproducible Docker Compose setup that would spin up all required services—Zep vector store, Graphiti API, Neo4j graph database, and the inference microservice—so every team member could run the stack locally with one command and produce identical results.

**Action:**  
I cloned the repo, inspected its `docker-compose.yml`, and added missing environment variables for authentication keys. I introduced a `.env` file to centralize secrets, and used Docker Compose’s `depends_on` and healthchecks to ensure Neo4j was ready before Graphiti started. I also tweaked resource limits (2 GB RAM) to keep the local VM from swapping during training. Afterward, I wrote a short shell script that ran `docker compose up --build` and logged output to `compose.log`, making debugging trivial.

**Result:**  
All 12 developers could launch the full stack in under two minutes on their laptops, and we achieved a 30 % reduction in startup time compared with manual Docker runs. The consistent environment also eliminated the “works on my machine” bugs, and I learned how to balance resource constraints while preserving performance for real‑time graph queries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
