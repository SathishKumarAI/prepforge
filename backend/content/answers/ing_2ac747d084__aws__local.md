---
qid: ing_2ac747d084__aws__local
question: 'Q19: When would you use a small language model vs a frontier model?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 401
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:01:55-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional AI squad at Amazon, we had to decide whether to deploy a lightweight BERT‑tiny model or the latest GPT‑4 for our “Product Recommendation” feature. The goal was to deliver real‑time suggestions on millions of users while staying within the $2M quarterly budget.

**Action**  
I applied **Customer Obsession** and **Ownership**: I first benchmarked latency, accuracy, and inference cost.  
- *Small model*: 10 ms per request, 1.5× cheaper, but 12% lower precision on niche categories.  
- *Frontier model*: 80 ms per request, 4× cost, yet 30% higher recall for long‑tail items.

I mapped these trade‑offs to **AWS services**: SageMaker Endpoint (small) vs. Lambda + EFS cache + GPU‑optimized EC2 Spot for frontier. I introduced a hybrid approach—use the small model for 85 % of traffic and fallback to the frontier only when user intent confidence <0.4.

**Result**  
We achieved **95% accuracy** with a **latency under 20 ms** for 90 % of requests, cutting inference spend by **$650K annually** while increasing revenue from upsells by **18%** in Q3.

**Learnings (Bar‑raiser)**  
Ownership surfaced when I championed the hybrid architecture; dive deep into cost/latency numbers proved the decision; quantified impact showed ROI; and failure analysis of earlier monolithic deployments guided our risk mitigation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
