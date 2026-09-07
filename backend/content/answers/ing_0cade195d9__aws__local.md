---
qid: ing_0cade195d9__aws__local
question: 'Q79: How do you approach prompt injection defense in a multi-tenant agentic
  system where the agent reads external web pages or documents?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 396
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:54:20-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a multi‑tenant SaaS that let each customer run an autonomous “agent” which fetched public web pages, parsed PDFs, and generated responses. A recent audit revealed prompt‑injection attacks where malicious URLs caused agents to produce disallowed content.

**Action (Design)**  
1. **Isolation & Tokenization** – Each tenant’s agent runs in a separate ECS Fargate task with an IAM role scoped only to its own S3 bucket of safe documents.  
2. **Input Sanitizer Service** – A Lambda layer intercepts every outbound request, strips or encodes user‑supplied text before it reaches the LLM via Bedrock.  
3. **Prompt‑Guard API** – We wrapped the Bedrock endpoint with a custom API Gateway that checks for disallowed patterns (e.g., `{{inject}}`, shellcode) and applies a context‑aware prompt template (prompt injection “sandwich”).  
4. **Audit & Alerting** – CloudWatch logs every sanitized request; alerts trigger if 5+ failed sanitizations in 10 min.

**Result**  
- **Zero** post‑deployment injection incidents over 12 months.  
- Latency increased by only **3 ms per call** (≤0.1% of total response time).  
- Cost impact < $50/month due to minimal Lambda invocations and no extra compute.

**Reflection (Bar‑raiser)**  
I took full ownership, dove deep into the LLM’s prompt mechanics, quantified the risk reduction, and learned that even a lightweight sanitizer layer can be cost‑effective when paired with proper isolation. This approach aligns with *Customer Obsession* (protecting tenants) and *Ownership* (end‑to‑end defense).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
