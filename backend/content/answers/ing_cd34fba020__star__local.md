---
qid: ing_cd34fba020__star__local
question: How does prompt caching work, and how should it change the way you structure
  prompts?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 293
total_tokens: 535
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:19:24-05:00'
sources: []
---

**Situation**  
When I was building a real‑time chatbot for a fintech app, our latency kept spiking during peak hours because every user query triggered a fresh GPT call. The team’s SLA demanded sub‑300 ms responses.

**Task**  
I had to reduce API round‑trips and keep the conversational context accurate without sacrificing personalization.

**Action**  
I introduced prompt caching: after generating an assistant response, I stored the combined system/user/assistant snippet in Redis with a TTL of 10 minutes. Subsequent user turns first looked up the cached prefix; if found, we only sent the new user message and a small instruction (“continue from context”). This required re‑architecting our prompt builder to split static system instructions from dynamic conversation history, using placeholders like `{cached_context}`. I also added logic to invalidate cache when the user changed their profile or asked about policy updates.

**Result**  
Latency dropped from 650 ms to 190 ms on average, and API calls fell by 42%. We kept a 99.8% accuracy rate in responses. The exercise taught me that prompt caching is not just a performance trick; it forces you to design prompts as composable pieces—static templates plus mutable context—making the system more maintainable and scalable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
