---
qid: ing_c0c77e6b09__star__local
question: What are the root causes of hallucination, and what actually mitigates it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 359
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:55:51-05:00'
sources: []
---

**Situation** – When we launched our internal chatbot for the finance team last quarter, users started flagging that it was generating plausible but factually incorrect statements about quarterly earnings. The model’s hallucination rate spiked to 18 % over a two‑week period, eroding trust and causing compliance concerns.

**Task** – My goal was to reduce hallucinations below 5 % while keeping the response latency under 800 ms and maintaining high coverage of domain queries.

**Action** – I first profiled the model’s attention patterns with SHAP on a sample of flagged outputs, revealing that the network over‑relied on generic financial phrasing instead of concrete data. I then fine‑tuned the LLM on a curated dataset of verified earnings reports and added an “evidence retrieval” module: before generating an answer, the model queries a vector‑search index built from our internal SEC filings. The retrieved passages are fed back as context, and we enforce a confidence threshold that forces the system to refuse or ask for clarification when evidence is weak. We also introduced a lightweight reinforcement learning loop where real user corrections were turned into negative examples.

**Result** – After deployment, hallucination dropped to 3.2 % and the average latency increased by only 12 ms (still below our SLA). The finance team reported a 45 % reduction in support tickets related to misinformation, and I learned that coupling retrieval‑augmented generation with targeted fine‑tuning is far more effective than scaling model size alone for mitigating hallucinations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
