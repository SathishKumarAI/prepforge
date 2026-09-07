---
qid: ing_e1705bdbc4__faang__local
question: 'Explain: Tokenization Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 499
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:23:42-05:00'
sources: []
---

**Tokenization – a deep‑dive**

| Step | What I’ll do |
|------|--------------|
| **Clarify** | *Problem:* Explain how tokenizers turn raw text into model‑friendly inputs. <br>*Assumptions to confirm:* Which language family? Subword vs character? Need examples of BPE/WordPiece vs sentencepiece? |
| **Approach** | 1. Define “token” in NLP context.<br>2. Outline the typical pipeline: pre‑processing → segmentation → sub‑word construction.<br>3. Compare major algorithms (BPE, WordPiece, unigram LM). |
| **Depth** | *Token definition:* minimal unit carrying semantic weight; must map 1↔1 to embedding indices. <br>*Pre‑processing:* lowercasing, Unicode normalisation, handling punctuation. <br>*Segmentation:* rule‑based vs learned (e.g., WordPiece learns a vocabulary that maximises likelihood of training data). <br>**BPE:** iteratively merge most frequent pair → gives subwords; complexity O(V log V). <br>**WordPiece:** similar but uses a language model score to decide merges, ensuring each token improves perplexity. <br>**Unigram LM (SentencePiece):** starts with large vocab, prunes tokens that reduce likelihood; supports language‑agnostic training. <br>*Trade‑offs:* larger vocab → fewer subwords but higher memory; smaller vocab → longer sequences, more computation. |
| **Edge Cases** | • Rare words → OOV token.<br>• Agglutinative languages (e.g., Turkish) where BPE may split morphemes incorrectly.<br>• Scripts with no whitespace (Chinese). <br>Test by measuring BLEU drop when varying vocab size, or OOV rate on held‑out data. |
| **Optimize & Communicate** | *Improvements:* use adaptive vocab per domain; cache subword merges; integrate language‑specific pre‑tokenizers. <br>*Narrative:* “We first standardise the text, then we apply a statistically grounded merge algorithm that guarantees every token maps to an embedding. By tuning vocabulary size and merge criteria, we balance sequence length against model capacity.” |

*Word count: ~190 words.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
