---
qid: ing_f36f20b527__think__local
question: 'Explain: Problem — Pattern: Database per service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 466
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:04:14-05:00'
sources: []
---

### 1️⃣ Clarify the question & set assumptions  
- **What is being asked?** A brief explanation of the “Pattern: Database per Service” in micro‑services architecture, why it’s a problem, and what it entails.  
- **Assumptions:** The audience knows basic micro‑service concepts but may not be familiar with database isolation patterns or common pitfalls.

### 2️⃣ Choose a mental model / framework  
Use the *“Domain‑Driven Design (DDD) + Micro‑services”* lens:  
1. **Bounded context** → each service owns its data.  
2. **Database per service** → one DB instance per bounded context.  
3. **Implications** → independence, scaling, consistency challenges.

### 3️⃣ Step‑by‑step reasoning  
- **Define the pattern:** Each micro‑service has a dedicated database (or schema).  
- **Explain the problem:**  
  - *Data duplication* & *synchronization* across services.  
  - *Distributed transactions* become hard; eventual consistency is needed.  
  - *Complex queries* that span multiple services are impossible without extra orchestration.  
- **Show trade‑offs:** Isolation vs. data sharing, performance vs. complexity.  
- **Illustrate with an example:** Order service + Inventory service each owning its DB → ordering needs inventory check → requires API call or event bus.

### 4️⃣ Common traps to avoid  
- *Overgeneralizing:* not every service needs a separate DB; sometimes shared schemas are acceptable.  
- *Ignoring eventual consistency:* assume ACID across services leads to deadlocks.  
- *Forgetting operational overhead:* more databases mean more backups, migrations, monitoring.

### 5️⃣ Sanity‑check & communicate out loud  
- **Ask:** “Does this explain why the pattern is useful yet problematic?”  
- **Summarize:** State the core idea, main pain points, and a quick mitigation (e.g., event sourcing, CQRS).  
- Keep it concise: one paragraph for definition + bullet list for problems.  

This structured approach ensures clarity, completeness, and prevents common misunderstandings when explaining “Database per Service.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
