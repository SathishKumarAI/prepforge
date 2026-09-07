---
qid: ing_539bcdae35__aws__local
question: 'Explain: kappa < 0.6: Poor agreement (rewrite criteria)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 376
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:33:54-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation:** While validating a new NLP labeling pipeline for our recommendation engine, the inter‑annotator agreement dropped to κ = 0.54, below the acceptable threshold of 0.6.  
> **Task:** I owned the quality issue, had to redesign the annotation rubric and retrain the annotators so that the system could reliably detect user intent with ≥ 90 % precision.  
> **Action:**  
> *Re‑write criteria:* I broke each label into atomic “intent tags” (e.g., *buy*, *compare*, *return*) and provided concrete examples for edge cases, reducing ambiguity.  
> *Dive deep:* Analyzed confusion matrices to identify systematic overlaps; discovered that “purchase intent” was conflated with “price‑check.”  
> *Bias for Action:* Rolled out the new rubric in a staged A/B test (30 % of annotators). Within 48 h, κ rose to 0.68 and precision improved from 81 % to 92 %.  
> *AWS services used:* S3 for annotation data, SageMaker Ground Truth for labeling workflow, Step Functions to orchestrate the retraining pipeline.  
> **Result:** The updated labels fed into our recommendation model, boosting click‑through rate by **12 %** and revenue per session by **$0.07** in the next quarter.  
> **Learned:** Clear, measurable guidelines are essential; continuous monitoring of κ can preempt downstream performance drops.  

*Leadership Principles:* **Ownership**, **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
