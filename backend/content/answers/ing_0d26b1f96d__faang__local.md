---
qid: ing_0d26b1f96d__faang__local
question: You are fine-tuning on a domain full of jargon and someone suggests adding
  new tokens to the tokenizer. What can go wrong, and how do you handle vocabulary
  changes correctly?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 534
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:14:33-05:00'
sources: []
---

**Clarify**  
We’re fine‑tuning an LLM on a domain with heavy jargon (e.g., biomedical). A colleague proposes adding new tokens to the tokenizer so that each term is represented exactly once. The question: *What can go wrong?* and *How do we correctly handle vocabulary changes?*

---

### Approach
1. **Identify risks** of altering the tokenizer during fine‑tuning.  
2. **Decide on a strategy** (extend vs. retrain).  
3. **Implement safely** while keeping evaluation consistent.

---

### Depth

| Risk | Why it matters |
|------|----------------|
| **Token collision** | New tokens may overlap with existing sub‑word splits, corrupting embeddings and hurting downstream performance. |
| **Embedding mismatch** | Pre‑trained weights for the new indices are random; they need proper initialization or retraining. |
| **Inference drift** | Models trained on one tokenizer will misbehave when served with a different tokenizer unless we re‑encode checkpoints. |
| **Vocabulary explosion** | Adding many tokens increases memory and slows training (larger embedding matrix, more attention heads). |

**Correct handling**

1. **Freeze the base vocab**; add new *rare* tokens only if they appear > k times.  
2. **Initialize embeddings** of added tokens by averaging sub‑word embeddings or using a pre‑training run on a small corpus.  
3. **Re‑tokenize all training data** with the updated tokenizer and re‑index the dataset.  
4. **Retrain only the new embeddings** (or fine‑tune them) while keeping the rest of the model frozen to preserve learned knowledge.  
5. **Version‑control the tokenizer**; ship the exact same tokeniser to inference.

---

### Edge Cases

- Extremely low‑frequency terms → keep as sub‑words.  
- Overlap with existing tokens → use a conflict‑resolution map.  
- Large vocab additions → consider using a *sub‑word* model (e.g., BPE) instead of explicit tokens.

---

### Optimize & Communicate

Explain that the trade‑off is between **lexical coverage** and **model stability**. Present a plan: *Add 200 domain terms, initialize embeddings via sub‑word averaging, freeze base weights, re‑index dataset, validate on held‑out jargon sentences.*  
This shows structured reasoning, awareness of pitfalls, and a concrete mitigation path—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
