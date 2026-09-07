---
qid: ing_f5a72ddd5e__aws__local
question: 'What is a Context Graph? — GitHub - getzep/graphiti: Build Real-Time Knowledge
  Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 594
total_tokens: 846
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:32:18-05:00'
sources: []
---

**Context Graph (AWS‑style)**  
A Context Graph is a dynamic, directed graph that captures entities and their relationships in real time so an AI agent can reason about *who/what* it is interacting with, *where*, *when*, and *why*. It differs from a static knowledge base because edges are updated continuously via event streams (e.g., user actions, sensor data) and the graph’s topology can change as new entities appear.

**STAR Example – Building a Real‑time Customer Journey Graph**

| S | T | A | R |
|---|---|---|---|
| **S**: At a SaaS startup, customers churned 18 % each quarter. |
| **T**: We needed to surface *why* users leave before they do so. |
| **A**: I led the design of a Context Graph using Amazon Kinesis Data Streams (events), AWS Glue (ETL), and Amazon Neptune as the graph store. Each event (login, click, support ticket) became a node; relationships like “clicked → feature” or “sent → ticket” were edges. I added a Lambda‑based enrichment pipeline to tag entities with sentiment scores from Comprehend. |
| **R**: Within 3 months we reduced churn by 12 % (from 18 % to 15.8 %) and cut support tickets by 25 %. The graph handled 1M events/day, scaled automatically via Neptune’s read replicas, and cost $0.07 per query—$2× cheaper than our legacy relational analytics. |

**Technical Notes**

- **Requirements:** Low‑latency queries (<200 ms), high write throughput (10k TPS).  
- **Design Choices:** Neptune for ACID guarantees + built‑in graph traversal; Kinesis for decoupled ingestion; Glue for schema evolution.  
- **Scalability/Availability:** Read replicas, auto‑scaling shards, multi‑AZ deployment.  
- **Cost Trade‑off:** Using DynamoDB for adjacency lists would be cheaper per node but would require complex joins; Neptune’s native graph queries cut processing time by 80 %.  

**Bar‑raiser cues**

- Ownership: I owned the full pipeline from ingestion to visualization.  
- Dive Deep: I quantified impact (churn, ticket volume) and iterated on edge weighting based on A/B tests.  
- Learning from Failure: Initial schema caused query slowness; we refactored using adjacency lists in Neptune’s `OUTBOUND` index—showed 60 % faster traversal.  

**Leadership Principles:** *Customer Obsession* (understand churn drivers), *Ownership* (end‑to‑end delivery).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
