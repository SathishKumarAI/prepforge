---
qid: ing_f9bf29950b__aws__local
question: 'Q73: How would you design a semantic routing system that dynamically selects
  the cheapest model that can handle a query with acceptable quality?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 478
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:42:59-05:00'
sources: []
---

**Situation (S)** – At my last company we had ~30 ML‑model endpoints for NLP tasks; costs per inference varied wildly (AWS SageMaker vs. on‑prem GPU). Users complained about latency spikes when the “best” model was chosen, and billable usage rose 35 % year‑over‑year.

**Task (T)** – Build a *semantic routing layer* that picks the cheapest viable model for each query while guaranteeing ≥ 0.92 F1 on a validation set and ≤ 150 ms latency.

**Action (A)**  
1. **Collect metrics**: For every model, store per‑token cost (SageMaker endpoint pricing + GPU amortization) and performance (F1, latency).  
2. **Feature extraction** – Use a lightweight LSTM to encode the query into a *semantic vector* (≈ 128 dims).  
3. **Model selector** – Train a gradient‑boosted tree that maps the semantic vector + current load to the optimal model ID; deploy it as a Lambda@Edge function for < 10 ms cold start.  
4. **Cost–quality trade‑off** – Add a cost‑threshold feature and use Bayesian Optimization offline to learn acceptable F1 curves per model.  
5. **Failover & monitoring** – Route through API Gateway → Step Functions that monitor latency; if > 150 ms, fall back to the next cheapest model.

**Result (R)** – In production we saw a 27 % reduction in inference spend, latency drift < 12 %, and no drop in user‑rated quality. The system also auto‑scaled: during peak hours the selector ran on 4 Lambda instances; off‑peak it throttled to 1, saving ~$1k/month.

**Leadership Principles Highlighted**  
- **Customer Obsession** – kept quality high while cutting cost.  
- **Ownership** – built end‑to‑end pipeline, monitored, and iterated post‑launch.  

Bar‑raiser cues: depth of metric collection, clear trade‑off modeling, quantifiable impact, and continuous learning loop after deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
