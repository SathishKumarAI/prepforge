---
qid: ing_527a9b14d9__think__local
question: 'Explain: What an API Contract Defines — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 495
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:26:32-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - Identify the target audience (e.g., interviewee or learner).  
   - Assume they know basic programming but may not be familiar with API terminology.  
   - Decide whether to focus on REST, GraphQL, gRPC, etc.; default to a generic “API” definition that covers all.

**2. Adopt a mental model / framework**  
   - Think of an API as a *contract* between two software components: the provider and the consumer.  
   - Break it into three pillars: **Interface**, **Behavior**, and **Documentation/Versioning**.  
   - Use the “Contract‑First” approach to emphasize that the specification comes first, then implementation.

**3. Reason step by step toward a clear explanation**  
   1. Start with the *definition*: an API is a set of rules (endpoints, messages) that one system exposes for another to use.  
   2. Explain the *interface* layer: data formats (JSON, XML), transport protocols (HTTP, TCP).  
   3. Move to *behavior*: what operations are available, how state changes occur, error handling patterns.  
   4. Highlight *documentation & versioning*: OpenAPI/Swagger, API schemas, semantic versioning—why these prevent breaking changes.  
   5. Conclude with the contract’s role in system design: decoupling, scalability, testability.

**4. Common traps to avoid**  
   - Over‑emphasizing implementation details (code snippets) instead of the *contract*.  
   - Mixing up “API” with “SDK”; clarify that an SDK is a client library built on top of an API.  
   - Forgetting to mention versioning; this can lead to brittle integrations.

**5. Sanity‑check & verbalize**  
   - Ask: Does the explanation answer “what it is”, “why it matters”, and “how it’s defined”?  
   - Rephrase in one sentence: “An API contract specifies exactly how two systems talk, detailing what data they exchange, under which rules, and how changes are managed.”  
   - Ensure each pillar (interface, behavior, docs) is represented; if missing, add a quick example to illustrate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
