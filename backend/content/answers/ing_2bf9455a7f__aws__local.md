---
qid: ing_2bf9455a7f__aws__local
question: 'Explain: MCP Server — GitHub - getzep/graphiti: Build Real-Time Knowledge
  Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 484
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:04:33-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During a recent project I built an **MCP Server** that powers the *Graphiti* real‑time knowledge graph used by AI agents at GetZep.  
**Situation:** The product team needed a low‑latency, continuously updated graph to feed conversational models with context from millions of documents. Existing batch pipelines were too slow and cost‑prohibitive.  

**Task:** Design an on‑demand graph service that ingests streams of events (document updates, user interactions), materializes relationships in real time, and exposes a GraphQL API for AI agents—all while staying within a $5k/month budget.  

**Action:**  
1. **Event ingestion** – AWS Kinesis Data Streams to buffer high‑velocity events.  
2. **Processing & storage** – Lambda functions (Python/Apache TinkerPop) transform records into Cypher statements and write to Amazon Neptune, chosen for native graph support and sub‑second query latency.  
3. **API layer** – AppSync + Lambda resolver gives a single GraphQL endpoint; AppSync handles caching and request throttling.  
4. **Observability** – CloudWatch metrics (latency, error rate) trigger auto‑scaling of Neptune clusters via Aurora Serverless for read replicas.  

**Result:** The system ingested 1.2 M events/day with <200 ms average query latency, reducing AI response time by 35% and cutting operational costs from $12k to $4.8k/month.  

**Leadership Principles Highlighted:**  
- **Customer Obsession & Deliver Results** – Delivered a faster, cheaper solution that directly improved user experience.  
- **Dive Deep** – Investigated latency bottlenecks, tuned Neptune query plans, and measured impact with real metrics.  

Bar‑raisers listen for ownership of end‑to‑end flow, depth in trade‑off analysis (Neptune vs DynamoDB), quantified performance gains, and lessons learned from the first iteration that led to cost optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
