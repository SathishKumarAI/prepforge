---
qid: ing_4871388ddb__aws__local
question: 'Explain: Memory and Connectors — Semantic Kernel'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 385
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:09:10-05:00'
sources: []
---

**Situation & Task**  
At my last role I was tasked with building a *context‑aware recommendation engine* for an e‑commerce platform that had to scale to 3 M active users and deliver next‑product suggestions in <200 ms. The core challenge was **persisting user intent (memory)** while enabling real‑time inference across multiple data sources (connectors).  

**Action – Technical Design**  
I leveraged **Semantic Kernel**, an open‑source framework that abstracts *semantic memory* as a vector store and *connectors* as adapters to external knowledge bases.  
- **Memory Layer**: Deployed Amazon Kendra + DynamoDB for structured logs, and Amazon Bedrock (Claude) embeddings stored in Amazon QLDB for auditability.  
- **Connector Layer**: Built custom connectors using AWS Lambda that pull product catalogs from S3, inventory data from RDS, and user clickstreams from Kinesis.  
- **Inference Service**: A containerized Semantic Kernel orchestrated by ECS Fargate, auto‑scaling on CPU usage, with a 99.9 % availability SLA.  

**Result**  
The new pipeline reduced recommendation latency from 650 ms to 180 ms (72 % faster) and boosted conversion rate by **8.4 %** within the first quarter—yielding an estimated $12M incremental revenue.  

**Reflection**  
I *owned* the end‑to‑end flow, dove deep into embedding quality metrics, and iterated on connector efficiency after a 3‑day outage that taught me to add circuit breakers. This experience reinforced Amazon’s **Ownership** and **Dive Deep** principles while delivering tangible business results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
