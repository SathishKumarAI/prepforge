---
qid: ing_76c4a85fe0__star__local
question: You have one on-device base model but a dozen features - summarization,
  rewriting, reply suggestions, tone adjustment. How do you specialise without shipping
  a dozen models?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 348
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:31:21-05:00'
sources: []
---

**Situation:**  
At my last startup we had a single on‑device transformer model that was fine‑tuned for general language understanding. The product roadmap called for 12 distinct features—summarization, rewriting, reply suggestions, tone adjustment, style transfer, and more—yet shipping 12 separate models would double storage and increase update latency.

**Task:**  
I needed to enable all 12 feature modes while keeping the on‑device footprint under 30 MB and maintaining <200 ms inference per request.

**Action:**  
I adopted a modular “adapter” strategy:  
1. Trained lightweight adapter layers (≈5 k parameters each) for every feature, freezing the base weights.  
2. Built a tiny dispatcher that injects the relevant adapter based on a one‑byte feature flag in the prompt.  
3. Leveraged dynamic quantization (int8) and fused adapters into the core graph to keep runtime overhead minimal.  
4. Implemented a hybrid fallback: if the device’s GPU is idle, we offload heavy features to the cloud; otherwise, we use the on‑device adapters.

**Result:**  
The model size grew from 22 MB to just 25 MB, inference latency stayed at ~180 ms for all modes, and user engagement metrics rose by 18% across the board. I learned that careful adapter design and smart feature routing can scale multi‑capability AI without bloating the base model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
