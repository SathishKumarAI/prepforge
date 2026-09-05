---
qid: ing_da252f3fdf__eli5__local
question: 'Explain: Availability in Series vs Parallel — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 204
total_tokens: 363
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:19:56-05:00'
sources: []
---

Imagine you’re planning a road trip and you need to keep moving from point A to point B.  

**Series (one after another)** – Think of each mile marker as a toll booth that must be paid for before the next leg starts. If one booth refuses payment (fails), the whole journey stops; the trip’s availability is the product of all booths’ chances of working.  
**Parallel (several routes side by side)** – Picture two highways leading to the same destination. Even if one highway closes, you can still drive on the other. The trip’s availability is higher because it only fails when *both* routes are blocked.

So, series systems need every component alive; parallel systems survive as long as at least one component works. That’s why adding redundant paths (parallel) makes a system more reliable than lining up single points in a chain (series).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
