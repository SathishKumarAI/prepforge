---
qid: ing_27b329145d__star__local
question: 'Explain: Example Workflow — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 288
total_tokens: 527
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:47:53-05:00'
sources: []
---

**Situation** – In my last role as a ML engineer at a fintech startup, we were rolling out a recommendation engine that ran in several microservices across Kubernetes. The team noticed that our inference service was often down or returning stale model versions because the deployment pipeline kept updating the container image.

**Task** – I needed to build a robust way for all services—data ingestion, feature store, and inference—to find the latest healthy model endpoint without manual configuration.

**Action** – I implemented a lightweight service discovery layer using Consul. Each time we deployed a new model version, the CI pipeline pushed its metadata (service name, URL, health check endpoint) to Consul’s key‑value store. The inference client queried Consul at startup and every 5 minutes for the current healthy address, automatically retrying with exponential backoff if the target was unhealthy. I also added a small REST proxy that cached the service mapping in memory for sub‑second lookups.

**Result** – After deployment, the mean time to recover from a failed inference node dropped from ~12 min to <30 s, and we eliminated 97% of the stale‑model incidents. The team now can roll out new models with zero manual reconfiguration, and I learned how distributed service discovery can be integrated seamlessly into an ML microservice stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
