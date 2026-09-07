---
qid: ing_bb3f0e7fa9__faang__local
question: 'Explain: Why we do not use a single composite quality score'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 623
total_tokens: 857
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:58:16-05:00'
sources: []
---

**Clarify**  
We’re asked *why* most AI systems avoid collapsing all performance metrics into one “quality” number (e.g., a single benchmark score). I’ll assume we’re talking about model evaluation (accuracy, latency, fairness, robustness, etc.) and that the audience cares about both technical rigor and practical deployment.

---

**Approach**  
1. List the diverse dimensions of AI quality.  
2. Explain how each dimension can conflict or trade‑off with others.  
3. Show why a weighted sum or single score hides those conflicts.  
4. Conclude with best practices (multi‑metric reporting, Pareto fronts).

---

**Depth**

| Dimension | Typical Metric(s) | Why it matters |
|-----------|-------------------|----------------|
| Accuracy / Precision | Top‑k accuracy, F1 | User satisfaction |
| Latency / Throughput | ms per inference | Real‑time constraints |
| Fairness / Bias | Demographic parity | Ethical/legal compliance |
| Robustness / Adversarial | Success rate under perturbations | Security & safety |
| Explainability | Human interpretability score | Trust, regulatory audit |
| Resource Footprint | FLOPs, memory | Deployment cost |

These axes often conflict: a model with higher accuracy may need more parameters → longer latency and higher energy use. A robust model may be conservative, hurting precision. If we aggregate into one composite score (e.g., weighted sum), the choice of weights becomes subjective, opaque, and can mislead stakeholders.

**Complexity & Trade‑offs**  
- **Interpretability:** Composite scores collapse context; stakeholders cannot see if a high score is due to accuracy or low latency.  
- **Optimization Landscape:** Multi‑objective optimization (Pareto) gives a set of trade‑off solutions rather than a single optimum.  
- **Regulatory compliance:** Some dimensions (fairness, explainability) are legally required; a composite score could mask violations.

---

**Edge Cases**

| Edge | What breaks |
|------|-------------|
| Highly imbalanced data | Accuracy skews → composite hides poor minority performance |
| Deployment on edge devices | Latency dominates but composite may still favor accuracy |
| Regulatory audit | Composite score can’t prove fairness compliance |

Testing: run ablation studies, generate Pareto fronts, and provide dimension‑specific dashboards.

---

**Optimize & Communicate**

1. **Publish a multi‑metric report** (accuracy, latency, fairness, etc.) in the same table.  
2. Use **Pareto front visualizations** to show trade‑offs; let stakeholders pick their operating point.  
3. If a single score is required (e.g., for internal ranking), make the weight vector transparent and justify it with stakeholder input.  

By keeping dimensions explicit, we preserve decision‑making power, satisfy auditability, and avoid the “one‑size‑fits‑all” trap that a composite quality score would create.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
