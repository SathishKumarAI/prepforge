---
qid: ing_5adc941de6__faang__local
question: 'Explain: Classifying Documents & Queries by Language'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 492
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:14:41-05:00'
sources: []
---

**Clarify**  
We need a system that, given any text document or user query, predicts its language (English, Spanish, Mandarin, etc.) and routes it appropriately. Assumptions: *a)* The input is plain text; *b)* We have labeled data for a fixed set of target languages; *c)* Real‑time inference is required for queries.

**Approach**  
1. **Feature extraction** – use sub‑word n‑grams (character 3–5 grams) to capture orthographic patterns.  
2. **Model selection** – a lightweight multiclass classifier: either a fast linear model (Logistic Regression / LinearSVM) or a small neural network (embedding layer → LSTM/Transformer encoder).  
3. **Training pipeline** – balanced sampling, cross‑validation, and early stopping on validation loss.  
4. **Deployment** – serve via a REST endpoint with GPU offload only for the model; otherwise CPU is sufficient.

**Depth**  
- *Feature vector size*: 10k–30k unique n‑grams → sparse matrix → O(#tokens) time per doc.  
- *Model complexity*: LinearSVM: inference ≈ O(#features). Neural net: O(seq_len × hidden_dim).  
- *Accuracy target*: > 99% on in‑distribution languages; < 1% mis‑class for unseen scripts.  
- *Handling code‑mixed text*: add a “mixed” class and use language ID tags from pre‑processing.

**Edge Cases**  
- Extremely short inputs (≤3 chars) → fallback to default language or prompt user.  
- Rare or low‑resource languages → augment with synthetic data or transfer learning.  
- Script detection first: if script is unique, skip heavy model inference.

**Optimize & Communicate**  
- Compress the model (quantization, pruning) for mobile edge devices.  
- Use batch inference for high‑throughput query streams.  
- Explain trade‑offs: a tiny neural net gives higher recall on ambiguous inputs but costs more latency; a linear model is ultra‑fast but may misclassify code‑mixed text.  

This design balances speed, accuracy, and scalability—key criteria for production ML at FAANG.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
