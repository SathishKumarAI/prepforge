---
qid: ing_a16ac036ec__star__local
question: 'Explain: Context retrieval and agentic search — Effective context engineering
  for AI agents \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 355
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:55:42-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, we were building an AI‑powered customer support chatbot that had to pull up relevant policy documents on the fly. The knowledge base was 50 GB and users complained that answers were generic or irrelevant, hurting our NPS from 78 to 64.

**Task**  
I needed to redesign how the agent fetched context so it could retrieve precise excerpts and then decide autonomously which follow‑up question to ask next, all within a two‑second response window.

**Action**  
First, I implemented a dense vector index using FAISS with embeddings from a fine‑tuned Sentence‑Transformer. To keep retrieval fast, I introduced hierarchical filtering: a lightweight keyword match prunes the candidate set before FAISS does its heavy lifting. Next, I added an “agentic search” loop—after each retrieval step, the agent runs a small LLM policy (via Anthropic’s Claude) to assess confidence and decide whether it needs more context or can answer. This loop is bounded by three iterations, so latency stays predictable. I also built a lightweight cache layer that stores the top 20 most‑queried documents per user segment.

**Result**  
Response relevance jumped from 55 % to 88 %, reducing average handling time by 1.8 seconds and lifting NPS back up to 82 within three weeks. I learned that careful context engineering—combining fast retrieval, selective expansion, and a bounded agentic loop—can dramatically improve both accuracy and speed in real‑time AI agents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
