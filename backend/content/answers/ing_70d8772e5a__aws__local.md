---
qid: ing_70d8772e5a__aws__local
question: How do you monitor a deployed LLM system for drift? What kinds of drift
  matter?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 442
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:40:37-05:00'
sources: []
---

**Situation / Task**  
While leading the AI‑Ops team for a recommendation LLM that served ~5 M users/day, we noticed sudden accuracy drops after a new training dataset release.

**Action**  
1. **Define drift types** –  
   * *Concept drift*: changes in user intent → higher error rate on downstream metrics (e.g., precision@3).  
   * *Distribution shift*: input token distribution diverges from training data → increased perplexity and latency spikes.  

2. **Implement monitoring stack**  
   * **SageMaker Model Monitor** + **CloudWatch Alarms** to stream per‑request feature statistics into S3.  
   * **Lambda + Athena** queries compute KL‑divergence of token histograms nightly; thresholds set at 0.05 (tuned on historical data).  
   * **SQS** triggers a retraining pipeline when alarms fire.  

3. **Automate bias‑for‑action loop** – retrain with the latest drifted samples, redeploy via SageMaker Endpoint in <30 min.  

4. **Validate impact** – post‑deployment precision@3 improved from 0.68 to 0.73 (8% lift) and latency dropped by 12%.

**Result**  
Reduced model degradation incidents by 92%, saving ~$120k/month in compute, and maintained SLA of <200 ms response.

---

### Leadership Principles

* **Ownership** – I took end‑to‑end responsibility for the drift pipeline.  
* **Dive Deep** – Built custom statistical checks (KL‑divergence) beyond SageMaker defaults to catch subtle shifts.  

Bar‑raiser looks for: clear ownership, deep technical reasoning, quantifiable impact, and lessons learned from earlier false alarms that caused unnecessary retrains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
