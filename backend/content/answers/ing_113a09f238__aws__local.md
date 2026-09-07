---
qid: ing_113a09f238__aws__local
question: You're exposing one of your agents to another company's agent. What crosses
  the boundary, and what do you refuse to expose?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 373
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:04:45-05:00'
sources: []
---

**Situation & Task**  
I was leading a cross‑team effort where our natural‑language agent needed to interoperate with a partner’s proprietary policy engine. The challenge: share enough data for smooth dialogue while protecting confidential logic and user privacy.

**Action – Technical Design**  
1. **Boundary Definition** – We exposed only *public intent schemas* (e.g., `BookFlight`, `CancelReservation`) via an OpenAPI spec, keeping the partner’s scoring algorithm private.  
2. **Proxy Service** – Deployed a lightweight API Gateway + Lambda layer that translates our agent’s intent into the partner’s request format, logs metadata but never stores raw user utterances.  
3. **Access Control** – Used IAM roles with least privilege; partner’s system accessed only via signed URLs.  
4. **Monitoring & Auditing** – CloudWatch metrics tracked call latency (target < 120 ms) and error rate (<0.5 %).  

**Result**  
- Achieved a 25 % reduction in turn‑around time for joint queries, improving overall user satisfaction from 78 % to 92 %.  
- Zero data leaks; compliance audit passed with no findings.  

**Reflection (Bar‑raiser)**  
I owned the entire integration lifecycle—defined boundaries, designed a scalable proxy, and measured impact. I dove deep into AWS security services (IAM, KMS) to quantify risk. The failure point was an initial over‑exposure of intent payloads; learning from that, we tightened our contract and introduced stricter logging, reinforcing the principle of *Customer Obsession*—protecting user data while delivering fast, reliable service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
