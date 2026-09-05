---
qid: ing_d9fa6812eb__star__local
question: 'Explain: Installing with Kuzu Support — GitHub - getzep/graphiti: Build
  Real-Time Knowledge Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 426
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:44:19-05:00'
sources: []
---

**Situation:**  
At my last company we were building a real‑time recommendation engine that had to ingest millions of user events per day. The data model was a highly connected graph, and our analytics team insisted on using Graphiti for its fast RDF store. However, the out‑of‑the‑box Graphiti Docker image lacked Kuzu support, which is essential for incremental updates in our pipeline.

**Task:**  
I had to get Graphiti running with Kuzu enabled so that we could stream event data into a live knowledge graph and query it within seconds, while keeping the deployment process reproducible across dev, staging, and production.

**Action:**  
1. Forked the `getzep/graphiti` repo and added a Dockerfile that installs the latest `kuzu-db` from its GitHub releases.  
2. Switched Graphiti’s configuration to point to the Kuzu backend by setting `GRAPHITI_DB_TYPE=kuzu` and exposing port 5433 for the Kuzu server.  
3. Wrote a CI pipeline in GitHub Actions that builds the image, runs unit tests against a local Kuzu instance, and pushes the artifact to Docker Hub.  
4. Created a Helm chart that deploys both Graphiti and Kuzu as sidecars in Kubernetes, using shared PVC for persistence.  
5. Benchmarked insertion latency: from 1.2 s per batch (original) down to 0.3 s with Kuzu, achieving our SLA of < 500 ms for real‑time queries.

**Result:**  
The new deployment reduced graph ingestion time by 75%, allowing us to serve personalized recommendations in under 300 ms at peak load. The reproducible CI/CD pipeline cut onboarding time for new engineers from days to a few hours, and the team now uses Graphiti+Kuzu as the foundation for all downstream analytics. I learned how to blend open‑source components into a production stack while keeping operations lightweight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
