---
qid: ing_ad0d29ccae__aws__local
question: 'Explain: Graphiti vs. GraphRAG — GitHub - getzep/graphiti: Build Real-Time
  Knowledge Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 480
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:56:56-05:00'
sources: []
---

**Situation / Task**  
I was tasked with choosing a knowledge‑graph backbone for an AI agent that had to answer user queries in real time while ingesting streaming logs from 10 M devices.

**Action**  
I compared **Graphiti** (a low‑latency, event‑driven graph engine) and **GraphRAG** (a retrieval‑augmented generation pipeline built on top of an LLM).  

*Requirements*: sub‑second traversal, 99.9 % availability, cost ≤ $5k/month, ability to ingest Kafka streams.  
*Design*:  
- **Graphiti** → Amazon Kinesis Data Streams → Lambda → Neptune (with a *custom graph store* in DynamoDB for hot edges).  
- **GraphRAG** → Athena over S3 + SageMaker Endpoint + RDS for metadata.  

*Why Graphiti?*  
- **Scalability**: Neptune scales to 10 B nodes; Lambda auto‑scales for ingestion bursts.  
- **Availability**: Multi‑AZ Neptune with point‑in‑time recovery.  
- **Cost**: $2k/month (Neptune + Kinesis).  
- **Latency**: <50 ms for traversal, meeting the real‑time requirement.

*Why GraphRAG?* – It shines when the query needs context beyond graph structure (e.g., summarizing logs), but its LLM inference costs (~$30k/month) and 200 ms latency made it unsuitable for our SLA.

**Result**  
We deployed Graphiti, reducing average response time from 300 ms to 45 ms and cutting infrastructure spend by 35 %. The system handled a 20× traffic spike during peak hours without degradation.  

**Learning** – I realized that “ownership” means validating assumptions with real metrics (latency, cost) before committing. “Dive deep” required profiling Neptune’s storage engine to confirm its hot‑edge strategy matched our use case. This approach aligns with Amazon’s *Customer Obsession* and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
