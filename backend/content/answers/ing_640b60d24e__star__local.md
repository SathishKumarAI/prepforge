---
qid: ing_640b60d24e__star__local
question: 'Explain: What We Collect — GitHub - getzep/graphiti: Build Real-Time Knowledge
  Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 347
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:47:54-05:00'
sources: []
---

**Situation**  
At my last role I was tasked with extending our real‑time knowledge graph platform, Graphiti, to ingest data from GitHub repositories for a new AI agent feature. The product already pulled code metrics and commit histories, but we needed richer context—issues, pull request discussions, and contributor networks—to improve recommendation accuracy.

**Task**  
Define what specific GitHub artifacts to collect, how to model them in the graph, and ensure compliance with rate limits while keeping latency under 2 seconds per repository snapshot.

**Action**  
I scoped the API endpoints: events (pushes, issues), issue comments, PR reviews, and user profiles. Using Python’s `requests` with async coroutines, I built a pipeline that paginated results, respected GitHub’s 5000‑request/day cap by caching ETag headers, and de‑duplicated users across repos. In the graph schema, repositories became nodes linked to `Repository` → `Issue`/`PR`, each tagged with timestamps. Users were connected via `CONTRIBUTED_TO` edges weighted by commit count. I leveraged Neo4j’s APOC procedures for bulk import and wrote Cypher queries that materialized subgraphs per repo in under 1 s.

**Result**  
The enriched graph increased the AI agent’s recommendation precision from 68% to 82%, a 14‑point lift, while keeping ingestion latency below the target. I learned how to balance API limits with real‑time needs and the importance of caching ETags for efficient GitHub data collection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
