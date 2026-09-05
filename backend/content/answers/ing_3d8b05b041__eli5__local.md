---
qid: ing_3d8b05b041__eli5__local
question: 'Explain: Abstract — Why DNS Based Global Server Load Balancing (GSLB) Doesn\u2019t
  Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 207
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:13:22-05:00'
sources: []
---

Think of a busy pizza shop that sends orders to the nearest kitchen. The shop uses a phone system (DNS) that tells customers which kitchen to call based on where they are. But the phone lines stay open for a long time (cache), and sometimes the nearest kitchen is closed or overloaded, yet customers still get the old “nearest” number.  

In DNS‑based GSLB, the “phone system” is your DNS server. It tells clients which IP address to use, but that answer stays cached in their phones (browsers, routers) for minutes or hours. If a server goes down, traffic keeps going there until the cache expires—so load balancing fails. Also, the phone line can’t see real‑time traffic; it only knows static distance. Thus DNS alone can’t react quickly to changing loads or failures, making GSLB unreliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
