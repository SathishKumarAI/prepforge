---
qid: ing_77d8be5ab1__star__local
question: Which modules do you target with LoRA, how do you pick the rank, and what
  are the actual memory savings?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 385
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:33:42-05:00'
sources: []
---

**Situation:**  
During a research sprint at my last company we had to fine‑tune a 12‑Billion‑parameter LLaMA model on a proprietary legal‑text dataset. The GPU pool was limited to two A100s, and naive full‑finetuning would have required ~40 GB of VRAM per device—well beyond our budget.

**Task:**  
I needed to reduce the memory footprint by at least 70% while preserving accuracy within 1.5 % of the baseline perplexity on a held‑out legal corpus.

**Action:**  
I applied LoRA to the query and value projection matrices in each transformer block, because these dense layers dominate parameter count and are highly overparameterized for our domain. For rank selection I performed a quick grid search (r = 8, 16, 32) on a single A100 using a validation perplexity metric; r = 16 gave the best trade‑off. I then implemented mixed‑precision training with automatic loss scaling and wrapped the LoRA adapters in `torch.nn.ModuleList` for efficient gradient accumulation. The adapter weights (≈ 0.3 % of total parameters) were stored on CPU memory, freeing up ~25 GB per GPU.

**Result:**  
The fine‑tuned model achieved a perplexity of 12.4 versus the baseline 13.2, a 6 % relative improvement. VRAM usage dropped from 40 GB to 15 GB per GPU—a 62 % savings—allowing us to run inference on our edge servers. I learned that targeting projection layers with LoRA and tuning rank via quick validation strikes the best balance between compression and performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
