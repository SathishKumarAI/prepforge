---
qid: ing_5010e9b20d__think__local
question: Why do LLMs use subword tokenization instead of whole words or raw characters?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 544
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:18:54-05:00'
sources: []
---

**1️⃣ Clarify & Assume**  
- Identify the question’s core: *why* LLMs pick sub‑words over words/characters.  
- Assume we’re speaking to a reader with basic NLP background but not deep on tokenizers.

**2️⃣ Mental Model**  
Use the **vocabulary trade‑off framework**:  
- **Coverage** – how many tokens cover the corpus.  
- **Granularity** – size of each token (information per symbol).  
- **Model efficiency** – sequence length vs computational cost.

Sub‑word tokenizers sit between word and character extremes, balancing these axes.

**3️⃣ Step‑by‑Step Reasoning**  

| Level | Pros | Cons | Why LLMs pick it |
|-------|------|------|------------------|
| **Whole words** | 1 token per word → short sequences. | OOV for unseen words; huge vocab (millions) → memory & training cost. | Unfeasible at scale. |
| **Characters** | Zero OOV; tiny vocab (~100). | Very long sequences → deeper attention, slower inference, harder learning of semantics. | Too granular for efficient language modeling. |
| **Sub‑words (BPE/WordPiece)** | • Keeps common words intact (few tokens). <br>• Breaks rare words into known pieces → no OOV. <br>• Reasonable vocab size (~30k–50k). | Still some sub‑word noise; need to learn piece boundaries. | Hits sweet spot: manageable sequence length, good coverage, efficient learning.

Explain that during training the tokenizer is learned from data, so it adapts to frequency patterns and yields a compact yet expressive vocabulary. This reduces positional encoding load and keeps attention matrices tractable while still allowing the model to handle any input string.

**4️⃣ Common Traps**  
- Forgetting that *OOV* isn’t just a problem; it breaks downstream tasks.  
- Assuming characters are always bad—some models (e.g., character‑level RNNs) work for short texts.  
- Overlooking the fact that sub‑word boundaries are learned, not fixed.

**5️⃣ Sanity Check & Communicate**  
- Rephrase: “Sub‑words give us a vocabulary large enough to capture meaning but small enough that sequences stay short.”  
- Verify numbers: 30k tokens → average 5–6 chars → sequence length ~200 for 1k words, acceptable.  
- Conclude with a concise summary linking trade‑offs back to the question.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
