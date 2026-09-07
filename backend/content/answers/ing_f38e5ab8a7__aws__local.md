---
qid: ing_f38e5ab8a7__aws__local
question: 'Explain: Continued Pretraining (Domain Adaptation)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 358
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:27:15-05:00'
sources: []
---

**Situation** – While leading a ML‑ops team for an e‑commerce recommendation engine, we noticed that the generic BERT model underperformed on niche product categories (e.g., “smart gardening tools”).  
**Task** – Adapt the base language model to our domain without retraining from scratch and maintain production latency ≤ 200 ms.  
**Action** –  

1. **Domain‑specific pretraining**: Collected 50M domain‑focused sentences from product titles, reviews, and support tickets. Fine‑tuned BERT on this corpus for 3 epochs (learning rate = 2e‑5).  
2. **AWS services**: Used SageMaker Ground Truth to label a small seed set, SageMaker Training Jobs with Spot Instances (p3.8xlarge) to keep cost <$500/day, and SageMaker Endpoint with GPU‑inferencing for low latency.  
3. **Scalability/Availability**: Deployed the endpoint in two AZs with Auto Scaling based on CPU > 70% or request count > 1k/min; integrated CloudWatch alarms.  
4. **Cost & Trade‑offs**: Spot usage cut GPU cost by 65%; trade‑off was occasional instance interruption handled via retry logic.  

**Result** – Post‑deployment, click‑through rate on the targeted categories rose from 3.2 % to 5.7 % (78 % lift), and revenue per visitor increased $0.45/month in those segments.  
*Learnings*: Continuous pretraining is a low‑cost, high‑impact strategy; always benchmark against a small validation set before full rollout.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
