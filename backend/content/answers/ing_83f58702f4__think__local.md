---
qid: ing_83f58702f4__think__local
question: 'Explain: API Contracts — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 474
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:45:11-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - Confirm whether “API contracts” refers to REST/GraphQL design or low‑level protocol specs (e.g., gRPC).  
   - Assume the interview will probe trade‑offs: versioning, backward compatibility, latency, security, and scalability.  

**2. Adopt a layered mental model**  
   - *Interface layer*: endpoints, payloads, HTTP verbs.  
   - *Contract layer*: data contracts (schemas), validation rules, idempotency guarantees.  
   - *Governance layer*: versioning strategy, deprecation policy, change‑management workflow.  

**3. Step‑by‑step reasoning**  
   1. Start with user stories → derive required resources and operations.  
   2. Sketch the minimal schema (e.g., JSON) for each resource.  
   3. Define status codes & error formats that are self‑descriptive.  
   4. Plan versioning: semantic vs. path/accept‑header; discuss when to break backward compatibility.  
   5. Address security: auth, rate limiting, input sanitization.  
   6. Discuss observability: request tracing, metrics on contract usage.  

**4. Avoid common traps**  
   - Don’t over‑engineer the schema—keep it simple and evolve iteratively.  
   - Forget that “contract” includes *behavior*: idempotency, retries, timeouts.  
   - Ignore client impact when deprecating fields; always provide a migration window.  

**5. Sanity‑check & verbalize**  
   - Re‑state the contract in one sentence: “This API exposes X resources via Y endpoints, uses JSON with Z validation rules, and follows semantic versioning.”  
   - Verify each bullet against real scenarios (e.g., “What happens if a client sends an extra field?”).  
   - Summarize trade‑offs: tighter contracts reduce errors but slow iteration; looser contracts speed development but risk breaking clients.  

This structured walk‑through shows you can reason systematically about API contracts and communicate that reasoning clearly in a system‑design interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
