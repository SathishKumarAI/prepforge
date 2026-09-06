---
qid: ing_a7ead376ac__think__local
question: 'Explain: Types of APIs — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 739
total_tokens: 932
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:08:42-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - The user wants a *conceptual* answer (not code).  
   - Assume familiarity with basic ML concepts but not deep system‑design jargon.  
   - Focus on **API types** that matter for ML workflows: REST, gRPC, GraphQL, and custom SDKs.

**2️⃣ Adopt a “taxonomy + use‑case” framework**  
   - First define *API* generically (interface exposing functionality).  
   - Then list each type, its protocol, strengths/weaknesses, and typical ML scenarios.  
   - Finish with a quick comparison table or decision tree.

**3️⃣ Step‑by‑step reasoning**  
   1. Define “API” → contract between client & service.  
   2. Identify common communication protocols: HTTP (REST), RPC (gRPC), query language (GraphQL).  
   3. For each, describe message format, latency, tooling, and ML use cases (model inference, training pipelines, data ingestion).  
   4. Mention SDKs/SDK‑generated APIs for platform‑specific convenience.  
   5. Summarize when to pick which type.

**4️⃣ Avoid common traps**  
   - Don’t conflate *API* with *library*; emphasize the network boundary.  
   - Don’t overpromise performance of REST vs gRPC; mention real‑world trade‑offs.  
   - Skip deep protocol specs—keep it high level for readability.

**5️⃣ Sanity‑check & verbalize**  
   - Read the answer aloud to ensure each type’s purpose is clear.  
   - Verify that a beginner can map “REST → HTTP, CRUD” or “gRPC → binary, low latency”.  
   - End with a quick “next steps”: choose an API style based on data volume and real‑time needs.

---

### Sample Answer Outline (150–220 words)

> **What is an API?**  
> An Application Programming Interface is a contract that defines how software components communicate. In ML, APIs expose model inference, training, or data pipelines to clients over the network.

| Type | Protocol | Typical Use in ML | Pros | Cons |
|------|----------|-------------------|------|------|
| **REST** | HTTP/JSON | Simple inference endpoints, dataset CRUD | Human‑readable, wide tooling | Higher latency, verbose payloads |
| **gRPC** | HTTP/2 + Protobuf | Low‑latency inference, streaming training data | Binary, bi‑directional streams | Requires codegen, less obvious to debug |
| **GraphQL** | HTTP/JSON | Flexible queries for model metadata or mixed datasets | Client selects fields, reduces overfetch | More complex server logic |
| **SDK / Custom SDKs** | Language‑specific wrappers around any protocol | Quick integration in notebooks or production apps | Adds maintenance overhead |

> **Choosing an API**  
> Start with REST if you need broad compatibility and simplicity. Switch to gRPC when latency matters (e.g., real‑time inference). Use GraphQL for dashboards that pull heterogeneous model information. SDKs are handy wrappers but keep them thin.

This structure lets the candidate explain concepts, compare options, and give actionable guidance—all within the 150–220 word window.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
