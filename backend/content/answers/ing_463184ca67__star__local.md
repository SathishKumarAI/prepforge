---
qid: ing_463184ca67__star__local
question: How do you evaluate the generation side of RAG - faithfulness, relevance,
  and citation quality?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 425
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:49:03-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup we built an internal knowledge‑base chatbot that used Retrieval‑Augmented Generation (RAG) to answer compliance questions. The first version had users flaging hallucinated answers and missing citations, hurting trust.

**Task:** I needed to design an evaluation pipeline for the generation side—measuring faithfulness, relevance, and citation quality—so we could iterate quickly before each quarterly release.

**Action:**  
1. **Faithfulness:** Implemented a “fact‑check” module using OpenAI’s GPT‑4 fine‑tuned on our policy docs to score each answer against source snippets (0–1). I set up an automated test suite that ran 5,000 real user queries nightly and flagged any score < 0.8 for manual review.  
2. **Relevance:** Added a cosine‑similarity filter between the user query vector (from Sentence‑Transformers) and each generated paragraph’s embedding; only passages with similarity > 0.65 were accepted. I tuned this threshold by ROC analysis against a labeled relevance set of 1,200 queries.  
3. **Citation quality:** Created a lightweight citation validator that parsed the generated text for URL or DOI patterns, then verified link reachability and metadata (title, authors). We stored citation confidence scores and exposed them in the UI as “source credibility.”  
4. **Continuous monitoring:** Built dashboards in Grafana showing monthly average faithfulness, relevance, and citation scores; set alerts if any metric dipped below 0.85.

**Result:** After two iterations, faithfulness rose from 68 % to 92 %, relevance from 73 % to 88 %, and citation accuracy improved by 15 %. User satisfaction scores on the chatbot jumped 20 % in the next survey. I learned that automated, query‑level metrics combined with human‑in‑the‑loop validation can rapidly surface hallucinations and keep RAG outputs trustworthy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
