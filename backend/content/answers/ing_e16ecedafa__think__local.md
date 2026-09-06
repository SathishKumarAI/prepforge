---
qid: ing_e16ecedafa__think__local
question: 'Explain: Network APIs — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 446
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:55:09-05:00'
sources: []
---

**1. Clarify the scope and assumptions**

*Assume the audience knows basic ML concepts but not necessarily software engineering jargon.*  
*Define “API” in general, then specialize to *network* (HTTP/REST) APIs used for ML services.*

---

**2. Adopt a mental model: “Layered abstraction”**

1. **Client ↔ Server** – The API is the contract between them.  
2. **Transport layer** – HTTP over TCP/IP.  
3. **Serialization format** – JSON, Protobuf, etc.  
4. **Endpoint semantics** – CRUD operations mapped to ML actions (e.g., predict, train).

---

**3. Step‑by‑step reasoning**

1. Start with the definition: an API is a set of rules that lets two software components talk.  
2. Explain the *network* part: it’s typically HTTP/HTTPS endpoints exposed over the internet.  
3. Illustrate with an ML example – e.g., a prediction service at `/predict`.  
4. Break down the request/response cycle: URL, method (GET/POST), headers (auth, content‑type), body (input features).  
5. Mention common patterns: RESTful routes, gRPC for low latency, OpenAPI specs for documentation.

---

**4. Common traps to avoid**

* Don’t conflate “API” with “library”; the API is *how* you call it, not *what* runs locally.  
* Avoid over‑technical details (e.g., TLS handshake) unless asked; keep focus on the abstraction level.  
* Remember that in ML systems, APIs often include versioning and rate‑limiting concerns.

---

**5. Sanity‑check & verbalize**

*Ask:* “Does this explain why a client can send features and receive predictions without knowing the model’s internals?”  
If yes, you’re clear. If not, revisit step 3 and add concrete examples or diagrams. Keep the explanation concise yet complete enough for a non‑developer ML practitioner to grasp the role of network APIs in system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
