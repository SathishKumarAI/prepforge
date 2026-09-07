---
qid: ing_519947a4bc__aws__local
question: How do you evaluate an LLM? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 496
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:29:33-05:00'
sources: []
---

**Situation** – At my previous firm we built a conversational bot that leveraged GPT‑4 to triage customer support tickets. The product team demanded *“how do we know the LLM is actually better than our rule‑based baseline?”*  

**Task** – Design an end‑to‑end evaluation framework that quantifies quality, latency, and cost so we could make data‑driven release decisions.

**Action**  
1. **Define metrics**:  
   * **Precision@k & F1** on a held‑out annotated set of 10 k tickets (target ≥ 0.78).  
   * **Latency SLA** ≤ 200 ms per inference (95th percentile).  
   * **Cost per request** < $0.0005 to stay under the $500/month budget.  

2. **Build a test harness on AWS**:  
   * **Amazon SageMaker Endpoint** for real‑time inference, auto‑scaling from 1–50 instances (using GPU P4).  
   * **AWS Lambda + Amazon API Gateway** to orchestrate batch scoring and collect metrics in **Amazon CloudWatch**.  
   * Store predictions & ground truth in **DynamoDB**; use **QuickSight** for live dashboards.  

3. **Run controlled A/B tests** (50/50 split) on production traffic, feeding results back into a CI/CD pipeline that auto‑rolls the model if all thresholds are met.

4. **Iterate**: After deployment we saw a 15 % reduction in mean handling time and a 22 % lift in first‑contact resolution—cost per ticket dropped from $3.20 to $2.60, exceeding our target by 30 %.

**Result** – The framework enabled quarterly model refreshes with confidence, delivering measurable business impact while staying within budget.

> **Leadership Principles Anchored:**  
> *Customer Obsession* (metrics tied directly to user experience), *Ownership* (end‑to‑end pipeline ownership), and *Dive Deep* (data‑driven, quantitative validation).  

**Bar‑raiser takeaways** – clear ownership, depth of metric design, quantified ROI, and a learning loop from each test cycle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
