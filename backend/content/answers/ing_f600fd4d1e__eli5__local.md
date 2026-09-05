---
qid: ing_f600fd4d1e__eli5__local
question: A stakeholder wants to send sensitive customer data (PII) to a third-party
  model API. They say the business need justifies it. What do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 232
total_tokens: 412
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:04:18-05:00'
sources: []
---

Imagine your company is like a bank that keeps customers’ private diaries (PII). A third‑party model API is a friend who can help organize the diary entries but lives in another city. Before handing over the diary, you must ask: **Can I trust this friend?**  
1. **Check the contract:** Make sure the friend signs a strict privacy agreement that says they won’t read, copy, or sell the diary.  
2. **Use a lockbox (encryption):** Send only the parts of the diary needed for the task, and keep everything else locked.  
3. **Audit trail:** Keep a log of who opened the diary and when, so you can prove it was handled properly.  
4. **Legal check:** Verify that the transfer complies with data‑protection laws (e.g., GDPR, CCPA).  

If any of these safeguards fail, refuse or delay the request until they’re in place. This protects customers’ privacy while still enabling useful AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
