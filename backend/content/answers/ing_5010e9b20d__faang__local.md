---
qid: ing_5010e9b20d__faang__local
question: Why do LLMs use subword tokenization instead of whole words or raw characters?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 451
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:50:39-05:00'
sources: []
---

**Clarify**  
The question asks why large language models (LLMs) typically split text into *subwords* (e.g., BPE, SentencePiece) rather than using whole‑word vocabularies or single characters. Key assumptions: we’re comparing tokenization strategies for training efficiency, coverage, and downstream performance.

**Approach**  
1. Explain the trade‑off between vocabulary size, sparsity, and semantic granularity.  
2. Contrast three extremes: character‑level, word‑level, subword.  
3. Highlight empirical evidence from transformer training that supports subwords.

**Depth**  
- **Vocabulary explosion vs. OOV:** Whole‑word vocabularies would need millions of tokens for all inflections and rare terms—leading to huge embeddings and severe out‑of‑vocabulary (OOV) rates. Character models avoid OOV but lose morphological context, hurting language modeling accuracy.  
- **Embedding efficiency:** Subwords strike a middle ground: a few hundred thousand tokens capture most word forms while keeping embedding matrices tractable (~50–200 M parameters).  
- **Training dynamics:** Subword units preserve sub‑lexical regularities (prefixes, suffixes), enabling the transformer to learn compositional patterns. Empirical studies show lower perplexity and faster convergence with subwords than characters or words alone.  
- **Cross‑lingual robustness:** BPE/SentencePiece are language‑agnostic; they can be trained on mixed corpora, making multilingual LLMs efficient.

**Edge Cases**  
- Extremely low‑resource languages may still suffer from high OOV if the training corpus is too small.  
- Some specialized domains (e.g., code) might benefit from hybrid tokenizers that keep whole tokens for identifiers while subwording others.

**Optimize & Communicate**  
I would note that future improvements could involve dynamic vocabularies or neural tokenizer modules, but current subword methods remain the sweet spot between model size, coverage, and performance. This structured explanation demonstrates clear reasoning, technical depth, and awareness of practical constraints—qualities prized in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
