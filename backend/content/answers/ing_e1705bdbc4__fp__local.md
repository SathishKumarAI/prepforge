---
qid: ing_e1705bdbc4__fp__local
question: 'Explain: Tokenization Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 509
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:59:21-05:00'
sources: []
---

**Tokenization – the hidden geometry of language models**

At its core, a transformer must turn raw text into a *sequence* it can process. The fundamental problem is that characters are too fine‑grained (too many distinct symbols) and whole words are too coarse (sparse vocabulary). Tokenization bridges this gap by discretizing the string into atomic units that balance expressivity and efficiency.

**Why sub‑word tokens?**  
A language model learns a probability distribution over its *vocabulary*. If the vocab is too small, rare words must be split into many pieces, diluting context. If it’s too large, the softmax becomes computationally expensive and data sparsity skyrockets. Sub‑word units (BPE, WordPiece, SentencePiece) are constructed by iteratively merging frequent character n‑grams, yielding a *hierarchical* representation: common morphemes become single tokens while rare words break into smaller pieces. This structure preserves *information locality*: the probability of a token depends on its immediate neighbors, yet long‑range dependencies are captured across merged units.

**Mathematical view**  
Let \(x = (c_1,\dots,c_n)\) be characters and \(T\) a set of tokens. Tokenization is a surjective mapping \(\phi: x \mapsto t_{i_1}\dots t_{i_m}\). The objective during training is to maximize the likelihood
\[
\max_\theta \prod_{k=1}^{m} P_{\theta}(t_{i_k}\mid t_{i_{<k}}).
\]
Choosing \(T\) that minimizes the expected negative log‑likelihood while keeping \(|T|\) manageable is an instance of *rate–distortion theory*: we compress information (characters → tokens) with minimal loss in predictive power.

**Non‑obvious insight**  
Tokenization shapes **gradient flow**. Tokens that span multiple characters introduce *shared sub‑structures* across different words, enabling the model to learn morpheme‑level semantics early. Consequently, fine‑tuning on a new domain can be achieved by adjusting only a few token embeddings rather than retraining from scratch—an efficiency rooted in the tokenization design.

In short, tokenization is not merely a preprocessing step; it is an optimization that trades vocabulary size against statistical robustness, grounding transformer training in information theory and geometry.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
