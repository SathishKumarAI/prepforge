---
qid: ing_74bb16d32d__star__local
question: 'Explain: Why Tool Selection Breaks at Scale — The Complete Guide to Tool
  Selection in AI Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 358
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:28:03-05:00'
sources: []
---

**Situation:**  
At my last company we were building a conversational AI that could pull data from dozens of internal tools—CRM, ticketing, HR, and third‑party analytics platforms—to answer user queries in real time. When we scaled the bot to serve all 12 000 employees, our response latency spiked from 400 ms to over 3 seconds, and error rates jumped from 1% to nearly 15%.

**Task:**  
I had to identify why the tool selection layer was breaking at scale, redesign it for reliability, and bring latency back below 500 ms while keeping cost under $5k/month.

**Action:**  
First, I profiled each integration with async HTTP calls and discovered that some SDKs were blocking on network sockets, causing thread starvation. I replaced the legacy wrappers with lightweight HTTP/JSON clients (httpx + pydantic) and introduced a sharded Redis cache for frequent queries. Next, I implemented a circuit‑breaker pattern per tool using pybreaker, so a failing service didn’t cascade to the whole stack. Finally, I added an adaptive throttling layer that monitored success rates in real time and routed traffic through the healthiest endpoints.

**Result:**  
Latency dropped to 350 ms on average; error rate fell below 0.5%. The redesign cut infrastructure costs by 30% and gave us a robust, observable pipeline that scales with new tools without breaking. I learned that at scale, tool selection is less about feature parity and more about non‑blocking I/O, graceful degradation, and real‑time health monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
