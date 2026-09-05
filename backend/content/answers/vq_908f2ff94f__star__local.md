---
qid: vq_908f2ff94f__star__local
question: How does one create a standby database?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 374
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:09:46-05:00'
sources: []
---

**Situation:**  
At my previous company we had a 3‑tier web service with an Oracle 19c primary database that served millions of requests daily. A recent audit flagged our disaster recovery plan as “incomplete” because the failover to a standby was not automated.

**Task:**  
I was tasked with building a fully automated, real‑time physical standby on a separate rack so that we could switch over within 5 minutes without data loss or manual intervention.

**Action:**  
First, I created an *init.ora* for the standby and enabled ARCHIVELOG mode on the primary. Using Data Guard Broker, I configured the `DGMGRL` command to create a managed broker configuration, specifying `PHYSICAL STANDBY`. I set up network redundancy by adding an IP alias and updated `tnsnames.ora` with both primary and standby connect descriptors. I scripted a nightly check that ran `dgmgrl> show configuration` and sent alerts if the redo apply lag exceeded 30 seconds. Finally, I used RMAN to take a base backup of the primary and restored it on the standby, then started the Data Guard services.

**Result:**  
The standby was fully synchronized within 2 hours of deployment, with an average redo lag of <5 seconds under normal load. We passed the audit with flying colors, and during a subsequent simulated outage we switchover in 4 minutes, validating the plan. I learned how to balance performance (redo apply latency) against resilience, and the importance of automating health checks for continuous compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
