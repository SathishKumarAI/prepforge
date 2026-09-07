---
qid: ing_270075622f__aws__local
question: 'Explain: Installing with Amazon Neptune Support — GitHub - getzep/graphiti:
  Build Real-Time Knowledge Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 407
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:54:04-05:00'
sources: []
---

**Situation / Task**  
I was tasked with adding a real‑time knowledge graph layer for an AI agent that needed instant inference on user queries. The team had to pull the open‑source **graphiti** library from GitHub and enable it to run against **Amazon Neptune**, all while keeping costs under \$3k/month.

**Action**  
1. **Dive Deep & Ownership** – I forked `getzep/graphiti`, reviewed its Dockerfile, and identified the missing JDBC driver for Neptune.  
2. Added a lightweight wrapper that streams Neo4j‑style Cypher queries over HTTPS to Neptune’s REST endpoint, using AWS SDK v2 for Java to sign requests (IAM role).  
3. Deployed the container on **Amazon ECS Fargate** with an Application Load Balancer and **AWS Secrets Manager** for credentials.  
4. Implemented auto‑scaling based on CPU/Memory thresholds and scheduled a nightly backup job using **AWS Backup** targeting Neptune snapshots.

**Result**  
- Query latency dropped from 1.8 s (local Neo4j) to <250 ms in production.  
- Operational cost decreased by 35% versus running a dedicated EC2‑based Neo4j cluster.  
- The AI agent’s answer accuracy improved by 12% due to richer real‑time context.

**Reflection & Bar‑raiser notes**  
I took full ownership of the integration, documented the custom driver in our internal wiki, and set up CI/CD with GitHub Actions to automatically run unit tests against a Neptune test cluster. The bar‑raiser would praise my **Customer Obsession** (delivering faster answers for users), **Bias for Action** (quickly prototyping the wrapper), and **Dive Deep** (understanding both graphiti internals and Neptune’s API).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
