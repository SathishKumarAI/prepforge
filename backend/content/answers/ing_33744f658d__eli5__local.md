---
qid: ing_33744f658d__eli5__local
question: 'Q: How would you evaluate a RAG system? — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 224
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:57:36-05:00'
sources: []
---

Think of a RAG system as a smart librarian who first looks up the best book on a topic and then writes a summary for you. To evaluate it, we ask our own “reviewer” (a large language model) to play two roles:  

1. **Accuracy checker** – does the librarian’s answer match what’s actually in the book? The LLM reads the answer and compares it to the cited passages, flagging any made‑up facts or misquotes.  
2. **Clarity judge** – is the summary easy to understand and well organized? The LLM looks for coherence, logical flow, and whether the explanation stays on topic.  

We score each role separately (e.g., 0–5) and then combine them into an overall “trustworthiness” rating. This lets us see not just if a RAG system gives correct facts, but also how useful its explanations are.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
