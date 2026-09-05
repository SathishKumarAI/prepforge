---
qid: ing_0227d882a5__star__local
question: What is RAGAS? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 367
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:32:41-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, we were launching an AI‑powered customer support chatbot that combined retrieval and generation. The product manager asked us to benchmark our model against industry standards before the August release, but the team didn’t have a ready‑made evaluation framework for Retrieval‑Augmented Generation (RAG) systems.

**Task**  
I needed to set up an end‑to‑end evaluation pipeline that could measure precision, recall, and answer quality across both retrieval and generation components, all within two weeks so we could hit the release deadline.

**Action**  
I introduced RAGAS, a Python library that wraps standard metrics like Exact Match, F1, BLEURT, and Retrieval Precision/Recall into one cohesive suite. I wrote scripts to automatically pull our test queries from the live support logs, ran them through our retriever (FAISS index) and generator (Flan‑T5), and fed the outputs into RAGAS. I also tweaked the weighting of retrieval vs generation scores based on stakeholder feedback, and visualized the results with Matplotlib for quick interpretation.

**Result**  
The pipeline produced a comprehensive report in under 30 minutes per run. We identified that our retriever’s recall was only 62% on “account‑closure” queries, leading to a targeted re‑indexing that boosted it to 78%. The final chatbot score improved by 12% over the baseline, and we launched on schedule with confidence. I learned how powerful an integrated evaluation tool like RAGAS can be for rapid iteration in production AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
