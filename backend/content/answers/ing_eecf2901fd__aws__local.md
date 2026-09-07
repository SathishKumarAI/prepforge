---
qid: ing_eecf2901fd__aws__local
question: 'Explain: Pitfall 15: Solving a Different Problem — Common Pitfalls'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 382
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:17:48-05:00'
sources: []
---

**Pitfall 15 – “Solving a Different Problem”**  
*Leadership Principles: Customer Obsession & Ownership*

**Situation:**  
While building an AI‑powered recommendation engine for our e‑commerce platform, the team focused on optimizing model accuracy (F1 score) because the data science lead had set that as the KPI.

**Task:**  
I realized that customers care more about *time to relevance*—how quickly a user sees a product they actually click. The business metric was conversion rate, not F1.

**Action:**  
- Re‑aligned metrics: switched from F1 to **conversion uplift** and **latency** (≤ 200 ms).  
- Deployed a lightweight inference layer on **Amazon SageMaker Edge Manager** for low‑latency scoring.  
- Added an A/B test harness in **AWS CloudWatch** dashboards to capture click‑through rates in real time.  
- Trained a secondary, lighter model with **FastText embeddings** to reduce inference cost by 35 %.  

**Result:**  
Within two weeks of the pivot, conversion increased from 2.1 % to 3.4 % (62 % lift), latency dropped to 120 ms, and inference cost fell by $0.02 per request—saving ~$18K/month.

*Bar‑raiser takeaways:*  
- Ownership: I challenged the status quo and drove metric realignment.  
- Dive Deep: I dissected user behavior data to uncover the true business driver.  
- Quantified impact: clear lift in conversion & cost savings.  
- Learning from failure: we avoided wasting compute on a model that didn’t translate to revenue.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
