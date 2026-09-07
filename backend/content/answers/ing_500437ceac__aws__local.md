---
qid: ing_500437ceac__aws__local
question: Your prompt change gained 3 points on the eval. How confident are you that
  it is real?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 408
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:26:04-05:00'
sources: []
---

**Situation:**  
During a recent model‑tuning sprint I introduced a new prompt‑engineering technique for our conversational AI that was expected to lift the evaluation score (a weighted metric combining BLEU, ROUGE, and user satisfaction).  

**Task:**  
Validate whether the observed +3 point gain is statistically significant and reproducible before rolling it out fleet‑wide.  

**Action:**  
1. **A/B Test at Scale** – Deployed the new prompt to 10 % of traffic using Amazon SageMaker Endpoint variants, ensuring identical inference latency (≤30 ms).  
2. **Statistical Confidence** – Collected 50k responses per variant and performed a two‑tailed t‑test; p‑value < 0.01 confirmed significance.  
3. **Robustness Checks** – Ran the same experiment on three different data shards and in a multi‑region setup (us‑east‑1, eu‑west‑2) to rule out distribution drift.  
4. **Cost & Availability** – Leveraged SageMaker’s autoscaling; cost increased by only 1.8 % while maintaining 99.9 % availability.  

**Result:**  
The new prompt consistently improved the composite score from 78.3 to 81.2 across all shards, a +3.9 point lift (≈5 % relative). Roll‑out to 100 % traffic was completed within 48 h with no SLA impact.  

**Leadership Principles Highlighted:**  
- **Customer Obsession & Bias for Action** – Delivered measurable user‑centric improvement quickly.  
- **Dive Deep & Ownership** – Rigorous statistical validation and end‑to‑end monitoring demonstrate full ownership of quality and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
