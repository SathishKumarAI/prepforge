---
qid: vq_d4ead15b22__faang__local
question: How do you handle exception in ADF ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 553
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:36:38-05:00'
sources: []
---

**Clarify**

You’re asking how to capture and react to failures when orchestrating data pipelines with Azure Data Factory (ADF).  
Assumptions: we’re dealing with *pipeline-level* exceptions, want retry logic, alerting, and downstream cleanup.

---

**Approach**

1. **Configure Activity Failure Settings** – set `Retry`, `RetryIntervalInSeconds`, and `Timeout`.  
2. **Error Handling Branches** – use *Success* / *Failure* paths (activities with `ContinueOnFailure` or `If Condition`).  
3. **Custom Error Logging** – write to a log table via Stored Procedure/Copy Activity.  
4. **Alerting** – trigger an Azure Logic App / Webhook / SendGrid email on failure.  
5. **Dead‑Letter Queue (DLQ)** – move problematic data to a DLQ blob/table for later investigation.

---

**Depth**

| Step | Implementation |
|------|----------------|
| **Retry** | `pipeline.retry` JSON property or activity `retry` field. Max 30 attempts, exponential back‑off. |
| **Failure Path** | Add an *If Condition* after the main activity; condition = `@activity('X').Failed`. Inside, call a stored proc that logs error details (`errorCode`, `message`, `timestamp`). |
| **Alerting** | In the failure path, add a Webhook to a Logic App that sends an email/Teams message. |
| **DLQ** | If data‑specific failure (e.g., bad row), use *Data Flow* with `On Error` output to a separate sink. |

Complexity: O(1) per activity; overall pipeline cost increases by the added activities but stays linear.

---

**Edge Cases**

- Network glitches → retries may mask real issues; set `Timeout`.  
- Infinite loops if retry limit not hit – guard with `ContinueOnFailure=false`.  
- Large error logs can grow quickly; rotate or partition tables.  

Test scenarios: transient vs. permanent failures, timeout hits, DLQ insertion.

---

**Optimize & Communicate**

Start by explaining the problem context, then walk through the layered strategy (retry → log → alert → DLQ). Highlight trade‑offs: more retries delay failure detection but reduce noise; logging adds cost but provides auditability. Conclude with a quick sanity check: “If we hit `@activity('X').Failed`, do we already have an entry in our error table and an alert fired?” This keeps the answer concise, structured, and aligned with FAANG interview expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
