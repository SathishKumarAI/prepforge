---
qid: ing_d71e3a3415__eli5__local
question: 'What is Active-Active Geo Distribution? — Data replication explained: types,
  examples & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 226
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:15:27-05:00'
sources: []
---

**Active‑Active Geo Distribution**

Imagine a bakery that opens two identical shops on opposite coasts. Every time someone buys bread at either shop, the other shop’s inventory is instantly updated so both always show the same stock level. In tech this is called **active‑active geo distribution**: two or more data centers (the “shops”) are *always* live and can process requests. Whenever one center changes data, the change is replicated to all others right away.

Key terms:
- **Data center** – a facility with servers that store and serve data.
- **Replication** – copying data from one place to another so they stay synchronized.

Use cases:  
• Online shopping sites need customers worldwide to see real‑time inventory.  
• Banking apps must keep account balances consistent no matter where the user logs in.  

Because every location is active, the system stays available even if one center goes offline—customers just use the nearest shop without interruption.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
