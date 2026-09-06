---
qid: ing_b5a8213758__fp__local
question: 'Explain: Red flags interviewers see from this role'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 394
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:30:33-05:00'
sources: []
---

**Red flags that signal trouble when hiring an AI practitioner**

| Red flag | Why it hurts the team | Underlying principle |
|----------|----------------------|---------------------|
| **“I built the model from scratch” without citing data, loss, or hyper‑parameters** | It suggests a *black‑box* mindset; reproducibility fails, audit trails vanish, and regulatory compliance collapses. | *Information theory*: knowledge must be encoded in observable artifacts to reduce entropy. |
| **Claims of “perfect accuracy” on proprietary data** | Over‑fitting is inevitable without external validation; the model will break on real‑world inputs. | *Statistical learning theory*: generalization error grows with training set size and model capacity; perfect fit signals leakage. |
| **“We’ll deploy it immediately, no monitoring needed.”** | Lacks feedback loops, so bias drift or safety failures go undetected. | *Control theory*: closed‑loop systems require sensors (metrics) to adjust actuators (predictions). |
| **Inability to explain feature importance or decision logic** | Stakeholders cannot trust or debug outputs; legal mandates for explainability are ignored. | *Causality vs correlation*: explanations map causative pathways, not merely statistical correlations. |

### One non‑obvious insight  
Many interviewers overlook the *temporal dimension* of AI systems: a model that performs well today may degrade as data distribution shifts (concept drift). Red flags like “no plan for monitoring” often mask this hidden cost. A candidate who frames *continuous evaluation* as part of the pipeline demonstrates deep understanding of **probabilistic inference over time**, ensuring the system remains reliable beyond the lab.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
