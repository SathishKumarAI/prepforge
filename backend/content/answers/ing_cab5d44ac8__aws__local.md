---
qid: ing_cab5d44ac8__aws__local
question: You're building evals for a new LLM feature from scratch. How many examples
  do you need, and where do they come from?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 420
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:59:22-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the launch of a new LLM‑driven recommendation engine for a global e‑commerce platform. The feature required robust evaluation from scratch—no existing benchmarks existed. I had to decide how many labeled examples were needed and source them.

**Approach (Dive Deep + Ownership)**  
I first scoped the target metric: we wanted a 5 % lift in click‑through rate (CTR). Using bootstrap analysis on historical data, I estimated that detecting such an effect with 95 % confidence required **≈ 12 k examples** per class.  

To generate them cost‑effectively:

1. **Crowdsource via Amazon Mechanical Turk** – paid $0.50 each, yielding high‑quality labels in ~2 h.  
2. **Semi‑automated active learning** – the LLM flagged low‑confidence samples; I reviewed 10 % manually to bootstrap a seed set of 3 k examples.  

I stored data in **Amazon S3** (structured CSV), processed with **AWS Glue** for schema enforcement, and used **Amazon SageMaker Ground Truth** for annotation pipelines. The entire workflow ran on an **SageMaker endpoint**, scaling via **Auto Scaling Groups** to keep latency < 200 ms.

**Result**  
We produced a test set of 12 k examples in under two weeks with a cost of $3,000—$1.5× less than a traditional lab study. The subsequent A/B test showed a 6 % CTR lift, surpassing our goal and validating the sample size estimate.

**Reflection (Bar‑raiser)**  
I owned the end‑to‑end pipeline, dove deep into statistical power calculations, quantified impact with real metrics, and learned that iterative active learning can dramatically cut annotation costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
