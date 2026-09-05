---
qid: ing_dc99eddb4d__eli5__local
question: 'Explain: Components for Traffic Distribution — Design Load Balancer | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 272
total_tokens: 439
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:23:23-05:00'
sources: []
---

Think of a busy highway that splits into several lanes (the servers). A **load balancer** is the smart toll booth that decides which lane each car should take so traffic flows smoothly.

* **Front‑end server** – the toll booth itself, receiving every incoming request.  
* **Health checker** – a camera system that constantly checks if a lane is open or blocked (whether a backend server is alive).  
* **Routing algorithm** – the booth’s rule book: it can send cars to the nearest open lane (round‑robin), give preference to lanes with fewer cars (least‑connections), or always choose the same lane for a particular driver (sticky session).  
* **Session persistence** – like giving a car a dedicated ticket so it stays in the same lane during its trip.  
* **Back‑end pool** – the actual lanes (application servers) that process requests.  
* **Failover and scaling** – if a lane closes, the booth redirects cars to other open lanes; when traffic grows, new lanes are added automatically.

By combining these parts, the load balancer keeps all drivers moving efficiently, preventing jams and ensuring every request reaches a healthy server.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
