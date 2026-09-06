---
qid: ing_ce521fb4f3__fp__local
question: 'Explain: ✨ Introduction — Ragas'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 403
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:19:15-05:00'
sources: []
---

**RAGs (Retrieval‑Augmented Generators) – a principled view**

The core problem is *knowledge scarcity*: a neural language model can only answer questions using what it has memorised during pre‑training. Yet, real‑world queries often demand up‑to‑date facts or niche data that lie outside the training distribution. RAGs solve this by **splitting inference into two optimal sub‑problems**:

1. **Retrieve** a small set of documents \(D_q = \{d_1,\dots,d_k\}\) that maximally reduce the *expected entropy* of the answer, i.e. pick evidence that most likely explains the query.
2. **Generate** conditioned on both the query and \(D_q\), so the decoder learns to *attend* to relevant snippets while still using its language model priors.

Mathematically, RAG maximises  
\( \max_{D_q} \; \mathbb{E}_{y|q,D_q}[ \log P(y|q,D_q) ]\),  
which is the same objective as a standard generative task but with an additional retrieval policy that can be learned jointly. This dual optimisation mirrors *information bottleneck* theory: the retrieved set acts as a compressed, informative representation of external knowledge.

**Non‑obvious insight:** The retrieval module need not be perfect; its errors are compensated by the generator’s uncertainty modelling. In fact, a slightly noisy \(D_q\) can regularise the decoder, preventing over‑reliance on memorised patterns and improving generalisation to unseen queries. Thus, RAGs are not merely “retrieval + generation” but an *adaptive knowledge‑aware inference pipeline* grounded in information theory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
