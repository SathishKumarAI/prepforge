---
qid: ing_2ad3950d5b__star__local
question: 'Explain: Multi-LoRA Serving — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 377
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:53:42-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, we were rolling out an AI‑driven fraud detection model to production. The base transformer was too large for our on‑prem GPU cluster, and the team needed to deploy multiple LoRA adapters—one per card brand—to handle subtle regional differences without retraining the core.

**Task**  
Build a lightweight inference pipeline that could serve all LoRA adapters simultaneously, keep latency under 50 ms, and allow hot‑swap of adapters for A/B testing.

**Action**  
I designed a multi‑LoRA serving layer on top of TorchServe. First, I wrapped each LoRA module in a `torch.nn.Module` and registered them as separate “model variants” within a single TorchServe archive. Then I implemented a custom request router that extracted the card brand from the payload, looked up the corresponding LoRA weights in an in‑memory hash map, and fused them on‑the‑fly with the base model using `torch.compile` to fuse operations. To keep memory usage low, I used 8‑bit quantization for the adapter weights and swapped them out of RAM when idle via a least‑recently‑used cache. Finally, I added a Prometheus exporter to track per‑adapter latency.

**Result**  
The pipeline handled 3,000 TPS with an average latency of 42 ms, meeting our SLA. Switching adapters in production took under 2 s, enabling rapid A/B tests that increased fraud detection accuracy by 12% across all brands. I learned how to balance modularity and performance by combining dynamic adapter loading with static model compilation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
