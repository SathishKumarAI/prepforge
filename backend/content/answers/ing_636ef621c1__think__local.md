---
qid: ing_636ef621c1__think__local
question: 'Explain: Public APIs — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 459
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:36:17-05:00'
sources: []
---

**1️⃣ Clarify the goal and assumptions**  
   *What does “public APIs” mean in this context?* Assume we’re explaining it to ML engineers who know coding but may not be familiar with API terminology. Assume they want a concise, system‑design–oriented view (e.g., how an API fits into a service architecture).

**2️⃣ Adopt the “Interface + Contract” mental model**  
   *An API is essentially a contract* between two software components: one exposes functionality; the other consumes it. Think of it as a *public interface* (method signatures, data formats) plus a *protocol* (HTTP/REST, gRPC, etc.) that enforces that contract.

**3️⃣ Step‑by‑step reasoning**  
   1. Define “Interface” → list exposed operations and expected inputs/outputs.  
   2. Pick a protocol → explain why REST or gRPC is chosen for ML services (e.g., statelessness, scalability).  
   3. Show how the contract maps to system design: authentication layer, rate limiting, versioning, and monitoring.  
   4. Illustrate with an example: a prediction endpoint that accepts JSON payloads and returns probabilities.

**4️⃣ Avoid common traps**  
   *Don’t conflate “API” with “implementation.”* The API is the specification; the implementation can change underneath.  
   *Avoid jargon overload.* Keep explanations high‑level unless the audience asks for deeper detail.  
   *Don’t assume all public APIs are RESTful.* Mention gRPC, GraphQL, etc., to broaden understanding.

**5️⃣ Sanity‑check & communicate**  
   • Summarize in one sentence: “A public API is a well‑defined contract that lets external clients interact with your ML service over a chosen protocol.”  
   • Ask the learner: “If I wanted to add another version, what changes would you need to make?”  
   • Use analogies (e.g., a restaurant menu) to reinforce the idea of a contract between provider and consumer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
