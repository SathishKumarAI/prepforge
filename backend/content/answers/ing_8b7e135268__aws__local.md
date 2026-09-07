---
qid: ing_8b7e135268__aws__local
question: 'Explain: Defining Hallucinations — BigLaw Bench: Hallucinations | Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 361
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:41:19-05:00'
sources: []
---

**Situation & Task**  
At BigLaw Bench we built a legal‑document summarizer that powers Harvey’s “Hallucinations” feature—detecting when the model invents facts. The client demanded a 30 % drop in hallucination rate before launch, or a $500k penalty.

**Action**  
1. **Ownership & Dive Deep** – I led a cross‑team sprint to audit the training data pipeline. Using SageMaker Ground Truth we added an “expert flag” label for hallucinated snippets and retrained with a weighted loss (hallucination = 5×).  
2. **Bias for Action** – Implemented a Lambda‑driven post‑processing filter that scores each output against a knowledge graph in DynamoDB; any score below 0.7 triggers a human review queue.  
3. **Invent & Simplify** – Deployed the model on SageMaker Endpoints with multi‑AZ hosting, auto‑scaling based on CPU usage (max = 8 vCPU) to keep latency <200 ms and cost <$1.2k/month.

**Result**  
Hallucination rate fell from 12 % to **4 %** within two weeks—an 87 % reduction, meeting the target and avoiding the penalty. The Lambda filter added only 15 ms per request, keeping overall latency under SLA.  

**Learnings** – Continuous data labeling and automated quality gates are critical for high‑stakes ML; early ownership prevents costly post‑deployment fixes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
