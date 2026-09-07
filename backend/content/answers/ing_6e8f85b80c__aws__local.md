---
qid: ing_6e8f85b80c__aws__local
question: 'Explain: Evaluation, cost, observability — Agents And Tool Use'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 460
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:34:05-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a team that built an AI‑driven agent to automatically triage customer support tickets and invoke external APIs (e.g., CRM, knowledge base). The challenge was to evaluate the agent’s decisions, keep operational cost under $2k/month, and maintain 99.9 % observability across all calls.

**Approach & Design**  
*Evaluation*: I introduced a two‑tier scoring system—confidence from the LLM model (via SageMaker endpoint) and an “action weight” from domain experts. We stored scores in DynamoDB and triggered Lambda to re‑rank tickets when thresholds changed.  
*Cost*: To stay within budget, we used **SageMaker Neo** for edge inference on a spot‑based EC2 instance pool, cutting GPU runtime by 70 %. All logs went to CloudWatch Logs with a retention policy of 30 days; metrics were pushed to CloudWatch Metrics and then queried via Athena for monthly cost reports.  
*Observability*: A Step Functions state machine orchestrated the workflow, exposing each step in X-Ray. We set up dashboards that surfaced latency, error rates, and model drift (via SageMaker Model Monitor). Alerts on a 10 % drift triggered an automated retraining pipeline.

**Result**  
The agent reduced manual triage time by **55 %**, improving first‑contact resolution from 68 % to 83 %. Monthly spend stayed at **$1.8k**, 10 % below target, while observability dashboards cut incident response time from 45 min to 12 min.

**Leadership Principles Highlighted**  
- *Customer Obsession*: Delivered faster, more accurate support.  
- *Ownership & Dive Deep*: Built end‑to‑end pipeline and tuned cost/performance trade‑offs.  

Bar‑raiser notes: clear ownership, depth of design (services chosen, cost metrics), quantified impact, and lessons learned from early drift alerts that drove continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
