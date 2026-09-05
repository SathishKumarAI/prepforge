---
qid: ing_c7fa473646__eli5__local
question: 'Explain: The fundamental purpose of GSLB — Why DNS Based Global Server
  Load Balancing (GSLB) Doesn\u2019t Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 220
total_tokens: 397
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:52:32-05:00'
sources: []
---

Imagine you’re at a busy pizza place that has several kitchens around town. The owner uses a phone book (DNS) to tell customers which kitchen is “closest” based on their address. Once the customer calls, the phone book’s answer is frozen for 30 minutes. If traffic suddenly spikes or a kitchen closes, all new callers still get the old address until the next update—so some orders pile up at one place while another sits empty.

That’s what DNS‑based Global Server Load Balancing (GSLB) does: it uses DNS to point users to a server and then caches that answer for hours. Because DNS answers are sticky, GSLB can’t react quickly to real‑time load changes, outages, or network delays. The “phone book” analogy shows why relying only on DNS makes global traffic management slow and often ineffective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
