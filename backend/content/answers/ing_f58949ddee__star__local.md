---
qid: ing_f58949ddee__star__local
question: 'Explain: Progressive Tool Discovery for Token Efficiency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 327
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:39:28-05:00'
sources: []
---

**Situation:**  
At my previous startup we were building a chatbot that needed to handle 10,000 user queries per day while staying under the OpenAI token budget. The initial model ate ~350 tokens per request, pushing our cost over the target.

**Task:**  
I had to reduce average token usage by at least 30% without sacrificing response quality or increasing latency beyond 300 ms.

**Action:**  
1. I introduced a *progressive tool discovery* pipeline: first pass uses a lightweight rule‑based parser to extract key intent and entities; only if the parser flags ambiguity does it trigger the large LLM for deeper understanding.  
2. For each request, the system dynamically selects the smallest relevant “tool” (e.g., a knowledge‑base lookup or a specialized inference model) instead of sending the whole prompt to GPT‑4.  
3. I built a monitoring dashboard that logged token counts per tool and used reinforcement learning to adjust thresholds in real time.  
4. Finally, I added a post‑processing step that trims filler phrases from the LLM’s output before returning it.

**Result:**  
Token consumption dropped from 350 to 210 tokens on average—a 40% reduction—cutting our monthly API cost by $12k while keeping response latency under 250 ms. I learned that coupling lightweight heuristics with selective model calls can dramatically improve efficiency, and the dashboard helped us iterate quickly on tool selection policies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
