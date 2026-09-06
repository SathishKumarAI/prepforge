---
qid: ing_5f4d41c36c__fp__local
question: Budget the end-to-end latency for a real-time voice agent. Why is time-to-first-audio
  a different problem from an LLM's time-to-first-token?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 364
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:27:23-05:00'
sources: []
---

### End‑to‑end latency in a real‑time voice agent  

1. **Speech‑to‑Text (STT)** – the first audio chunk must be captured, buffered until it contains a *silence cue* or reaches a minimum length, then fed to an acoustic model.  
2. **Natural‑Language Understanding (NLU)** – the resulting transcript is parsed; inference time depends on the size of the token vocabulary and the depth of the transformer.  
3. **Large Language Model (LLM) generation** – tokens are produced sequentially; each token triggers a forward pass through the model’s attention layers.  
4. **Text‑to‑Speech (TTS)** – synthesized audio is streamed to the speaker in overlapping frames.

The *time‑to‑first‑audio* is dominated by the STT pipeline’s buffering strategy: it trades off latency against recognition accuracy by waiting for a clear speech boundary. In contrast, an LLM’s *time‑to‑first‑token* is governed purely by compute (GPU throughput) and model size; no input buffering is required because the text prompt is already available.

**Non‑obvious insight:** The bottleneck in voice agents is not the transformer itself but the **statistical dependence of STT on speech energy contours**. If we could predict a speaker’s silence likelihood from acoustic cues, we could adaptively shorten the buffer, turning a fixed‑delay problem into an *information‑theoretic* one: minimize expected latency subject to a target word‑error rate. This turns what appears as a mechanical pipeline into a principled decision process.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
