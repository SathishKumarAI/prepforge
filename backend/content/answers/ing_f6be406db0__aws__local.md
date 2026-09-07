---
qid: ing_f6be406db0__aws__local
question: How do you decide between building in-house, buying a vendor product, and
  calling a model API?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 399
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:34:35-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
When our recommendation engine lagged behind competitors, I led the team to decide whether to build a new model in‑house, buy a vendor solution, or use an external API.

**Action (Dive Deep + Ownership)**  
1. **Requirements audit** – latency < 50 ms, 99.9 % availability, GDPR compliance, and cost cap $200k/yr.  
2. **Cost–benefit model** –  
   * In‑house: $120k dev + $40k infra (EC2 + SageMaker) = $160k/yr, but we’d own the code and data.  
   * Vendor SaaS: $90k license + $20k support = $110k/yr, but limited customization.  
   * API (OpenAI): 0.01 $ per token, projected 10M tokens/month → $12k/yr, but no infra overhead.  

3. **Risk matrix** – evaluated data sovereignty, model drift, and SLAs.

4. **Pilot** – spun up a SageMaker endpoint on spot instances to validate latency; results: 45 ms avg, 99.95 % availability.

5. **Decision** – chose the in‑house route because we needed custom feature engineering for user intent, and owning the model avoided vendor lock‑in.  

**Result (Deliver Results)**  
Deployment reduced recommendation latency by 35 %, increased conversion by 12%, and stayed within budget ($155k/yr). I documented lessons on cost forecasting and maintained a post‑mortem to refine our decision framework.

> **Bar‑raiser cues:** clear ownership, data‑driven trade‑off analysis, quantified impact, and an actionable learning loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
