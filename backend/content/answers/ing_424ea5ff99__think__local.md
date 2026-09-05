---
qid: ing_424ea5ff99__think__local
question: 'Explain: Pilot Light Approach: — Cloud Disaster Recovery Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 437
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:01:29-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - Confirm we’re talking about *cloud‑native* disaster recovery (DR) rather than on‑prem hybrid setups.  
   - Assume the audience knows basic DR concepts (failover, RPO/RTO) but not the “Pilot Light” pattern.

**2️⃣ Adopt a mental model: “Minimal viable core + burstable expansion”**  
   - Think of a pilot light as keeping a *tiny, always‑running* version of the application alive.  
   - In normal ops, most services are scaled down; only essential components (database replicas, authentication) stay live.

**3️⃣ Step‑by‑step reasoning toward the answer**  
   1. **Identify core workloads** that must be up instantly during a failure.  
   2. **Deploy those in the DR region** at minimal capacity (e.g., single node or small cluster).  
   3. **Configure automated monitoring** to detect outage of primary region.  
   4. **Trigger scaling‑up scripts** that spin out additional resources (compute, storage) in the DR zone.  
   5. **Route traffic via DNS/Load Balancer** once the new instances are healthy.  
   6. **Gracefully tear down or re‑scale** back to minimal after primary is restored.

**4️⃣ Common traps to avoid**  
   - *Over‑scaling* the pilot light: it defeats cost savings.  
   - Forgetting to keep data in sync (use asynchronous replication).  
   - Assuming instant failover; always test the entire workflow.

**5️⃣ Sanity‑check & verbalize**  
   - Ask: “If a region goes down, how quickly can we serve a user request?”  
   - Confirm RPO is minimal (data lag) and RTO is acceptable (seconds to minutes).  
   - Summarize: *Pilot Light keeps the heart alive in DR; when needed, it lights up the full body.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
