---
qid: ing_e82eaf0306__star__local
question: 'Explain: Evaluating RAG Pipelines — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 409
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:12:45-05:00'
sources: []
---

**Situation** – At my previous role, our content‑creation team needed an AI assistant that could pull up-to-date market data and draft reports in real time. We had a prototype built on a Retrieval-Augmented Generation (RAG) pipeline with Haystack, but the answer quality varied wildly: some responses were stale or factually wrong.

**Task** – I was tasked to evaluate the RAG pipeline rigorously, identify performance bottlenecks, and deliver actionable improvements so that the assistant met our SLA of 90 % factual accuracy within a 30‑second response window.

**Action** – First, I set up an automated evaluation framework using Haystack’s `Pipeline` API. I built a test harness that fed 1,000 industry-specific queries into three pipeline variants: (1) BM25 retriever + GPT‑3 generator, (2) DPR retriever + T5 generator, and (3) hybrid dense–sparse retriever with a fine‑tuned BART model. For each variant I logged retrieval latency, top‑k precision@5, and factuality scores via OpenAI’s `text-davinci-003` fact-check prompt. After profiling, I reduced the BM25 index size by 40 % through pruning low‑frequency terms, tuned DPR’s `max_seq_length` to balance relevance vs speed, and added a post‑generation sanity check that flagged hallucinations before delivery.

**Result** – The hybrid pipeline achieved 92 % factual accuracy at an average latency of 27 ms for retrieval and 1.2 s for generation, surpassing our SLA. We also cut the index storage footprint by 35 %. I learned that systematic benchmarking with realistic query sets is critical; small tweaks in retriever configuration can yield outsized gains in both quality and efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
