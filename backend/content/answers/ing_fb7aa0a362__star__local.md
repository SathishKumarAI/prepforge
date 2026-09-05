---
qid: ing_fb7aa0a362__star__local
question: Why do LLM products stream responses, and how does streaming actually work
  over HTTP?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 296
total_tokens: 538
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:51:50-05:00'
sources: []
---

**Situation:**  
When I joined a startup building a conversational AI assistant, the user feedback was clear: the response latency felt too high. Users complained that waiting for the full answer before seeing anything made the experience feel sluggish.

**Task:**  
My goal was to reduce perceived wait time by implementing streaming responses so users could start reading and interacting while the model was still generating text.

**Action:**  
I led a small team to integrate OpenAI’s ChatCompletion API with server‑side event streams. We wrapped each token as an SSE (Server‑Sent Events) payload, sending “data: <token>\n\n” over a single HTTP/2 connection. The client parsed events in real time, appending tokens to the UI without blocking. To keep the stream stable we added back‑pressure handling—monitoring network RTT and pausing generation if bandwidth dropped. We also instrumented metrics (bytes per second, token latency) to tune batch sizes.

**Result:**  
User engagement rose by 35 % as session completion time dropped from 4.2 s to 1.8 s on average. The team learned that streaming not only improves UX but also allows dynamic cancellation and cost savings by stopping generation early when users stop listening.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
