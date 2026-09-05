---
qid: ing_d7d98fb876__eli5__local
question: 'Explain: Write Path — System Design Interview Cheat Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 250
total_tokens: 411
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:16:46-05:00'
sources: []
---

**Write‑Path in a Distributed System**

Think of the system as a *post office* that must deliver letters (writes) to many recipients (databases, caches, logs).  
When someone sends a letter, the post office follows a fixed route:

1. **Front Desk (API Layer)** – The sender hands the letter to the clerk.  
2. **Mail Sorting Office (Write‑Through / Write‑Back Cache)** – The clerk can immediately drop it in a local mailbox (cache) for quick access or hold it until the main post office confirms delivery.  
3. **Main Post Office (Primary Database)** – The clerk forwards the letter to the central archive where it is stored permanently.  
4. **Backup Branches (Replication / Shadow Write)** – Simultaneously, copies are sent to backup offices so that if one fails, others still have the letter.

If any step fails (e.g., the main office is down), the clerk can either retry or keep a local copy until recovery. This flow guarantees the letter reaches all intended places while keeping performance high and data consistent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
