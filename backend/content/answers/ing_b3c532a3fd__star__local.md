---
qid: ing_b3c532a3fd__star__local
question: 'Q: Walk me through the latency budget of a voice agent. Where do the milliseconds
  go, and what is the single biggest lever?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 300
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:31:30-05:00'
sources: []
---

**Situation:** At my last company we were rolling out a new smart‑home assistant that had to respond to user queries in under 300 ms to feel natural. The existing latency was hovering around 450 ms, mainly due to the speech‑to‑text and intent‑recognition stages.

**Task:** I needed to cut the overall response time to ≤ 300 ms while keeping accuracy above 92 % and ensuring the system could scale to 50k concurrent users.

**Action:** First, I profiled each component: mic‑capture (15 ms), network jitter (30 ms), ASR engine (120 ms), intent model inference (80 ms), and backend API calls (70 ms). The biggest bottleneck was the ASR CPU usage on edge devices. I replaced the monolithic recognizer with a lightweight, quantized neural decoder running on a single DSP core, reducing ASR latency from 120 ms to 45 ms. I also shifted non‑critical backend queries to an asynchronous queue and introduced a local caching layer for frequently used intents.

**Result:** The total latency dropped to 280 ms, meeting the requirement with headroom. Accuracy stayed at 93 %. The key lesson was that targeting the most compute‑heavy stage—ASR in this case—yields the greatest return on investment for latency reduction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
