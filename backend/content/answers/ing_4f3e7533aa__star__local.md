---
qid: ing_4f3e7533aa__star__local
question: 'Q5: How would you evaluate a RAG system?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 423
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:06:54-05:00'
sources: []
---

**Situation** – While leading the next‑gen chatbot at a fintech startup, we rolled out a Retrieval‑Augmented Generation (RAG) model to answer user queries about loan products. Early beta feedback flagged inconsistent answers and occasional hallucinations that could mislead customers.

**Task** – I was tasked with designing an end‑to‑end evaluation framework that would quantify both retrieval quality and generation fidelity, benchmark against our baseline GPT‑4 API, and surface actionable insights for the dev team.

**Action** – First, I built a labeled test set of 5,000 real user questions paired with “gold” answers from our policy docs. For retrieval, I measured recall@k (k=1,3,5) against the document index using BM25 and FAISS embeddings; for generation, I computed ROUGE‑L, BLEU, and a custom hallucination score that flags unsupported facts via an external knowledge graph. I also ran latency tests on our GPU cluster to ensure sub‑200 ms response times. Finally, I set up a weekly dashboard (Grafana + Prometheus) that auto‑runs these metrics and alerts the team when recall dips below 80% or hallucination rate rises above 5%.

**Result** – The evaluation revealed that while retrieval recall was high (92% at k=3), generation fidelity lagged, with a 12% hallucination rate. After fine‑tuning the decoder on filtered passages and adding a confidence threshold, we cut hallucinations to 4%, increased ROUGE‑L from 0.41 to 0.53, and maintained latency under 180 ms. I learned that rigorous, automated metrics are essential for balancing retrieval depth with safe generation in production AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
