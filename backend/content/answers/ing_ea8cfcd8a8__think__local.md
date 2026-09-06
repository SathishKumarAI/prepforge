---
qid: ing_ea8cfcd8a8__think__local
question: 'Explain: Design a production voice agent. Pipeline vs speech-to-speech,
  the latency budget, and interruption handling.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 507
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:30:23-05:00'
sources: []
---

**1. Clarify scope & assumptions**  
   - *Scope*: “Production voice agent” → real‑time conversational system used by many users (e.g., virtual assistant).  
   - *Assumptions*: Network latency ≈ 50 ms, user expectations < 200 ms for a single utterance, speech‑to‑speech means full ASR → NLU → TTS pipeline.  

**2. Mental model / framework**  
   - Treat the system as a *pipeline of modular blocks* (ASR → NLU → Dialogue Manager → Response Generation → TTS).  
   - Each block has a *latency budget*; sum must stay below overall target.  
   - Use *interrupt‑handling loops* to allow users to interrupt or change topics mid‑response.

**3. Step‑by‑step reasoning**  
   1. **Latency budgeting**: Allocate, e.g., ASR = 150 ms, NLU = 50 ms, DM = 30 ms, TTS = 80 ms → total ≈ 310 ms; then trim or parallelize (ASR + TTS overlap).  
   2. **Pipeline design**: Keep ASR and TTS asynchronous; stream partial results to reduce perceived lag.  
   3. **Interruption handling**:  
      - Detect user pause/voice activity → pause TTS.  
      - Buffer new utterance, stop current TTS synthesis, re‑route to DM.  
      - Provide visual cue (“I’m listening”) to signal readiness.

**4. Common traps to avoid**  
   - Over‑optimizing one block at the expense of another (e.g., ultra‑fast ASR with poor accuracy).  
   - Ignoring network jitter → sudden latency spikes.  
   - Failing to handle mid‑utterance user inputs gracefully, causing “dead air” or missed commands.

**5. Sanity‑check & communicate**  
   - Verify cumulative latency < 200–250 ms; if not, profile each block.  
   - Explain design in plain terms: “We split the job into small, fast steps and keep an eye on total wait time.”  
   - Highlight that interruption handling is a safety net so users never feel stuck.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
