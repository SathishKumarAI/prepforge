---
qid: ing_2723f5e334__eli5__local
question: What should you log for every LLM call in production, and what are the pitfalls?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 277
total_tokens: 442
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:37:45-05:00'
sources: []
---

Think of an LLM call like sending a letter through a courier service.  
For every “letter” you should log:  

1. **Message sent** – the prompt (redacted if it contains secrets).  
2. **Courier details** – which model, version, and any special settings (temperature, max tokens).  
3. **Response received** – the output text, again redacted if needed.  
4. **Timing** – when you sent it, when you got a reply, and how long it took.  
5. **Cost/usage** – number of tokens used and estimated cost.

Why? These logs let you trace why an answer was wrong, spot delays, or detect billing surprises.

Pitfalls to avoid:  

- **Privacy slips** – never log raw personal data; mask it before storing.  
- **Over‑logging** – saving every full prompt/response can bloat storage and slow your system.  
- **Missing context** – if you forget the model version, a later update may make past logs meaningless.

In short: keep the essential details, protect sensitive text, and be mindful of storage. That’s the safest way to monitor LLM calls in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
