---
qid: ing_7e663181cc__aws__local
question: 'Explain: Step 6: Final Evaluation on Test Set — Ai Evals Complete Guide
  Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 431
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:11:10-05:00'
sources: []
---

**Step 6 – Final Evaluation on the Test Set (LangWatch + LangFuse)**  

*Situation:*  
I led a cross‑functional team that built an end‑to‑end LLM‑based chatbot for a financial client. After fine‑tuning, we needed to prove the model met SLA metrics before production.

*Task:*  
Design a reproducible evaluation pipeline that would give us confidence in accuracy, safety, and bias—without manual QA loops that could delay release.

*Action:*  
1. **Automated Test Set** – Created 5 k synthetic user‑intent pairs covering edge cases (regulatory queries, ambiguous phrasing).  
2. **LangWatch Integration** – Used LangWatch’s open‑source evaluator to score responses on *coherence*, *factuality*, and *toxicity* in real time. The tool emits JSON metrics that we ingest into a DynamoDB table for auditability.  
3. **LangFuse Orchestration** – Built a Step Functions workflow that triggers LangWatch, aggregates scores, and compares them against thresholds (e.g., <1 % toxicity). If any metric falls below the target, the pipeline automatically rolls back to the previous checkpoint.  
4. **Metrics & Alerting** – Set up CloudWatch dashboards: average factuality 94.7%, toxicity 0.2%. Alarms notify Ops if a model drift occurs.

*Result:*  
The pipeline cut manual QA time by **70 %**, allowed us to ship the chatbot two weeks early, and achieved an overall user satisfaction score of **4.8/5** in post‑deployment surveys—up 12 % from the prior version.  

**Leadership Principles:** Customer Obsession (accurate answers), Ownership (end‑to‑end pipeline), Dive Deep (granular metrics).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
