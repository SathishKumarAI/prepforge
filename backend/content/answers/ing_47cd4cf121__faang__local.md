---
qid: ing_47cd4cf121__faang__local
question: 'Explain: Unigram (SentencePiece) — Tokenization Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 585
total_tokens: 820
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:30:58-05:00'
sources: []
---

**Unigram / SentencePiece Tokenization – A FAANG‑style deep dive**

| Stage | What I’d do |
|-------|-------------|
| **Clarify** | *Problem*: Explain how the Unigram language model used by SentencePiece tokenizes text, why it’s preferable to BPE, and what trade‑offs it introduces. <br>*Assumptions*: We’re dealing with subword vocabularies for neural MT or large LMs; we want deterministic tokenization that supports unknown words. |
| **Approach** | 1. Outline the Unigram LM objective.<br>2. Show how SentencePiece learns a vocabulary by pruning tokens that minimize perplexity.<br>3. Compare to BPE (merging) and discuss determinism, OOV handling, and model size. |
| **Depth** | - **Model**: Each token \(t\) has a prior probability \(P(t)\). The probability of a sentence is the product of its tokens’ priors; we maximize log‑likelihood over corpus. <br>- **Training**: Start with all possible byte‑pair splits (or character n‑grams), then iteratively delete the token whose removal causes the smallest drop in likelihood. This yields an *optimal* subword set under the unigram assumption. <br> - **Tokenization**: Greedy left‑to‑right decoding using a trie of learned tokens, guaranteeing that every input string is segmented into known pieces (no OOVs). <br>- **Complexity**: Training is \(O(N \log V)\) with N ≈ corpus size and V the vocabulary; inference tokenization is linear in sentence length. |
| **Edge Cases** | • Extremely rare words may be split into many tiny tokens, inflating sequence length.<br>• Non‑standard scripts (emoji, mixed languages) can still be handled because SentencePiece works on Unicode code points.<br>• If the vocabulary size is too small, quality degrades; if too large, memory/latency rise. |
| **Optimize & Communicate** | • Use a balanced vocabulary (~32k–64k) for MT; larger vocab for LLMs to reduce token count.<br>• Cache trie lookups and pre‑compute token scores to speed inference.<br>Explain that the deterministic, OOV‑free property makes it ideal for production systems where reproducibility is critical. |

**TL;DR:** Unigram (SentencePiece) learns a probabilistic subword vocabulary by pruning tokens that hurt likelihood the least, yielding deterministic, OOV‑free tokenization with linear inference time—making it a robust choice over BPE when consistent segmentation and low‑perplexity modeling are paramount.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
