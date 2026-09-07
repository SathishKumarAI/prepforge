---
qid: ing_3962d71e95__aws__local
question: 'Explain: Agent Procedural Memory — \ud835\udc40\u2062\ud835\udc52\u2062\ud835\udc5a^\ud835\udc5d:
  Exploring Agent Procedural Memory'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 457
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:35:39-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team that built an AI assistant for the AWS Marketplace. The product needed to remember user habits (e.g., preferred query formats, API usage patterns) without storing raw logs, to stay GDPR compliant and keep latency < 50 ms.

**Action**  
*Owned* the end‑to‑end design:  

1. **Procedural memory layer** – a lightweight in‑memory graph (Neo4j‑style) that stores *action–state* pairs as edges.  
2. **AWS services** –  
   - **Amazon DynamoDB** for durable persistence of user graphs, with *point‑in‑time recovery* to meet compliance.  
   - **AWS Lambda + API Gateway** for stateless inference calls; Lambda layers ship the graph engine.  
   - **Amazon CloudWatch** and **X-Ray** for real‑time monitoring and trace‑level diagnostics.  

*Dive deep* into data pipelines: a Kinesis stream ingests interaction events, which a Glue job normalizes into `state→action` triples and writes to DynamoDB with a TTL of 90 days. The Lambda function loads the user’s graph on demand, performs a *breadth‑first search* for the most recent state, and returns the next recommended action.

**Result**  
- Reduced average response time from **120 ms** to **45 ms** (30% improvement).  
- Decreased storage costs by **35%** by using TTLs instead of full history logs.  
- Achieved **99.9% availability** in a single region, with auto‑scaling Lambda concurrency capped at 10k requests/sec.

**Reflection**  
I learned that *bias for action* means iterating quickly: we first tried a relational DB and hit latency spikes; switching to a graph model resolved the bottleneck. I’ll continue refining the memory depth by adding probabilistic weighting for newer states, ensuring the system scales as user base grows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
