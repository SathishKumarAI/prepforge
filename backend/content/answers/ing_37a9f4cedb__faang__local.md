---
qid: ing_37a9f4cedb__faang__local
question: 'Explain: WordPiece — Tokenization Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 479
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:53:21-05:00'
sources: []
---

**WordPiece – Tokenization Deep Dive**

| Step | What to do |
|------|------------|
| **Clarify** | *Problem*: We need sub‑word tokenizers that balance vocabulary size and out‑of‑vocabulary (OOV) coverage for large‑scale language models. *Assumptions*: input is UTF‑8 text, we target BERT‑style transformer training, and we’ll evaluate on downstream GLUE tasks. |
| **Approach** | 1. Start with the full character set → initial vocab of all Unicode characters. <br>2. Iteratively merge most frequent adjacent pairs (BPE‑style) until reaching desired vocab size (~30k). <br>3. Mark merges that cross word boundaries to preserve whole words when possible. |
| **Depth** | - *Training*: Count pair frequencies with a sliding window over tokenized text; use a priority queue for efficient merge selection. Complexity: O(N log V) per iteration (N = tokens, V = vocab). <br> - *Encoding*: Greedy left‑to‑right matching using a trie; O(L) per sentence where L is character length. <br> - *Special tokens*: Add `[CLS]`, `[SEP]`, `[PAD]`, `[MASK]`. <br> - *Benefits*: Captures sub‑word units (e.g., `un`, `##affable`) enabling robust handling of rare words and morphological variations. |
| **Edge Cases** | • Extremely rare symbols → remain OOV; we can fallback to `[UNK]` or character tokenization.<br>• Aggressive merging may split frequent prefixes/suffixes, hurting transfer learning—test with perplexity on held‑out data.<br>• Unicode normalization inconsistencies can cause duplicate tokens. |
| **Optimize & Communicate** | • Parallelize pair counting across shards; use GPU for trie lookup. <br>• Tune vocab size: smaller → faster inference but higher OOV; larger → better accuracy but memory overhead. <br>When presenting, emphasize how WordPiece’s sub‑word granularity directly improves downstream task performance and reduces model footprint—key metrics for any FAANG product team.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
