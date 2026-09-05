---
qid: ing_19a8a9c9db__eli5__local
question: Compare BPE, WordPiece, and Unigram tokenization. Why did Hugging Face write
  `tokenizers` in Rust, and what tokenizer bugs bite people in practice?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 293
total_tokens: 475
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:16:51-05:00'
sources: []
---

Think of a text as a long string of beads on a necklace.  
**BPE (Byte‑Pair Encoding)** starts with every single character bead, then repeatedly fuses the most common adjacent pair into a new, larger bead—like buying bulk packs of pearls.  
**WordPiece** is similar but it only merges pairs that already exist in a fixed vocabulary; it’s like a jeweler who can only use approved gem shapes.  
**Unigram** works differently: it begins with a huge set of possible beads (the whole language) and then prunes the least useful ones, keeping the most likely pieces—think of a chef choosing the best ingredients from a pantry.

Hugging Face wrote **`tokenizers` in Rust** because Rust gives low‑level speed and memory safety, so tokenizing millions of words is fast and less error‑prone.  

In practice, people run into bugs when tokenizers handle special characters or whitespace inconsistently:  
– unseen punctuation can be split oddly,  
– case‑sensitivity may change the meaning,  
– and different models expect slightly different vocabularies, so a “clean” sentence can become garbled after tokenization.  

These quirks usually surface in downstream tasks like language modeling or translation, where a mis‑tokenized word can derail the whole prediction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
