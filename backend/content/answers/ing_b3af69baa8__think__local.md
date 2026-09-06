---
qid: ing_b3af69baa8__think__local
question: 'Explain: RPC vs REST — Remote Procedure Call (RPC) in Operating System
  - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 544
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:51:48-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Assume the reader knows basic client‑server communication but not the nuances of RPC vs REST.  
- Focus on *operating‑system* level RPC (e.g., `rpcgen`, Sun RPC) rather than high‑level web frameworks.  
- Treat “REST” as a design style for HTTP APIs, not a protocol per se.

**2️⃣ Adopt a comparison framework**  
| Aspect | RPC (OS) | REST (HTTP) |
|--------|----------|-------------|
| *Communication model* | Synchronous procedure calls | Stateless request/response |
| *Transport* | Usually TCP or Unix domain sockets | HTTP(S) |
| *Data format* | Binary/marshalled structs | JSON/XML/text |
| *Interface definition* | IDL (e.g., `.x` files in Sun RPC) | URI + verbs (GET, POST…) |
| *Error handling* | Return codes / exceptions | HTTP status codes |
| *Statefulness* | Can maintain session state on server | Stateless by design |

**3️⃣ Step‑by‑step reasoning**  
1. Explain that OS‑level RPC exposes functions as if they were local; the client calls a stub, which serializes arguments and sends them over a socket to the server’s skeleton.  
2. Highlight that REST treats every endpoint as a resource; operations are dictated by HTTP verbs, not function names.  
3. Show how IDL in RPC gives compile‑time type safety, whereas REST relies on contract documentation (OpenAPI) but is more flexible at runtime.  
4. Discuss performance: binary RPC can be faster than JSON over HTTP, but REST’s ubiquity and caching make it more scalable for web services.

**4️⃣ Common pitfalls to avoid**  
- Don’t conflate *RPC* with *RESTful RPC* (e.g., gRPC).  
- Avoid assuming OS‑level RPC is “obsolete”; it still powers many legacy systems.  
- Beware of mixing stateful sessions in REST; the spec prefers statelessness.

**5️⃣ Sanity check & verbalizing**  
Ask: “If I had to choose between a high‑performance internal service and a public, cacheable API, which would I pick?” The answer should echo the table above. Summarize: *RPC* is tight, typed, binary, great for intra‑OS calls; *REST* is loose, text‑based, web‑friendly, ideal for distributed systems exposed over HTTP.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
