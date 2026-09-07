---
qid: ing_b9dd9039f9__faang__local
question: 'Explain: VI. Processes — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 601
total_tokens: 836
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:55:04-05:00'
sources: []
---

**Clarify**  
The interview asks how the *12‑Factor App* methodology applies to building a production‑ready machine‑learning system. I’ll assume we’re deploying a model as a stateless service, using containers or serverless functions, and that persistence (datasets, checkpoints) is external.

**Approach**  
I’ll map each factor to ML practices: codebase, dependencies, config, backing services, build/run separation, process isolation, port binding, concurrency, disposability, dev‑to‑prod parity, logs, admin processes. Then I’ll highlight typical pitfalls and mitigation tactics (e.g., model versioning, data drift monitoring).

**Depth**  
1️⃣ **Codebase** – One Git repo per model; tags for production releases.  
2️⃣ **Dependencies** – Pin exact `requirements.txt` or Conda lockfile; use Docker to freeze the runtime.  
3️⃣ **Config** – Store hyper‑parameters and feature store URLs in env vars (e.g., via Vault).  
4️⃣ **Backing services** – Treat data stores, model registries, and inference queues as attached services; decouple via interfaces.  
5️⃣ **Build / Run** – Separate CI build step that packages the model artifact from runtime containers that only load it.  
6️⃣ **Process** – Run inference as a single‑process HTTP server (e.g., FastAPI) or event‑driven Lambda.  
7️⃣ **Port binding** – Expose a predictable port; container orchestrators handle routing.  
8️⃣ **Concurrency** – Use worker pools; avoid shared state to keep processes stateless.  
9️⃣ **Disposability** – Ensure graceful shutdown and idempotent request handling so that scale‑up/down is painless.  
🔟 **Dev‑to‑Prod parity** – Mirror production config locally (e.g., Docker Compose).  
1️⃣1️⃣ **Logs** – Emit structured JSON to stdout; let the platform aggregate.  
1️⃣2️⃣ **Admin processes** – Separate scripts for data preprocessing, model retraining, and A/B tests, invoked via CI/CD pipelines.

**Edge cases**  
- *Large models* → use lazy loading or model sharding; test cold‑start latency.  
- *Data drift* → add a monitoring process that flags distribution shifts.  
- *Stateful training jobs* → treat training as an external job (e.g., Kubernetes Jobs) and keep inference stateless.

**Optimize & communicate**  
Explain trade‑offs: tighter dependency isolation reduces breakage but increases build time; exposing all config via env vars simplifies CI/CD but can clutter the environment. Conclude by stressing that applying 12‑factor principles turns ML code into a maintainable, scalable service, just like any production web app.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
