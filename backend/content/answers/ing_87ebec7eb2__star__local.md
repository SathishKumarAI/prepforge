---
qid: ing_87ebec7eb2__star__local
question: 'Explain: Multi-sided Marketplace — Uber Engineering \u2014 Where the Digital
  World Meets the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 352
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:04:30-05:00'
sources: []
---

**Situation**  
When I joined Uber’s product engineering team in 2018, the surge in city‑wide demand had exposed a gap: our driver‑matching algorithm was treating riders and drivers as two separate silos, which caused long wait times during peak hours—our average pickup time was 7.2 minutes, well above the target of 5 minutes.

**Task**  
I was tasked with redesigning the marketplace layer so that rider requests and driver supply were treated as a single dynamic market, improving latency while keeping revenue per ride stable.

**Action**  
I led a cross‑functional squad that built an event‑driven microservice in Go, backed by Redis streams for real‑time queueing. We introduced a “market depth” metric: the ratio of active driver slots to open rider requests per 5‑minute window. Using this, we implemented adaptive surge pricing and priority routing, feeding back into the scheduler via a lightweight REST API. We ran A/B tests on 20 % of traffic, monitoring latency, fill rate, and revenue impact with Grafana dashboards.

**Result**  
The new marketplace reduced average pickup time from 7.2 to 4.6 minutes (a 36 % improvement) while maintaining a 1.8 % lift in gross booking value. I learned that treating a multi‑sided platform as a unified market, coupled with real‑time analytics and controlled experimentation, can break throughput bottlenecks without sacrificing profitability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
