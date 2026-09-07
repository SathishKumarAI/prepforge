---
qid: ing_9801830dd8__aws__local
question: How do you measure inter-annotator agreement on a human labelling effort,
  and what do you do when your annotators disagree a lot?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 414
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:09:26-05:00'
sources: []
---

**Situation & Task**  
While leading an AI‑model training project for a recommendation engine, I was responsible for ensuring the quality of millions of human‑labelled tags. The goal was to keep inter‑annotator agreement (IAA) above 0.85 F1‑score and reduce disagreement‑related labeling cost by 30 %.

**Action**  
*Measuring IAA:*  
I implemented a *pairwise Cohen’s κ* and *Krippendorff’s α* pipeline in **AWS Glue** that automatically aggregates annotator votes from an S3 bucket, computes metrics per item, and stores results in DynamoDB. This gave us real‑time dashboards in Amazon QuickSight.

*When disagreement spikes:*  
1. **Root‑cause analysis (Dive Deep)** – I ran a correlation study between task difficulty, annotator tenure, and κ scores, discovering that new hires were the primary source of variance.  
2. **Targeted retraining (Customer Obsession & Ownership)** – We rolled out a micro‑learning module on ambiguous cases using Amazon SageMaker Ground Truth’s *active learning* feature, which reduced disagreement by 22 % in two weeks.  
3. **Process refinement (Bias for Action & Invent & Simplify)** – I introduced a “gold‑standard” review queue that automatically escalates items with κ < 0.75 to senior reviewers, cutting manual effort by 18 %.  

**Result**  
IAA improved from 0.78 to 0.88 F1, labeling cost fell by 32 %, and model precision increased by 4 % on the production recommendation pipeline.

---

*Bar‑raiser notes:* I demonstrated ownership of both metrics and process, dove deep into root causes with data, quantified impact, and learned from initial failures by iterating on training and escalation rules.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
