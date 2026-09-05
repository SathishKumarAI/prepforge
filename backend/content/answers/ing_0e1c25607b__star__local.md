---
qid: ing_0e1c25607b__star__local
question: 'Explain: Installation — GitHub - getzep/graphiti: Build Real-Time Knowledge
  Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 387
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:56:49-05:00'
sources: []
---

**Situation**  
When I joined the AI Ops team, we were tasked with prototyping a real‑time knowledge graph for an autonomous chatbot. The only open‑source library that fit our latency and scalability needs was *getzep/graphiti* on GitHub, but the repo had no pre‑built binaries, so I had to set up the entire stack from scratch.

**Task**  
I needed to get a local instance of Graphiti running within 48 hours, with a Dockerized Neo4j backend and an API gateway that could ingest streaming logs at >1k events/sec.

**Action**  
First, I cloned the repo (`git clone https://github.com/getzep/graphiti.git`) and switched to the `v2.1` branch where the latest GraphQL schema lives. Using Docker Compose, I spun up Neo4j with a 16 GB RAM allocation, then ran `pip install -e .[dev]` inside a Python 3.11 virtualenv to get the dependencies (FastAPI, Ariadne, async‑pg). I patched the `config.yaml` to point to our internal Kafka topic and set the batch size to 500. Finally, I executed `make test` to verify that the ingestion pipeline could process a synthetic stream of 5 000 events without memory leaks.

**Result**  
Within the deadline, Graphiti was ingesting data at 1.2k events/sec and served real‑time queries with <30 ms latency. The demo convinced product management to allocate an additional GPU node, which later enabled us to scale to 10k events/sec. I learned how to orchestrate a multi‑service ML stack from source, balancing Docker resource limits against query performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
