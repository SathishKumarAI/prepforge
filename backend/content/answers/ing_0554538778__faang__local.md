---
qid: ing_0554538778__faang__local
question: 'Explain: 2.2 - Masked Language Modelling (MLM) — A Complete Guide to BERT
  with Code | Towards Data Science'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 607
total_tokens: 859
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:56:51-05:00'
sources: []
---

**Clarify**  
The question asks for a concise explanation of *Masked Language Modeling* (MLM), the pre‑training objective behind BERT, including how it works and why it’s effective. I’ll assume the audience knows basic NLP concepts but not the inner mechanics of MLM.

---

### 1️⃣ Approach  

1. **Define MLM** – random token masking + prediction.  
2. **Show the process** – tokenization → mask → feed‑forward → loss.  
3. **Explain benefits** – bidirectional context, pre‑training efficiency.  
4. **Give a minimal code snippet** (PyTorch) to illustrate the pipeline.  

---

### 2️⃣ Depth  

- **Masking strategy:** 15 % of tokens are selected; 80 % → `[MASK]`, 10 % → random token, 10 % unchanged.  
- **Objective:** cross‑entropy over vocabulary for each masked position.  
- **Bidirectional encoder:** Transformer layers attend to all positions, so prediction uses both left and right context—unlike unidirectional LM.  
- **Transfer learning:** Fine‑tune the same weights on downstream tasks (classification, QA) with a small head; no retraining of core model.

**Code sketch**

```python
import torch, transformers

tokenizer = transformers.BertTokenizerFast.from_pretrained('bert-base-uncased')
model     = transformers.BertForMaskedLM.from_pretrained('bert-base-uncased')

text = "The quick brown fox jumps over the lazy dog."
tokens = tokenizer(text, return_tensors='pt')
labels = tokens.input_ids.clone()

# 15% masking
prob_mask = torch.rand(labels.shape) < 0.15
mask_indices = prob_mask & (labels != tokenizer.pad_token_id)
labels[~mask_indices] = -100          # ignore in loss

tokens.input_ids[mask_indices] = tokenizer.mask_token_id
outputs = model(**tokens, labels=labels)
loss = outputs.loss   # cross‑entropy over masked tokens
```

---

### 3️⃣ Edge Cases  

- **No masks** → loss zero.  
- **All tokens masked** → unstable gradients; usually capped at ~30 %.  
- **Special tokens ([CLS], [SEP])** are never masked to preserve structure.

---

### 4️⃣ Optimize & Communicate  

- **Sampling strategy** can be tuned (e.g., dynamic masking per epoch) for better coverage.  
- **Mixed‑precision training** reduces memory and speeds up inference.  
- I would explain the trade‑off: more masks → richer context but higher loss variance; fewer masks → faster convergence but weaker pre‑training.

This structured walk‑through covers the *why*, *how*, and *implementation* of MLM in BERT, ready for a FAANG interview scenario.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
