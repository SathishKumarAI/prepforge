---
qid: ing_2c51b0cf1c__aws__local
question: 'Explain: P - Prioritize Requirements — Answer Frameworks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 438
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:05:21-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team that had to launch an NLP model to auto‑classify customer support tickets within **3 months**. The product manager listed > 30 feature requests—from real‑time tagging to multilingual support—yet our data science budget was capped at $250k.

**Action – Prioritize Requirements Framework (P‑R)**  
1. **Problem Impact Score** – quantify how each requirement would reduce CSAT errors, using historical ticket volumes and SLA penalties.  
2. **Resource Effort Estimate** – estimate training time, compute cost, and data prep effort in AWS SageMaker and Glue.  
3. **Risk & Feasibility Matrix** – assess algorithmic maturity (e.g., BERT vs custom embeddings) and data availability.  
4. **Stakeholder Alignment** – run a quick weighted‑scorecard with Ops, Marketing, and Legal to surface hidden constraints.

I built an Excel/Redshift dashboard that automatically calculated a *Priority Index* = Impact × (1/Effort) × (1/Risk). The top 5 requirements—real‑time tagging, fallback rule engine, confidence threshold tuning, GDPR audit trail, and 90 % multilingual coverage—captured **> 80 % of the expected CSAT lift** while keeping compute < 10 % of budget.

**Result**  
We delivered a production SageMaker endpoint with 95 % accuracy in 8 weeks, cut ticket resolution time by **32 %**, and saved $120k on infrastructure. The model’s live A/B test showed a 15‑point lift in CSAT, exceeding the target by 10 %.  

**Reflection (Bar‑raiser focus)**  
I owned the trade‑offs, dove deep into data quality vs. compute cost, quantified impact with real SLA metrics, and learned that early stakeholder alignment prevents scope creep—an insight I applied to our next ML initiative.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
