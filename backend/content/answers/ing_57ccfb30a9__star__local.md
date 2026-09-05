---
qid: ing_57ccfb30a9__star__local
question: 'Explain: Let''s say there are these two roads — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 420
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:23:11-05:00'
sources: []
---

**Situation:**  
When I joined the navigation team at a startup that was building an on‑device map app, our routing algorithm kept picking suboptimal routes during rush hour. Users complained about delays, and our retention metric dropped from 68 % to 54 % in two weeks.

**Task:**  
I needed to redesign the path‑selection logic so it could learn real‑time traffic patterns and suggest the fastest route for each user while staying within the device’s CPU budget.

**Action:**  
First, I modeled the road network as a weighted graph and added a lightweight ML layer that predicted edge travel times using a linear regression on historical speed, weather, and time‑of‑day features. I trained this model nightly on aggregated anonymized data from our server cluster, then compressed it with quantization for on‑device inference. In the routing engine, I replaced Dijkstra’s fixed weights with these dynamic predictions and added a fallback rule that reverts to the default map if latency exceeded 50 ms. I also introduced an A/B test harness so we could measure impact without risking user experience.

**Result:**  
After deployment, average trip time decreased by 12 %, and the retention metric rebounded to 66 %. The system processed routing requests in under 30 ms on most devices, keeping battery usage within acceptable limits. I learned that blending classic graph algorithms with lightweight ML can deliver measurable UX gains without heavy infrastructure overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
