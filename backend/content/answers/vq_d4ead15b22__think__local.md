---
qid: vq_d4ead15b22__think__local
question: How do you handle exception in ADF ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 482
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:27:05-05:00'
sources: []
---

### 1️⃣ Clarify the scope  
- **What is “exception”?** Runtime failures (activity failure, data errors) vs. business‑logic issues.  
- **Where in ADF?** Pipeline, Data Flow, Integration Runtime, or linked services.  
- **Goal of handling:** Retry, skip, send alert, log, or stop the pipeline.

### 2️⃣ Adopt a mental model  
Use the **ADF exception‑handling pattern**:  
1. **Detect** – activity status (`Succeeded`, `Failed`, `Skipped`).  
2. **Respond** – via *Retry Policy*, *Failure handling* (continue/stop), *On‑failure* activities, or *Custom error handling* in Data Flow.  
3. **Notify** – send email, trigger Logic App, write to a monitoring table.

### 3️⃣ Step‑by‑step reasoning  
1. Identify the activity that can fail.  
2. Decide on retry logic: set `RetryCount` & `RetryInterval`.  
3. For non‑retryable failures, attach an **On‑failure** branch (e.g., send alert).  
4. If you need granular control in Data Flow, use `Error handling` tab → “Redirect rows” or “Ignore errors”.  
5. Log the error details to a table or event hub for later analysis.  

### 4️⃣ Common traps to avoid  
- **Over‑retrying**: leads to longer pipeline runs and hidden failures.  
- **Ignoring skipped rows** in Data Flow – they may silently lose data.  
- Forgetting that *On‑failure* activities are not triggered by a retry, only by an ultimate failure.  
- Mixing **Retry Policy** with **Failure handling** incorrectly; they serve different purposes.

### 5️⃣ Sanity check & verbalize  
- Ask: “Does this handle all failure modes I care about?”  
- Explain to a peer: “I set the retry policy for X activity, and on ultimate failure I trigger an email via Logic App. For Data Flow errors, I redirect bad rows to a staging table so we can investigate later.”  

By following these steps you’ll have a clear, reproducible approach to exception handling in Azure Data Factory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
