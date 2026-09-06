---
qid: ing_a8cb934ae1__think__local
question: 'Explain: Index lifecycle actions — Index lifecycle management (ILM) in
  Elasticsearch | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 593
total_tokens: 790
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:12:13-05:00'
sources: []
---

### 1️⃣ Clarify the ask & set assumptions  
- **Audience**: someone who knows basic Elasticsearch but not ILM specifics.  
- **Goal**: explain what “index lifecycle actions” are and how they fit into Index Lifecycle Management (ILM).  
- **Assumptions**: The user has a cluster with at least one index, understands shards/replicas, and is aware that indices can become stale over time.

### 2️⃣ Mental model / framework  
1. **Lifecycle phases** – *hot → warm → cold → delete*.  
2. **Actions per phase** – operations (rollover, shrink, freeze, etc.) triggered when a condition is met.  
3. **Policy** – JSON that maps phases to actions + conditions.  
4. **Execution** – ILM runs in the cluster’s master node and applies actions automatically.

### 3️⃣ Step‑by‑step reasoning  
- Start by describing *why* indices need lifecycle management (storage cost, query performance).  
- Define each phase: what it represents, typical duration, and when you’d want to transition.  
- Enumerate common actions in each phase, explaining the condition that triggers them (e.g., size > 50 GB → rollover).  
- Show how a policy is attached to an index template or applied manually (`PUT _ilm/policy`).  
- Explain the *rollover* action as the anchor: it creates a new index and keeps the old one in the current phase.  
- Mention optional actions like `shrink`, `freeze`, `delete`, and when they’re useful.  
- Conclude with how to monitor ILM (`GET _ilm/explain`) and troubleshoot.

### 4️⃣ Common traps & pitfalls  
- **Mixing up “rollover” vs. “reindex”** – rollover is automatic; reindex is manual.  
- **Assuming actions run instantly** – many (shrink, freeze) are asynchronous.  
- **Neglecting index template binding** – a policy won’t apply if the index isn’t in the correct template.  
- **Over‑tuning size thresholds** – too small → unnecessary rollovers; too large → high memory use.

### 5️⃣ Sanity check & verbalizing  
- Verify each phase/action pair makes sense (e.g., you don’t shrink during hot).  
- Use a concrete example: “Create a policy that rolls over after 7 days or 50 GB, then shrinks to half the shards in warm.”  
- Ask the learner to summarize: “Explain what happens when an index reaches 60 GB.” This forces retrieval of the condition → action mapping.

By following this structured approach you’ll be able to explain ILM’s index lifecycle actions clearly and avoid common misunderstandings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
