---
qid: ing_488df5cc71__think__local
question: 'Explain: Step 3: Design core components — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 360
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:14:51-05:00'
sources: []
---

**1. Clarify & set assumptions**  
- Identify what “Step 3: Design core components” actually means in the context of a system‑design interview (i.e., sketching out the main modules and their responsibilities).  
- Assume the interviewer expects you to talk about scalability, fault tolerance, and maintainability, not just code.  

**2. Adopt a mental model**  
- Use the *layered architecture* framework: presentation → business logic → data layer.  
- For each layer, think in terms of “what problem does it solve?” and “how will it scale?”  

**3. Reason step‑by‑step**  
1. List the functional requirements (e.g., user auth, real‑time updates).  
2. Map each requirement to a core component (Auth Service, Messaging Queue, Cache).  
3. Define interfaces between components (REST API, gRPC, message topics).  
4. Identify non‑functional concerns for each component (latency, consistency, retry logic).  

**4. Common traps to avoid**  
- Over‑engineering: adding unnecessary microservices or complex patterns.  
- Forgetting to explain trade‑offs (CAP theorem, eventual consistency vs strong consistency).  
- Skipping how components will be deployed/monitored.  

**5. Sanity‑check & communicate**  
- Re‑examine each component against the original requirements; if something is missing, add it.  
- Speak aloud: “This Auth Service handles sign‑in, and we’ll expose a stateless REST endpoint…”.  
- End with a quick recap of how data flows through the system to demonstrate holistic understanding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
