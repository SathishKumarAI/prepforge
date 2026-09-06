---
qid: ing_a8069baf8a__fp__local
question: 'Explain: Sources — Waymo'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 401
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:02:54-05:00'
sources: []
---

**Why Waymo needs “sources” and how they arise from first‑principles**

At the core of autonomous driving is a *probabilistic state estimator* that must predict every relevant object’s pose with sub‑meter accuracy over the next few seconds. The only way to construct such an estimator is to fuse observations from multiple, independent modalities—each providing complementary information about the environment.

1. **Cameras** give rich texture and semantic cues (traffic lights, signs).  
2. **LiDAR** supplies dense 3‑D point clouds that are invariant to lighting but sparse in range resolution.  
3. **Radar** offers robust velocity estimates even at long distances or under adverse weather.  
4. **High‑definition maps** encode static geometry (lane widths, curb heights) and prior knowledge of traffic rules.  

These sources are *statistically independent* noise processes; by the Cramér–Rao bound, their joint likelihood yields a lower variance estimate than any single sensor alone. Moreover, each modality operates on different spatial/temporal scales, so that the fusion problem becomes a multi‑resolution Bayesian filtering task.

**Non‑obvious insight:**  
The *map* is not just a static lookup; it acts as a prior distribution over possible scene configurations. In practice, Waymo’s maps are continuously updated by the fleet itself: every vehicle contributes back its observations (e.g., newly detected construction zones), turning the map into a living Bayesian prior that reduces uncertainty for all future vehicles.

In short, the “sources” are engineered to satisfy the statistical requirement of *independent, complementary evidence*, allowing Waymo’s perception pipeline to achieve the low‑variance, high‑confidence state estimates required for safe autonomy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
