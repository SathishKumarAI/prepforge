---
qid: ing_1e67e4d969__faang__local
question: 'Explain: IX. Disposability — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 464
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:55:47-05:00'
sources: []
---

**Disposability – the “IX. Disposability” factor of a 12‑Factor Machine‑Learning App**

| Step | What to Cover |
|------|---------------|
| **Clarify** | *Restate:* In ML, disposability means you can spin up or tear down model instances quickly and safely—without side effects. Ask: “Do we need stateful inference servers? Are we using long‑lived containers?” |
| **Approach** | 1️⃣ Keep everything stateless (use external DB/Cache). <br>2️⃣ Make the runtime idempotent (same input → same output, no hidden dependencies). <br>3️⃣ Use immutable artifacts (Docker images, model binaries). |
| **Depth** | • **Stateless inference:** Store weights in S3 or a shared file system; each pod reads the same checkpoint. <br>• **Immutable deployments:** Build a new image with `docker build --no-cache` and tag by version/hash. <br>• **Graceful shutdown:** Hook into SIGTERM, flush pending predictions, then exit. <br>• **Health‑checks & retries** to avoid stale state during rapid scaling. Complexity: O(1) per request; memory footprint = model size only. |
| **Edge Cases** | • Hot‑warm caching of embeddings – must be cleared on shutdown. <br>• In‑process queues (e.g., Ray actors) that hold unprocessed batches—ensure they’re drained or persisted. <br>• Model updates while serving – use blue/green deployments to avoid “split brain.” |
| **Optimize & Communicate** | • **CI/CD pipeline**: auto‑build, test, and push new images; roll back on failure. <br>• **Observability:** log deployment timestamps, version tags, and metrics for latency spikes during scaling. Narrate how each step guarantees that any instance can be discarded without impacting the system or requiring manual cleanup—critical for cost‑efficient autoscaling in cloud ML workloads. |

*Word count: ~190 words.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
