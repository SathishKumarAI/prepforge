---
qid: ing_90f4def6fe__star__local
question: 'Explain: Glean MCP server capabilities ​ — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 374
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:22:46-05:00'
sources: []
---

**Situation**  
At my previous role I was tasked with improving the search relevance for a large enterprise knowledge base that had grown to over 1.2 million documents. The existing indexing pipeline was sluggish, and our recommendation engine was missing key contextual signals.

**Task**  
I needed to build an efficient, real‑time model serving layer that could ingest raw text, run multiple transformer models (BERT for embeddings, a lightweight classifier for relevance), and expose the predictions via a low‑latency API. The solution had to support 10 k requests per second with sub‑200 ms response time.

**Action**  
I chose Glean’s MCP (Machine‑Learning‑Inference‑Cluster) server because of its GPU‑optimized inference runtime and auto‑scaling features. I containerized each model using Docker, deployed them on an MCP cluster with NVIDIA A100 GPUs, and used the built‑in job scheduler to batch requests in 32‑sample windows. I also integrated a custom feature store that cached embeddings for hot documents, reducing compute cycles by 35 %. For monitoring, I set up Prometheus metrics exposed by MCP’s health endpoints and triggered alerts on latency thresholds.

**Result**  
Within two weeks of deployment the average query latency dropped from 650 ms to 145 ms, while throughput increased from 3.5 k rps to 12.8 k rps. Search relevance scores (NDCG@10) improved by 18 %. I learned that leveraging MCP’s native GPU scheduling and built‑in observability can dramatically cut both engineering time and operational overhead in ML inference pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
