---
qid: vq_c35de6a037__think__local
question: How do you implement error handling in ADF pipelines?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 581
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:19:32-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   * Assume Azure Data Factory (ADF) v2, not classic.  
   * “Error handling” means detecting failures at activity or pipeline level and deciding what to do next (retry, skip, notify, rollback).  
   * The user wants a conceptual guide, not code snippets.

**2️⃣ Mental model / framework**  
   * **Pipeline → Activities → Datasets/Linked services**.  
   * Errors can surface as:  
     – Activity failure (e.g., Copy fails).  
     – Data‑quality or schema errors during validation.  
     – External service timeouts.  
   * ADF offers three orthogonal knobs:  
     1. **Retry policy** on an activity.  
     2. **On‑failure/on‑success/on‑completion/On‑error** event handlers (pipeline triggers).  
     3. **Control flow activities** (`If Condition`, `Switch`, `ForEach`) to branch logic.

**3️⃣ Step‑by‑step reasoning**  

1. **Set retry & timeout per activity** – use the *Retry* tab: define max attempts, interval, and optional exponential back‑off.  
2. **Add an On‑Failure event handler** – create a new pipeline that runs only when the main one fails (e.g., send email or write to a log dataset).  
3. **Use `If Condition` to capture error codes** – inside the activity’s output you can inspect `activity('X').output.status` and branch accordingly.  
4. **Implement “compensating” activities** – if a downstream step fails, trigger a cleanup pipeline (e.g., delete partially written files).  
5. **Leverage Data Flow’s validation settings** – enable *Schema drift* or *Data quality checks* to surface data‑level errors before they cause activity failure.

**4️⃣ Common traps to avoid**  

* Relying solely on retry; long‑running failures can still consume resources unnecessarily.  
* Forgetting that a pipeline trigger (On‑Failure) runs only once – if you need repeated alerts, use a loop or separate monitoring.  
* Overusing `If Condition` inside `ForEach`; it can blow up the activity count and cost.

**5️⃣ Sanity check & communication**  

* Verify each error path by intentionally failing an activity (e.g., wrong connection string).  
* Test that the On‑Failure pipeline fires, logs the message, and optionally cleans up.  
* Communicate the design as a diagram: Pipeline → Activities → Retry → If Condition → Event Handlers. This visual map helps stakeholders see how errors propagate and are handled.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
