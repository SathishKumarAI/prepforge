---
qid: ing_407fe15054__aws__local
question: Why do we need MCP at all? Why not just hand the model an OpenAPI spec and
  let it call REST endpoints?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 370
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:51:45-05:00'
sources: []
---

**Why MCP is essential – a quick Amazon‑style answer**

*Leadership Principles:* **Ownership** + **Dive Deep**  
When I led the “AI‑as‑a‑Service” rollout for our e‑commerce platform, we faced two choices: hand models an OpenAPI spec and let them call REST endpoints directly, or build a Multi‑Client Proxy (MCP).  

*Situation & Task:* Our models were running in isolated SageMaker endpoints. Direct calls would expose internal URLs, harden security, and make monitoring impossible. I owned the decision to keep data flow controlled while still allowing rapid model iteration.

*Action:*  
1. **Design MCP** as a stateless Lambda behind API Gateway with VPC‑link to SageMaker.  
2. Use **IAM roles** per model to enforce least‑privilege access.  
3. Store call metadata in DynamoDB for audit and auto‑scale via CloudWatch alarms.  

*Result:* After 4 weeks, we cut unauthorized endpoint exposure by **99 %**, reduced latency from 120 ms to 45 ms (thanks to VPC‑link), and lowered operational cost by 15 % compared with a monolithic REST gateway.  

**Bar‑raiser cue:** The interviewee shows deep ownership of security, quantifies performance gains, explains trade‑offs (Lambda cold start vs direct calls), and learns from the failure of earlier prototypes that lacked auditability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
