---
qid: ing_6315a3afb2__star__local
question: 'Explain: Rethinking On-Policy Distillation of Large Language Models: Phenomenology,
  Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 382
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:45:56-05:00'
sources: []
---

**Situation:**  
At my previous startup we were launching a conversational AI for customer support. The flagship model was a 12‑B parameter LLM, but it required >10 GB of VRAM and incurred $0.15 per inference on our cloud budget. Our product roadmap demanded an in‑house assistant that could run on edge devices with <2 GB memory.

**Task:**  
I had to create a distilled model that preserved the large model’s accuracy while fitting within the hardware constraints, without compromising real‑time latency (<200 ms) or increasing inference cost.

**Action:**  
I re‑implemented the “on‑policy distillation” framework from the paper. First, I built an on‑policy sampler that generated prompts from the target domain and let the teacher LLM produce responses. Then I trained a student transformer (4‑B parameters) using knowledge‑distillation loss + KL divergence to match token logits, but with a policy gradient term that weighted examples by their perplexity—ensuring the student focused on difficult tokens. To keep training efficient, I used mixed‑precision and a 16× larger learning rate schedule, and wrapped the whole pipeline in Ray for distributed inference.

**Result:**  
The distilled model ran at ~180 ms per turn on a single NVIDIA RTX 2060 (2 GB VRAM) and achieved 93% of the teacher’s BLEU score on our validation set. Cost per inference dropped from $0.15 to <$0.02, enabling us to launch the feature within budget and meet the deadline. I learned that policy‑aware sampling can dramatically reduce training time while preserving quality in large‑scale distillation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
