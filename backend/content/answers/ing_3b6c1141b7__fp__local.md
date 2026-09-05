---
qid: ing_3b6c1141b7__fp__local
question: What is the best chunk size for RAG? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 314
total_tokens: 486
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:11:10-05:00'
sources: []
---

**What is the optimal chunk size for Retrieval‑Augmented Generation (RAG)?**

Start from the core trade‑off: *retrieval precision* vs. *context richness*.  
A chunk that’s too small yields many candidates, inflating search time and diluting relevance; a chunk that’s too large risks missing fine‑grained signals and forces the model to discard irrelevant text during generation.  

From an information‑theoretic view, each chunk should carry roughly one “unit of semantic context” that the language model can attend to in a single pass (≈ 512–1,024 tokens for most LLMs). This matches the attention budget: the encoder can only focus on a limited window before gradients become noisy.  

Empirically, **1‑2 KB (≈ 600–800 words)** strikes this balance. It’s large enough to contain complete sentences and discourse markers, yet small enough that a 4‑K token prompt can comfortably hold several retrieved chunks plus the user query.  

**Non‑obvious insight:** *Chunk boundaries should align with document structure rather than raw token counts.* Splitting at paragraph or logical unit edges preserves coherence, reducing hallucination when the model stitches together multiple chunks. Thus, the “best” size is not a single number but a rule: **≈ 1–2 KB per semantic unit, respecting natural discourse boundaries**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
