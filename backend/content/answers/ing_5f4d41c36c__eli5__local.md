---
qid: ing_5f4d41c36c__eli5__local
question: Budget the end-to-end latency for a real-time voice agent. Why is time-to-first-audio
  a different problem from an LLM's time-to-first-token?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 256
total_tokens: 436
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:07:36-05:00'
sources: []
---

Imagine a live call center where a customer speaks and the operator must reply instantly.  
The **end‑to‑end latency** is how long it takes from the moment the first word lands in the microphone to the moment the agent’s voice comes out of the other speaker. It includes the time for the audio to travel, be digitized, sent over the network, processed by speech‑recognition (SR), fed into a large language model (LLM) that decides what to say, and finally turned back into sound with text‑to‑speech (TTS).

In this chain, **time‑to‑first‑audio** is the instant the first audible reply appears.  
It’s different from an LLM’s **time‑to‑first‑token** because the LLM only produces a token after it has finished interpreting all incoming audio and deciding on a response. The first audio we hear can come from the TTS engine as soon as the very first word is generated, even while later tokens are still being processed. Thus, the latency you feel (the first reply) is usually shorter than the raw computational time needed to produce the entire text output.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
