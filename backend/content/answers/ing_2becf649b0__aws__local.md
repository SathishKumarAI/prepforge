---
qid: ing_2becf649b0__aws__local
question: 'Explain: QUIC and HTTP/3 — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 412
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:04:23-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a migration of our video‑streaming API from HTTP/1.1 to the new QUIC/HTTP 3 stack to reduce latency for mobile users in high‑interference networks. The goal was to cut average RTT by 30 % while keeping cost below 5 % of the existing infrastructure budget.

**Action**  
I owned the redesign, diving deep into transport semantics:  
* **UDP + QUIC** gives multiplexed streams with zero‑copy packet delivery and built‑in TLS, eliminating head‑of‑line blocking that TCP suffers from.  
* I prototyped a stateless load balancer on **AWS Global Accelerator** (UDP listener) feeding traffic to an **Amazon EC2 Auto Scaling group** running NGINX‑QUIC.  
* For persistence, I used **DynamoDB** with fine‑grained TTL for session state, and **Elastic Load Balancing** for fallback to HTTP/1.1 when QUIC isn’t supported.

I benchmarked using **k6**: RTT dropped from 250 ms to 165 ms (−34 %), and CPU usage per request fell by 22 %. Cost analysis showed a 3.8 % increase due to the accelerator, well within our target.

**Result**  
The migration improved user engagement by 12 % in the first month post‑launch and reduced support tickets related to buffering by 27 %. I documented lessons on QUIC’s error handling, which informed our next‑gen CDN strategy.

---

*Leadership Principles:* **Ownership**, **Dive Deep**.  
*Bar‑raiser cues:* clear ownership, quantitative impact, deep technical dive, learning from early QUIC failures (e.g., packet loss handling).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
