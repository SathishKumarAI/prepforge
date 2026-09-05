---
qid: ing_fd7f210a93__star__local
question: 'Explain: LCEL: Programming with Pipes — Langchain Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 399
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:55:47-05:00'
sources: []
---

**Situation:**  
At my previous startup we were building a customer‑support chatbot that needed to pull product specs from an internal API, run them through a custom summarization model, and then generate a friendly response in real time. The existing pipeline was monolithic: each step ran sequentially inside the same function, causing latency spikes and making it hard to swap out components.

**Task:**  
I had to refactor the workflow into a reusable, modular chain that could be reused across multiple bots while keeping the overall response time under 800 ms.

**Action:**  
I introduced LangChain’s LCEL (LangChain Expression Language) to describe the pipeline declaratively. I defined three distinct “pipes”:  
1. **API Pipe** – uses `httpx` async client wrapped in a `Tool` to fetch specs.  
2. **Summarizer Pipe** – an LLM call via OpenAI’s GPT‑4, wrapped as a `Runnable`.  
3. **Responder Pipe** – a template‑based `PromptTemplate` that stitches the summary into a friendly reply.

By chaining them with LCEL syntax (`api_pipe | summarizer_pipe | responder_pipe`) I could swap out the summarizer for a fine‑tuned T5 model without touching the rest of the chain. I also added caching and concurrency controls, leveraging LangChain’s built‑in `AsyncMemoryCache`.

**Result:**  
The new LCEL‑based pipeline cut average response time from 1.4 s to 0.6 s, a 57% improvement. It also reduced code duplication by 30%, allowing the product team to spin up two additional bots in just one sprint. I learned that declarative chaining not only speeds development but also makes complex AI workflows maintainable and testable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
