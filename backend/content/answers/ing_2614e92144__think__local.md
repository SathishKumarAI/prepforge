---
qid: ing_2614e92144__think__local
question: 'Explain: We don''t really care what are... what — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 402
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:11:21-05:00'
sources: []
---

**1️⃣ Clarify the question & assumptions**  
   - The interviewer is asking you to explain *why* we often ignore “what” in a system‑design context (e.g., the exact data structures or algorithmic details).  
   - Assume they want insight into prioritizing high‑level design over low‑level implementation.

**2️⃣ Adopt a “big‑picture vs. detail” mental model**  
   - **High‑level goals:** scalability, availability, latency, cost.  
   - **Low‑level choices:** specific DB engines, cache eviction policies, hashing functions.  
   - Recognize that the former drive the overall architecture; the latter can usually be swapped without breaking the design.

**3️⃣ Step‑by‑step reasoning**  
   1. Start with user requirements (e.g., map rendering, real‑time routing).  
   2. Identify core services: location storage, geospatial indexing, routing engine, API gateway.  
   3. Discuss trade‑offs for each service at a conceptual level (partitioning strategy, consistency model).  
   4. Point out that the *exact* implementation (e.g., choosing PostgreSQL vs. Cassandra) is secondary; it can be tuned later.

**4️⃣ Common traps to avoid**  
   - **Over‑engineering:** diving into code‑level details too early.  
   - **Under‑estimating constraints:** forgetting latency or data volume limits.  
   - **Ignoring non‑functional requirements:** cost, maintainability, and ops overhead.

**5️⃣ Sanity‑check & verbalize**  
   - Rephrase the core idea: “We care about what *problem* we solve and how it scales; the exact data structures are a means to that end.”  
   - Ask the interviewer if they’d like deeper details on any component, then pivot back to the big picture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
