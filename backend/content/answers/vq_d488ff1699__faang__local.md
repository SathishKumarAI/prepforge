---
qid: vq_d488ff1699__faang__local
question: Q1). How to call an API in Azure Data Factory (ADF)?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 426
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:36:34-05:00'
sources: []
---

**Q1 – How do you call an API in Azure Data Factory?**

| Step | What to say |
|------|-------------|
| **Clarify** | “You want a pipeline that triggers an external REST endpoint and captures its response, right?  Do we need authentication (Basic/OAuth), pagination, or error handling?” |
| **Approach** | 1️⃣ Create a *Web Activity* in the pipeline. <br>2️⃣ Configure the activity’s properties: URL, method, headers, body. <br>3️⃣ If auth is needed, add an *Azure Key Vault* secret and reference it via `@pipeline().parameters`. <br>4️⃣ Capture the JSON output with `activity('Web').output`. <br>5️⃣ Optionally chain to a *Copy Activity* or *Data Flow* for downstream processing. |
| **Depth** | • The Web Activity returns a dictionary containing status code, headers, and body. <br>• For OAuth, set “Authentication type” → “OAuth2” and provide the token endpoint; ADF will refresh tokens automatically if you use the managed identity. <br>• Use `@activity('Web').output.statusCode` to branch logic. Complexity is O(1) per call—no compute cost beyond the outbound request. |
| **Edge Cases** | • 5xx responses → retry policy (exponential back‑off). <br>• Rate limits → add a *Wait Activity* or use “Retry count”. <br>• Large payloads → stream to Blob via *Copy Activity* with `streaming` enabled. |
| **Optimize & Communicate** | • For bulk calls, batch URLs and use parallel Web Activities (max 20 concurrency). <br>• Log responses to a sink for audit. <br>Explain that ADF’s declarative model keeps orchestration simple while the Web Activity handles all HTTP nuances. |

*Word count: ~190*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
