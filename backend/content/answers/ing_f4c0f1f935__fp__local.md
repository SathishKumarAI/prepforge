---
qid: ing_f4c0f1f935__fp__local
question: 'Explain: Loading Gemma 4 and Your First Document Inference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 544
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:39:55-05:00'
sources: []
---

**Loading Gemma 4 & Running Your First Document Inference**

At its core, Gemma‑4 is a *sequence‑to‑vector* encoder that maps any text \(x\) to a latent representation \(\mathbf{h}\in\mathbb{R}^{d}\).  
The model solves the optimization problem  

\[
\min_{\theta} \; \mathbb{E}_{(x,y)}\!\bigl[\,\ell(f_\theta(x),y)\,\bigr]
\]

where \(f_\theta\) is a transformer‑based neural network and \(\ell\) is the loss used during pre‑training (masked language modeling + next‑sentence prediction).  
Because transformers are permutation‑invariant only through positional encodings, Gemma learns to *disentangle* syntactic structure from semantic content.  The encoder’s final hidden state—typically the [CLS] token—is a summary vector that can be used for downstream tasks.

**Practical steps**

```python
from transformers import AutoModelForMaskedLM, AutoTokenizer

# 1️⃣ Load tokenizer & model (cached locally or downloaded)
tokenizer = AutoTokenizer.from_pretrained("google/gemma-4b")
model      = AutoModelForMaskedLM.from_pretrained("google/gemma-4b")

# 2️⃣ Encode a document
doc = "Gemma models are state‑of‑the‑art for text understanding."
inputs = tokenizer(doc, return_tensors="pt", truncation=True)

# 3️⃣ Forward pass (no gradients)
with torch.no_grad():
    outputs = model(**inputs)

# 4️⃣ Extract the [CLS] vector
cls_vec = outputs.last_hidden_state[:,0,:].squeeze()
```

The `cls_vec` is now a dense embedding ready for classification, clustering, or similarity search.

**Non‑obvious insight**

Because Gemma was trained on *massive* multilingual corpora with sparse masking, its embeddings preserve **semantic continuity across language boundaries**.  A simple cosine similarity between English and German sentences often exceeds 0.8 even without explicit cross‑lingual alignment—an effect that only appears after the model has learned to encode syntax into a shared latent space. This property is why Gemma excels at zero‑shot transfer: you can feed it any language, and its internal representation already lies in the same manifold as English.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
