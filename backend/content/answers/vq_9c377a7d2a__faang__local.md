---
qid: vq_9c377a7d2a__faang__local
question: How can you trigger pipeline based on file arrival in ADLS ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 426
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:24:48-05:00'
sources: []
---

**Clarify**  
You want a data‑engineering workflow that starts automatically when a new blob appears in Azure Data Lake Storage (ADLS) Gen2.  
Assumptions:  
- The pipeline is built on Azure Synapse or Data Factory.  
- Security is handled via managed identities.  
- We need idempotence and fault tolerance.

**Approach**  
1. **Event Grid** – ADLS emits a *BlobCreated* event whenever a file lands.  
2. **Azure Function / Logic App** – subscribe to that event, validate the payload (file name, path), then trigger the pipeline via REST or SDK.  
3. **Pipeline** – use Data Factory or Synapse pipelines to process the file (copy, mapping data flow, Spark job).  
4. **Monitoring** – log function invocations and pipeline status in Azure Monitor.

**Depth**  
- Register an Event Grid subscription on the ADLS container with a filter for `BlobCreated`.  
- In the Function, use the `EventGridTrigger` binding; read `data.url` to get the file path.  
- Call Data Factory’s `CreateRun` endpoint: `POST /pipelines/{pipelineName}/createRun`.  
- Use managed identity so no secrets are stored.  
Complexity: O(1) per event, latency ≈ 5–10 s from arrival to pipeline start.

**Edge Cases**  
- Duplicate events → deduplicate by storing a hash of the file name in Cosmos DB.  
- Large batch uploads → throttle Function invocations.  
- Permission errors → retry with exponential backoff.

**Optimize & Communicate**  
Explain that Event Grid scales automatically, eliminating polling overhead. Mention that Azure Functions can be scaled out for high‑throughput scenarios and that you’d instrument logs to detect failures quickly. Conclude by highlighting the end‑to‑end, serverless nature of the solution and its alignment with cloud best practices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
