---
qid: ing_85c79301e2__faang__local
question: 'Explain: Merge replication — Data replication explained: types, examples
  & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 447
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:55:29-05:00'
sources: []
---

**Merge Replication – What It Is and When to Use It**

| **Clarify** | *Problem:* We need a data‑sync mechanism that allows multiple nodes to work offline, modify records locally, then reconcile changes back into a central store without conflicts.  
*Assumptions to confirm:*  
- Relational data model (SQL).  
- Concurrent updates may occur on the same row at different sites.  
- Network latency or outages are common.  

| **Approach** | 1️⃣ Outline merge replication: each site maintains a full copy, tracks changes via *change vectors* (row‑level timestamps/UIDs). 2️⃣ On sync, replicas exchange change logs and perform *conflict resolution* (last‑writer‑wins or custom merge logic). 3️⃣ Apply changes to the target.  

| **Depth** | • **Types:**  
- *Transactional Replication* – one‑way, real‑time, no conflicts.  
- *Merge Replication* – bidirectional, conflict‑aware.  
- *Snapshot Replication* – periodic full copy.  
• **Example:** A retail chain with point‑of‑sale terminals that update inventory locally; later they sync to the corporate database, merging sales and restock events.  
• **Use cases:**  
- Offline mobile apps (CRM, field service).  
- Distributed microservices needing eventual consistency.  

| **Edge Cases** | • Simultaneous updates to the same row → conflict resolution must be deterministic.  
• Large change sets → network congestion; use incremental sync or partitioning.  
• Schema changes across replicas → requires versioned migrations.  

| **Optimize & Communicate** | For performance, use *partitioned merge replication* (by key ranges) and compress change logs. Explain to interviewers: “I’d start with a small test repo, instrument conflict counters, then scale out.” This demonstrates clear thinking, depth on trade‑offs, and an awareness of real‑world constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
