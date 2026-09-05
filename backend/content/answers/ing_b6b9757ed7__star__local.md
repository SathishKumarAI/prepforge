---
qid: ing_b6b9757ed7__star__local
question: 'Explain: Building Golden Test Sets — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 388
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:36:40-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we launched an AI‑powered FAQ bot that used Retrieval‑Augmented Generation (RAG) to pull up-to-date policy documents and generate answers. Shortly after launch, our quality metrics dropped: 32 % of user queries were answered incorrectly, mostly because the retrieval component fetched irrelevant or outdated docs.

**Task:**  
I was tasked with creating a robust golden test set that could reliably evaluate both retrieval accuracy and generation coherence for RAG models across all product categories, ensuring we caught regressions before each release.

**Action:**  
First, I mapped our knowledge base into “golden topics” (e.g., KYC, loan limits) and curated 120 representative queries per topic. For each query, I manually annotated the top‑five relevant documents, then crafted gold answers by combining key excerpts with paraphrased explanations. I used an internal annotation tool that tracked document relevance scores and answer confidence. Next, I automated nightly evaluation scripts: a retrieval benchmark (Mean Reciprocal Rank) ran against Elasticsearch, followed by a generation checkpoint using BLEU and ROUGE metrics against the golden answers. Finally, I set up a dashboard to flag any metric falling below 0.85 in MRR or 0.75 in BLEU.

**Result:**  
After deploying the test suite, we reduced incorrect responses from 32 % to 8 % within two weeks of release cycles. The automated pipeline cut QA time by 40 %, and our team could confidently iterate on retrieval indexes without fearing downstream generation fallout. I learned that a well‑structured golden set not only surfaces hidden bugs but also aligns the whole engineering stack toward shared quality goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
