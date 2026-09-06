---
qid: vq_c35de6a037__faang__local
question: How do you implement error handling in ADF pipelines?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 548
total_tokens: 782
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:32:11-05:00'
sources: []
---

**1️⃣ Clarify**  
> *Problem:* In Azure Data Factory (ADF) pipelines, how can we robustly capture, log, and recover from runtime errors?  
> *Assumptions to confirm:*  
> - Pipelines run on a schedule or trigger; they may include Copy, Data Flow, or custom activities.  
> - We need auditability (e.g., SLA compliance), automated retries, and alerting for downstream consumption.

**2️⃣ Approach**  
1. **Activity‑level error handling:** set *Retry* count & *Timeout*, and enable *Continue on failure* where appropriate.  
2. **Global exception capture:** wrap the entire pipeline in a *ForEach* that logs activity status to Azure Monitor / Log Analytics.  
3. **Webhook/Custom Activity for alerts** (e.g., send email or trigger Logic App).  
4. **Dead‑letter queueing:** on persistent failure, route data to an “error” storage container with metadata for reprocessing.

**3️⃣ Depth**  
- *Retry:* configure exponential back‑off (`retryIntervalInSeconds`, `maxRetryCount`). Complexity: O(1) per activity.  
- *Continue on Failure:* allows downstream activities to run while still flagging the pipeline as failed; useful for partial data loads.  
- *Pipeline Failure Hook:* use a **Web Activity** calling an Azure Function that writes status and stack trace to Cosmos DB or Application Insights.  
- *Dead‑letter Storage:* copy error payloads to a separate blob with naming convention (`{dataset}_error_{timestamp}`) so they can be re‑ingested via a separate pipeline.  

**4️⃣ Edge Cases**  
- Network glitches causing intermittent failures → exponential back‑off mitigates.  
- Data format errors (schema mismatch) → pre‑validation in Data Flow; otherwise the error lands in dead‑letter.  
- Long‑running activities exceeding SLA → Timeout + alert.

**5️⃣ Optimize & Communicate**  
- Use *Activity dependency* to short‑circuit on critical failures, saving compute cost.  
- Centralize logging via a single Log Analytics workspace; query `ADFActivityRun` table for SLA dashboards.  
- Explain the trade‑off: higher retries reduce manual intervention but increase pipeline runtime; dead‑lettering keeps data safe at the cost of storage.

*Result:* A fault‑tolerant, observable ADF pipeline that logs errors, retries intelligently, and routes problematic data for later remediation—meeting both engineering reliability and operational transparency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
