---
qid: ing_25038527f5__aws__local
question: 'Q47: How do you defend against prompt injection attacks?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 360
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:50:06-05:00'
sources: []
---

**Leadership Principles:** *Ownership* + *Dive Deep*

**Situation & Task (S)**  
At my last role I led a server‑less chatbot for a fintech client that handled $200 M/year in user transactions. The product faced repeated prompt‑injection attacks that could expose sensitive data.

**Action (A)**  
I treated the issue as a *security ownership* problem:  

1. **Input sanitization layer** – built a custom Lambda@Edge function to strip disallowed tokens before forwarding to OpenAI’s API.  
2. **Prompt templating engine** – used AWS Step Functions to enforce strict prompt schemas; any deviation triggers a rollback.  
3. **Runtime guardrails** – deployed Amazon GuardDuty + CloudWatch Logs Insights to flag anomalous request patterns (e.g., >50 consecutive “stop” commands).  

I also introduced **continuous testing** with OWASP ZAP and automated unit tests in the CI pipeline, achieving 95 % coverage of injection vectors.

**Result (R)**  
Within three months we saw a **99.9 % reduction in successful prompt‑injection incidents**, saving an estimated $1.2 M in potential breach costs. The system maintained <30 ms latency for end users and cost‑effectively used Lambda’s pay‑per‑execution model (<$0.05 per 1,000 invocations).  

**Learnings**  
The key was owning the entire flow—sanitization → templating → monitoring—and diving deep into the attack surface to pre‑empt new vectors.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
