---
qid: ing_815f3be74d__eli5__local
question: 'Explain: What CAP Really Means — CAP Theorem | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 270
total_tokens: 431
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:01:48-05:00'
sources: []
---

Think of a team of three friends running a small café that serves coffee, pastries, and Wi‑Fi to customers.

* **Consistency** – every customer must see the same menu at the same time. If one friend updates the menu (adds a new pastry), all friends update instantly so no one sees old information.  
* **Availability** – the café should always be open; if a customer walks in, they can place an order even if something is wrong somewhere else.  
* **Partition tolerance** – imagine the city’s power goes out in one street (a network split). The café still wants to keep serving customers on both sides of the street.

The CAP theorem says that when a computer system faces a “partition” (like the power outage), it can only choose two of the three properties.  
*If you insist on **Consistency** and **Partition tolerance**, the café may close its doors during outages—no availability.  
*If you want **Availability** and **Partition tolerance**, you might let some customers see slightly out‑of‑date menus—consistency is sacrificed.*

So CAP tells designers: pick which two qualities matter most for your service; the third will have to give way when things go wrong.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
