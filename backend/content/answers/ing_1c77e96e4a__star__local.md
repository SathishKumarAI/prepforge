---
qid: ing_1c77e96e4a__star__local
question: 'Explain: Listwise vs Pointwise LLM Reranking — Reranking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 339
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:26:23-05:00'
sources: []
---

**Situation** – In my last role as a search product engineer at a fintech startup, we launched a new document‑retrieval feature that pulled thousands of policy PDFs per query. The initial BM25 ranking was fast but the relevance score drifted when users asked nuanced questions about regulatory changes.

**Task** – I had to design an LLM‑based reranker that could surface the most accurate documents without blowing up latency or GPU costs, and deliver measurable lift in click‑through rate (CTR).

**Action** – I evaluated two approaches: pointwise and listwise. For the pointwise method, I fine‑tuned a RoBERTa model to predict a relevance probability for each candidate independently; this was easy to parallelize but ignored inter‑document dependencies. For the listwise strategy, I implemented a pairwise contrastive loss on top of a lightweight T5 encoder, training it to rank the top 10 documents as a set. To keep inference fast, I used knowledge distillation and quantized the model to INT8. I also added an early‑exit mechanism that abandoned reranking when the BM25 score was already high.

**Result** – The listwise reranker increased CTR by 18 % and reduced mean reciprocal rank error by 22 %, while keeping inference under 35 ms per query on a single GPU. I learned that modeling relative orderings can capture subtle relevance cues, but only when coupled with efficient distillation and latency safeguards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
