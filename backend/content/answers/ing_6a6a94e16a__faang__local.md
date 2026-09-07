---
qid: ing_6a6a94e16a__faang__local
question: Walk me through streaming TTS. How do you chunk input text, and how do you
  size the jitter buffer?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 502
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:51:26-05:00'
sources: []
---

**Clarify**

You want a low‑latency Text‑to‑Speech pipeline that streams audio to a client (e.g., a mobile app).  
Key questions:  
* What is the maximum acceptable end‑to‑end latency?  
* Are we using neural TTS models or simpler parametric engines?  
* Does the network guarantee minimal packet loss, or do we need error resilience?  

**Approach**

1. **Tokenize & chunk** the input into “utterance units” that respect linguistic boundaries (sentences, clauses).  
2. **Batch‑encode** each chunk with a TTS model to generate raw waveform samples.  
3. **Packetize** audio frames (e.g., 20 ms per packet) and stream them.  
4. **Jitter buffer** on the client reorders packets and smooths playback.

**Depth**

*Chunking*: Use a lightweight NLP pipeline (BPE or sentence‑piece) to split text at punctuation, ensuring each chunk is ≤ 200 chars (~1–2 sec of speech). This keeps GPU memory low and allows parallel inference.  
*Jitter buffer sizing*:  
  * Base latency = `#packets × packet duration`.  
  * Add a safety margin for network jitter: `buffer_ms = base_latency + jitter_margin`.  
  * Typical values: `packet_duration=20 ms`, `jitter_margin≈30–50 ms` → ~1.0 sec buffer for 5 packets, which is acceptable for voice assistants.

**Edge Cases**

* Extremely long sentences → split mid‑word with hyphenation to avoid speech glitches.  
* Packet loss → forward error correction or retransmission request if latency permits.  
* Sudden network degradation → fall back to a local offline TTS model.

**Optimize & Communicate**

To reduce latency further, pre‑fetch the next chunk while the current one streams and use a circular buffer for audio. Explain that increasing packet size reduces overhead but hurts jitter handling; thus we choose 20 ms packets as a sweet spot. Summarize trade‑offs: smaller chunks → lower latency, higher CPU usage; larger buffers → smoother playback at the cost of perceived delay. This structured explanation shows clear problem framing, technical depth, and practical engineering decisions—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
