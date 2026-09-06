---
qid: vq_a8b82c91ca__faang__local
question: What database events can be set?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 458
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:26:54-05:00'
sources: []
---

**Clarify**  
The interviewer asks which *database events* (triggers or callbacks) can be configured in a relational database system. I’ll assume we’re talking about standard SQL‑compliant RDBMSs (MySQL, PostgreSQL, Oracle, SQL Server). Clarify whether they mean DDL/DML triggers, audit logs, or event notifications.

**Approach**  
1. List trigger types: `BEFORE`, `AFTER`, and `INSTEAD OF`.  
2. Mention DDL triggers (`CREATE/ALTER/DROP`).  
3. Cover event notification mechanisms (LISTEN/NOTIFY in PostgreSQL, Service Broker in SQL Server).  
4. Note audit tables / change data capture.

**Depth**  
- **BEFORE**: Executes before the triggering statement; can modify `NEW` values or abort via exception.  
- **AFTER**: Runs after successful completion; useful for logging or cascading updates.  
- **INSTEAD OF** (views): Replaces the default action, enabling complex view modifications.  
- **DDL Triggers**: Fire on schema changes—useful for enforcing naming conventions or maintaining metadata.  
- **Event Notifications**: PostgreSQL’s `LISTEN/NOTIFY` allows async messaging; SQL Server’s Service Broker queues messages to external services.  
- **Change Data Capture (CDC)** / **Audit Tables**: Capture row‑level changes into a separate log, often via triggers or built‑in CDC features.

**Edge Cases**  
- Recursive trigger loops → set `NO RECURSION` or use counters.  
- Performance impact on high‑volume tables; consider asynchronous logging.  
- Permission restrictions for DDL triggers (requires elevated privileges).  

**Optimize & Communicate**  
Explain trade‑offs: synchronous triggers guarantee consistency but add latency; async notifications reduce overhead but lose atomicity. Conclude by recommending a hybrid approach: use `AFTER` triggers for lightweight audit logs and event notification systems for real‑time downstream processing. This showcases structured reasoning, technical depth, and awareness of production concerns—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
