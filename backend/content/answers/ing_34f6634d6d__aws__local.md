---
qid: ing_34f6634d6d__aws__local
question: 'Explain: Prompt Engineering & Context Engineering - Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 406
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:24:27-05:00'
sources: []
---

**Prompt & Context Engineering – Interview Answer**

> **Leadership Principles:** *Customer Obsession*, *Dive Deep*  

**S**ituation: At my previous role we built a conversational agent for a fintech client that required 95 % accurate intent recognition across 12 languages.  
**T**ask: I led the design of prompt and context pipelines to improve model performance while keeping latency under 300 ms.  
**A**ction:  
1. **Prompt Engineering:** Built a modular prompt template engine in Python, using Jinja2 to inject dynamic user data (e.g., account balance, recent transactions). We ran A/B tests with 4 prompt variants, measuring intent F‑score. The winning design lifted accuracy from 86 % to 94 %.  
2. **Context Engineering:** Stored session history in a DynamoDB table keyed by `session_id`. Using Lambda’s *context* object we fetched the last 5 turns and concatenated them into a single prompt, ensuring the LLM had relevant context without exceeding token limits. This reduced hallucinations by 30 %.  
3. Deployed via **Amazon Bedrock** (Claude) behind an API Gateway + Lambda authorizer for secure, scalable access.  

**R**esult: End‑to‑end inference cost dropped 18 % and response latency stayed <250 ms at peak load (10k RPS). The solution also enabled a live dashboard that tracked intent accuracy in real time, giving product owners instant feedback.

> **Bar‑raiser takeaways:** Demonstrated ownership of the entire prompt lifecycle, deep dive into token budgets & latency trade‑offs, quantified impact on business KPIs, and iteratively learned from A/B failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
