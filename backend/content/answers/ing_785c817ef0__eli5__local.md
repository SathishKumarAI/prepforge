---
qid: ing_785c817ef0__eli5__local
question: 'Explain: Prefer Names for Service Contracts — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 207
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:47:28-05:00'
sources: []
---

Think of your network like a big town where every computer is a house.  
If you write an instruction that says “call the house at 192.168.1.42,” it works now, but when the owner moves or rewires the street, that number changes and the instruction breaks.  

Instead, give each house a **name**—like “mail‑server” or “auth‑service.” The name stays with the house even if its address (IP) shifts. In software terms, a *service contract* is like an agreement to talk to another program. By using a **service name** (often resolved through DNS or a service registry), your code remains stable while the underlying IP can change without you touching it.  

So prefer names: they’re human‑friendly, resilient to infrastructure changes, and keep your contracts alive even when servers move.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
