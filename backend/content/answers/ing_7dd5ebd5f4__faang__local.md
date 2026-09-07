---
qid: ing_7dd5ebd5f4__faang__local
question: 'Explain: Common API Styles — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 611
total_tokens: 848
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:37:54-05:00'
sources: []
---

## 1️⃣ Clarify  
**Question:** *What is an API, and what are the common API styles used in system design?*  
Assumptions to confirm:  
- Audience has basic software background but may not know architectural jargon.  
- We need to cover REST, GraphQL, gRPC, SOAP, and event‑driven (pub/sub) APIs.  

## 2️⃣ Approach  
Structure the answer into four parts: definition → styles → trade‑offs → when to pick each. Keep it concise (~200 words). Use markdown for readability.

## 3️⃣ Depth  
**API (Application Programming Interface)** – a contract that defines how software components interact, exposing operations and data models while hiding implementation details.  

| Style | Core idea | Pros | Cons |
|-------|-----------|------|------|
| **REST** | Stateless HTTP endpoints using CRUD verbs on resources | Simple, cacheable, widely adopted | Over‑fetch/under‑fetch; versioning pain |
| **GraphQL** | Single endpoint, client specifies shape of data | Precise payloads, single round‑trip | Complex server logic, caching harder |
| **gRPC** | Binary protocol (Protocol Buffers) over HTTP/2, RPC style | Low latency, strong typing, streaming | Requires protobuf, less human‑readable |
| **SOAP** | XML‑based, WS-* standards, message envelopes | Built‑in security, transactions | Verbose, heavyweight |
| **Event‑driven / Pub/Sub** | Asynchronous messages via brokers (Kafka, RabbitMQ) | Decoupled, scalable, fault‑tolerant | Eventual consistency, debugging harder |

When designing:  
- Use REST for public web services needing wide client support.  
- Opt for GraphQL when clients need flexible data shapes (e.g., mobile).  
- gRPC suits microservices inside a trusted network where performance matters.  
- SOAP is legacy‑heavy in regulated domains.  
- Pub/Sub fits real‑time analytics or IoT pipelines.

## 4️⃣ Edge Cases  
- **Mixed protocols**: A single system may expose REST for external users and gRPC internally.  
- **Versioning**: GraphQL avoids URL changes but needs schema migration tools; REST often adds `/v2/`.  
- **Security**: SOAP’s WS-Security vs. token‑based auth in REST/gRPC.  

## 5️⃣ Optimize & Communicate  
Explain that choosing an API style is a *trade‑off* problem: latency, developer experience, tooling, and future evolution. Emphasize iterating on the contract (schema) early, using automated tests, and documenting with OpenAPI/GraphQL SDL or gRPC proto files to keep teams aligned. This structured answer demonstrates clear reasoning, depth, and practical guidance—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
