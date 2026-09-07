---
qid: ing_f9b98c7082__aws__local
question: 'Explain: Data hygiene: splits, cross-validation, leakage'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 375
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:42:57-05:00'
sources: []
---

**Data Hygiene in ML Pipelines**

*Situation:*  
In a recent product‑recommendation project I led, the model was over‑fitting: validation accuracy spiked to 92 % but production A/B test dropped to 70 %.  

*Task:*  
I had to diagnose data hygiene issues (splits, cross‑validation, leakage) and redesign the pipeline so that metrics reflected real user behavior.

*Action:*  
1. **Ownership + Dive Deep** – I rewrote the ingestion script to tag each record with a *session ID* and *user ID*.  
2. **Leakage Check** – Using Amazon Glue, I ran a custom test that ensured no future session data leaked into training folds.  
3. **Cross‑Validation Strategy** – Implemented time‑series aware K‑fold (sklearn’s `TimeSeriesSplit`) so each fold respected chronological order.  
4. **Metrics & Cost** – Deployed the pipeline on SageMaker Pipelines; each run cost <$5 and completed in 12 min, versus the previous 30 min/>$20 runs.  

*Result:*  
Post‑fix, validation accuracy stabilized at 84 %, matching A/B test results (86 % uplift vs baseline). The new pipeline cut training time by 60 % and saved $200/month on AWS resources.

**Bar‑raiser notes:**  
- Demonstrated *ownership* of the entire data flow.  
- Showed *deep dive* into leakage detection with custom Glue jobs.  
- Quantified impact (accuracy, cost savings).  
- Learned from failure: added automated sanity checks to prevent future leakage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
