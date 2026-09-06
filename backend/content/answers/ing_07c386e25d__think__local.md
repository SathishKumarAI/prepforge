---
qid: ing_07c386e25d__think__local
question: 'Explain: Data Warehousing — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 475
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:13:32-05:00'
sources: []
---

**1. Clarify scope & assumptions**  
   - *What is being asked?* We need a conceptual explanation of CDC in data warehousing, not code.  
   - *Assume audience:* Data‑engineering folks with basic SQL/ETL knowledge.  
   - *Goal:* Show why CDC matters, how it’s implemented, and key design trade‑offs.

**2. Adopt a mental model**  
   1. **Data flow diagram:** source → CDC layer → staging → warehouse.  
   2. **Three core components:** capture mechanism, change log storage, propagation logic.  
   3. **Design patterns:** transactional vs event‑driven, incremental vs full refresh.

**3. Step‑by‑step reasoning**  
   - *Why capture?* Avoid costly full reloads; keep warehouse near real‑time.  
   - *How to capture?* Use database triggers, transaction log readers (SQL Server CDC, Oracle Flashback), or change‑data APIs.  
   - *What to store?* Minimal payload: key, new/old values, timestamp, operation type.  
   - *Propagation:* Batch vs streaming; idempotent upserts in warehouse tables.  
   - *Schema evolution:* Handle column additions/removals via metadata tables or versioned schemas.

**4. Common pitfalls to avoid**  
   - **Ignoring latency:** Trigger‑based CDC can add write overhead; log‑reader is lighter but may lag.  
   - **Duplicate changes:** Ensure idempotence, use sequence numbers or change tokens.  
   - **Schema mismatch:** Without proper mapping, late‑added columns cause failures.  
   - **Over‑aggressive refreshes:** Updating entire dimension tables on every row change kills performance.

**5. Sanity check & verbal communication**  
   - *Check logic:* Does the design cover capture → store → propagate? Are edge cases (rollbacks, bulk loads) addressed?  
   - *Explain clearly:* Start with “CDC lets us…”, then walk through the diagram, highlight trade‑offs, finish with a short example of an upsert SQL.  

This structured approach ensures you deliver a concise, accurate, and audience‑appropriate explanation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
