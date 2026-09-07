---
qid: ing_512c4aeded__faang__local
question: 'Explain: 1.1 - Encoder-Only Architecture — A Complete Guide to BERT with
  Code | Towards Data Science'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 593
total_tokens: 840
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:53:16-05:00'
sources: []
---

**Clarify**

The interview asks you to explain *Encoder‑only* architectures—specifically how BERT works and why it’s a powerful language model.  
Assumptions: the candidate knows basic NLP (tokenization, embeddings) but not deep transformer internals; they should illustrate with code snippets.

---

**Approach**

1. **Define the encoder‑only paradigm** – no decoder, only self‑attention layers.  
2. **Show BERT’s core pipeline** – input prep → embedding sum → stacked transformer blocks → pooled output.  
3. **Illustrate a minimal implementation** in PyTorch (embedding + multi‑head attention + feed‑forward).  
4. **Highlight key benefits**: bidirectionality, pre‑training objectives (MLM & NSP), transferability.

---

**Depth**

- **Input representation**  
  ```python
  input_ids = tokenizer("Hello world", return_tensors="pt")["input_ids"]
  token_type_ids = torch.zeros_like(input_ids)      # single sentence
  attention_mask = torch.ones_like(input_ids)
  ```
- **Embedding layer** – word, position, segment embeddings summed.  
- **Transformer block (simplified)**  

```python
class EncoderBlock(nn.Module):
    def __init__(self, d_model=768, heads=12):
        super().__init__()
        self.attn = nn.MultiheadAttention(d_model, heads)
        self.ff  = nn.Sequential(
            nn.Linear(d_model, 4*d_model),
            nn.GELU(),
            nn.Linear(4*d_model, d_model))
    def forward(self, x, mask):
        attn_out, _ = self.attn(x, x, x, key_padding_mask=mask)
        x = x + attn_out
        x = x + self.ff(x)
        return x
```
- **Pre‑training objectives**  
  - *Masked Language Modeling (MLM)*: randomly mask tokens and predict them.  
  - *Next Sentence Prediction (NSP)*: binary classification of sentence pairs.

- **Fine‑tuning** – add a task head on top of the pooled `[CLS]` token.

---

**Edge Cases**

- Very long sequences → O(n²) attention cost; use sparse or linearized attention.  
- Tokens not in vocab → unknown handling (`[UNK]`).  
- Padding: ensure `attention_mask` correctly masks padded positions.

---

**Optimize & Communicate**

Explain that encoder‑only models excel at capturing context from both sides, enabling downstream tasks with a single forward pass. Mention scaling tricks (parameter sharing, mixed precision) and trade‑offs between depth vs width. Conclude by summarizing how BERT’s architecture makes it the go‑to foundation for modern NLP.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
