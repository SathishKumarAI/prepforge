---
qid: ing_4909b48bea__eli5__local
question: 'Explain: Service discovery — A pattern language for microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 239
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:32:58-05:00'
sources: []
---

**Service Discovery – the “Where’s My Friend?” map of micro‑services**

Imagine you’re at a big party where every guest (a micro‑service) is wearing a name tag that tells their favorite drink but not their exact seat. When your friend needs a glass of water, they can’t just ask everyone; instead, they look up the “drink list” in the host’s notebook. That notebook is *service discovery*.  

*Service discovery* is a pattern that lets each micro‑service find where another one lives without hard‑coding addresses. A central registry (the notebook) keeps a live list of services and their current network locations. When a service starts, it writes its “name” and address to the registry; when it stops, it removes itself. Other services query the registry whenever they need to talk.  

Thus, like a party host who knows everyone’s seat, micro‑services can find each other dynamically, keeping the system flexible even as components move or scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
