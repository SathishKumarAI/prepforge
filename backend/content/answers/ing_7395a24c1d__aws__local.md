---
qid: ing_7395a24c1d__aws__local
question: 'Q: What is CLAUDE.md and why is it critical?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 373
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:47:06-05:00'
sources: []
---

**Answer (Amazon Interview Style)**  

*Leadership Principles: Customer Obsession & Ownership*

> **Situation:** At my last role I was tasked with launching a new AI‑powered recommendation engine for a global e‑commerce platform. The product team demanded an *explainable, auditable* model so that marketing and legal could trust the outputs.  
> 
> **Task:** I introduced **CLAUDE.md** (Customer‑Level Auditing & User‑Data Explainer in Markdown) as a mandatory artifact for every model release.  
> 
> **Action:**  
> * Defined a schema: input features, training data provenance, bias metrics, and post‑hoc SHAP explanations.  
> * Built an automated pipeline on AWS SageMaker + Lambda that pulls the trained model’s metadata from S3, runs `shap` locally, and writes a markdown file to a versioned Git repo.  
> * Added a CloudWatch alarm that fails a deployment if the markdown is missing or if bias metrics exceed thresholds.  
> * Trained engineers on interpreting the docs during sprint demos.  
> 
> **Result:** The audit document reduced post‑release complaints by 87 % and cut compliance review time from 3 days to 6 hours. When a model drifted, we could pinpoint the feature shift in the markdown and roll back within an hour—saving an estimated $250K in potential revenue loss.  
> 
> **Learnings:** Ownership of the audit artifact made every engineer accountable for data quality; iterating on CLAUDE.md’s schema drove deeper dives into bias, reinforcing our commitment to customer trust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
