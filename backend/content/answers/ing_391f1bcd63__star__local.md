---
qid: ing_391f1bcd63__star__local
question: 'Explain: Scaling & ops — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 351
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:22:59-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a product‑search feature that used vector embeddings to surface relevant documents for each user query. By month 6 traffic had tripled and our latency budget of 150 ms was being breached during peak hours.

**Task:**  
I was tasked with scaling the semantic search pipeline so it could handle 10× more queries per second while keeping response time under 120 ms, all without blowing up cloud costs.

**Action:**  
First I profiled the end‑to‑end flow: tokenization → embedding generation (using a distilled BERT model) → similarity lookup in an HNSW index. I replaced the monolithic inference server with a containerized microservice orchestrated by Kubernetes, auto‑scaling based on CPU usage. For embeddings I switched to ONNX runtime and cached popular query vectors locally. The HNSW index was sharded across 8 nodes; we added a lightweight Redis cache for the top‑k results to avoid hitting disk. I also introduced async batching of inference requests so GPU utilization rose from ~30 % to >80 %. Finally, I set up Grafana dashboards and alerts on latency percentile curves.

**Result:**  
Latency dropped from 240 ms average to 95 ms (99th percentile <110 ms). Query throughput increased from 200 QPS to 2,300 QPS with a 35 % reduction in monthly cloud spend. I learned that micro‑service isolation, batching, and intelligent caching are key levers for scaling AI search workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
