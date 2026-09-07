---
qid: ing_2a1b5a2bdc__aws__local
question: 'Explain: HTTPS Upgrade — What Happens When You Type a URL Into Your Browser?
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 452
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:00:34-05:00'
sources: []
---

**Customer Obsession | Ownership**

**Situation:**  
A customer typed `https://example.com` in a browser expecting instant, secure access. We needed to guarantee that the upgrade from HTTP to HTTPS happened automatically and reliably for millions of users worldwide.

**Task:**  
Design an end‑to‑end system that performs the TLS handshake, validates certificates, and serves content with minimal latency while keeping costs low.

**Action:**  
1. **DNS + CloudFront** – Route traffic through Amazon Route 53 (latency‑based routing) to a global CDN (CloudFront).  
2. **Automatic HTTP → HTTPS redirect** – Use CloudFront’s *Viewer Protocol Policy* (`Redirect HTTP to HTTPS`) so the browser never hits our origin over plain HTTP.  
3. **TLS termination at edge** – Provision an ACM certificate per domain; CloudFront handles TLS negotiation, reducing compute on origin servers by ~70 % and lowering egress costs.  
4. **Origin health & scaling** – Deploy EC2 Auto Scaling groups behind an ALB that only accepts HTTPS traffic (listener 443). Use AWS WAF for rate‑limiting and DDoS protection.  
5. **Observability** – Enable CloudWatch metrics (`TotalRequestCount`, `ErrorRate`) and X-Ray tracing to capture TLS handshake latency; set alarms if average < 30 ms.

**Result:**  
After rollout, page load time dropped from 1.2 s (HTTP) to 0.9 s (HTTPS) for 95 % of users, while certificate renewal cost decreased by 40 %. The system handled a 50‑fold traffic surge during a product launch with zero downtime.

**Bar‑raiser focus:**  
- Demonstrated ownership of security and performance.  
- Deep dive into AWS services and trade‑offs (edge TLS vs origin).  
- Quantified impact (latency, cost).  
- Learned from an earlier failure where manual redirects caused 3 s delays; now automated with CloudFront.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
