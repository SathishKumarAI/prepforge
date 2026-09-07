---
qid: ing_9326d73281__aws__local
question: 'Explain: Create an eval for a task — Working with evals | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 401
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:58:51-05:00'
sources: []
---

**Situation & Task**  
At my last role I was tasked to build an evaluation framework for a new AI‑driven recommendation model that would replace our legacy rule‑based engine. The goal: measure model accuracy, latency, and fairness before production rollout.

**Action – Technical Design**  
1. **Data pipeline** – Ingest labeled test set from S3 → transform with AWS Glue → store in Redshift for ad‑hoc analysis.  
2. **Evaluation service** – Containerized Lambda (Python) orchestrated by Step Functions; each step calls the OpenAI API (`/v1/evals`) with a prompt that includes the input, model output, and ground truth.  
3. **Metrics collection** – Store raw eval results in DynamoDB; aggregate scores via Athena queries.  
4. **Dashboard** – CloudWatch dashboards + QuickSight to show accuracy %, latency (ms), and bias metrics (demographic parity).  

**Result**  
- Reduced evaluation cycle from 2 weeks to 3 days, cutting $3k/month in dev time.  
- Achieved 92% precision vs. the legacy 81%, and a 30 % drop in unfairness score.  
- Cost per eval query < $0.0004, staying under budget while scaling to 10k queries/day.

**Leadership Principles**  
*Customer Obsession*: Delivered a transparent, data‑driven way for stakeholders to trust the new model.  
*Ownership & Dive Deep*: Built end‑to‑end pipeline, debugged API latency spikes by inspecting Lambda cold starts and OpenAI token limits.  

**Bar‑raiser takeaway**  
I own the entire lifecycle—design, implement, monitor—and I quantify impact with clear metrics, learning from a failed initial attempt that under‑estimated API rate limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
