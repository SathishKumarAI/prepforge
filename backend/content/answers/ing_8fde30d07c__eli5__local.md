---
qid: ing_8fde30d07c__eli5__local
question: 'Explain: A customer reports that another tenant''s data appeared in their
  agent''s response. Walk me through the next 72 hours.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 283
total_tokens: 456
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:24:57-05:00'
sources: []
---

Imagine your AI is a library robot that fetches books (answers) from shelves (data). One day, it handed you a book that belongs to another patron—someone else’s private text slipped into your reply.

**Day 1 – Stop the leak and investigate**  
First, pause the robot so no more wrong books are served. Log every request that went out in the last 24 h, then trace where the mis‑matched data came from (which database table, which tenant ID). Check audit logs to confirm the mix‑up.

**Day 2 – Fix and test**  
Patch the code that incorrectly joins tenant tables—add a guard that ensures only the current tenant’s rows are read. Run automated tests with sample tenants to verify the bug is gone, then do a manual review of the same scenario you saw.

**Day 3 – Communicate and monitor**  
Notify the affected customer, explaining what happened, how it was fixed, and what you’re doing to prevent recurrence. Deploy the fix to production, enable strict logging for the next 48 h, and set up alerts if any tenant data crosses boundaries again. After that, schedule a post‑mortem review so the team learns and improves the process.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
