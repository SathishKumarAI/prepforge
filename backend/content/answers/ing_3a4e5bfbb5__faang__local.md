---
qid: ing_3a4e5bfbb5__faang__local
question: 'Explain: Inventory — E-commerce Workflow'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 482
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:59:56-05:00'
sources: []
---

**Clarify**  
You’re asking how an e‑commerce platform handles inventory within its ML pipeline—i.e., what data flows, which models influence replenishment or pricing, and how the system reacts to real‑time changes. I’ll assume we have a central order service, a warehouse management system (WMS), and a recommendation/pricing engine that all feed into an ML layer.

**Approach**  
1. **Data ingestion** – pull transactional logs, WMS stock levels, supplier lead times, and external signals (seasonality, promos).  
2. **Feature engineering** – build time‑series features per SKU: moving averages, volatility, lagged demand, contextual tags.  
3. **Modeling** –  
   * Demand forecasting (ARIMA/Prophet or LSTM) → next‑period sales.  
   * Stock‑level optimization (reinforcement learning or linear programming) → reorder points.  
   * Dynamic pricing (bandit algorithms or gradient boosting) → price elasticity.  
4. **Inference & deployment** – push predictions to a real‑time service that updates WMS dashboards and triggers purchase orders.  
5. **Feedback loop** – continuously retrain with new sales/WMS data.

**Depth**  
- Forecasts feed into an RL agent that maximizes profit while keeping stock‑out risk below 2 %.  
- Complexity: O(n log n) for sorting SKUs, O(k T) for time‑series models where k=features, T=time steps.  
- Trade‑off: Simpler linear models are faster but miss nonlinear seasonality; deep nets capture nuance at the cost of latency.

**Edge Cases**  
- Black‑out events (supplier shutdowns): fallback to conservative safety stock.  
- Sudden demand spikes: trigger anomaly detector and manual override.  
- New SKUs: use transfer learning from similar items.

**Optimize & Communicate**  
Explain that we’ll start with a baseline Prophet model, evaluate MAPE, then iterate with LSTM if improvement >5 %. Highlight the end‑to‑end latency (≤100 ms) to satisfy real‑time reorder triggers. Conclude by stressing continuous monitoring and A/B testing of pricing policies to validate business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
