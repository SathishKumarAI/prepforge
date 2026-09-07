---
qid: ing_195e8b91ec__aws__local
question: Your production assistant has started quoting wrong prices to customers.
  Is it an attack or a bug, and how do you find out?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 428
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:23:39-05:00'
sources: []
---

**Situation & Task (S)**  
In late‑night production of our AI pricing engine, the assistant began quoting $12 instead of $8 for a key SKU—customers complained and sales dropped 4 % in that channel. I had to determine whether this was an *attack* or a *bug* and fix it before revenue loss escalated.

**Approach (A)**  
1. **Audit logs** – pulled CloudWatch Logs, Kinesis Data Streams, and S3 access logs for the last 48 h.  
2. **Code review & version control** – examined Git commit history; no recent changes to pricing logic.  
3. **Threat detection** – enabled GuardDuty on the Lambda function’s VPC to surface anomalous API calls or IPs.  
4. **Reproducibility test** – replicated the call in a staging environment using Step Functions, confirming deterministic output.  

**Result (R)**  
- Found an unauthorized SSH key that bypassed IAM and injected a malicious `price_override` payload via the Lambda’s API Gateway endpoint.  
- Disabled the key, patched the function with a signed code bundle, and added a Lambda layer for runtime validation.  
- **Impact:** Restored 98 % of lost revenue within 2 hrs; subsequent monitoring shows zero false positives over 30 days.  

**Learning (L)**  
Ownership: I owned the incident from detection to resolution.  
Dive Deep: Leveraged CloudTrail, GuardDuty, and custom telemetry to pinpoint the root cause.  
Bar‑raiser cue: Showed measurable impact (4 % revenue drop → 98 % recovery) and a hardening plan that reduced future risk by 70 %.  

**Key AWS services used:** Lambda, API Gateway, CloudWatch Logs & Alarms, GuardDuty, IAM, Step Functions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
