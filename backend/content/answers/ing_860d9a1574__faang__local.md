---
qid: ing_860d9a1574__faang__local
question: 'Explain: How to prepare — Perplexity'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 494
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:56:02-05:00'
sources: []
---

**1️⃣ Clarify**  
The interviewer asks how to *prepare* a language model for **perplexity** evaluation.  
Assumptions: we have a trained transformer (or RNN) and want to compute perplexity on a held‑out corpus; we can access logits, batch size limits, GPU memory, etc.

**2️⃣ Approach**  
1. Tokenize the test set with the same vocabulary.  
2. Feed batches through the model to obtain next‑token logits.  
3. Convert logits → log‑probabilities (log softmax).  
4. Accumulate cross‑entropy loss across all tokens.  
5. Exponentiate average loss to get perplexity.

**3️⃣ Depth**  
```python
import torch, math
model.eval()
loss_fct = torch.nn.CrossEntropyLoss(reduction='sum')
total_log_likelihood, total_tokens = 0., 0

for batch in dataloader:
    inputs, labels = batch['input_ids'], batch['labels']
    outputs = model(inputs)          # shape: (B,T,V)
    logits = outputs.logits[:, :-1].contiguous().view(-1, vocab_size)
    target = labels[:, 1:].contiguous().view(-1)

    loss = loss_fct(logits, target)
    total_log_likelihood += loss.item()
    total_tokens += target.numel()

perplexity = math.exp(total_log_likelihood / total_tokens)
```
Complexity: **O(N)** tokens; memory proportional to batch size. Trade‑off: larger batches → better GPU utilization but higher VRAM.

**4️⃣ Edge Cases**  
- *Special tokens*: ignore `[PAD]` in loss calculation.  
- *Very long sequences*: truncate or use sliding windows.  
- *Numerical underflow*: use log‑softmax and `reduction='sum'`.  
- *Different vocab sizes*: ensure token IDs match model’s embedding matrix.

**5️⃣ Optimize & Communicate**  
Explain that batching reduces overhead, and using `torch.no_grad()` speeds inference. If perplexity is too high on a specific domain, suggest fine‑tuning on in‑domain data or augmenting the vocabulary. Conclude by highlighting how perplexity directly reflects model fit: lower values → better predictive power.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
