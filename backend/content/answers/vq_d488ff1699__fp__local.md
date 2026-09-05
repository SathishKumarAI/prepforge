---
qid: vq_d488ff1699__fp__local
question: Q1). How to call an API in Azure Data Factory (ADF)?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 571
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:58:10-05:00'
sources: []
---

**Why ADF needs to call an API**

At its core, a data‑pipeline is a *sequence of transformations* that move information from source to sink. When the source lives behind an HTTP endpoint (e.g., a SaaS service), the pipeline must issue a request, receive JSON/XML, and parse it into tabular form. Azure Data Factory’s *Web activity* is the generic “HTTP client” that satisfies this need.

**How it works**

| Step | What happens | Why it matters |
|------|--------------|----------------|
| **Define an HTTP endpoint** | In the pipeline UI or JSON, specify `https://api.example.com/v1/items` as the URL. | The URL encodes path, query string, and versioning. |
| **Choose the integration runtime (IR)** | Select “Azure” (cloud‑based) or a self‑hosted IR if the API is on a private network. | The IR is the compute that actually performs the call; it must have network access to the endpoint. |
| **Set authentication** | In the *Authentication* tab, choose OAuth2, Basic, or no auth. Provide client ID/secret or username/password. | APIs enforce security; ADF’s built‑in connectors automatically handle token refresh when using OAuth. |
| **Configure headers & body** | Use dynamic content (expressions like `@pipeline().parameters.token`) to inject headers (`Authorization: Bearer …`). For POST, supply a JSON payload. | Headers and bodies can be parameterized per run, enabling pagination or conditional requests. |
| **Parse the response** | After execution, the activity’s output is a JSON object. Use *Lookup* or *Data Flow* with `fromJson()` to flatten it into rows. | ADF treats the API call as any other data source; you can join, filter, and write the result to ADLS, Synapse, etc. |

**Non‑obvious insight**

The Web activity’s **output is not just a string**—it’s a *structured JSON* that includes `statusCode`, `headers`, and `body`. By referencing `@activity('Web1').output.body` in downstream activities, you can chain calls (e.g., use the first API’s response to build the next URL) without writing code. This turns ADF into an orchestrator of *stateful* REST interactions, not just a “fire‑and‑forget” requester.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
