---
qid: ing_ed5da0126c__eli5__local
question: 'Explain: Timeouts — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 214
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:51:10-05:00'
sources: []
---

Imagine you’re at a café ordering coffee (your app requests data). The barista (the server) has a busy schedule, so the kitchen can’t keep your order waiting forever. In web terms, that “waiting limit” is called a **timeout**.

* **Connection timeout** – How long your client will try to reach the kitchen before giving up (e.g., if the internet line drops).  
* **Read timeout** – Once the barista takes your order, how long the customer waits for the coffee before deciding it’s gone stale and leaving.  

If you set these too short, a slow‑but‑working kitchen will appear broken; too long, and customers (users) get frustrated or their devices may crash. In system design, we pick reasonable defaults, expose them to developers, and log when timeouts happen so we can tune the coffee‑making process without losing orders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
