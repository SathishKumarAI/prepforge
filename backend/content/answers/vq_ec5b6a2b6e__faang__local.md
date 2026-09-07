---
qid: vq_ec5b6a2b6e__faang__local
question: What is web activity in ADF ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 374
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:41:16-05:00'
sources: []
---

**Clarify**

You’re asking about *web activity* inside Azure Data Factory (ADF).  
Confirm that we mean the built‑in “Web” activity, not a custom REST call or a trigger.

**Approach**

Explain what it does, when you’d use it, and its key properties. Keep it concise yet complete.

**Depth**

| Feature | Detail |
|---------|--------|
| **Purpose** | Executes an HTTP request (GET/POST/PUT/PATCH/DELETE) to any endpoint. |
| **Typical use‑cases** | Call REST APIs for data ingestion, trigger downstream pipelines, hit webhooks, or ping services. |
| **Configuration** | *URL*, *Method*, *Headers*, *Body* (JSON), *Authentication* (Basic/OAuth/Managed Identity). |
| **Output** | Returns the HTTP response body and status code as a JSON blob that can be used by downstream activities. |
| **Retry & timeout** | Built‑in retry policies, timeout setting, and error handling via pipeline or activity scope. |

**Edge cases**

- 4xx/5xx responses: decide whether to fail the pipeline or continue.  
- Large payloads: use streaming or split into smaller calls.  
- Auth token refresh: schedule a separate “Get Token” activity if tokens expire mid‑run.

**Optimize & communicate**

Highlight that web activities are lightweight, ideal for orchestrating external services without custom code. Mention that for high‑volume data pulls you’d prefer the *Copy* activity with an HTTP connector or use Azure Function + ADF for complex logic. Conclude by stressing how this fits into a broader ETL workflow: “We call the API → get JSON → feed Copy to Blob/SQL.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
