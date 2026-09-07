---
qid: ing_f600fd4d1e__faang__local
question: A stakeholder wants to send sensitive customer data (PII) to a third-party
  model API. They say the business need justifies it. What do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 455
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:11:59-05:00'
sources: []
---

**Clarify**  
Restate the ask: *“We’ll push PII‑rich customer data to an external ML service because it’s a business priority.”*  
Assumptions to confirm:  
1. Which data fields are considered PII?  
2. Is there a legal or contractual restriction on sharing this data (GDPR, CCPA, HIPAA)?  
3. Does the third‑party provider have SOC‑2, ISO 27001, or equivalent attestations?  
4. Are we allowed to de‑identify or pseudonymize before transmission?

**Approach**  
1. Verify compliance: map data to privacy regulations and internal policy.  
2. Evaluate the provider’s security posture (encryption in transit/at rest, audit logs).  
3. If permitted, design a minimal‑information‑extraction pipeline: strip identifiers, hash or tokenise keys, encrypt payloads.  
4. Implement a “data‑use agreement” and monitor data access.

**Depth**  
- **Legal check:** Under GDPR Article 6(1)(f) we need legitimate interest; under CCPA we must provide opt‑out.  
- **Technical safeguards:** TLS 1.3 for transport, AES‑256‑GCM at rest, HMAC‑SHA‑256 for integrity.  
- **Audit trail:** log every outbound request with timestamp, user ID, and data hash.  
- **Cost/latency trade‑off:** encryption adds ~5 ms per record; acceptable if batch size >10k.

**Edge Cases**  
- Unexpected provider downtime → fallback to local inference or queueing.  
- Data schema changes breaking the de‑identification logic.  
- Insider threat: restrict API keys to read‑only endpoints.

**Optimize & Communicate**  
Propose a phased rollout: start with a subset of non‑critical customers, monitor for data leaks and performance. Report findings in a concise dashboard (KPIs: number of PII records sent, encryption success rate, latency). Conclude that without strict controls the request violates compliance; with controls it can be justified but requires continuous oversight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
