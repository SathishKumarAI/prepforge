---
qid: ing_b9dd9039f9__think__local
question: 'Explain: VI. Processes — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 696
total_tokens: 887
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:12:42-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**  
- *What is the user really after?* They want an explanation of “VI. Processes – The 12‑Factor App” in a ML context.  
- Assume they’re familiar with basic ML pipelines but not necessarily with software engineering best practices.  
- Note: the 12‑factor app was originally for web‑apps, yet its process model applies to any stateless service that could be part of an ML workflow.

**2️⃣ Adopt a mental framework**  
- Treat the 12‑factor app as a *process‑centric design pattern* for deploying code.  
- Map each factor to a concrete ML artefact or deployment step (e.g., environment variables → model hyperparameters).  
- Use the “process” section of the spec: how an app starts, runs, and terminates.

**3️⃣ Step‑by‑step reasoning**  

| Factor | Core Idea | ML Mapping |
|--------|-----------|------------|
| 1. Codebase | One repo per product | Single codebase for training + inference pipelines |
| 2. Dependencies | Explicitly declare & isolate | Use `requirements.txt`/`Pipfile`, Docker layers |
| 3. Config | Separate config from code | Store hyperparams in env vars or a config file (e.g., YAML) |
| 4. Backing services | Treat as attached resources | Database for training data, S3 for model artifacts |
| 5. Build, release, run | Strict separation of stages | CI builds → Docker image → deployment |
| 6. Processes | Execute the app in stateless processes | Run a single inference worker per container |
| 7. Port binding | Self‑contained services | Expose REST endpoint on a defined port |
| 8. Concurrency | Scale via process count | Spin up more workers for higher throughput |
| 9. Disposability | Fast startup & graceful shutdown | Container entrypoint, SIGTERM handling |
|10. Dev/prod parity | Minimise differences | Same Docker image in dev and prod |
|11. Logs | Treat as event streams | Emit JSON logs to stdout; use ELK/CloudWatch |
|12. Admin processes | Run as one-off jobs | Training jobs, model evaluation scripts |

**4️⃣ Common traps to avoid**  
- *Thinking 12‑factor = only web‑apps*: it’s about process design, not just HTTP.  
- *Over‑engineering ML pipelines*: keep the mapping high‑level; don’t force every factor into trivial ML steps.  
- *Ignoring stateful components*: remember that ML often needs persistent storage (data lakes); treat them as backing services.

**5️⃣ Sanity‑check & verbalise**  
- Ask: “Does each factor still make sense when applied to an ML inference service?”  
- If any mapping feels forced, re‑evaluate the abstraction.  
- Communicate clearly by summarising how a typical ML workflow (data ingestion → training → model registry → inference) can be structured as a 12‑factor compliant process: stateless workers, config via env vars, Dockerised builds, and log aggregation.

This reasoning scaffold lets you explain the “VI. Processes” section confidently while tying it back to real‑world ML deployment practices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
