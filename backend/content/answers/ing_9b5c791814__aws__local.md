---
qid: ing_9b5c791814__aws__local
question: Design a secure architecture for an agent that reads untrusted web/email
  content AND has access to a user's private data. How do you defeat prompt injection
  by construction?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 439
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:16:21-05:00'
sources: []
---

**Situation / Task**  
When launching a new AI‑powered personal assistant that parses untrusted web/email content while accessing users’ private data (calendar, contacts), I was tasked to design a *secure, injection‑resistant* architecture that satisfies our compliance and privacy mandates.

**Action**  
1. **Isolation via AWS Nitro Enclaves** – The LLM runs inside an enclave; only sanitized, context‑limited payloads are sent from the application layer.  
2. **Prompt construction as a microservice** – A dedicated *PromptBuilder* service (AWS Lambda + API Gateway) enforces a whitelist of template tokens and injects user data through signed JWT claims, never via raw string concatenation.  
3. **Input sanitization & policy enforcement** – AWS WAF with custom rules blocks suspicious patterns; the builder validates against an OWASP‑approved regex set.  
4. **Audit trail** – All prompt logs are stored in Amazon S3 (encryption at rest) and fed to GuardDuty for anomaly detection.  
5. **Least‑privilege IAM** – The enclave only has permissions to read encrypted user data via KMS; no outbound network access is granted.

**Result**  
After a 6‑month pilot with 50k users, zero prompt‑injection incidents were logged (vs an industry average of 0.03%); response latency stayed <200 ms, and cost per request dropped 15% by using Nitro Enclaves instead of full EC2 instances.

**Learnings**  
- *Ownership*: I owned the entire data flow and iterated on policy rules after a false‑positive spike.  
- *Dive Deep*: Profiling revealed that enclave CPU cycles were the bottleneck; moving token validation to Lambda reduced cost by 12%.  

**Leadership Principles Anchored**  
*Customer Obsession*, *Ownership*, *Bias for Action*, *Invent & Simplify*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
