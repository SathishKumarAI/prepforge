---
qid: ing_15569d22cd__star__local
question: What is context rot, and what compaction strategies do you use in long-running
  agents?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 360
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:10:53-05:00'
sources: []
---

**Situation:**  
While leading the chatbot team at a fintech startup, we launched an AI‑powered customer support agent that ran continuously on our cloud infrastructure. After two months of operation, we noticed response latency spiking and accuracy dropping when users asked follow‑up questions about earlier interactions.

**Task:**  
I needed to diagnose why the model’s internal “context” was degrading over time—what engineers call *context rot*—and devise a strategy to keep the agent responsive without sacrificing memory or cost.

**Action:**  
First, I instrumented the conversation logs to track token usage per session. I discovered that the LLM’s context window was being filled with low‑value chatter, pushing away relevant user intent. To counter this, I implemented a compaction pipeline: (1) a semantic summarizer using a lightweight encoder to compress each turn into a 50‑token summary; (2) a relevance filter that kept only the top‑3 turns based on cosine similarity to the current query; and (3) a rolling window that discarded older summaries once the token budget hit 90 % of the limit. I also switched from GPT‑4 to an optimized GPT‑4o model, cutting inference cost by ~30 %.

**Result:**  
Latency dropped from 1.8 s to 0.9 s per turn, and F1 score on intent classification rose from 78 % to 92 %. The agent now handles 10k concurrent users with a 25 % lower compute bill. I learned that proactive context pruning is essential for sustainable long‑running AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
