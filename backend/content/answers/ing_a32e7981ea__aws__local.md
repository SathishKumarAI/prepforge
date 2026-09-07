---
qid: ing_a32e7981ea__aws__local
question: Consolidated vs granular tools - how do you decide?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 365
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:34:07-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* & *Dive Deep*.  
> **Situation:** While redesigning the recommendation engine for a global e‑commerce platform, I had to choose between a single “consolidated” AI model that served all categories and several granular models tuned per category.  
> **Task:** Deliver higher click‑through rates (CTR) while keeping inference cost ≤ $0.0001 per request.  
> **Action:**  
> 1. **Data dive** – I pulled 3 M user interactions per day, segmented by category, and plotted CTR vs. model size. The granular models improved CTR by 12% on average, but the consolidated model only gained 4%.  
> 2. **Cost/latency trade‑off** – Using SageMaker endpoints with autoscaling, a single model required 1 vCPU per request; five granular models needed 0.5 vCPU each but doubled total inference time due to routing overhead.  
> 3. **Risk assessment** – I built an A/B test framework (CloudWatch metrics + SageMaker Experiments) and rolled out the granular strategy to 10% traffic for two weeks.  
> **Result:** CTR rose from 2.1 % to 2.35 % (+11.9 %) while inference cost dropped by 18 %. The experiment was promoted globally, yielding an estimated $4M annual uplift in revenue.  
> **Learning:** I realized that *customer obsession* means quantifying the trade‑off between personalization depth and operational cost—always start with a data‑driven hypothesis, test at scale, and iterate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
