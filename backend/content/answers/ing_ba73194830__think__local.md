---
qid: ing_ba73194830__think__local
question: 'Explain: Active-Passive (Standby) — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 511
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:14:40-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   * Identify what “Active‑Passive (Standby)” means in availability contexts – a primary system that handles traffic, with a secondary ready to take over on failure.  
   * Assume we’re discussing data‑center or cloud deployments, not embedded devices.  
   * Note that the question asks for an explanation of *availability* and how this pattern is used in *system design*, so focus on reliability metrics (MTBF, MTTR) rather than performance tuning.

**2. Adopt a mental model**  
   * Treat the system as two tiers: **Active tier** (live traffic) + **Passive/Standby tier** (replicated state).  
   * Use the classic availability formula \(A = \frac{MTBF}{MTBF+MTTR}\) and map MTBF to “time between failures” of the active component, MTTR to “fail‑over time” plus recovery.

**3. Step‑by‑step reasoning**  
   1. Explain why a passive replica is kept in sync (database replication, cache mirroring).  
   2. Describe failure detection mechanisms (heartbeat, health checks).  
   3. Show how fail‑over is triggered: automatic switchover vs manual intervention.  
   4. Quantify the improvement in availability: e.g., from 99.9 % to 99.999 % by adding standby.  
   5. Discuss trade‑offs: extra cost, write‑skew risk, testability.

**4. Common traps to avoid**  
   * Mixing up *availability* with *performance*: a standby can be slow to sync but still improves uptime.  
   * Assuming perfect replication; mention eventual consistency or data loss window.  
   * Forgetting that the passive tier must also have its own failure domain (e.g., separate rack, region).

**5. Sanity‑check & communicate**  
   * Verify numbers: if MTBF = 1 month and MTTR = 30 min, calculate availability before/after standby.  
   * Use a concise diagram or bullet list to illustrate the flow of traffic and fail‑over.  
   * End with a quick summary: “Active‑Passive (Standby) raises system availability by keeping an identical copy ready to take over instantly, at the cost of extra infrastructure and complexity.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
