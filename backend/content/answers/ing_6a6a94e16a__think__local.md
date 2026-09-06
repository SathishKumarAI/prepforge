---
qid: ing_6a6a94e16a__think__local
question: Walk me through streaming TTS. How do you chunk input text, and how do you
  size the jitter buffer?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 726
total_tokens: 927
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:03:14-05:00'
sources: []
---

**1️⃣ Clarify & set assumptions**

- *What is “streaming TTS” exactly?*  
  We’re talking about generating audio in real‑time from an incoming text stream (e.g., live captioning or voice assistants).  
- *Who’s the audience?*  
  Engineers building a low‑latency pipeline; they need concrete guidelines, not just theory.  
- *What constraints matter?*  
  Latency budget, CPU/GPU load, network jitter, and user‑perceived smoothness.

**2️⃣ Mental model / framework**

Use a **producer–consumer pipeline**:  

| Stage | Input | Output | Key parameters |
|-------|-------|--------|----------------|
| Text ingestion | Raw text stream (bytes) | Token list | Chunk size, punctuation |
| Pre‑processing | Tokens | Phoneme/linguistic features | Prosody model, pause handling |
| Acoustic generation | Features | Waveform buffer | Frame length, overlap |
| Post‑processing | Buffer | Final audio | Jitter buffer, resampling |

Treat the jitter buffer as a *window* that balances latency against buffering to smooth out network or processing hiccups.

**3️⃣ Step‑by‑step reasoning**

1. **Chunking strategy**  
   - Split on sentence boundaries (periods, question marks).  
   - If a sentence is too long (> 200 words), sub‑divide at natural pauses (commas, conjunctions).  
   - Preserve token continuity: keep the last few tokens of a chunk as a *look‑ahead* for the next chunk to avoid prosody breaks.  

2. **Jitter buffer sizing**  
   - Measure *base latency*: TTS engine’s per‑chunk synthesis time (e.g., 200 ms).  
   - Add *network jitter margin*: observe RTT variation; a common rule is `buffer = max(0, jitter + safety_margin)`.  
   - Typical values: 100–300 ms buffer for consumer devices, up to 500 ms for high‑latency links.  

3. **Dynamic adjustment**  
   - Monitor queue length; if it grows beyond a threshold, temporarily increase chunk size or reduce buffer.  
   - If latency spikes, drop the buffer and let user experience a small glitch instead of large lag.

**4️⃣ Common traps**

- *Too large chunks*: leads to long initial delay before any audio plays.  
- *No look‑ahead*: causes prosody discontinuities (e.g., abrupt pitch changes).  
- *Static jitter buffer*: fails when network conditions change; results in either underruns or excessive buffering.  
- *Ignoring token overlap*: can produce clipped phonemes at chunk boundaries.

**5️⃣ Sanity‑check & communicate**

1. **Run a latency audit**: feed a 10 kword transcript, log timestamps from text arrival to audio playback.  
2. **Plot queue length vs. time**: verify buffer stays within bounds.  
3. **Explain to stakeholders**: “We chunk at sentence boundaries with a 50‑token overlap and maintain a 200 ms jitter buffer, giving us ~300 ms total end‑to‑end latency under normal conditions.”  

By following this structured approach—clarify goals → model pipeline → decide chunk size & buffer rules → watch for pitfalls → validate—we can design a robust streaming TTS system that balances responsiveness with audio quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
