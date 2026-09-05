---
qid: ing_17f0739b97__fp__local
question: 'Explain: Compare BPE, WordPiece, SentencePiece, and byte-level BPE.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 703
total_tokens: 880
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:56:36-05:00'
sources: []
---

**Byte‑Pair Encoding (BPE)**  
*Origin*: Compresses text by iteratively merging the most frequent pair of symbols (initially bytes or characters).  
*Why it works*: By treating the corpus as a multiset of symbol pairs, BPE greedily builds a subword vocabulary that captures high‑frequency morphemes while keeping rare tokens intact. The merge rule is deterministic and unsupervised.  
*Insight*: BPE’s greedy merges implicitly bias toward *frequency‑based compression*, not linguistic units; this explains why it can over‑segment morphologically rich words into many pieces.

**WordPiece** (used by BERT)  
*Origin*: Similar to BPE but the merge decision is based on **probabilistic likelihood**: a pair is merged if it increases the overall probability of the corpus under a unigram language model.  
*Why it works*: By maximizing likelihood, WordPiece produces subwords that are more consistent with the statistical distribution of tokens, yielding fewer splits for frequent words while still handling OOVs.  
*Insight*: The probabilistic objective subtly enforces *information‑theoretic optimality*, leading to a vocabulary that approximates the minimum description length of the corpus.

**SentencePiece** (unigram LM)  
*Origin*: Treats tokenization as sampling from a **predefined subword probability distribution**, optimizing it via Expectation–Maximisation.  
*Why it works*: It jointly learns subwords and their probabilities, allowing the model to drop rare symbols entirely. The algorithm is language‑agnostic because it starts from raw text without pre‑segmentation.  
*Insight*: SentencePiece’s EM step guarantees convergence to a **maximum likelihood** solution under the unigram assumption, which naturally balances coverage against vocabulary size.

**Byte‑Level BPE**  
*Origin*: Applies BPE directly on UTF‑8 byte sequences rather than characters or words.  
*Why it works*: By operating at the byte level, it becomes fully language‑agnostic and can handle any encoding without prior segmentation; merges capture frequent byte patterns that correspond to subwords or even entire words in many scripts.  
*Insight*: The key advantage is **encoding independence**: a single tokenizer works for all languages, but the cost is slightly higher token counts because subword granularity is coarser than character‑level tokenization.

---

| Tokenizer | Merge criterion | Language bias | Vocabulary size |
|-----------|-----------------|---------------|-----------------|
| BPE       | Frequency of pair | None (byte/char) | Medium |
| WordPiece | Likelihood increase | None (byte/char) | Medium |
| SentencePiece | Unigram LM likelihood | None (raw text) | Small‑to‑medium |
| Byte‑BPE  | Frequency of byte pair | Encoding agnostic | Large |

**Non‑obvious takeaway:** While all four methods aim to balance *coverage* and *granularity*, the **objective function**—frequency vs. probability vs. EM likelihood—determines whether the tokenizer tends to over‑segment (BPE) or under‑segment (WordPiece/SentencePiece). Byte‑level BPE’s encoding independence is a practical advantage, but it inherits BPE’s greedy frequency bias, making it less optimal for morphologically rich languages unless combined with additional language‑specific heuristics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
