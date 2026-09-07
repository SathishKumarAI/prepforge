---
qid: ing_a748f93331__aws__local
question: 'Q: How would you evaluate models for a customer support chatbot?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 421
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:44:47-05:00'
sources: []
---

**Situation** – I was tasked with launching an AI‑powered chatbot that could answer 70 % of Tier‑1 tickets for a global SaaS client.  
**Task** – Build a scoring framework to evaluate candidate LLMs so we pick the one that delivers the best mix of accuracy, latency and cost.

**Action**  
1. **Define KPIs**:  
   * F1‑score on intent classification (≥ 0.92).  
   * Average response time ≤ 800 ms.  
   * Cost per query ≤ $0.01.  
2. **Create a benchmark dataset** from the client’s historic tickets, label intents and add 10 k synthetic edge cases.  
3. **Run head‑to‑head experiments** on SageMaker endpoints (LLM‑Inference), using **Batch Transform** for offline scoring and **Endpoint** for real‑time inference.  
4. **Collect telemetry** with CloudWatch metrics (latency, CPU/GPUE usage) and store logs in Athena for analysis.  
5. **Statistical comparison**: use bootstrapped confidence intervals to decide significance; pick the model that meets all KPIs while minimizing cost per 1 M queries.

**Result** – The chosen model (a distilled GPT‑3.5 variant on SageMaker) achieved F1 = 0.94, latency 620 ms and $0.008/query. We reduced Tier‑1 tickets by 35 % in the first month and saved ~25 % on inference spend versus the baseline.

**Learnings** – Early data‑driven validation prevented costly over‑engineering; continuous A/B testing keeps the model aligned with evolving user intent.  

*Leadership Principles:* **Customer Obsession** (metrics driven by real support volume) & **Ownership** (end‑to‑end pipeline from data prep to deployment).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
