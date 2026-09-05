---
qid: ing_5f4d41c36c__star__local
question: Budget the end-to-end latency for a real-time voice agent. Why is time-to-first-audio
  a different problem from an LLM's time-to-first-token?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 379
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:38:53-05:00'
sources: []
---

**Situation** – I was tasked with launching a real‑time customer support voice assistant for a telecom client. Their SLA demanded end‑to‑end latency under 800 ms from the first spoken word to the first audible response, while keeping costs below $0.02 per call.

**Task** – I had to budget every component of the pipeline: capture, ASR, LLM inference, TTS, and network hops, then identify where “time‑to‑first‑audio” diverges from an LLM’s “time‑to‑first‑token.”

**Action** – First, I measured the microphone‑to‑silence buffer (≈50 ms) and ASR startup (~120 ms). Unlike a text LLM that can stream tokens as soon as it receives the prompt, our system must wait for the first few seconds of speech to form a coherent hypothesis. The ASR produced an 80 % confidence phrase in ~300 ms; I then passed that to the LLM, which generated the first token in ~50 ms and streamed the rest at 30 ms per token. TTS synthesis started as soon as the first phoneme was ready, adding another 60 ms before audible output. Network round‑trip added ~40 ms.

**Result** – The total measured latency was 720 ms, meeting the SLA while costing $0.015 per call. I learned that voice pipelines must buffer enough audio to give ASR a solid hypothesis—hence the longer “time‑to‑first‑audio”—whereas LLMs can begin token generation immediately with a prompt, making their “time‑to‑first‑token” typically shorter and more dependent on model size and GPU throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
