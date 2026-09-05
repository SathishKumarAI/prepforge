---
qid: ing_2ef94292bd__eli5__local
question: 'Explain: Failure modes & mitigations — Text To Sql Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 307
total_tokens: 466
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:50:12-05:00'
sources: []
---

Imagine a helpful robot that turns your spoken questions into grocery‑store orders (the “Text‑to‑SQL Agent”). It’s great, but it can trip over a few common bumps.

**Failure mode #1 – Misreading the question.**  
The robot may think you asked for *“all apples”* when you meant *“apples that are organic.”*  
**Mitigation:** Teach it to ask clarifying follow‑ups (“Do you want only organic apples?”) before finalizing the order.

**Failure mode #2 – Overlooking hidden rules.**  
The store may have a rule that “no more than 5 items per customer.” The robot could ignore this and try to pull 10.  
**Mitigation:** Embed policy checks in its brain so it stops and says, “Sorry, I can’t do that.”

**Failure mode #3 – Ambiguous data.**  
If the database has two tables both called *orders*, the robot might pick the wrong one.  
**Mitigation:** Give it a “table map” that tells which table holds what kind of data, and let it verify before running.

By giving the robot clear follow‑ups, rule‑checks, and a tidy map of the shop’s layout, we keep its answers accurate and safe—just like a careful assistant in a busy kitchen.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
