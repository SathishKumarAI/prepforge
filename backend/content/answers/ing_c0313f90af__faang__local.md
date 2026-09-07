---
qid: ing_c0313f90af__faang__local
question: How do you decide when an AI prototype is ready for production?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 506
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:08:54-05:00'
sources: []
---

**Clarify**  
The question asks how to determine *when* a proof‑of‑concept (PoC) can be promoted from the lab to a production deployment.  
Assumptions:  
1. The prototype has already passed an initial feasibility test and produced measurable results.  
2. There is a defined business objective (e.g., accuracy ≥ 90%, latency ≤ 200 ms).  
3. The target environment (cloud, edge) and compliance requirements are known.

**Approach**  
1. **Define Success Criteria** – metrics, SLAs, data‑quality thresholds, and stakeholder expectations.  
2. **Validate Robustness** – stress test on diverse, real‑world datasets; check for bias, drift, and catastrophic forgetting.  
3. **Operational Readiness** – packaging (containerization), monitoring hooks, rollback strategy, and secure model serving.  
4. **Governance & Compliance** – audit logs, explainability, data‑privacy checks, and regulatory alignment.

**Depth**  
- *Metric thresholds*: e.g., precision ≥ 0.92, recall ≥ 0.88, AUC‑ROC > 0.95; latency ≤ 150 ms per inference.  
- *Robustness tests*: cross‑validation on unseen data, adversarial perturbations, concept drift detection (e.g., using a sliding window of predictions).  
- *Deployment pipeline*: CI/CD with model versioning (MLflow), automated rollback if error rate > 5%.  
- *Monitoring*: real‑time dashboards for inference latency, prediction distribution, and alerting on anomalies.  
- *Governance*: model cards, bias audits, GDPR/CCPA compliance checks.

**Edge Cases**  
- Data sparsity or sudden distribution shift → triggers retraining.  
- Regulatory changes (e.g., new privacy law) → immediate rollback.  
- Unexpected latency spikes in production → fallback to a simpler baseline model.

**Optimize & Communicate**  
Iterate on metrics based on stakeholder feedback; document all tests and results in a “go‑no‑go” checklist. Narrate the decision as: *“The prototype meets all defined success criteria, passes robustness and compliance checks, and can be safely rolled out with automated monitoring.”* This concise, evidence‑based narrative satisfies FAANG interviewers’ emphasis on structured reasoning, clear communication, and depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
