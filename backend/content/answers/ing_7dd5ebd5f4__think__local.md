---
qid: ing_7dd5ebd5f4__think__local
question: 'Explain: Common API Styles — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 465
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:20:18-05:00'
sources: []
---

**Thought‑Process Guide**

1. **Clarify the ask & set assumptions**  
   - *What* is being requested? A concise explanation of “Common API Styles” and the definition of an API in a system‑design context.  
   - Assume the audience knows basic software terms but may not be familiar with design patterns or REST/GraphQL nuances.

2. **Choose a mental model**  
   - Think of an *API* as a contract: it specifies how external clients can interact with a service, what data they send, and what they receive.  
   - For “styles,” use the classic taxonomy (RPC, REST, GraphQL, gRPC, Message‑queue) as a framework to organize examples.

3. **Reason step‑by‑step**  
   - Start by defining an API: interface, endpoints, data format, authentication, versioning.  
   - Then walk through each style:
     * RPC – simple function call over HTTP or binary protocol.  
     * REST – resource‑oriented, CRUD via verbs (GET/POST/etc.).  
     * GraphQL – single endpoint, client‑specified shape.  
     * gRPC – binary protobuf over HTTP/2, strongly typed.  
     * Message‑queue – async publish/subscribe, decoupled.  
   - Highlight pros/cons and typical use cases for each.

4. **Avoid common traps**  
   - Don’t conflate “API” with “web service.” An API can be internal or public, synchronous or asynchronous.  
   - Beware of oversimplifying: RPC can become RESTful if you expose resources; GraphQL is not a replacement but an alternative.  
   - Keep the explanation language‑agnostic; avoid jargon that might confuse beginners.

5. **Sanity‑check & articulate**  
   - Verify each style’s key characteristics match textbook definitions.  
   - Summarize by comparing them on dimensions: coupling, flexibility, performance, learning curve.  
   - Deliver a short narrative that ties the definition to why choosing the right style matters in system design (scalability, maintainability, team skillset).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
