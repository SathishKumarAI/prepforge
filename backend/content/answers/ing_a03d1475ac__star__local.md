---
qid: ing_a03d1475ac__star__local
question: 'Explain: Requirements and Goals of the System — Driverallocationubergojek'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 361
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:52:54-05:00'
sources: []
---

**Situation**  
When I joined the product team at a mid‑size ride‑hailing startup, our surge pricing model was causing drivers to cluster in high‑demand zones and leave low‑fare areas under‑served. The company’s quarterly KPI was to reduce average passenger wait time by 20% while keeping driver earnings stable.

**Task**  
I was tasked with building an ML‑driven driver allocation system that predicted real‑time demand hotspots, balanced supply across the city, and maximized driver utilization without hurting revenue.

**Action**  
I first gathered historical trip data (≈ 5 M trips/month) and built a spatio‑temporal graph in Spark. Using a LightGBM model I trained on features like time of day, weather, event schedules, and local traffic. The output was a demand heatmap at 5‑minute granularity. I then integrated this with our dispatch engine via an API that nudged idle drivers toward predicted hotspots using a cost‑based routing algorithm. We ran A/B tests over two weeks, comparing the new allocation to the legacy rule‑based system.

**Result**  
The pilot cut average passenger wait time from 6.4 min to 4.1 min—a 36% improvement—and increased driver earnings by 12% due to higher trip density. The model also reduced idle time by 18%. From this, I learned the importance of continuous feature monitoring and how small algorithmic shifts can yield outsized operational gains in a dynamic marketplace.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
