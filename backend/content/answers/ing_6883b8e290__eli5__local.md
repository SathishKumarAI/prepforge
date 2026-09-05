---
qid: ing_6883b8e290__eli5__local
question: 'Explain: Components of HA — Highavailability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 233
total_tokens: 388
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:21:20-05:00'
sources: []
---

Think of a hospital that never lets a patient wait for care—this is “high‑availability” (HA).  
* **Load balancer** = the receptionist who directs patients to the nearest open doctor. It spreads traffic evenly so no single server gets overwhelmed.  
* **Redundant servers** = backup doctors standing by in another room; if one doctor falls ill, another steps in instantly.  
* **Health checks** = regular check‑ups on each doctor’s status; if a server stops responding, the system notices immediately.  
* **Failover mechanism** = an automatic switch that hands off work from a failing server to its backup without any interruption.  
* **Data replication** = keeping copies of patient records in multiple rooms so no data is lost when one room goes down.  

Together these parts keep an AI service running smoothly, just as the hospital keeps patients cared for at all times.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
