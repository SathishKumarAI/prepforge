---
qid: ing_a79027b274__star__local
question: 'Explain: Hard Label Distillation — Knowledge Distillation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 354
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:07:52-05:00'
sources: []
---

**Situation** – At my previous startup we had a large transformer model for intent classification that scored 94 % accuracy but was too heavy for the edge device our customers used. The deployment limit was 50 MB and inference time under 30 ms.

**Task** – I needed to create a lightweight student network that could be shipped to devices while keeping performance within 2 % of the teacher’s accuracy, using only hard‑label distillation because we couldn’t rely on soft targets due to limited GPU memory for training.

**Action** – I first froze the teacher and generated hard labels (argmax outputs) for a 5M example dataset. Then I designed a shallow CNN student with 3 convolutional layers plus a global average pooling layer, keeping the parameter count under 0.8 M. During training I used a weighted cross‑entropy loss that blended the true label loss and the teacher’s hard label loss (α=0.7). I also applied knowledge‑guided data augmentation: synthetic paraphrases were generated to expose the student to diverse phrasing while preserving the teacher’s decision boundaries.

**Result** – The distilled model ran at 18 ms on a Snapdragon 855, 30 % smaller than the original, and achieved 92.8 % accuracy—only 1.2 % below the teacher. I learned that even with hard labels, carefully balancing loss terms and augmenting data can preserve most of the teacher’s knowledge while meeting strict deployment constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
