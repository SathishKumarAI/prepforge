---
qid: ing_956d76a357__fp__local
question: 'Q: What happens when switching tokenizers between models?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 387
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:23:05-05:00'
sources: []
---

When a tokenizer is swapped from one model to another, you are effectively changing the *representation space* in which the network interprets text.  
A tokenizer partitions an input string into sub‑tokens (bytes, characters, word pieces) and assigns each a unique integer ID. Those IDs are then embedded into dense vectors that the neural net learns to use. If the mapping from text to IDs changes, the downstream embeddings shift dramatically: a word that once mapped to an embedding close to “king” may now map to one far away, because its new tokenization is different.

From a geometric viewpoint, each tokenizer defines a discrete basis for a high‑dimensional Hilbert space. Switching bases without re‑training the model rotates and skews this space; the learned weights no longer align with the new basis vectors. Consequently, predictions collapse to near‑random unless the network has been fine‑tuned on data tokenized in that new scheme.

The deeper principle is **information preservation**: a tokenizer must preserve the semantics of the original text while providing a tractable vocabulary size. The *entropy* of the token distribution should be low enough for efficient learning but high enough to avoid catastrophic aliasing (different words mapping to the same token). When you switch tokenizers, you alter this entropy landscape; unless the model is retrained, its internal representation of that altered entropy is mismatched.

**Non‑obvious insight:** Even if two tokenizers produce identical *character* sequences for a given sentence, their vocabularies may differ in frequency statistics. A tokenizer trained on a different corpus can introduce spurious “rare” tokens that the model has never seen, causing out‑of‑vocabulary (OOV) issues and drastically reducing performance—something many overlook when simply swapping tokenizers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
