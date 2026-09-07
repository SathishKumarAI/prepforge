---
qid: ing_18f4d86e04__aws__local
question: 'Explain: What HTTP Is — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 446
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:22:24-05:00'
sources: []
---

**Situation / Task**  
I was hired by a fintech startup that wanted to expose its ML‑prediction API to external partners while keeping latency under 50 ms and ensuring data privacy. The core question was: *“What HTTP is best for our system?”*  

**Action**  
1. **Requirement dive** – I mapped the constraints: high throughput (≈ 10 k req/s), strict TLS compliance, auditability, and graceful degradation.  
2. **Design choice** – I chose **HTTPS** over plain HTTP because encryption protects sensitive financial data and satisfies PCI‑DSS.  
3. **AWS stack**  
   * **API Gateway + Lambda@Edge** for edge‑latency (< 10 ms).  
   * **ALB (HTTPS listener)** behind an **Elastic Load Balancer** to terminate TLS, offload certificates from ACM, and enable HTTP/2 for multiplexing.  
   * **S3 static logs + CloudWatch Logs Insights** for audit trails; **AWS WAF** protects against OWASP attacks.  
4. **Scalability & Availability** – Auto‑scaling on target CPU > 70 % keeps 99.999 % availability.  
5. **Cost trade‑off** – Using Lambda@Edge eliminates server maintenance, costing ~$0.20/1M requests versus $0.75/instance for EC2.  

**Result**  
Within three months the API handled 12 k req/s with < 45 ms latency, dropped a potential data breach risk score from 8 to 1, and cut ops cost by **35 %**.  

**Reflection (Bar‑raiser focus)**  
I took full ownership of the security posture, dove deep into TLS handshake timings, quantified performance gains, and learned that edge caching can offset even the smallest latency budgets. This aligns with *Customer Obsession* (protecting data) and *Ownership* (end‑to‑end delivery).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
