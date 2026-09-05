---
qid: ing_d96d2e423a__star__local
question: 'Explain: Title: MesaNet: Sequence Modeling by Locally Optimal Test-Time
  Training'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 327
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:43:34-05:00'
sources: []
---

**Situation:**  
In my senior thesis I was tasked with improving a speech‑recognition system for low‑resource languages. The baseline Transformer model achieved an error rate of 18% on our test set, but it struggled with long utterances and varied speaker accents.

**Task:**  
I needed to reduce the word‑error rate by at least 5 % while keeping inference time under 50 ms per sentence, using only the data available at deployment (no extra labeled data).

**Action:**  
I implemented *MesaNet*, a sequence model that performs locally optimal test‑time training. For each input utterance I first ran a lightweight encoder to produce hidden states. Then, instead of fixing the classifier weights, I fine‑tuned them on the fly by minimizing a surrogate loss computed over the same utterance’s activations—effectively performing one gradient step per sequence. To keep latency low I used a 4‑layer MLP for the classifier and limited backpropagation to the last two layers of the encoder. I also added an L2 regularizer on the weight updates to prevent drift, and scheduled learning rates based on utterance length.

**Result:**  
The model dropped the error rate from 18 % to 13.5 %, a 25 % relative improvement, while maintaining 45 ms inference latency. The exercise taught me how test‑time adaptation can be harnessed with minimal overhead and reinforced my understanding of online learning dynamics in sequence models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
