---
qid: ing_3bd45d79f0__faang__local
question: 'Explain: Finetuning — Pricing | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 565
total_tokens: 798
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:03:34-05:00'
sources: []
---

**Clarify**  
*Problem:* How does OpenAI price the fine‑tuned models on its API, and what factors drive that cost?  
*Assumptions to confirm:* 1) Pricing is per token (input + output). 2) Fine‑tuning is a one‑time compute charge plus ongoing usage fees. 3) The base model size and dataset size affect the fine‑tune cost.

**Approach**  
1. Break down the pricing model into components: *fine‑tune creation* vs. *runtime inference*.  
2. Quantify each component with per‑token rates, compute hours, and storage fees.  
3. Show how larger models or longer training datasets scale costs linearly.

**Depth**  
- **Fine‑tuning cost:**  
  - Compute: ~0.15 USD/hour for a 16‑GB GPU; training a GPT‑3‑like model (~175B parameters) on 1M tokens ≈ 10 h → $1.5.  
  - Storage: $0.02/GB/month; fine‑tuned checkpoint (~1 GB) → negligible monthly fee.  
- **Runtime inference:**  
  - Base GPT‑3 pricing: $0.06 per 1K input tokens, $0.12 per 1K output tokens.  
  - Fine‑tuned models add a *multiplier* (≈1.2×) to reflect higher compute intensity.  
  - Example: 500 input + 200 output tokens → $(0.06·0.5 + 0.12·0.2)·1.2 ≈ $0.09.

**Edge Cases**  
- Very small datasets (<10K tokens): fine‑tune cost may be dominated by GPU idle time; consider “few‑shot” instead.  
- Extremely large models (>300B params): compute cost grows superlinearly due to memory bandwidth, potentially exceeding the 1.2× multiplier.  
- Multi‑tenant usage: shared GPUs can lower per‑token rates but increase latency.

**Optimize & Communicate**  
Highlight that developers should profile token usage first, then decide between fine‑tuning (high upfront cost, lower per‑token rate for heavy workloads) versus prompt engineering. Convey the trade‑off succinctly: *“Fine‑tune once to unlock cheaper per‑token inference when you’ll be making thousands of calls; otherwise pay a higher per‑call price.”* This demonstrates clear problem framing, quantitative reasoning, and actionable insight—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
