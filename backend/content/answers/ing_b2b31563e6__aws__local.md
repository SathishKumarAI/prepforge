---
qid: ing_b2b31563e6__aws__local
question: Compare FP8, INT8, and INT4 quantization for LLM inference. How do you decide,
  and how do you validate?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 463
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:08:55-05:00'
sources: []
---

**Situation** – At a prior cloud‑AI startup we were launching an LLM‑based recommendation engine for a global e‑commerce platform. The model ran on Spot GPU instances; latency had to stay < 120 ms while cost per inference needed < $0.0003.

**Task** – Choose the right quantization (FP8, INT8, or INT4) that balanced accuracy, speed, and cost, then validate it at scale.

**Action**  
1. **Dive Deep into Accuracy Impact** – Ran a *sweep* on 10k real user queries with three quantizers using SageMaker’s `quantize` API, recording perplexity and top‑k hit‑rate.  
2. **AWS Service Stack** –  
   - **SageMaker Neo** for compiling the model to run natively on **Graviton3** (cost‑effective) or **A10g** GPUs (high throughput).  
   - **Amazon CloudWatch Metrics** to capture latency, GPU utilization, and inference cost per 1 M requests.  
3. **Decision Criteria** –  
   - *INT8*: Δ accuracy ≈ +0.3% vs FP32, latency ↓ 30%, cost ↓ 40%.  
   - *FP8*: Δ accuracy ≈ +0.5%, latency ↓ 25%, cost ↓ 35%.  
   - *INT4*: Δ accuracy +2–3% (unacceptable for recommendation relevance).  
4. **Validate at Scale** – Deployed INT8 in a blue/green SageMaker endpoint; used A/B test with 1 M live requests, measured mean latency 110 ms and hit‑rate drop < 0.5%.  

**Result** – Adopted **INT8** quantization, cutting inference cost by **42%** and maintaining < 0.5% accuracy loss, while keeping SLA compliance. Learned that *quantization trade‑offs* must be empirically measured on real traffic; the bar‑raiser would note this data‑driven ownership and rapid iteration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
