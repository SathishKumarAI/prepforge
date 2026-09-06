---
qid: ing_e73ea9d82d__fp__local
question: 'Explain: cURL — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 437
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:11:02-05:00'
sources: []
---

**Why a `curl` call is the right way to hit a GraphQL endpoint**

A GraphQL server exposes a single HTTP **POST** URL that receives a *query* (or mutation) as JSON.  
The fundamental problem is: *how do we send an arbitrary text query over the wire and get back typed results?*  
HTTP gives us a key/value protocol; JSON lets us encode a string (`{ "query": "...", "variables": {...} }`) without any custom serialization.  
`curl` is simply a thin wrapper around that HTTP stack: it builds the request, sets `Content‑Type: application/json`, and streams the body to the server. The server parses the JSON, evaluates the query against its schema (a graph of resolvers), and serializes the result back as JSON.

**Why this design works**

* **Decoupling** – the client never needs to know the internal shape of the data; it only declares *what* it wants.  
* **Uniform transport** – HTTP/JSON is ubiquitous, caching‑friendly, and easily debugged with tools like `curl`.  
* **Idempotence & retries** – a POST can be retried safely because the payload fully describes the operation.

**Non‑obvious insight**

The query string itself is *opaque* to the transport; it is only a key in the JSON body. Because of this, you can embed **variables** and even **fragments** that are resolved entirely server‑side. `curl` doesn’t need to understand GraphQL at all—just send the raw payload. This separation lets developers use any language or tool (Postman, Insomnia, or a browser console) without writing client libraries, which is why Supabase’s docs showcase simple `curl` examples: they demonstrate that the whole GraphQL contract lives in the request body, not in HTTP headers or query parameters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
