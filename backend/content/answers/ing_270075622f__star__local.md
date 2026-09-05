---
qid: ing_270075622f__star__local
question: 'Explain: Installing with Amazon Neptune Support — GitHub - getzep/graphiti:
  Build Real-Time Knowledge Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 357
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:46:35-05:00'
sources: []
---

**Situation** – While working on a proof‑of‑concept for an AI agent that needed real‑time access to a knowledge graph, I chose the `getzep/graphiti` library because it supports Amazon Neptune out of the box. My team was using AWS Lambda and had a tight 48‑hour sprint to get a demo running.

**Task** – I had to install Graphiti with Neptune support, configure it to connect securely to our Neptune cluster, and ensure that the graph data could be queried from the Lambda function without exceeding the 15 MB deployment package limit.

**Action** – First, I forked the repo and added `neptune` as an optional dependency in `requirements.txt`. Using Docker, I built a lightweight image with only Python 3.9, pip, and the `graphiti[neptune]` wheel to keep the size down. In the Lambda layer I bundled this image, then set environment variables (`NEPTUNE_ENDPOINT`, `AWS_REGION`) and used IAM role permissions for Neptune data access. I wrote a small bootstrap script that creates a `GraphClient` instance pointing at our cluster’s endpoint, runs a quick SPARQL query to validate connectivity, and caches the result in `/tmp`.

**Result** – The deployment package stayed under 10 MB, the Lambda function launched within seconds, and we achieved sub‑200 ms latency for graph queries during the demo. The project was delivered on time, and I learned how to combine optional dependencies with Docker layers to keep serverless deployments lean while still enabling full Neptune integration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
