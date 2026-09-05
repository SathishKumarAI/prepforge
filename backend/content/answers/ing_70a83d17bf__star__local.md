---
qid: ing_70a83d17bf__star__local
question: 'Explain: Workflow frameworks — Agentic Engineering - by Neo Kim and Paul
  Hoekstra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 402
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:12:38-05:00'
sources: []
---

**Situation**  
In my last role as a data‑science lead at a fintech startup, our ML pipeline was a chaotic mix of Jupyter notebooks, ad‑hoc scripts, and a few Airflow DAGs that rarely ran on schedule. We were missing reproducibility and had trouble scaling experiments to production.

**Task**  
I needed to build an end‑to‑end workflow framework that would let data scientists experiment rapidly while ensuring production deployments were deterministic, auditable, and could be rolled back if something went wrong—essentially implementing the Agentic Engineering principles from Neo Kim and Paul Hoekstra.

**Action**  
I chose Prefect for orchestration because of its declarative task graph and native support for versioning. I wrapped each ML step (data ingestion, feature engineering, model training, hyper‑parameter search) into independent “agents” that could run locally or on a Kubernetes cluster. Using the Agentic Engineering approach, I added self‑healing logic: agents monitor their own health and automatically trigger retries or fallbacks if they fail. I also integrated MLflow for experiment tracking and Dockerized every agent to guarantee environment consistency. The framework exposed a simple CLI for scientists to register new experiments without touching the core codebase.

**Result**  
Within three months, our pipeline throughput increased by 60 %—we could run full end‑to‑end training cycles in under an hour instead of 4 hours. Production deployments became automated and rollback‑ready; we reduced A/B testing latency by 70 %. The team reported a 35 % boost in productivity because they no longer had to manually manage dependencies or worry about environment drift. This experience reinforced that treating ML workflows as autonomous, self‑monitoring agents leads to both agility and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
