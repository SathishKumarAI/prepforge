---
qid: ing_368b8233a7__aws__local
question: How do you treat hallucination as a safety and product risk rather than
  just a quality issue?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 469
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:27:48-05:00'
sources: []
---

**Situation & Task**  
While launching a generative‑AI recommendation engine for a retail client, we observed frequent hallucinations—products not in inventory—that caused user frustration and potential brand damage. The risk was not just quality but a safety/product liability that could erode trust.

**Action (Design)**  
1. **Detection Layer** – Added a *hallucination detector* using a lightweight inference model on SageMaker Edge, scoring each generated response.  
2. **Mitigation Flow** – If the score > 0.7, we route the output through an *inventory‑validation microservice* (AWS Lambda + DynamoDB) before displaying it.  
3. **Feedback Loop** – User flagging triggers a Step Function that stores the instance in S3, auto‑labels it via a human review queue, and retrains the detector on SageMaker nightly.  
4. **Observability** – CloudWatch metrics (`HallucinationRate`, `Latency`) feed into an Ops dashboard; alerts trigger automatic rollback of new model versions if rate > 2%.

**Result**  
- Hallucination rate dropped from 12% to < 0.5% within 3 weeks (≈ 90% reduction).  
- Customer support tickets fell by 70%, improving NPS from 68 to 82.  
- Cost of the added pipeline was <$1,200/month, a negligible fraction (< 2%) of overall AI spend.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Prioritized user trust and safety over raw feature rollout speed.  
- **Ownership & Dive Deep** – Built end‑to‑end monitoring, quantified impact, and iterated on failures to close the loop.

**Bar‑raiser Insight**  
They’ll listen for a clear ownership signal (“I took full responsibility”), depth in technical choices (why SageMaker Edge over Lambda alone), quantified outcomes, and evidence of learning from the initial hallucination spike.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
