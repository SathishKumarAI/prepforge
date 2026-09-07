---
qid: vq_9c377a7d2a__aws__local
question: How can you trigger pipeline based on file arrival in ADLS ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 429
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:05:42-05:00'
sources: []
---

**Situation & Task**  
At my last role I built an ETL pipeline that ingested nightly sales logs into a data lake. The requirement was to start the transformation automatically as soon as a new file landed in Azure Data Lake Storage (ADLS). Failure to trigger on time caused stale analytics and revenue loss of ~5 % per month.

**Action**  
I leveraged **Azure Event Grid** + **Azure Functions** (Python) for low‑latency, serverless triggers.  
1. Configure ADLS Gen2 to emit “BlobCreated” events to Event Grid.  
2. A Function receives the event, validates file size/metadata, and pushes a message to an **Azure Service Bus Queue**.  
3. A **Data Factory pipeline** (or an AWS Step Functions equivalent) is triggered by the queue, runs Spark jobs on Azure Synapse or EMR, writes results to ADLS and updates a catalog.

*Why this design?*  
- **Scalability:** Event Grid handles millions of events per second; Functions scale automatically.  
- **Availability:** All services are 99.95 % SLA; the queue decouples producers from consumers, avoiding data loss.  
- **Cost:** Pay‑as‑you‑go for Function invocations and message handling; no long‑running VMs.

**Result**  
Latency dropped from ~2 h to <5 min, giving near‑real‑time dashboards. Quarterly revenue impact grew 12 % due to timely insights. I documented the pattern in our knowledge base, reducing onboarding time for new data engineers by 30 %.

> **Leadership Principles:** *Customer Obsession* (delivering fresh data), *Ownership* (owning end‑to‑end flow), and *Dive Deep* (profiling event traffic to tune costs).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
