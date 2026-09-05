---
qid: ing_9ce8ccaf9c__star__local
question: 'Explain: Estimate the annual serving cost of adding an LLM summary feature
  for 100 million weekly active users, and how you''d cut it by 10x.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 439
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:45:52-05:00'
sources: []
---

**Situation:**  
At my previous company we were rolling out a new “AI Summary” feature for our news app. We expected about 100 M weekly active users, each requesting a summary once per day, and the engineering team needed an estimate of the annual cost before we could budget.

**Task:**  
I had to calculate the yearly serving cost using current cloud pricing (GPU/CPU, storage, network) and then devise a strategy to cut that cost by tenfold without sacrificing user experience.

**Action:**  
1. **Baseline calculation:** I assumed 10 M requests/day → 3.65 B requests/year. Using AWS Lambda for inference with a 2‑hour GPU spot instance at $0.90/hr, each request took ~30 ms GPU time + 100 MB of model payload. That worked out to roughly **$1.5 M** per year.  
2. **Optimization plan:**  
   - **Model distillation & quantization** to a 4‑bit MobileNetV2 version reduced inference latency from 30 ms to 5 ms and GPU usage by ~70%.  
   - Switched from on‑prem GPU pods to **AWS Fargate Spot + CPU only** for the distilled model, dropping cost per request to $0.01.  
   - Implemented **caching of popular summaries** in Redis (≈30% hit rate) and batch‑processing for low‑frequency users, saving 40 % on compute.  
   - Introduced a **dynamic scaling policy** that throttles inference during peak times, shifting to pre‑generated “fallback” summaries for the top 10% of traffic.

**Result:**  
The combined measures slashed the annual cost from **$1.5 M to $150 K**, a tenfold reduction. Users experienced no noticeable lag, and we gained a scalable model that could handle future growth. I learned how critical it is to pair architectural choices (distillation, caching) with cloud economics to deliver AI at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
