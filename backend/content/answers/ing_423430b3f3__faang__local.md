---
qid: ing_423430b3f3__faang__local
question: 'Explain: You shipped an LLM feature - how did you evaluate it? Walk me
  through the actual eval setup.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 468
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:18:08-05:00'
sources: []
---

**Clarify**  
We’re shipping a new “context‑aware FAQ” feature that feeds a fine‑tuned LLM with past user interactions to improve response relevance. I’ll assume we have a production‑grade deployment, A/B traffic split, and no data privacy violations.

**Approach**  
1. **Define success metrics** (click‑through, dwell time, CSAT).  
2. **Set up an experiment**: 10 % of users see the new feature (treatment), 90 % stay on baseline (control).  
3. **Collect telemetry**: request logs, response latency, model confidence scores, and post‑interaction surveys.  
4. **Post‑hoc quality audit**: random sample of LLM outputs for human grading.

**Depth**  
- *A/B testing*: 7‑day run, power analysis → 5 % lift in engagement with 95 % CI.  
- *Latency*: median request time dropped from 850 ms to 620 ms (p < 0.01).  
- *Confidence calibration*: we plotted reliability diagrams; the fine‑tuned model’s top‑1 confidence correlated 0.82 with accuracy, better than baseline’s 0.75.  
- *Human review*: 200 samples graded on a 5‑point rubric; mean score increased from 3.2 to 4.1 (p < 0.05).  
- *Safety checks*: no hallucinations flagged by the internal safety classifier.

**Edge cases**  
- Cold start users: we observed no performance drop because fallback defaults remained unchanged.  
- Data drift: monthly re‑evaluation of confidence calibration; no significant degradation over 3 months.  
- Privacy: all user identifiers hashed; no PII in model inputs.

**Optimize & Communicate**  
We automated the telemetry pipeline, added a real‑time dashboard, and scheduled quarterly retraining to keep the LLM aligned with evolving FAQ content. I’d present these results to stakeholders as a concise slide deck highlighting lift percentages, latency gains, and human‑rated quality improvements, stressing that the evaluation framework is repeatable for future feature rollouts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
