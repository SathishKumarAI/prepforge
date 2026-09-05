---
qid: ing_2cc229d6d5__star__local
question: 'Explain: A customer asks: "Should we fine-tune, use RAG, or just prompt
  better?" Give me your decision framework.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 350
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:57:35-05:00'
sources: []
---

**Situation**  
At a fintech startup, our client was launching a new loan‑underwriting assistant. Their internal LLM had 85 % accuracy on standard queries but dropped to 60 % when users asked about niche regulatory changes. The product team needed a quick fix before the go‑live.

**Task**  
I had to decide whether to fine‑tune the base model, integrate Retrieval‑Augmented Generation (RAG), or just craft better prompts, and justify the choice in under 30 minutes for the CTO.

**Action**  
First, I benchmarked each approach on a held‑out set of 500 regulatory Q&A pairs. Fine‑tuning on our proprietary policy corpus improved accuracy to 78 % but required 4 hrs GPU time and risked overfitting to outdated rules. RAG using ElasticSearch + the base LLM fetched up‑to‑date documents, boosting accuracy to 88 % with only a 2× latency penalty. Prompt engineering alone got us to 70 %. I weighed cost (GPU hours vs. search index), maintainability (continuous document updates vs. retraining), and speed (latency constraints for real‑time chat).

**Result**  
I recommended RAG: it hit the target accuracy, kept the model lightweight, and allowed seamless policy updates. Post‑deployment, user satisfaction rose from 78 % to 92 %, and we reduced support tickets by 35 %. I learned that a quick empirical benchmark often reveals hidden trade‑offs between fine‑tuning and retrieval‑based solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
