---
qid: ing_de3607d04f__aws__local
question: 'Explain: Cost Modeling (June 2026) — Model Selection Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 521
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:41:54-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the launch of a new generative‑AI product slated for Q3 2026. The business asked me to build a *Cost Modeling & Model Selection Guide* that would let data scientists pick the right model (GPT‑4, Claude‑2, Gemini‑1) while keeping spend under $30k/month.

**Action**  
1. **Requirements & Scope** – I mapped every user‑story: inference latency ≤ 200 ms, 99.9 % availability, and a clear SLAs for GPU hours.  
2. **Data‑driven Architecture** – Built an *Inference Cost Engine* in Python that pulls real‑time pricing from the AWS Pricing API (EC2 g5.xlarge, P4d.24xlarge, SageMaker endpoints).  
3. **Model Selection Pipeline** – Added a lightweight benchmark service using SageMaker’s “Inference Scheduler” to auto‑run 100 inference samples per model; the engine stores results in DynamoDB for trend analysis.  
4. **Cost Projection & Alerting** – Integrated with CloudWatch Alarms that trigger when projected spend > $25k, and I created a Tableau dashboard (via QuickSight) showing monthly variance vs forecast.  

**Result**  
- Reduced unplanned AI spend by **32%** in the first six months.  
- Achieved 98.7 % accuracy‑to‑cost ratio across models, enabling quarterly savings of $12k.  
- The guide is now a living repo (GitHub) and is used by 4 teams, cutting model selection time from 3 days to < 6 hours.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Built a tool that directly protects the business’s budget.  
- **Ownership & Dive Deep** – Owns end‑to‑end cost flow and digs into pricing granularity.  

**Bar‑raiser Expectations**  
- Shows ownership by turning a vague “cut costs” request into measurable KPIs.  
- Demonstrates depth: real AWS services, pricing APIs, and trade‑offs (e.g., GPU vs spot).  
- Quantifies impact with concrete numbers.  
- Learns from earlier failures (initially over‑estimated GPU usage) and iterates on the engine to reflect actual consumption patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
