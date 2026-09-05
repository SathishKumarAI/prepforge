---
qid: ing_d3c8b85680__star__local
question: 'Explain: Tool design & the policy engine — Customer Support Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 358
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:33:11-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup, our live‑chat support team was handling over 4,000 tickets per day, yet 35 % of requests were routed to human agents because the automated bot couldn’t understand nuanced policy questions about account freezes and regulatory limits.

**Task**  
I needed to build an AI‑powered tool that could interpret policy language in real time, classify user intent, and either answer directly or flag tickets for escalation—all while staying compliant with our internal compliance rules and GDPR.

**Action**  
I started by scraping the company’s policy documents (≈120 GB) and used spaCy to create a custom Named‑Entity Recognition model that extracted key terms (“KYC”, “AML”, “freeze period”). Then I built a lightweight inference engine in Python, wrapped it with FastAPI for low latency (<200 ms). For the policy engine, I encoded compliance rules as Prolog clauses and exposed them via a REST endpoint; the bot would query this engine to validate suggested responses. To keep the system safe, I added a monitoring dashboard that logged every decision and triggered alerts if any rule was violated. Finally, I ran A/B tests against the legacy bot.

**Result**  
The new tool reduced human hand‑offs by 28 % (from 35 % to 25 %), cutting average ticket resolution time from 8 min to 5 min. We also achieved a compliance pass rate of 99.9 %. I learned how to blend NLP with declarative rule systems for robust, auditable AI in customer support.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
