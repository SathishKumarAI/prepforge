---
qid: ing_36b595e553__think__local
question: 'Explain: System Design Framework (SPIDER) — Answer Frameworks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 507
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:35:01-05:00'
sources: []
---

**1. Clarify the goal and scope**  
   - *What* is being asked? A concise, step‑by‑step explanation of SPIDER (a system‑design interview framework).  
   - *Assumptions*: The audience knows basic system‑design terms but not SPIDER itself; they need a practical outline they can apply in an interview.

**2. Adopt the “explain → illustrate → validate” mental model**  
   - **Explain**: Define each letter and its purpose.  
   - **Illustrate**: Give a short, concrete example (e.g., designing a URL shortener).  
   - **Validate**: Show how the framework helps uncover edge cases or trade‑offs.

**3. Reason step‑by‑step through SPIDER**  
   1. **S – Scope & Requirements**: Clarify functional/non‑functional needs, constraints, and success metrics.  
   2. **P – Partitioning / Decomposition**: Break the system into high‑level components (e.g., API gateway, service layer).  
   3. **I – Interfaces & Data Flow**: Define APIs, message contracts, data models between parts.  
   4. **D – Distribution & Scalability**: Discuss load balancing, sharding, replication strategies.  
   5. **E – Engineering Constraints**: Latency, throughput, cost, availability SLAs.  
   6. **R – Reliability & Recovery**: Fault tolerance, monitoring, rollback plans.

**4. Common traps to avoid**  
   - Skipping “Scope” leads to ambiguous designs.  
   - Over‑engineering early; keep the decomposition high‑level until requirements lock in.  
   - Forgetting trade‑offs (e.g., consistency vs. availability) when discussing “Engineering Constraints.”

**5. Sanity‑check & communicate clearly**  
   - Re‑state each step as a question (“What are we building?”).  
   - Use the example to tie back every letter.  
   - End with a quick recap: “SPIDER keeps us focused from requirements to resilience.”  

This structure not only explains SPIDER but also models how to think through any system‑design problem systematically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
