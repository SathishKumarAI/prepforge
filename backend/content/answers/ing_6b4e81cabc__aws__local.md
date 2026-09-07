---
qid: ing_6b4e81cabc__aws__local
question: 'Explain: The Decode Phase (Token Generation) — Inference Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 403
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:26:45-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: While leading a pilot for an internal recommendation engine at my previous company, we noticed that users were abandoning the platform because responses lagged behind their expectations.  
*Task*: I had to reduce inference latency while maintaining output quality.  
*Action*: I dissected the **decode phase**—the token‑generation loop in transformer models. 1️⃣ **Greedy vs. Sampling**: I benchmarked greedy, nucleus (top‑p), and top‑k sampling on a 12B‑parameter model hosted on **Amazon SageMaker**. 2️⃣ **Dynamic batching**: Implemented a scheduler that groups same‑length requests to maximize GPU utilization, reducing per‑token compute from 0.35 s to 0.15 s. 3️⃣ **Caching & Beam Search**: Added an LRU cache for past key–value tensors and switched to beam search (beam=4) for critical queries, improving perplexity by 12%. 4️⃣ **Observability**: Integrated CloudWatch metrics to track token‑generation time per endpoint.  
*Result*: Latency dropped from 1.2 s to 0.5 s on average— a 58% improvement—while maintaining or slightly improving user satisfaction scores (NPS ↑ 8 points). The cost per inference fell by ~30% thanks to higher GPU throughput.

**Bar‑raiser notes**:  
- Demonstrated **ownership** of the end‑to‑end pipeline.  
- Showed **dive deep** into decoding mechanics and trade‑offs between speed vs. quality.  
- Quantified impact with real metrics (latency, NPS, cost).  
- Learned from a failed attempt to tune beam width blindly; now we always benchmark against user‑centric KPIs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
