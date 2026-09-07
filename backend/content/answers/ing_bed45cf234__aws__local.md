---
qid: ing_bed45cf234__aws__local
question: Your assistant reads untrusted content (web pages, customer documents, email)
  and can call tools. How do you defend against prompt injection?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 447
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:34:39-05:00'
sources: []
---

**Situation / Task** – I was leading a project to build an AI assistant that ingests untrusted web pages, customer docs, and emails, then calls external tools (e.g., API gateways) on behalf of the user. The team had to guarantee that malicious prompt‑injection payloads would never escape into our tool‑execution layer.

**Action** –  
1. **Ownership & Customer Obsession**: I scoped a multi‑layer defense.  
   * **Input Sanitization** – We built a regex+token filter in Python (AWS Lambda) that strips control characters, limits length to 8 kB, and validates against a whitelist of safe tokens.  
   * **Prompt Guard Service** – A dedicated microservice (Amazon ECS Fargate + App Mesh) receives the sanitized prompt, runs it through an open‑source LLM fine‑tuned on “prompt‑injection” detection, and outputs a *safe* instruction set.  
   * **Tool‑Execution Sandbox** – Each tool call is wrapped in AWS IAM policies that allow only the minimal required permissions; we use Amazon API Gateway with request validation and rate limiting (10 req/s per user).  
2. **Dive Deep & Bias for Action**: We instrumented CloudWatch metrics (`prompt_injection_attempts`, `safe_prompt_ratio`) and set alerts when the ratio drops below 99.5%.  

**Result** – After deployment, our system logged < 0.1% injection attempts over a six‑month period, while maintaining an average latency of 120 ms per user request (≤ 30 % lower than the legacy monolith). The cost impact was only +$200/month due to Lambda invocations and ECS usage.

**Bar‑raiser takeaway** – Demonstrated ownership by designing a defense that scales with traffic, deep technical dive into sanitization and policy isolation, quantified success via metrics, and learned from a failed prototype that omitted rate limiting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
