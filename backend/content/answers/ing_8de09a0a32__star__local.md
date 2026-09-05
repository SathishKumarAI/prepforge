---
qid: ing_8de09a0a32__star__local
question: 'Explain: Triad Failure Modes — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 340
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:16:32-05:00'
sources: []
---

**Situation**  
At my previous company we were launching a RAG‑based FAQ bot for the finance team. Within two weeks of deployment the bot’s “Red” responses—those flagged as potentially inaccurate—were surfacing in production, causing compliance alerts.

**Task**  
I needed to identify why our Retrieval‑Augmented Generation pipeline was misclassifying confidence scores and design a systematic evaluation framework that would catch these issues before they hit users.

**Action**  
First, I mapped the three classic failure modes: **1) hallucination (model fabricates facts), 2) retrieval mismatch (retrieved context irrelevant to the query), and 3) calibration drift (confidence thresholds misaligned)**. I built a triad‑focused test harness using PyTest and LangChain’s `RAGEvaluator`. For each mode, I created synthetic queries and labeled ground truth. Then I automated A/B tests: one pass used our baseline threshold, another tightened the “Red” cutoff by 15 % and added a secondary relevance check via BM25 scoring. I also instrumented logging of RAG scores per token to trace where confidence dropped.

**Result**  
After two iterations, the Red‑flag rate fell from **12 % to 3 %**, reducing compliance incidents by 75 %. The evaluation framework is now part of our nightly CI pipeline, and we’ve documented the triad failure patterns for future RAG projects. I learned that systematic, mode‑specific testing turns abstract failure theories into actionable quality gates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
