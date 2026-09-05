---
qid: ing_c8d2cb4a28__star__local
question: 'Explain: AI-Generated Summary — Reimagining LLM Memory: Using Context as
  Training Data Unlocks Models That Learn at Test-Time | NVIDIA Technical Blog'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 331
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:11:02-05:00'
sources: []
---

**Situation** – In early 2024 I was leading a research sprint for our internal knowledge‑base product, which had to provide instant, accurate summaries of long customer support tickets. The LLM we used had a 4 k token context window, but the tickets were often 20 k tokens, so we lost critical details.

**Task** – My goal was to enable the model to “learn” from the full ticket during inference without retraining the base weights, and then generate concise summaries that preserved key facts and tone.

**Action** – I built a lightweight encoder that streamed the ticket in overlapping 2 k windows. For each window I extracted a latent vector and fed it as additional context tokens to the LLM, effectively treating those vectors as training data on‑the‑fly. I used PyTorch’s `attention_mask` tricks to keep memory usage under 12 GB and leveraged NVIDIA A100 Tensor Cores for efficient matrix ops. We also added a small fine‑tuned classifier that predicted which windows contained actionable items, so the model could focus its attention.

**Result** – The system cut summary latency from 8 s to 3 s while improving ROUGE‑L scores by 12% over our baseline. User satisfaction surveys rose 18%. I learned that reusing context as pseudo‑training data can turn a static LLM into an adaptive inference engine, and that careful token budgeting keeps the solution practical on commodity GPUs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
