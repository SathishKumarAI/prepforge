---
qid: ing_c348e24f90__faang__local
question: 'Explain: Procurement — E-commerce Workflow'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 473
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:14:58-05:00'
sources: []
---

**Clarify**  
The interview asks for a machine‑learning–enabled *procurement e‑commerce workflow*. I’ll assume we’re designing an end‑to‑end system that lets buyers place orders, vendors fulfill them, and the platform optimizes inventory, pricing, and routing. Key assumptions: 1) Multi‑tenant B2B marketplace; 2) Real‑time demand signals; 3) Data available from past transactions, supplier catalogs, logistics logs.

**Approach**  
1. **Data ingestion & feature engineering** – stream order, catalog, and shipment data into a lake.  
2. **Demand forecasting** – use sequence models (Prophet or Transformer‑based LSTM) to predict SKU demand per region.  
3. **Dynamic pricing** – multi‑armed bandit or contextual bandits that balance margin vs volume.  
4. **Inventory optimization** – integer programming with stochastic demand; solve via Gurobi, updated nightly.  
5. **Routing & fulfillment** – graph neural networks to learn optimal warehouse assignment and carrier selection.  
6. **Feedback loop** – A/B test models, log outcomes, retrain weekly.

**Depth**  
- Forecast horizon: 4–8 weeks; error metric MAE ≤ 10%.  
- Bandit policy uses Thompson sampling with prior from historical price elasticity.  
- Inventory model runs on a distributed Spark cluster; solve within 30 s per region.  
- Routing GNN predicts travel time & cost, feeding into a weighted bipartite matching algorithm.

**Edge Cases**  
- SKU discontinuation → fall back to nearest substitute via similarity embeddings.  
- Sudden supply shock → trigger safety‑stock multiplier (α=1.5).  
- Outlier orders → flagged for manual review; retrain models on cleaned data.

**Optimize & Communicate**  
Start with a lightweight linear regression baseline, iterate to deep learning only where it yields > 5% lift in order fulfillment rate. Explain trade‑offs: latency vs accuracy, interpretability of bandit policies, and cost of compute versus business impact. This structured narrative demonstrates problem framing, technical depth, and clear communication—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
