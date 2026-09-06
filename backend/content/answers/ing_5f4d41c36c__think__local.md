---
qid: ing_5f4d41c36c__think__local
question: Budget the end-to-end latency for a real-time voice agent. Why is time-to-first-audio
  a different problem from an LLM's time-to-first-token?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 211
output_tokens: 531
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:18:51-05:00'
sources: []
---

**Metacognitive Blueprint – “Why Voice Latency ≠ Token Latency”**

1. **Clarify the scope and assumptions**  
   - *What* is being measured? (Total round‑trip from microphone to audible response)  
   - *Assumptions*: single‑pass streaming, no heavy preprocessing, network latency ~50 ms, local inference for LLM, no speech‑to‑text overhead.

2. **Adopt a layered mental model**  
   - **Signal Capture → Acoustic Feature Extraction → ASR Decoding** (audio‑centric)  
   - **Prompt Construction → Model Inference → Token Generation** (LLM‑centric)  
   Each layer has its own computational and I/O costs, so latency decomposes differently.

3. **Stepwise reasoning toward the budget**  
   a. *Capture & buffering*: 20 ms per frame (e.g., 10 ms frames with 10 ms overlap).  
   b. *Feature extraction* (MFCC, Mel‑spectrogram): ~5 ms.  
   c. *ASR decoding*: if streaming, first partial hypothesis after 200–300 ms.  
   d. *LLM inference*: first token typically after 50–80 ms of prompt input; subsequent tokens arrive every ~20 ms.  
   e. *Speech synthesis*: waveform generation adds another ~30–40 ms.  
   Sum these to get an end‑to‑first‑audio latency of ~400–500 ms, whereas time‑to‑first‑token is often <100 ms.

4. **Common pitfalls to dodge**  
   - Treating ASR and LLM inference as a single “model” block.  
   - Ignoring the initial audio buffer needed for reliable acoustic modeling.  
   - Overlooking network jitter when streaming tokens versus raw audio.  
   - Assuming token latency scales linearly with utterance length.

5. **Sanity‑check & verbalize**  
   - Cross‑validate each component against published benchmarks (e.g., Whisper, Tacotron).  
   - Check that the summed budget exceeds the “first‑audio” target; if not, identify missing overheads.  
   - When explaining, emphasize that *time‑to‑first‑audio* must include signal acquisition and synthesis, whereas *time‑to‑first‑token* is confined to textual model inference, hence inherently different.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
