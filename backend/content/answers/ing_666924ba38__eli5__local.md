---
qid: ing_666924ba38__eli5__local
question: 'Explain: Partition Tolerance — The CAP Theorem in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 221
total_tokens: 388
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:18:29-05:00'
sources: []
---

Imagine you’re planning a picnic for a big family spread across three villages (the “nodes”). A *partition* is like a sudden roadblock that stops people from one village talking to the others. The CAP theorem says a database can only give you two of these guarantees at once:

- **Consistency** – everyone sees exactly the same menu order at the same time.  
- **Availability** – each village can still get an answer (the menu) even if they can’t talk to the others.  
- **Partition tolerance** – the system keeps working no matter how many roadblocks appear.

In practice, when a partition happens you must choose: keep everyone’s view identical (but some villages might have to wait for the road to clear), or let every village answer right away (but their answers may differ until the road is fixed). You can’t do all three simultaneously. The “partition tolerance” part is simply the ability of the system to survive those blocked connections without crashing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
