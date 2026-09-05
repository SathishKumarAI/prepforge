---
qid: ing_2d368b3dfc__star__local
question: 'Explain: Parameter Counts — Transformer Architecture'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 356
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:58:29-05:00'
sources: []
---

**Situation:** While leading a research sprint to build an on‑device chatbot for our mobile app, the engineering team discovered that the standard GPT‑2 model (1.5 B parameters) would exceed the memory budget of our target smartphones.

**Task:** I had to reduce the model’s parameter count by at least 70% without dropping more than 10 % in BLEU score on a held‑out conversational dataset, so the chatbot stayed responsive and accurate.

**Action:** First, I mapped each transformer component—embedding matrix, multi‑head attention weights, feed‑forward layers—to its parameter contribution. Using PyTorch’s `torch.nn.utils.prune` API, I applied structured pruning to prune entire heads in the attention modules (reducing head count from 12 to 4) and performed low‑rank factorization on the large weight matrices. Then, I re‑trained with a cosine learning rate schedule and mixed precision training for 5 epochs, monitoring loss and perplexity. Finally, I validated performance against the test set, comparing BLEU scores and latency.

**Result:** The pruned model dropped from 1.5 B to 300 M parameters (a 80 % reduction). BLEU remained at 0.82 versus 0.84 baseline, and inference latency on a Snapdragon 8 Gen 2 dropped from 350 ms to 90 ms per turn. I learned that systematic component‑level analysis combined with targeted pruning can achieve dramatic size reductions while preserving quality, a technique we now standardize for all mobile NLP deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
