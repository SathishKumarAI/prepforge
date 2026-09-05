---
qid: ing_1df56b5424__star__local
question: 'Explain: PEFT: LoRA and QLoRA — Fine Tuning And Alignment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 377
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:29:50-05:00'
sources: []
---

**Situation:**  
In early 2024 I was tasked with improving the inference latency of our customer‑facing chatbot that ran on a 13 GB GPU cluster. The base model, a 7B transformer, delivered great responses but exceeded our 200 ms per request SLA after adding a new domain‑specific dataset.

**Task:**  
I needed to fine‑tune the model for the new domain while keeping memory usage below 8 GB and inference time under 150 ms. Traditional full‑parameter fine‑tuning was out of the question because it would require >20 GB VRAM and a prohibitive training budget.

**Action:**  
I adopted **LoRA (Low‑Rank Adaptation)**, inserting trainable rank‑2 matrices into each attention layer instead of updating all weights. This reduced trainable parameters to ~0.5 % of the base model. To further shrink memory, I switched to **QLoRA**, quantizing the frozen backbone to 4‑bit while keeping LoRA updates in float32. Training ran on a single A100 for 3 hours with a learning rate schedule that froze early layers and warmed up later ones. I also implemented prompt‑tuning for domain phrases, ensuring alignment without altering the model’s core knowledge.

**Result:**  
The fine‑tuned model achieved a 12 % reduction in perplexity on our validation set, matched the new domain’s style, and ran at 140 ms per inference on an RTX 3090—well within SLA. Memory usage dropped to 7.2 GB. I learned that combining LoRA with QLoRA can deliver domain expertise while respecting strict hardware constraints, a technique now standard in our deployment pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
