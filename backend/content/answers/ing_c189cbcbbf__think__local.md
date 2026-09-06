---
qid: ing_c189cbcbbf__think__local
question: 'Explain: How Uber evaluates AI agents at production scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 550
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:42:27-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *What is an “AI agent” for Uber?* Think of routing, fare‑setting, demand forecasting, or safety‑driven controls.  
- *Production scale* means millions of rides/day, real‑time constraints, and regulatory compliance.  
- Assume Uber has a data pipeline, model registry, A/B testing framework, and monitoring stack already in place.

**2️⃣ Mental model: End‑to‑end ML Ops cycle**  
1. **Data ingestion & feature engineering** → raw telematics + external signals.  
2. **Model training & validation** → offline performance metrics (RMSE, precision@k).  
3. **Online deployment** → containerized inference services behind a load balancer.  
4. **A/B testing / controlled rollout** → traffic split, latency checks.  
5. **Continuous monitoring & drift detection** → KPIs, error budgets, retraining triggers.

**3️⃣ Step‑by‑step reasoning**  
- *Offline evaluation:* Use cross‑validation on historical data; compare against baseline heuristics.  
- *Simulation:* Run the agent in a sandbox that mimics real traffic to catch corner cases (e.g., edge‑case routes).  
- *Online A/B test:* Deploy to a small percentage of users; monitor metrics like average wait time, driver earnings, and safety incidents.  
- *Statistical significance:* Ensure enough samples before scaling up.  
- *Post‑deployment monitoring:* Real‑time dashboards for latency, error rates, and concept drift (feature distribution shifts).  
- *Feedback loop:* If performance degrades or new patterns emerge, trigger retraining or feature updates.

**4️⃣ Common traps to avoid**  
- Relying solely on offline metrics; real‑world traffic can reveal unseen biases.  
- Ignoring latency constraints—an accurate model that takes 200 ms per inference is useless for a live dispatch system.  
- Failing to isolate safety metrics; a small gain in efficiency might increase accident risk.  
- Skipping rollback plans—always keep the last known good version available.

**5️⃣ Sanity‑check & verbalize**  
- Ask: “Does this cover data, training, deployment, testing, monitoring, and rollback?”  
- Run through a quick example (e.g., dynamic pricing) to see if each step applies.  
- Communicate clearly: start with the big picture, then drill into each stage, highlighting key metrics and decision points.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
