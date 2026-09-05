---
qid: ing_24f7cdd590__star__local
question: 'Explain: Location-based Service — Proximity Service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 305
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:42:49-05:00'
sources: []
---

**Situation:**  
At my previous startup, we launched a food‑delivery app that struggled with late orders because couriers often missed the optimal pickup routes. Our analytics showed a 22% increase in delivery times during peak hours.

**Task:**  
I was tasked to design and implement a proximity service that would automatically notify couriers of nearby restaurant hotspots and suggest the fastest pickups, aiming to cut average delivery time by at least 15%.

**Action:**  
I built an on‑device geofencing layer using Google’s Fused Location Provider combined with a lightweight graph‑based shortest‑path algorithm. The app continuously updated each courier’s location every 5 seconds, then queried our backend for restaurants within a 2‑km radius. We used a weighted cost function (distance × average wait time) to rank pickup candidates and pushed real‑time push notifications via Firebase Cloud Messaging. To keep battery usage low, we implemented adaptive polling: during high traffic, frequency increased; otherwise it throttled.

**Result:**  
Within three weeks of rollout, average delivery time dropped from 38 minutes to 32 minutes—a 16% reduction—while customer satisfaction scores rose by 12 points on the NPS scale. I learned how to balance real‑time proximity calculations with mobile resource constraints and the importance of a clear metric to validate an ML‑driven service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
