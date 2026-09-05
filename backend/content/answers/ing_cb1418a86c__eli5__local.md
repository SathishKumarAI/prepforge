---
qid: ing_cb1418a86c__eli5__local
question: 'Explain: Active-passive — GitHub - donnemartin/system-design-primer: Learn
  how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 253
total_tokens: 448
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:56:55-05:00'
sources: []
---

**Active‑Passive (Redundancy) – Think of a fire alarm system in a big building.**

*Active* is the “live” unit that does the job—like the main server that handles user requests.  
*Passive* is its backup, idle and ready to step in if the active one fails.

When the active server crashes (maybe due to a power outage or software bug), the passive server automatically takes over with minimal interruption. If the active server comes back online, it can hand off control again.  

In large‑scale systems you often deploy many active–passive pairs across data centers so that traffic never stops, even if one node goes down. The passive side keeps a near‑real‑time copy of all data (using replication or mirroring) so the switch is seamless. This pattern is called **active‑passive failover** and is a cornerstone of high availability design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
