---
qid: ing_11297c573d__aws__local
question: 'Explain: Building Effective AI Agents \ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 449
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:04:39-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a cross‑functional squad tasked with launching an **AI‑powered virtual assistant** for enterprise customers. The goal was to reduce ticket volume by 30 % and improve first‑contact resolution (FCR) from 55 % to 80 %.  

**Action**  
*Customer Obsession & Ownership*: I mapped the entire user journey, interviewed 25 support agents, and identified pain points in the current manual triage process.  
*Dive Deep*: We chose Anthropic’s Claude API for its safety‑first reasoning style, wrapped it in a **Serverless Workflow** (Step Functions) that orchestrates:  
1. **API Gateway + Lambda** – receives tickets, normalizes text.  
2. **Anthropic Claude** – generates intent & suggested resolution.  
3. **RDS Aurora Serverless** – stores conversation context and logs for continuous learning.  
4. **EventBridge** – triggers human escalation when confidence < 70 %.  

We added a **feedback loop**: every agent rating feeds back into a nightly retraining job on SageMaker, improving Claude’s accuracy by 12 % over 6 weeks.  

**Result**  
- Ticket volume dropped **32 %** (≈ 18k tickets/month).  
- FCR rose to **82 %**, exceeding the target.  
- Cost per ticket fell from $3.50 to $1.20, saving ~$200k annually.  

**Learning & Bar‑Raiser Insight**  
I practiced *Bias for Action* by iterating on the workflow in 48‑hour sprints and *Deliver Results* through measurable KPIs. The bar‑raiser looked for clear ownership of metrics, depth in system design (e.g., choosing Aurora Serverless for cost‑efficiency at scale), and evidence that failures (initial low confidence) were quickly turned into data‑driven improvements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
