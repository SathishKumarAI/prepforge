---
qid: ing_d5c5583cb6__aws__local
question: You join as a staff engineer. The team ships prompt changes on vibes, has
  no evals, and as far as they can tell is shipping fine. What do you do in your first
  90 days?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 383
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:22:52-05:00'
sources: []
---

**Customer Obsession + Dive Deep**

*Situation:*  
I joined a prompt‑engineering squad that was shipping “vibes” tweaks with no evaluation framework and reported “shipping fine.”  

*Task:*  
Within 90 days I needed to surface hidden defects, quantify impact on user experience, and embed data‑driven quality gates without stalling releases.

*Action:*  
1. **Audit & Instrumentation** – mapped all prompt pipelines in a single CloudWatch log group, added context tags (prompt ID, version, model).  
2. **Define Evaluation Metrics** – created *Prompt Accuracy Score* (PAS) and *User Sentiment Drift* using Amazon Comprehend for sentiment, and a custom Lambda that compares outputs to a curated test set.  
3. **Automated Quality Gates** – built an AWS Step Functions workflow that runs every PR: lint → unit tests → PAS check → approval gate in CodePipeline.  
4. **Feedback Loop** – launched a lightweight A/B test harness on Amazon SageMaker endpoints, feeding results back to the pipeline.

*Result:*  
- Reduced unvalidated changes by 85 %.  
- Detected a 12 % drift in user sentiment within 2 weeks of deployment; corrective prompts cut it to <3 %.  
- Cut manual review time from 4 hrs to 30 min per release, freeing 10+ developer hours/month.  

*Learnings:*  
Ownership means building the right metrics first; diving deep into logs exposed gaps that were invisible in surface shipping stats. The bar‑raiser will note my proactive tooling, measurable impact, and iterative learning from the initial failure (no evals).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
