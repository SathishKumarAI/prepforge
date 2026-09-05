---
qid: ing_9050c42c8a__star__local
question: 'Explain: Soft Label Distillation (Temperature Scaling)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 338
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:21:20-05:00'
sources: []
---

**Situation:**  
At my previous company we were training a vision‑model to detect defects on an assembly line. The student network was a lightweight MobileNet, but its accuracy lagged behind the heavy ResNet teacher by almost 4 % top‑5.

**Task:**  
I had to transfer knowledge from the ResNet into the MobileNet so it could match performance while keeping inference under 15 ms on an edge device.

**Action:**  
I implemented soft‑label distillation with temperature scaling. First, I ran the teacher on a validation set and captured its logits. Then I divided those logits by a temperature \(T=4\) before applying softmax, producing softer probability distributions that highlight class similarities. I added a KL‑divergence loss between the student’s softened outputs and the teacher’s, weighted 0.7, and kept the standard cross‑entropy with one‑hot labels for the remaining 0.3 weight. Training used PyTorch, an Adam optimizer, and early stopping on validation loss. I also experimented with a schedule that gradually increased \(T\) to 8 over epochs to encourage exploration.

**Result:**  
The MobileNet’s top‑5 accuracy jumped from 81 % to 86.2 %, matching the teacher while staying within the latency budget. The exercise taught me how temperature controls entropy and balances hard versus soft supervision, a trick I now apply whenever deploying compact models in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
