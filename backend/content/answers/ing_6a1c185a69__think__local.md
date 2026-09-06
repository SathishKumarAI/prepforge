---
qid: ing_6a1c185a69__think__local
question: 'Explain: Architecture Decision Tree — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 477
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:02:36-05:00'
sources: []
---

**1️⃣ Clarify the goal & scope**  
   - *What is being asked?* A clear explanation of “Architecture Decision Tree” (ADT) and how it relates to *architecture patterns*.  
   - *Assumptions:* The audience knows basic software architecture, but may not be familiar with decision‑tree terminology or specific patterns.  

**2️⃣ Adopt a mental model**  
   - Treat an ADT as a **structured flowchart**: each node is a *decision point* (e.g., “Is scalability required?”).  
   - Map the outcome of each decision to a *candidate pattern* (Micro‑services, Event‑Driven, Layered, etc.).  
   - Think of it like a *choose‑your‑own‑adventure* book where every branch leads to a concrete architectural style.  

**3️⃣ Step‑by‑step reasoning**  
   1. Define the **decision criteria** (scalability, fault tolerance, data consistency, team skill set).  
   2. For each criterion, list *yes/no* options and their implications.  
   3. Attach a **pattern recommendation** to each leaf node (e.g., “Yes → Micro‑services; No → Monolith”).  
   4. Show how the tree can be iteratively refined: adding depth for nuanced decisions or pruning irrelevant branches.  

**4️⃣ Common traps to avoid**  
   - *Overloading* a single decision with too many sub‑options, making the tree unreadable.  
   - *Forgetting context:* patterns must align with business constraints, not just technical merits.  
   - *Assuming linearity:* real decisions often loop back (e.g., “If you choose Event‑Driven but later need strong consistency”).  

**5️⃣ Sanity‑check & verbalize**  
   - Verify that every leaf leads to a **single, actionable pattern**.  
   - Run through a simple example (e.g., e‑commerce site) and trace the tree aloud to ensure logical flow.  
   - Summarize: an ADT is a *visual decision aid* that maps high‑level architectural questions directly to established patterns, enabling consistent, repeatable choices across projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
