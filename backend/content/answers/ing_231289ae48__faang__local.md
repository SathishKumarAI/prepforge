---
qid: ing_231289ae48__faang__local
question: 'Explain: Custom Evaluator Pattern — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 453
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:05:51-05:00'
sources: []
---

**Custom Evaluator Pattern – RAG Evaluation**

| Stage | What I’d do |
|-------|-------------|
| **Clarify** | *Restate:* “We need a plug‑in that lets us evaluate retrieval‑augmented generation (RAG) models beyond simple BLEU/ROUGE.” <br> *Assumptions to confirm:* 1️⃣ Evaluation targets (accuracy, relevance, hallucination). 2️⃣ Available data: gold documents, reference answers. 3️⃣ Runtime constraints (batch size, latency). |
| **Approach** | 1️⃣ Define a generic `Evaluator` interface with `evaluate(pred, refs)` returning metrics.<br> 2️⃣ Implement core evaluators: <ul><li>RelevanceScore – cosine similarity of embeddings between retrieved docs and answer.</li> <li>HallucinationDetector – check for unsupported facts via external knowledge base.</li> <li>AnswerCompleteness – token overlap with reference answer.</li></ul> 3️⃣ Compose them in a pipeline; each can be toggled. |
| **Depth** | • RelevanceScore uses Sentence‑BERT embeddings → O(n log n) for nearest‑neighbor search.<br>• HallucinationDetector queries an API (e.g., Wikidata) – cost amortized by caching.<br>• Metrics returned as a dict; can be aggregated across batch. Complexity: dominated by embedding similarity, usually O(b·d). |
| **Edge Cases** | • Empty retrieved set → flag “No evidence.”<br>• Multiple correct references → average metric.<br>• Non‑textual modalities → skip or extend evaluator. Test with synthetic RAG outputs and known hallucinations. |
| **Optimize & Communicate** | • Cache embeddings to avoid recomputation.<br> • Parallelize API calls for hallucination checks.<br> Explain trade‑offs: higher recall of relevance vs latency, API cost vs accuracy. Summarize in a slide deck or README so stakeholders see how the evaluator adapts to new metrics without rewriting core code. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
