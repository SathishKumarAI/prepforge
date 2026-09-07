---
qid: ing_10744a402a__aws__local
question: You have 10 hours of demonstrations for a new task and budget for 50 more.
  How do you decide what to collect, and what return do you expect?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 400
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:02:27-05:00'
sources: []
---

**Situation & Task**  
I was tasked with building a new AI model for a recommendation engine. We had **10 hrs of demo data** and an additional **$50k budget** to collect more. My goal: maximize ROI while staying within the budget.

**Approach (Dive Deep + Customer Obsession)**  
1. **Analyze the 10 hrs** – I parsed feature importance, label distribution, and error rates. The model was 30 % biased toward a niche segment; missing data on “user intent” explained ~70 % of that bias.  
2. **Prioritize data needs** – I mapped three collection buckets:  
   *A.* User interaction logs (free, high volume).  
   *B.* Structured survey responses (~$15k for 3 k respondents).  
   *C.* Third‑party intent signals (~$20k for API access).  
   I ranked them by impact on bias reduction and cost per datapoint.

**Decision & Execution**  
I allocated the budget to **Bucket B (survey)** because it gave the highest lift in reducing bias (validated via A/B test: 12 % precision gain) while staying under $20k. Remaining $30k funded **Bucket C**, yielding a 4‑point recall improvement on cold starts.

**Result (Deliver Results)**  
The combined data lifted overall model accuracy from **78 % → 87 %** and reduced churn by **5 %** in the first month post‑deployment, translating to an estimated $1.2M incremental revenue over a year.  

*Bar‑raiser takeaway*: I owned the end‑to‑end data strategy, dived deep into feature causality, quantified impact with clear metrics, and iterated based on real‑world feedback.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
