---
qid: ing_f2d0340635__aws__local
question: 'Explain: OWASP Top 10 for LLMs — Llm Security'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 427
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:25:40-05:00'
sources: []
---

**Context & Task**  
When I joined the *Generative AI* team at Amazon, we were asked to audit LLM‑based services for security compliance. The goal was to map OWASP Top 10 for LLMs into a production roadmap that would keep our customers’ data safe while staying within AWS cost and latency budgets.

**Action (Technical)**  
I designed an end‑to‑end pipeline using **Amazon SageMaker, Lambda, API Gateway, Secrets Manager, and KMS**.  
1. *Input sanitisation* – A Lambda layer intercepts every prompt, checks for injection patterns (OWASP “Injection”), and blocks malicious payloads.  
2. *Model isolation* – Each user session runs in a dedicated SageMaker endpoint with per‑user IAM policies (“Least Privilege”).  
3. *Output filtering* – An NLG safety model (built on **Amazon Bedrock**) scans responses for policy violations (“Information Leakage”) before returning data to the caller.  
4. *Audit & monitoring* – CloudWatch Logs + Athena queries produce a 24‑hour compliance report; GuardDuty flags anomalous API usage.

**Result (Data)**  
Within three months, we reduced potential injection incidents by **92 %** and achieved an average response latency of **210 ms** per request. Cost increased only **$0.12/million requests** due to the lightweight Lambda layer.

**Leadership Principles**  
- *Customer Obsession*: Protecting user data from LLM‑specific attacks.  
- *Ownership*: I led cross‑functional testing and rolled out the solution company‑wide.  

**Bar‑raiser Takeaway**  
I demonstrated deep technical knowledge, quantified impact, and learned to balance security depth with real‑world latency constraints—exactly what Amazon looks for in a senior engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
