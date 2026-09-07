---
qid: ing_e58c55fb28__faang__local
question: 'Q: You deployed a RAG system and users report that answers are sometimes
  wrong. How do you systematically diagnose and fix the problem?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 462
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:31:57-05:00'
sources: []
---

**Clarify**  
The issue: a Retrieval‑Augmented Generation (RAG) system occasionally returns incorrect answers.  
Assumptions to confirm:  
1. The “wrong” answers are factual inaccuracies, not just paraphrasing errors.  
2. The retrieval index and the language model are up‑to‑date.  
3. User feedback is consistently labeled (e.g., “incorrect”, “irrelevant”).  

**Approach**  
1. **Collect & label a representative sample of failures.**  
2. **Instrument the pipeline** to capture: query → top‑k retrieved docs → generated answer, with timestamps and scores.  
3. **Analyze failure modes:**  
   - Retrieval mis‑ranked (missing key doc).  
   - Over‑reliance on hallucination.  
   - Context truncation or token limit issues.  

**Depth**  
- Run a *retrieval audit*: compute precision@k on the labeled set; if < 70%, rebuild embeddings or adjust similarity metric.  
- For hallucinations, inject a “source‑verification” step: after generation, cross‑check facts against retrieved docs (e.g., via a lightweight QA verifier). Complexity O(n) per doc but amortized with batching.  
- If truncation is suspected, increase context window or use hierarchical retrieval (first coarse, then fine).  

**Edge Cases**  
- Rare entities not in index → fallback to generic answer.  
- Ambiguous queries → prompt user for clarification.  
- Model drift: schedule periodic re‑training on recent data.  

**Optimize & Communicate**  
- Add a confidence score threshold; below it surface “I’m not sure” instead of wrong facts.  
- Iterate on the retrieval component first (easiest ROI), then fine‑tune verifier thresholds.  
- Report findings with metrics: % reduction in incorrect answers, latency impact, and cost per inference.  

By systematically dissecting each pipeline stage, we can pinpoint whether the root cause is retrieval quality or generation hallucination, then apply targeted fixes that balance accuracy, speed, and resource usage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
