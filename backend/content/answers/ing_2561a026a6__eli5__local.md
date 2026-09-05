---
qid: ing_2561a026a6__eli5__local
question: 'Explain: Pattern 1: Active-Passive (Failover) — Design Load Balancer |
  System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 194
total_tokens: 369
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:35:05-05:00'
sources: []
---

Imagine a busy café that must keep serving customers even if one barista falls ill. The café hires a “stand‑by” barista who watches the first one’s work and is ready to jump in at a moment’s notice. In tech this is called **active‑passive failover**.  

*Active* means the main server (the first barista) handles all orders (traffic).  
*Passive* is the backup server, idle but listening for any sign of trouble. A load balancer, like the café manager, monitors both. If it sees the active server’s “heartbeat” fail, it instantly hands over all requests to the passive one, so customers experience no interruption.

This setup keeps a system running smoothly even when hardware or software hiccups occur—just as a well‑managed café never lets a single barista stop the coffee flow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
