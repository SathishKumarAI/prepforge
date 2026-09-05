---
qid: vq_9c377a7d2a__fp__local
question: How can you trigger pipeline based on file arrival in ADLS ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 440
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:48:17-05:00'
sources: []
---

When a data pipeline must react to *any* new file in Azure Data Lake Storage (ADLS), the fundamental problem is **event detection**: we need an event‑driven signal that guarantees “file fully written” without polling, and that can be consumed by a stateless orchestrator.  

The cleanest solution is to let ADLS emit a storage event through **Azure Event Grid**.  
1. **Register the ADLS account** as an Event Grid endpoint.  
2. Create a **subscription** for `Microsoft.Storage.BlobCreated` events, optionally filtered by path or suffix (e.g., `*.csv`).  
3. Point the subscription to an Azure Data Factory (ADF) trigger of type *Event* (or Logic App).  

Under the hood, Event Grid pushes an event whenever a blob’s **commit** operation completes—this is an atomic state change, so we avoid “partial‑file” races that plague polling. The ADF event trigger then receives the payload, extracts the file path, and starts a pipeline run with that parameter.  

A non‑obvious insight: because Event Grid events are *at least once*, you must design the downstream pipeline to be **idempotent** (e.g., by using unique run IDs or deduplication tables). This guarantees correctness even if an event is duplicated due to retries, a subtlety many overlook when moving from scheduled to event‑driven pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
