---
qid: ing_12940273a5__fp__local
question: 'Explain: 1.2 - Pre-training Approach — A Complete Guide to BERT with Code
  | Towards Data Science'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 686
total_tokens: 869
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:45:10-05:00'
sources: []
---

**Why pre‑training matters for language models**

The core task is to learn a probability distribution \(P(w_1,\dots ,w_n)\) over token sequences so that we can predict missing words or generate fluent text. Directly estimating this joint distribution with a neural net would require an astronomically large dataset and training time. Instead, BERT tackles the problem in two stages:

1. **Self‑supervised pre‑training**:  
   *Masked Language Modeling (MLM)* – Randomly mask 15 % of tokens and train the model to recover them.  
   *Next Sentence Prediction (NSP)* – Train a binary classifier on pairs of sentences to predict if the second follows the first.

These objectives are **proxy tasks** that approximate the true objective while being computationally cheap. The MLM forces the network to capture bidirectional context, whereas NSP encourages learning inter‑sentence coherence—both are essential for downstream NLP.

2. **Fine‑tuning**:  
   Add a task‑specific head (classification, question answering) and continue training on labeled data. Because the pre‑trained weights already encode rich linguistic knowledge, only a few epochs of fine‑tuning suffice.

---

### The deeper principle

BERT’s architecture is a stack of Transformer encoder layers, each implementing self‑attention:

\[
\text{Attention}(Q,K,V) = \operatorname{softmax}\!\left(\frac{QK^\top}{\sqrt{d_k}}\right)V
\]

Self‑attention lets every token attend to all others, yielding a representation that is a weighted sum of the entire sentence. This aligns with **information theory**: by maximizing mutual information between masked tokens and their context, BERT learns features that are maximally informative about the missing word.

---

### One non‑obvious insight

The *masked* tokens are not chosen uniformly at random but with 80 % masking as `[MASK]`, 10 % replaced by a random token, and 10 % left unchanged. This slight perturbation prevents the model from simply learning to copy the mask symbol; it forces the network to infer the missing word purely from context. Without this trick, BERT would overfit to the special `[MASK]` token and perform poorly on downstream tasks where masks never appear.

---

#### Quick code skeleton

```python
from transformers import BertTokenizer, BertForMaskedLM, AdamW

tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model     = BertForMaskedLM.from_pretrained('bert-base-uncased')

inputs = tokenizer("The quick brown [MASK] jumps over the lazy dog.", return_tensors='pt')
labels = inputs.input_ids.detach().clone()
labels[labels == tokenizer.mask_token_id] = -100  # ignore loss on non‑masked tokens

optimizer = AdamW(model.parameters(), lr=5e-5)
loss, _ = model(**inputs, labels=labels)          # forward + MLM loss
loss.backward(); optimizer.step()
```

The same encoder can then be fine‑tuned for classification or QA by adding a task head and training on labeled data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
