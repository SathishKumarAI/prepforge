---
qid: ing_fc7e1a8974__fp__local
question: 'Explain: Running with Docker Compose — GitHub - getzep/graphiti: Build
  Real-Time Knowledge Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 433
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:56:19-05:00'
sources: []
---

### Why Docker Compose Works for **getzep/graphiti**

At its core, *Graphiti* is a multi‑service stack: an **API server** (FastAPI), a **Neo4j graph database**, and optional **vector stores** (FAISS or Milvus). Each component has distinct runtime requirements—different binaries, ports, data volumes, and environment variables. Docker Compose solves the *dependency orchestration* problem by declaring these services in a single YAML file, letting the engine:

1. **Isolate environments** – each container gets its own filesystem, network namespace, and set of libraries, preventing cross‑talk between the Python runtime and Neo4j’s Java VM.
2. **Define data persistence** – volumes keep graph data and embeddings across restarts, matching Graphiti’s need for a durable knowledge base.
3. **Encapsulate configuration** – `environment:` blocks map GitHub secrets (e.g., `NEO4J_AUTH`) into runtime variables, enforcing the *principle of least privilege* by not hard‑coding credentials in code.
4. **Model service dependencies** – `depends_on` guarantees Neo4j starts before the API, preventing race conditions that would otherwise lead to “Connection refused” errors.

#### One Non‑Obvious Insight
Most people overlook how Compose’s *networking defaults* create an isolated internal DNS: services can refer to each other by name (`neo4j`, `api`). This means Graphiti’s code can hard‑code the host as `neo4j` instead of a loopback address, allowing the same container image to run locally or in a cloud cluster without changes. It also keeps the API’s exposed port (`8000`) unbound from Neo4j’s internal port, preserving security boundaries.

In short, Docker Compose turns Graphiti’s distributed architecture into a single declarative specification that respects isolation, persistence, and dependency order—principles central to robust, reproducible ML deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
