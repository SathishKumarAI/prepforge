---
qid: ing_6cdebf9c1b__aws__local
question: 'Explain: Where does Goodhart''s law bite in LLM evaluation? Give concrete
  examples and defences.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 483
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:30:01-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* I led a cross‑functional team to launch an LLM‑based FAQ bot for our e‑commerce platform.  
*Task:* Build a rigorous evaluation pipeline that truly reflects user satisfaction.  
*Action:* We first chose perplexity as the primary metric because it was easy to compute and correlated with model size—a classic “goodhart” trap: models were tuned to lower perplexity, yet end‑users reported irrelevant answers. To counter this, we layered in *human‑in‑the‑loop* metrics (F1 on a curated intent set) and *behavioral KPIs* (click‑through rate on suggested articles). We also introduced a *calibration score* that penalized overconfident predictions, directly addressing the “precision–recall” imbalance.  
*Result:* After redefining our evaluation stack, perplexity dropped 12% but click‑through rose 27%, and support tickets fell by 18%. The team now routinely runs a *multi‑metric dashboard* before any model release.

**Technical Design**

- **Requirements:** Real‑time inference (<200 ms), 99.9 % availability, cost ≤ $0.10 per query.
- **Solution:** Deploy the LLM on Amazon SageMaker Endpoint (Multi‑Model) with a *warm pool* of 4 GPU instances for burst traffic. Use Amazon CloudWatch to auto‑scale based on request latency and error rates.  
- **AWS Services:** SageMaker, Lambda (for pre/post‑processing), DynamoDB (to cache frequent Q&A pairs), CloudFront (global edge caching).  
- **Trade‑offs:** Warm pool increases baseline cost but ensures SLA; dynamic scaling reduces idle capacity during low traffic.

**Bar‑raiser Signals**

- Demonstrated *ownership* by re‑engineering the evaluation framework.  
- Showed *dive deep* into Goodhart’s law, quantifying its impact (user satisfaction drop).  
- Quantified results with concrete metrics (27% CTR lift, 18% ticket reduction).  
- Learned from failure: initial reliance on a single metric caused misalignment; pivoting to a multi‑metric approach fixed it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
