---
qid: ing_8c638a73fc__star__local
question: 'Explain: When to Use Just `langchain-core` vs Full LangChain'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 359
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:13:40-05:00'
sources: []
---

**Situation**  
During a prototype phase for a customer‑support chatbot, my team had to decide whether to pull in the full LangChain stack or just the core library. The product was supposed to run on our existing serverless infrastructure with strict latency limits (under 200 ms per request).

**Task**  
I needed to evaluate which subset of LangChain would give us enough flexibility for chaining prompts and embeddings while keeping bundle size, cold‑start time, and runtime overhead minimal.

**Action**  
First, I benchmarked the full `langchain` package: import time was ~1.2 s and the compiled wheel included dozens of heavy dependencies (OpenAI SDK, LangChainHub connectors). Then I isolated `langchain-core`, which only contains the abstract interfaces for LLMs, prompts, and memory. By implementing a lightweight wrapper around OpenAI’s API myself and writing custom prompt templates, I avoided pulling in unnecessary connector modules. I also replaced the built‑in retriever with a simple vector search using FAISS, keeping the dependency graph small. Finally, I measured latency on the target environment: `langchain-core` alone dropped cold‑start to 300 ms and average response to 120 ms.

**Result**  
The chatbot met our latency SLA, the deployment package shrank from 200 MB to 35 MB, and we retained full extensibility for future features. I learned that using `langchain-core` alone is ideal when you only need prompt orchestration and plan to write custom integrations; the full LangChain stack is beneficial when you want out‑of‑the‑box connectors and higher‑level abstractions at the cost of size and speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
