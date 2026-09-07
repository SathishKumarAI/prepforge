---
qid: ing_70187b2444__aws__local
question: 'Explain: 2.1 Tell me about a time you made a safety-first decision in a
  project, even if it meant a trade-off.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 432
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:38:35-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a fraud‑detection model that processed ~2 M transactions per day. The data set contained highly imbalanced labels (0.5 % fraud). Our SLA required 99.9 % availability, but the model was still generating a high false‑positive rate (~12 %) that caused customer frustration.

**Action – Safety‑First Decision**  
I chose to **degrade real‑time scoring** in favor of a *batch re‑score* with an additional “confidence threshold” layer.  
- Added a second, simpler model (LightGBM) as a safety net and set a 0.95 confidence cutoff.  
- Deployed the pipeline on **AWS Lambda + SQS** for batch jobs, and used **Amazon SageMaker Endpoint** only for high‑confidence predictions.  
- Implemented a monitoring dashboard in **CloudWatch** to trigger alerts if false positives exceeded 10 %.  

This trade‑off increased latency from <200 ms to ~2 s for the safety layer but reduced false positives by **42 % (from 12 % to 7 %)**, cutting customer complaints by 35 % and saving ~$250k annually in manual review costs.

**Result & Learnings**  
The project met the *Customer Obsession* principle: customers saw fewer false alerts. Ownership was demonstrated by taking responsibility for the trade‑off, while *Dive Deep* was shown through detailed error analysis and metric tracking. I documented the decision matrix and updated our incident playbook so future teams could replicate the safety-first approach without costly trial‑and‑error.

**Bar‑Raiser Takeaway**  
- Clear ownership of risk vs. reward.  
- Quantified impact (metric change, cost savings).  
- Deep dive into error patterns and iterative improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
