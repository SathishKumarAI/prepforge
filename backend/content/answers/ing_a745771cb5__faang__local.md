---
qid: ing_a745771cb5__faang__local
question: 'Explain: Pitfall 2: One-Size-Fits-All Model Selection'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 450
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:13:31-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the pitfall of treating model selection as a “one‑size‑fits‑all” problem in AI projects—i.e., picking a single algorithm or hyperparameter set and applying it everywhere. Key assumptions: multiple datasets, varying feature distributions, differing business objectives, and resource constraints.

**Approach**  
1. Identify the diversity of tasks (classification vs regression, tabular vs image).  
2. List criteria that influence model choice (accuracy, latency, interpretability, data volume).  
3. Show why a single “best” model rarely satisfies all criteria simultaneously.  

**Depth**  
- *Algorithmic mismatch*: A CNN excels on images but fails on structured logs; an XGBoost tree may outperform deep nets when features are engineered and the dataset is small.  
- *Hyper‑parameter brittleness*: Optimal learning rates or depth depend on data scale and noise levels—tuning once can lead to under‑ or over‑fitting elsewhere.  
- *Operational constraints*: A 200 MB model with 10 ms inference may be ideal for mobile, but unacceptable for a cloud batch job that tolerates seconds.  
- *Regulatory & ethical concerns*: Some models (e.g., deep nets) are black boxes; others (linear models) provide transparency required in finance or healthcare.

**Edge Cases**  
- Homogeneous data (single domain) may justify a single model, but even then deployment environments can differ (edge vs server).  
- Rapidly evolving data streams can render a previously optimal model obsolete.  
- Testing: cross‑validation across multiple datasets and monitoring drift over time.

**Optimize & Communicate**  
Recommend building a *model catalog* with metadata (task type, performance metrics, resource profile) and an automated *ModelOps pipeline* that selects the best candidate per deployment context. Explain trade‑offs clearly to stakeholders—accuracy vs latency, cost vs compliance—and iterate based on continuous monitoring. This structured reasoning showcases problem decomposition, technical depth, and practical communication expected in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
