---
qid: ing_72b78cb1df__faang__local
question: 'Explain: How AI SREs Investigate Incidents — What is an AI SRE?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 501
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:10:40-05:00'
sources: []
---

**Clarify**  
*Problem*: Explain what an “AI SRE” is and how they investigate incidents.  
*Assumptions to confirm*:  
- The audience knows traditional Site Reliability Engineering (SRE) concepts.  
- AI refers to large‑model or ML‑based services deployed at scale.  

**Approach**  
1. Define the role in one sentence.  
2. Map core SRE responsibilities onto AI‑specific challenges.  
3. Walk through a typical incident workflow: detection → triage → root‑cause → remediation → post‑mortem.  
4. Highlight tooling differences (model monitoring, data drift alerts).  

**Depth**  
An **AI SRE** is an engineer who applies SRE principles to AI/ML production systems—managing model lifecycle, inference latency, data pipelines, and safety.  
During incidents:  

| Phase | Action | Tooling |
|-------|--------|---------|
| **Detection** | Continuous metrics (latency, accuracy, drift) + anomaly detectors | Prometheus + custom ML‑drift alerts |
| **Triage** | Prioritize by impact & confidence; auto‑rollbacks via canary flags | Feature flag systems, Kubernetes rollouts |
| **Root Cause** | Correlate logs with training data version, feature importance, and inference graphs | ELK stack + model interpretability dashboards |
| **Remediation** | Patch models, retrain, or switch to fallback; update data pipelines | CI/CD for model artifacts, A/B testing frameworks |
| **Post‑mortem** | Capture “why” (data drift, concept shift) & “how” (infrastructure lag) | Knowledge base, automated incident reports |

**Edge Cases**  
- *Concept drift* with no obvious metric spike → use unsupervised drift detection.  
- *Model poisoning* attacks → require anomaly in feature distribution.  
- *Cold‑start failures* after a new model version → rollback logic must be fast.

**Optimize & Communicate**  
Iterate on alert thresholds using feedback loops, and document “model health” SLAs separately from system uptime. In interviews I’d emphasize the dual focus: maintaining infrastructure reliability **and** ensuring AI correctness, while keeping incident response lean through automated rollbacks and drift‑aware monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
