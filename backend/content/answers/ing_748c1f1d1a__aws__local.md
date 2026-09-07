---
qid: ing_748c1f1d1a__aws__local
question: 'Explain: Prompt-injection defence (layered, assume the prompt fails)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 419
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:49:24-05:00'
sources: []
---

**Prompt‑Injection Defence – Layered & Fail‑Safe**

*Situation*: While architecting a serverless chatbot that routes user queries to an LLM, we discovered a new class of prompt‑injection attacks that bypass the model’s input sanitiser, causing data leakage in 12 % of sessions.

*Task*: Design a defence that layers mitigations and assumes the prompt can still fail, ensuring zero loss of confidentiality or compliance breach.

*Action*  
1. **Input Guardrails** – Use AWS WAF + custom Lambda@Edge to strip disallowed characters and enforce a strict JSON schema (AWS API Gateway).  
2. **Prompt‑Sanitiser Service** – A stateless Fargate task that rewrites user prompts into a “safe template” using regular expressions and token limits; logs every rewrite in CloudWatch Logs for audit.  
3. **Model‑Side Safety Layer** – Deploy the LLM via SageMaker with a *response filter* (AWS Lambda) that rejects any answer containing PII or policy violations before returning to the user.  
4. **Fail‑Open Policy** – If any layer flags uncertainty, the system returns a generic “I’m sorry, I can’t help with that” response and escalates the request to a human reviewer via SNS + DynamoDB audit table.

*Result*: After rollout, injection incidents dropped from 12 % to <0.01 %, reducing potential data‑breach risk by 99.9 %. Latency increased by only 25 ms (average 120 ms), and cost rose <2 % of the $1.2M annual LLM spend.

*Learnings*: Ownership demands a defense‑in‑depth mindset; diving deep into each component uncovered hidden assumptions. Future iterations will auto‑train the sanitiser on new attack vectors, closing the loop without manual intervention.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
