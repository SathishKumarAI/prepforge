---
qid: ing_cb1418a86c__think__local
question: 'Explain: Active-passive — GitHub - donnemartin/system-design-primer: Learn
  how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 534
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:20:23-05:00'
sources: []
---

**1️⃣ Clarify & set assumptions**  
- *What is being asked?* The user wants an explanation of the **active‑passive** pattern as used in large‑scale system design, referencing the “system‑design‑primer” GitHub repo.  
- *Assumptions*: They’re familiar with basic HA concepts (replication, failover) but need a clear, concise description and practical example.

**2️⃣ Mental model / framework**  
Use the **Redundancy + Failover** lens:  
- **Active** = primary node that serves all traffic.  
- **Passive** = standby node(s) kept in sync (via replication or snapshots).  
When the active fails, a fail‑over mechanism promotes passive to active.

**3️⃣ Step‑by‑step reasoning**  
1. **State the purpose**: high availability with minimal write conflict.  
2. **Explain operation**:  
   - All writes go to active; passive receives updates via asynchronous replication (e.g., MySQL GTID, Kafka).  
   - Passive runs in sync mode, ready to take over instantly.  
3. **Describe fail‑over flow**: health checks → detection → promotion of passive → update routing (DNS/HAProxy).  
4. **Give a concrete example**: a web app using PostgreSQL with streaming replication; HAProxy routes to active, Patroni handles automatic switchover.  
5. **Mention trade‑offs**: higher read latency on passive, potential data loss if replication lag > 0, extra cost for standby.

**4️⃣ Common traps & how to avoid them**  
- *Assuming passive can serve reads*: In true active‑passive it cannot; otherwise you’d be in an active‑active scenario.  
- *Overlooking replication lag*: If the passive lags significantly, a fail‑over may expose stale data.  
- *Ignoring monitoring*: Without proper health checks, fail‑over may not trigger or could promote a faulty node.

**5️⃣ Sanity‑check & communicate**  
- **Rephrase**: “Active‑passive is like having a backup copy that never gets direct traffic but can instantly take over if the primary dies.”  
- **Validate**: Verify that replication direction, fail‑over trigger, and routing logic are all mentioned.  
- **Deliver**: Write a short paragraph plus a bullet list of key points; keep it under 200 words for quick reading.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
