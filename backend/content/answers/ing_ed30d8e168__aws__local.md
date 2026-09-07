---
qid: ing_ed30d8e168__aws__local
question: 'Explain: Cookies — Cookies vs Sessions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 421
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:14:33-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During my last role as a senior backend engineer at a fintech startup, I was tasked to migrate the user‑auth flow from server‑side sessions to stateless JWT cookies so we could scale our mobile app globally.  
- **Situation:** Our monolithic session store (Redis) hit 12 M requests/day; latency spiked during peak hours, and we couldn’t add new regions without sharding.  
- **Task:** Replace sessions with secure HTTP‑Only cookies while preserving security, auditability, and compliance.  
- **Action:** I designed a hybrid approach:  
  - Store minimal session metadata (user‑id, role) in an encrypted JWT signed by AWS KMS.  
  - Persist a short‑lived “refresh token” in DynamoDB with TTL to revoke compromised tokens.  
  - Use Amazon CloudFront + Lambda@Edge to inject cookies at the edge, reducing round‑trip latency.  
  - Implement automated revocation via SNS → Lambda that clears relevant cache entries.  
  This leveraged **Amazon Cognito** for user pools, **AWS WAF** for CSRF protection, and **AWS Shield** for DDoS resilience.  
- **Result:** Latency dropped from 350 ms to <80 ms (‑78 %), global read throughput increased by 5× without additional cost, and we cut infrastructure ops from 3 engineers to 1.  

*Key takeaways:* Ownership of the entire auth lifecycle; deep dive into token semantics; quantifiable impact on performance & cost; learned that hybrid stateful/ stateless designs often balance scalability with auditability.  

**Leadership Principles:**  
- **Ownership** – led end‑to‑end redesign and cut ops burden.  
- **Dive Deep** – dissected session patterns, token lifecycles, and security trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
