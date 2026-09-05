---
qid: ing_619e4e34d4__star__local
question: 'Explain: See also ​ — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 405
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:43:19-05:00'
sources: []
---

**Situation** – At my last job I was tasked with deploying an NLP sentiment‑analysis model to serve real‑time product reviews for a retail client. Their existing infra used the Glean Machine‑Learning Compute Platform (MCP) as the backend, but the team had never pushed models into it and we were on a tight 10‑day sprint.

**Task** – I needed to get the model from our local PyTorch environment into MCP, expose it via a REST endpoint, and ensure latency stayed below 150 ms per request while handling 2k concurrent users.

**Action** – First, I converted the trained TorchScript graph into an ONNX bundle and wrapped it with Glean’s container runtime. Using Glean’s auto‑scaling API I set up a pod group that would spin up to three replicas based on CPU usage. I wrote a lightweight FastAPI wrapper inside the container to deserialize JSON payloads, run inference, and stream back predictions in protobuf format, which Glean expects for optimal throughput. To hit our latency goal I applied model quantization (int8) and tuned batch size to 32; I also used Glean’s built‑in caching layer to keep hot embeddings resident in memory.

**Result** – The deployment went live on day 7. We achieved an average inference time of 115 ms, dropped error rates from 3% to 0.4%, and the client saw a 25% increase in conversion rate from sentiment‑filtered recommendations. I learned how Glean’s serverless scaling and metric‑driven autoscaling can drastically reduce ops overhead for ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
