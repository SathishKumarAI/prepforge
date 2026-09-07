---
qid: ing_57020d4018__faang__local
question: 'Explain: Comparison — Tokenization Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 633
total_tokens: 863
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:06:24-05:00'
sources: []
---

**Tokenization in NLP – A Deep‑Dive Comparison**

| Aspect | Word‑based | Sub‑word (BPE, SentencePiece) | Character |
|--------|------------|--------------------------------|-----------|
| **Vocabulary size** | Small → OOV issues | Medium → balances coverage & model size | Huge → sparse |
| **Granularity** | Semantic units | Morphological pieces | Phonetic units |
| **Handling OOV** | Unknown token | Rare word split into known sub‑words | Always representable |
| **Efficiency** | Fast tokenization | Slight overhead (merge rules) | Slower due to many tokens |
| **Model size / speed** | Small model, fast inference | Moderate | Large model, slower inference |

### 1. Clarify
We’re comparing three mainstream tokenizers: word‑based, sub‑word, and character. Key assumptions: target language is morphologically rich; we care about downstream transformer performance and inference latency.

### 2. Approach
- Outline vocabulary trade‑offs.
- Highlight how each tokenizer affects OOV handling.
- Discuss computational cost (tokenization time & model length).
- Provide typical use cases for each method.

### 3. Depth
**Word‑based** tokenizers split on spaces/punctuation; they produce a compact sequence but any unseen word becomes `<unk>`. This hurts performance on rare or domain‑specific terms.

**Sub‑word** (Byte Pair Encoding, SentencePiece) learns merge operations to build a fixed vocabulary (~30k tokens). Rare words are broken into known sub‑words, reducing OOV while keeping sequence length reasonable. Transformers trained with BPE achieve ~1–2% higher BLEU than word models on many benchmarks.

**Character** tokenizers encode every glyph; they guarantee 100 % coverage but inflate sequence length by an order of magnitude (e.g., “hello” → 5 tokens vs. 1). This forces deeper layers or longer context windows, increasing GPU memory and latency.

### 4. Edge Cases
- Extremely low‑resource languages: sub‑word may still struggle if training data is tiny.
- Mixed‑script inputs: character tokenization handles script switches gracefully.
- Real‑time systems (chatbots): word or sub‑word preferred for speed; character tokenizers would time out.

### 5. Optimize & Communicate
If latency is critical, choose a sub‑word tokenizer with a small vocabulary (~10k) and pre‑compute merge tables to avoid on‑the‑fly lookups. For domain adaptation, fine‑tune the BPE merges on in‑domain corpora—this keeps OOV low without blowing up the vocab.

**Takeaway:**  
Sub‑word tokenization offers the sweet spot for most production NLP pipelines: it mitigates OOV, keeps model size manageable, and preserves inference speed. Word tokenizers are simpler but brittle; character tokenizers guarantee coverage at a steep computational cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
