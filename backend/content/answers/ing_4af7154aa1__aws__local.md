---
qid: ing_4af7154aa1__aws__local
question: 'Explain: DNS — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 398
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:14:42-05:00'
sources: []
---

**Situation (S)** – While redesigning our global API gateway in **AWS**, I was asked to evaluate the impact of switching from **UDP‑based DNS queries** to **TCP** for critical internal resolution during a 30 % traffic surge.

**Task (T)** – My goal: keep DNS response latency < 50 ms, avoid packet loss, and stay within budget while ensuring high availability across three AZs.

**Action (A)**  
- **Dive Deep** into the RFC‑1035 spec: UDP is connectionless but limited to 512 B; larger zone transfers or EDNS0 payloads require TCP.  
- Implemented a **dual‑stack Route 53 Resolver** behind an **Application Load Balancer** that forwards DNS over UDP when size < 1 kB and switches to TCP otherwise.  
- Leveraged **AWS Global Accelerator** for low‑latency routing, **Auto Scaling** on the resolver nodes (EC2 Spot + On‑Demand mix), and **Amazon CloudWatch** metrics for per‑query latency.  
- Added a **circuit‑breaker** that falls back to cached responses if TCP handshake exceeds 200 ms.

**Result (R)** – Post‑deployment, DNS hit‑rate improved from **92 % → 99.7 %**, average latency dropped 35 %, and cost decreased by **12 %** thanks to Spot usage. The solution was adopted company‑wide, earning a *Customer Obsession* badge.

> **Bar‑raiser cue:** ownership of end‑to‑end performance, deep protocol knowledge, measurable uplift, and lessons learned from early TCP failures (packet fragmentation).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
