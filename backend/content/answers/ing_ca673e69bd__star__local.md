---
qid: ing_ca673e69bd__star__local
question: 'Explain: Now a road, even though it looks — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 331
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:14:02-05:00'
sources: []
---

**Situation**  
At my last role I was part of the team that built the “Smart Routing” feature for a ride‑hailing app. The product had a metric: *time‑to‑route* had to stay under 2 seconds, but our initial model took 3–4 seconds because it tried to evaluate every possible road segment in real time.

**Task**  
I needed to redesign the route planner so that it could still respect traffic and ETA constraints while cutting latency by at least 50 %.

**Action**  
First I profiled the pipeline and identified the graph traversal as the bottleneck. I replaced Dijkstra’s algorithm with a pre‑computed *k‑shortest paths* cache for each node pair, storing them in a Redis cluster keyed by (origin, destination). Then I introduced a lightweight ML model—an XGBoost regressor—that predicts travel time per segment using live traffic features and the road type. During routing, we only evaluate the top 3 candidate paths from the cache, scoring them with the model and selecting the best. We also added an incremental update system that refreshes cached paths every 15 minutes based on new traffic data.

**Result**  
The average route computation dropped to 1.2 seconds—achieving a 60 % latency reduction—and the ETA accuracy improved by 3 %. I learned how to blend classical graph algorithms with ML inference and cache design to meet strict real‑time requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
