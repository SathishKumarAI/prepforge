---
qid: vq_5422c3b70c__think__local
question: Schedule Trigger in ADF?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 477
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:36:16-05:00'
sources: []
---

**1. Clarify the question and assumptions**  
   - Confirm that “ADF” refers to Azure Data Factory (not AWS Glue or another tool).  
   - Ask whether they want a *time‑based* schedule, an event‑driven trigger, or both.  
   - Note if they need recurring intervals, one‑off runs, or calendar patterns.

**2. Adopt the ADF trigger framework**  
   - Recall that ADF offers three main trigger types: **Schedule**, **Event**, and **Tumblr (custom)**.  
   - For a schedule trigger, remember the JSON schema: `type`, `recurrence` object with `frequency`, `interval`, `startTime`, etc.

**3. Step‑by‑step reasoning**  
   1. Identify the desired frequency (`Minute`, `Hour`, `Day`, `Week`, `Month`).  
   2. Decide on start/end times and time zone.  
   3. Map those to the recurrence fields: e.g., `frequency: "Day"`, `interval: 1`.  
   4. Add optional `timeZone` and `startTime`.  
   5. If needed, add a `scheduleTriggerRecurrence` array for multi‑day patterns.  
   6. Draft the JSON snippet, then validate against the ADF schema.

**4. Common pitfalls to avoid**  
   - Mixing up UTC vs local time zones; always specify `timeZone`.  
   - Forgetting that `interval` is *per frequency unit* (e.g., 2 hours means every two hours).  
   - Neglecting the `startTime` format (`yyyy-MM-ddTHH:mm:ssZ`).  
   - Assuming the trigger will fire immediately; it starts at `startTime`.

**5. Sanity‑check & communicate**  
   - Re‑read the JSON: does each field match the desired schedule?  
   - Explain the logic to a colleague: “We set frequency to ‘Day’ and interval 1, so it runs daily at the start time.”  
   - Suggest testing in ADF’s authoring UI before deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
