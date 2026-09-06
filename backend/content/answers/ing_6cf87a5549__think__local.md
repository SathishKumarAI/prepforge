---
qid: ing_6cf87a5549__think__local
question: 'Explain: Non-Functional Requirements — ChatGPT System Design - by Neo Kim
  and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 422
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:12:42-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   * Confirm that we’re discussing a “ChatGPT‑style” LLM service (text generation + API).  
   * Assume typical cloud deployment: stateless workers, autoscaling, multi‑region latency targets.  
   * Note the audience: designers or product managers who need to translate business goals into non‑functional specs.

**2️⃣ Adopt a structured NFR framework**  
   * Use **Capacity, Performance, Reliability, Security, Usability, Maintainability, Scalability** as pillars.  
   * Map each pillar to concrete metrics (e.g., SLA, MTTR, throughput) and tie them back to user stories or business KPIs.

**3️⃣ Step‑by‑step reasoning**  
   1. List high‑level user needs (fast responses, uptime, data privacy).  
   2. For each need, ask “what metric captures this?” → translate into a NFR.  
   3. Derive constraints on infrastructure: e.g., *latency < 200 ms* ⇒ edge caching or colocated GPUs.  
   4. Translate those constraints into design decisions: load balancers, circuit breakers, encryption at rest.

**4️⃣ Avoid common pitfalls**  
   * Don’t conflate functional with non‑functional (e.g., “support multi‑language” is a feature).  
   * Beware of vague terms (“high availability”)—always quantify.  
   * Resist the temptation to over‑optimize early; prioritize NFRs that impact user experience first.

**5️⃣ Sanity‑check & communicate**  
   * Cross‑validate metrics against business goals (e.g., revenue per active session).  
   * Use a visual matrix: NFR column, metric, target value, responsible team.  
   * Present the matrix in stakeholder meetings to ensure alignment and surface trade‑offs early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
