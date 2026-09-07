---
qid: ing_3a7d893d36__aws__local
question: 'Explain: 0-RTT — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 416
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:38:49-05:00'
sources: []
---

**Situation / Task**  
I was leading a migration of our global content‑delivery platform from plain HTTPS to HTTP/3 (QUIC) to cut latency for mobile users in emerging markets. The goal was to support **0‑RTT** connections so that the first request could be sent immediately after the TLS handshake, cutting page load times by 25 % for a 5 billion‑user base.

**Action**  
*Customer Obsession*: I gathered telemetry from edge nodes and identified that 18 % of our traffic came from high‑latency regions.  
*Ownership & Dive Deep*: I designed an **edge‑side key‑exchange cache** using DynamoDB Global Tables (partitioned by region) to store short‑lived session tickets, and a Lambda@Edge function that injects the cached ticket into the TLS handshake on first request.  
I chose **AWS CloudFront + ALB** for load balancing, **Route 53 latency routing**, and **Amazon KMS** for key rotation. The design limits 0‑RTT usage to *replay‑protected* paths by verifying a per‑user nonce in the request header.  

**Result**  
After A/B testing, page load time dropped from 1.2 s to 0.9 s (≈ 25 % improvement) for mobile users, and we saw a **15 % uplift in conversion** on high‑latency markets. Cost increased by only 3 % due to the lightweight Lambda invocations.

**Bar‑raiser notes**  
- Demonstrated ownership of end‑to‑end latency.  
- Dive deep into QUIC/0‑RTT trade‑offs (security vs speed).  
- Quantified impact on business metrics.  
- Learned that caching session tickets at edge nodes reduces TLS round trips without compromising replay protection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
