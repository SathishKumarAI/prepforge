---
qid: ing_3609df7f85__faang__local
question: 'Explain: Walk me through an LLM feature you shipped end to end.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 507
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:49:42-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concrete example of an LLM‑based feature I delivered from concept to production, including data, engineering, and business impact. I’ll assume the product is a customer‑support chatbot that must answer FAQs accurately and safely.

**Approach**  
1. Define success metrics (accuracy ≥ 90%, latency ≤ 200 ms, no policy violations).  
2. Design the end‑to‑end pipeline: data collection → prompt engineering → model fine‑tuning → safety filtering → deployment & monitoring.  
3. Iterate on each stage with cross‑team checkpoints.

**Depth**  

| Stage | Actions | Technical Detail |
|-------|---------|------------------|
| **Data** | Crawl internal FAQ docs, label intents, augment with synthetic paraphrases. | 50 k QA pairs; use LLM to generate paraphrases, filter via BLEU > 0.7. |
| **Fine‑tuning** | Use LoRA on a base GPT‑3.5‑turbo (≈ 6B). | 30 epochs, batch = 8, learning rate = 1e‑4; monitor perplexity and intent accuracy. |
| **Safety Layer** | Post‑generation classifier trained on policy violation examples (0.2 % of data). | Thresholded confidence; fallback to human queue if below 0.9. |
| **Deployment** | Serverless API with autoscaling, cache top‑10 responses per user. | Latency < 180 ms; cost ≈ $0.0006/req. |
| **Monitoring** | Real‑time dashboards (accuracy, latency, violation rate). | Alert on > 5% drop in accuracy. |

**Edge Cases**  
- Unknown intents → fallback to human.  
- Data drift (new product features) → monthly re‑train.  
- Over‑fitting to synthetic paraphrases → holdout validation.

**Optimize & Communicate**  
I reduced model size via LoRA, cutting inference cost by 70 % while maintaining accuracy. I documented the pipeline in a GitHub repo and presented results (accuracy ↑ 12 %, cost ↓ 60 %) to stakeholders, highlighting ROI. This structured approach demonstrates end‑to‑end ownership, technical depth, and clear communication—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
