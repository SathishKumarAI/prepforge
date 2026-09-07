---
qid: ing_3a273df861__faang__local
question: 'Explain: Monthly Cost Estimate (500 Users, 100 Queries/User/Day)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 505
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:59:29-05:00'
sources: []
---

**Clarify**  
We’re estimating the monthly bill for a SaaS AI product that serves **500 users**, each making **100 queries per day** (≈30 k queries/day). Assume we use an on‑prem OpenAI‑style LLM hosted in AWS, with token‑based pricing: \$0.0004 per 1K tokens for inference and \$0.10 per 1M GPU‑hours for compute. Each query averages **2 k tokens** (prompt + completion).

**Approach**  
1. Compute total daily tokens → 500 × 100 × 2 k = 100 M tokens/day.  
2. Convert to monthly tokens → 30 × 100 M = 3 B tokens/month.  
3. Cost = 3 B / 1 000 × \$0.0004 = **\$1,200** for inference.  
4. Estimate GPU‑usage: each query takes ~0.05 sec on a V100 (≈0.0000139 GPU‑hrs).  
   Total GPU‑hrs/day = 30 k × 0.0000139 ≈ 0.42; monthly ≈ 12.6 GPU‑hrs → cost ≈ \$1.26.  
5. Add 10% for storage, networking, and support → total ≈ **\$1,350/month**.

**Depth**  
- Token estimate hinges on prompt length; if prompts double, cost doubles.  
- GPU‑time varies with model size; larger models increase compute cost linearly.  
- Using spot instances or multi‑region deployment can shave 15–20% off.

**Edge Cases**  
- Peak bursts (e.g., a marketing campaign) could spike requests by 5× → temporarily double costs.  
- Token limits: if queries exceed 4 k tokens, inference cost per query rises proportionally.  
- Unexpected model updates may require re‑training GPU hours.

**Optimize & Communicate**  
I’d present the calculation in a table, highlight assumptions, and suggest monitoring dashboards for token usage. If budgets tighten, we can swap to a smaller model or cache frequent responses. This structured walk‑through shows clear reasoning, complexity awareness, and actionable trade‑offs—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
