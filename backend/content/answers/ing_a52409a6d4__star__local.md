---
qid: ing_a52409a6d4__star__local
question: 'Explain: How the Three Layers Fit — Tool Use And Mcp'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 418
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:03:26-05:00'
sources: []
---

**Situation** – In my last role I was tasked with launching a real‑time recommendation engine for an e‑commerce platform that had to serve 5 million requests per day while keeping latency under 100 ms.

**Task** – Build a production AI stack that cleanly separates data, model, and serving layers, integrates existing tools (Kafka, Spark, TensorFlow), and uses Multi‑Cluster Proxy (MCP) for zero‑downtime rollouts across our Kubernetes clusters.

**Action** – I first set up a Kafka ingestion pipeline to stream click logs into HDFS. Using Spark we performed feature extraction on the fly and persisted the engineered features in Parquet for training. In the model layer, I containerized a TensorFlow 2.x model with GPU support and deployed it as a Kubeflow Pipelines job; the model was versioned in MLflow. For serving, I wrapped the model in a FastAPI app behind Envoy, exposing a gRPC endpoint. MCP was configured to route traffic between two Kubernetes namespaces (canary vs stable) so we could A/B test new models without service interruption. I also added Prometheus alerts on inference latency and error rates.

**Result** – The end‑to‑end system handled 5.2 million requests/day with an average latency of 78 ms, a 12 % lift in conversion rate, and zero downtime during model rollouts. I learned that clear layer boundaries and tool orchestration are key to scaling AI at production speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
