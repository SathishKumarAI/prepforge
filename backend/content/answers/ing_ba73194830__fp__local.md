---
qid: ing_ba73194830__fp__local
question: 'Explain: Active-Passive (Standby) — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 391
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:40:09-05:00'
sources: []
---

**Active‑Passive (Standby) Availability – From First Principles**

When a service must stay online, the *fundamental problem* is that any single component can fail at any time. To guarantee continuity we need a *redundant* system whose failure probability is much lower than the product of its parts.  

In an **active‑passive** pair, one instance (the *primary*) handles all traffic while another (*standby*) sits idle or in low‑load mode. The standby is kept ready by periodically synchronizing state—usually through checkpointing, streaming logs, or a shared database. If the primary fails, a failover script detects the outage and promotes the standby to active. Because the standby never processed requests, its own failure probability is negligible compared to the risk of both being down simultaneously.

Mathematically, let \(p\) be the failure rate of a single node. The system’s mean‑time‑to‑failure (MTTF) for active‑passive is approximately \(\frac{1}{2p}\), twice that of a lone node, assuming independent failures and instantaneous switchover. This reflects an *optimization* principle: by investing in one extra copy we halve the risk.

**Non‑obvious insight:** The standby’s idle state isn’t wasteful; it serves as a *probabilistic guardrail*. In practice, the standby must also monitor the primary (heartbeat) and maintain an up‑to‑date replication of mutable data. If the primary is only partially synchronized when failure occurs, the system may experience *data loss* or *inconsistency*, defeating availability. Thus, active‑passive design hinges on *continuous state fidelity*, not merely on having a spare.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
