---
qid: ing_b4245986b0__star__local
question: 'Explain: Step 5: Extract the Optimal Path after Training'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 321
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:32:07-05:00'
sources: []
---

**Situation:**  
In a logistics startup, we built a reinforcement‑learning model to find the cheapest delivery routes for our fleet of electric vans across a city grid. After training the policy network on simulated traffic data, the agent’s value estimates were accurate, but we still needed to translate them into an actionable route plan.

**Task:**  
My job was to extract the optimal path from the trained policy and integrate it with the real‑time navigation system, ensuring that the chosen route minimized cost while respecting vehicle constraints like battery limits and delivery windows.

**Action:**  
I started by running a forward pass through the policy network for each node in the graph, obtaining action probabilities. Then I applied Dijkstra’s algorithm over the induced directed graph, using the negative log‑probabilities as edge costs to favor high‑probability moves. To keep latency low, I precomputed a lookup table of top‑3 actions per state and pruned edges that exceeded a cost threshold. Finally, I wrapped this in a microservice that returned the route to our fleet manager UI, logging each decision for audit.

**Result:**  
The extracted paths cut average delivery time by 18% and fuel consumption by 12%, translating to $45K savings per month. The team learned that coupling policy outputs with classical shortest‑path algorithms can bridge the gap between learning and deployment in real‑world routing problems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
