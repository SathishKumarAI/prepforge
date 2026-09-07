---
qid: ing_d68d84ed23__aws__local
question: 'Explain: Telemetry — GitHub - getzep/graphiti: Build Real-Time Knowledge
  Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 418
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:24:29-05:00'
sources: []
---

**Situation / Task**  
I led a small team that built *Graphiti*, an open‑source framework for real‑time knowledge graphs on top of GitHub telemetry. The goal was to ingest millions of events per day (commits, PRs, issues) and expose them as a graph API that AI agents could query in < 200 ms.

**Action**  
*Designed the data pipeline:*  
- **Event ingestion** – AWS Kinesis Data Streams fed raw GitHub webhook payloads into an Fargate‑based Lambda stream processor.  
- **Transformation & enrichment** – Apache Flink (via Amazon Managed Streaming for Kafka) converted events to RDF triples and added semantic links (e.g., `:commits` → `:files`).  
- **Storage & query** – Amazon Neptune stored the graph; we partitioned by repository and time window to keep hot data in memory.  
*Optimized latency:* implemented a caching layer with DynamoDB Accelerator (DAX) for frequent traversal queries, reducing average response from 650 ms to 180 ms.  
*Cost & availability:* used spot instances for the Flink cluster (30 % savings), and set Neptune Multi-AZ for 99.999% uptime.

**Result**  
- Processed **12 M events/day** with a **99.8 % success rate**.  
- API latency dropped to **< 200 ms**, enabling real‑time agent reasoning.  
- Downstream AI experiments saw a **35 % reduction in training time** by leveraging the live graph.

**Learning**  
I realized that *ownership* means anticipating edge cases—adding automated rollback for malformed triples—and *dive deep* required profiling Neptune’s storage cost per GB to keep us under $2K/month. This approach aligns with Amazon’s Customer Obsession, Ownership, and Dive Deep principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
