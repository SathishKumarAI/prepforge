---
qid: ing_0d7baada86__star__local
question: 'Explain: Preserve Client Address Carefully — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 351
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:55:34-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were launching a real‑time fraud detection service that had to process thousands of transactions per second. The regulatory compliance team required us to retain the original client IP for audit logs, but our load balancer was stripping it behind an internal proxy, so every request appeared as coming from 10.0.0.1.

**Task:**  
I needed to design a solution that preserved the true client IP across all microservices without compromising performance or security, and made sure the data stayed compliant with GDPR’s “data minimisation” principle.

**Action:**  
First, I introduced an HTTP header (`X-Forwarded-For`) at the edge gateway and configured the reverse proxy to forward it unmodified. Then, in each service we added a lightweight middleware that extracted the header, validated it against a whitelist of public CIDR blocks, and stored the IP in a separate immutable audit table rather than the main transaction DB. To avoid leaking internal addresses, I set up a sidecar that scrubbed any private ranges before persistence. Finally, I wrote an automated test suite that simulated traffic from various regions to ensure no loss or spoofing of IP data.

**Result:**  
We achieved 99.9% accuracy in capturing true client IPs with negligible latency overhead (<2 ms). Compliance auditors praised the audit trail, and we avoided a potential $500K fine for data mismanagement. I learned that coupling header validation with sidecar scrubbing can balance privacy, compliance, and system performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
