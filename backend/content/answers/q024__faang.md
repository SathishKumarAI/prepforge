---
qid: q024
question: "What are the main sources of bias in AI systems and how can you address them?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll cover bias across the ML lifecycle — data, labeling, modeling, deployment — and pair each source with a mitigation. Confirm we mean fairness/social bias, not statistical estimator bias.

**Approach** — Walk the pipeline stage by stage; for each, name the source then the fix. This shows systematic thinking.

**Depth** — *Data collection*: unrepresentative or historically skewed samples (e.g., under-sampled groups). Fix: stratified sampling, reweighting, targeted data collection. *Labeling*: annotator subjectivity and proxy labels (using arrests as a proxy for crime). Fix: clear guidelines, multiple annotators, audit proxies. *Feature/model*: correlated proxies leak protected attributes; objective optimizes aggregate accuracy over subgroup fairness. Fix: fairness constraints, adversarial debiasing, subgroup metrics. *Evaluation*: aggregate metrics hide subgroup failures. Fix: disaggregated evaluation, slice-based testing. *Deployment/feedback loops*: predictions shape future data (predictive policing). Fix: monitoring, human oversight, drift detection.

**Edge cases** — Fairness definitions conflict (demographic parity vs equalized odds can't both hold); removing a protected attribute doesn't remove proxies.

**Optimize & communicate** — I'd emphasize there's no purely technical fix — it requires domain context and stakeholder input — and cite tools like Fairlearn. Signal: I treat bias as a socio-technical lifecycle issue with measurable checkpoints.
