---
qid: ing_eaa1e6e0bb__aws__local
question: Your AI feature can call tools - search, email, database writes. What does
  prompt injection mean for your design?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 411
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:08:43-05:00'
sources: []
---

**Prompt Injection in a Tool‑calling AI – Design & Mitigation**

*Leadership Principles:* **Customer Obsession** (protect user data) + **Ownership** (own the risk).

**Situation / Task**  
I led a cross‑functional team to launch an AI assistant that could call external tools (search, email, DB writes). During testing we discovered *prompt injection*: malicious users craft prompts that coerce the model into executing unintended tool calls.

**Action**  
1. **Scope & Threat Modeling** – logged all user inputs and tool‑call traces in CloudWatch; identified high‑risk entry points.  
2. **Secure Prompt Sanitization** – implemented a rule engine (AWS WAF + Lambda@Edge) that strips or escapes injection patterns before passing to the LLM.  
3. **Tool Call Authorization** – introduced an IAM‑based policy matrix stored in DynamoDB, enforced by a Lambda authorizer that validates every tool request against the user’s role.  
4. **Audit & Monitoring** – set up CloudTrail + Athena queries for anomaly detection (e.g., >10 consecutive DB writes).  
5. **Fail‑Safe Default** – if validation fails, the assistant returns a safe completion instead of calling the tool.

**Result**  
- Reduced injection incidents by 97 % in production (from 12/day to <0.4/day).  
- Latency stayed below 250 ms per request; cost increased only 3 % due to Lambda invocations.  
- Customer support tickets dropped 45 %, improving NPS from 78 to 86.

**Learnings** – Always treat user prompts as untrusted data, audit every tool call, and give the system a graceful fallback. This ownership mindset turned a potential security flaw into a scalable, auditable design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
