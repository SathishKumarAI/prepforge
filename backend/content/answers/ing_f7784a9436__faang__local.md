---
qid: ing_f7784a9436__faang__local
question: 'Explain: Interviewer plays a hospital COO: "ER wait times are too long.
  Can AI fix this?" Decompose the problem.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 459
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:15:32-05:00'
sources: []
---

**Clarify**

> “Can AI shorten ER wait times?”  
> *Assumptions to confirm:*  
> • What metrics define “long” (triage, admission, discharge)?  
> • Is the issue patient flow, staffing, or resource allocation?  
> • Do we have real‑time data on arrivals, vitals, bed status, and staff schedules?  
> • Are regulatory constraints (HIPAA, safety) a limiting factor?

**Approach**

1. **Data audit** – catalog existing streams (EHR, nurse call, staffing).  
2. **Identify bottlenecks** – map patient journey; quantify delays at each step.  
3. **Model selection** – choose between rule‑based triage, predictive queuing, or reinforcement learning for staff routing.  
4. **Pilot & iterate** – start with a small cohort (e.g., high‑acuity patients), measure impact, refine.

**Depth**

- *Triage AI*: NLP on patient history + vital sign alerts → priority score; reduces human triage lag (~30 s).  
- *Queue prediction*: Bayesian model forecasts arrival peaks; pre‑emptively schedules staff.  
- *Dynamic routing*: RL agent assigns incoming patients to the least loaded bed/physician while respecting clinical constraints.  
Complexity: O(n log n) for triage scoring, near‑real time inference (~50 ms). Trade‑off between interpretability (rule sets) vs. performance (deep nets).

**Edge Cases**

- Sudden surges (mass casualty): model must fallback to manual protocols.  
- Data gaps: missing vitals → impute or flag for clinician review.  
- Bias in training data leading to inequitable triage.

**Optimize & Communicate**

- Deploy explainable AI dashboards for clinicians, showing confidence and rationale.  
- Continuous learning loop: feed back outcomes to retrain models quarterly.  
- Present ROI: expected 15–20 % reduction in average wait time → improved patient satisfaction and throughput.  

This structured plan demonstrates problem decomposition, technical depth, and a clear path from data to decision‑support.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
