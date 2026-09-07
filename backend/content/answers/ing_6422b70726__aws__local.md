---
qid: ing_6422b70726__aws__local
question: What is a Back of the Envelope Calculation?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 450
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:11:35-05:00'
sources: []
---

**Answer (Amazon Way)**  

> “Back‑of‑the‑envelope” means a quick, rough estimate that lets us decide if a solution is worth pursuing before we spend engineering time on it.

### Situation  
While designing a recommendation engine for Prime Video, I needed to know whether training a 1 M‑parameter model on the full dataset (≈200 GB) would fit within our nightly compute budget of 500 h CPU‑days.

### Task  
Provide a ball‑park cost and time estimate so the product team could choose between a small “pilot” model or the full‑scale training.

### Action  

1. **Assumptions** –  
   * One epoch = 2 GB data processed per minute on an `ml.p3dn.24xlarge` (8 V100 GPUs).  
   * Training speed ≈ 0.5 epoch/minute → 200 epochs ≈ 400 min ≈ 6.7 h.  
   * Spot price = $2.40/h for that instance.

2. **Calculation** –  
   `Cost = 6.7 h × $2.40 ≈ $16`.  

3. **Risk check** – add 20 % buffer for I/O and hyper‑parameter sweeps → final estimate $19.60.

4. **Decision** – the cost is well below our nightly budget, so we proceeded with full‑scale training; otherwise we’d have built a 100k‑parameter prototype on `ml.c5.xlarge` (≈$0.30/h).

### Result  
The actual run consumed 7 h and $17.20, validating the estimate within 10 %. The product launched two weeks early, saving $4 M in projected viewer churn.

**Leadership Principles:** *Customer Obsession* – fast decisions for users; *Dive Deep* – quantitative reasoning; *Bias for Action* – act on a quick, credible estimate.  

Bar‑raiser notes: clear assumptions, data‑driven numbers, and learning that the model met cost targets without over‑engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
