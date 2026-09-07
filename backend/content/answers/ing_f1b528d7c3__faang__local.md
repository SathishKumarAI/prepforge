---
qid: ing_f1b528d7c3__faang__local
question: 'Explain: Redistributing capacity globally by shifting demand sources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 415
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:01:38-05:00'
sources: []
---

**Clarify**  
You’re asking how a global system can shift the load of user requests from one data center to another so that no single location is overloaded. I’ll assume we have: * (1) multiple geographically distributed edge or regional clusters, * (2) measurable demand per region, and * (3) capacity limits on each cluster.

**Approach**  
1. **Measure & forecast** load at each node.  
2. **Define a cost model** that captures latency, bandwidth, and operational expense.  
3. **Formulate an optimization problem**: minimize total cost while respecting capacity constraints.  
4. **Solve** with a lightweight algorithm (e.g., greedy or linear programming) and update routing tables in real time.

**Depth**  
- Use *predictive ML* (ARIMA, LSTM) to forecast hourly demand per region.  
- Construct a graph where nodes are clusters; edge weights = estimated transfer cost + latency penalty.  
- Apply a **min‑cost flow** or **network simplex** algorithm: source supplies = predicted load, sinks = capacity deficits. Complexity is \(O(V^3)\) for simplex but practical with <100 regions.  
- Update decisions every 5–10 minutes; cache routing to avoid churn.

**Edge Cases**  
- Sudden spikes (flash crowds): fall back to a conservative “safe” baseline until the model converges.  
- Network partitions: isolate affected nodes and redistribute locally.  
- Privacy constraints: ensure data stays within legal boundaries by hard‑coding region restrictions.

**Optimize & Communicate**  
- Profile latency impact; if routing churn is high, introduce hysteresis or smoothing.  
- Communicate the trade‑off: lower latency vs higher bandwidth cost.  
- Present results in a dashboard (load heatmap + cost savings) so stakeholders see tangible benefits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
