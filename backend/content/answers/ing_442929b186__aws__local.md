---
qid: ing_442929b186__aws__local
question: How do you wire evals into CI so that prompt or model changes can't silently
  regress quality?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 406
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:00:17-05:00'
sources: []
---

**Situation & Task (S)**  
When we rolled out a new LLM‑based recommendation prompt, the team noticed subtle drops in precision after a few weeks of traffic. I owned the risk that any future prompt or model tweak could silently degrade user experience.

**Action (A)**  
I designed an end‑to‑end CI pipeline that *automatically* evaluates every change against a **golden test set**:

1. **Trigger** – CodeCommit push → CodePipeline → SageMaker Processing job.  
2. **Evaluation** – Lambda pulls the latest prompt/model, runs 50k representative queries, and computes ROUGE, BLEU, and a custom *user‑score* (click‑through rate proxy).  
3. **Gate** – Results are stored in DynamoDB; Step Functions compare them to historical baselines (±1% tolerance). If thresholds fail, the pipeline halts and posts a Slack alert with detailed metrics.  
4. **Rollout** – On success, CodeDeploy pushes to an A/B test group; CloudWatch dashboards expose real‑time quality scores.

I also added automated rollback via Lambda if live traffic dips below 95% of baseline *precision* for 5 minutes.

**Result (R)**  
Since deployment, we’ve cut silent regressions from **~3 per quarter to zero**. Precision drift is now caught in under **15 minutes**, and the A/B latency added only **$0.02/day**—well within our budget.  

**Leadership Principles**  
- *Customer Obsession* – Protecting recommendation quality directly boosts user satisfaction.  
- *Ownership & Dive Deep* – I scoped every component, quantified impact, and iterated on failure feedback to tighten thresholds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
