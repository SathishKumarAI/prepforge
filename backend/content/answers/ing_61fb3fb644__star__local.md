---
qid: ing_61fb3fb644__star__local
question: What is loss masking in SFT, and why do you mask the prompt tokens?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 348
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:44:05-05:00'
sources: []
---

**Situation** – While fine‑tuning a GPT‑2 base on our customer support dataset, I noticed the validation perplexity was hovering around 18 even after several epochs, far higher than the baseline of 12 on the public test set.

**Task** – The goal was to reduce overfitting and ensure the model only learns from the target response, not from the instruction prompt that precedes each example. I needed a way to prevent the loss function from penalizing predictions on prompt tokens.

**Action** – In our training loop (PyTorch + HuggingFace Trainer), I added a custom `loss_mask` tensor: for every batch I set mask values to 0 for all positions belonging to the instruction prompt and 1 elsewhere. The loss was computed as  
```python
masked_loss = loss * loss_mask
loss = masked_loss.sum() / loss_mask.sum()
```  
This ensured gradients flowed only through the answer tokens. I also verified the mask by printing a few token indices and confirming the prompt positions were zeroed.

**Result** – After implementing loss masking, validation perplexity dropped to 12.4 within five epochs, matching the baseline. The model’s response quality improved noticeably—response accuracy increased from 78% to 91%. I learned that proper mask construction is critical in SFT; otherwise the model can learn to predict prompts, hurting downstream performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
