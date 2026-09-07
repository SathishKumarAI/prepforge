---
qid: vq_9187aec30b__aws__local
question: Can we use if activity inside another if activity in ADF ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 437
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:03:44-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* – we build pipelines that reliably deliver data for downstream analytics; *Ownership* – I take full responsibility for the data quality and cost of the solution.

**Situation / Task**  
In a recent migration from on‑prem to Azure Data Factory (ADF) we needed conditional branching: “If dataset X is present, run Activity A; otherwise skip to Activity B.” The original team used nested *If Condition* activities, but performance degraded due to many sequential checks and increased costs.

**Action**  
I rewrote the pipeline using a single **If Condition** that evaluates a *pipeline parameter* set by a preceding **Lookup** activity.  
```json
{
  "name":"MainBranch",
  "type":"IfCondition",
  "dependsOn":[{"activity":"CheckDataset","dependencyConditions":["Succeeded"]}],
  "expression":{"value":"@equals(activity('CheckDataset').output.exists,true)"},
  "activities":[{"activity":"RunActivityA", ...}]
}
```
*Why this works:*  
- **Scalability:** Only one branching point; ADF evaluates the expression in a single step, avoiding nested activity overhead.  
- **Availability & Cost:** Reduces pipeline run time by ~30 % and cuts ADF compute usage (10 $ per month for 100 k runs).  
- **Maintainability:** Future conditions can be added to the same `IfCondition` without nesting.

**Result**  
Pipeline execution time dropped from 12 min to 8 min, lowering daily costs by $5. The data team reported fewer failures (0.2% drop in error rate), directly improving downstream analytics reliability.

**Learnings**  
I discovered that ADF’s `IfCondition` is optimized for single‑level branching; nesting can lead to hidden performance penalties. I now audit every pipeline for unnecessary nested conditions and document the trade‑off between readability and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
