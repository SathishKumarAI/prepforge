---
qid: ing_aa8230ce37__star__local
question: GLM-4.5 is a "hybrid reasoning" model with a thinking mode and a direct-response
  mode. How do you build one model that does both, and what are the training and serving
  implications?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 268
output_tokens: 358
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:13:47-05:00'
sources: []
---

**Situation:** At my previous company we were tasked with launching an internal chatbot that could handle both complex troubleshooting queries (requiring multi-step reasoning) and quick fact-checking requests. The existing GPT‑4 model was great for direct answers but struggled when users asked “why” questions that needed a chain of logic.

**Task:** I had to design a single hybrid model that could switch between a “thinking” mode—where it internally builds a reasoning chain—and a direct-response mode for straightforward queries, while keeping latency under 1 s and training costs manageable.

**Action:**  
- Built a two‑head architecture: the encoder shared weights, but one head outputs a *reasoning trace* (a sequence of intermediate tokens) and another produces the final answer.  
- Used reinforcement learning from human feedback to reward models that generated accurate traces before answering.  
- Employed mixed‑precision training on 8 A100 GPUs, using gradient checkpointing to keep memory usage below 32 GB per GPU.  
- For serving, we introduced a lightweight “mode detector” that analyzes the prompt’s intent; if it predicts high reasoning probability, the request is routed to the thinking head and cached intermediate steps for future use.

**Result:** Deployment cut average response time from 1.8 s to 0.9 s, while accuracy on multi-step queries rose from 68% to 92%. The hybrid approach also reduced inference costs by 30% because we avoided full reasoning passes on simple questions. I learned that a shared encoder with specialized heads, combined with intent detection and caching, is key to balancing capability and efficiency in hybrid LLMs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
