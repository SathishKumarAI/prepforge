---
qid: ing_9527a282b8__faang__local
question: 'Explain: Clarifying questions & assumptions — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 494
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:30:58-05:00'
sources: []
---

**Clarify**  
*What does “realtime voice agent” mean?* Is it a live‑speech recognizer that answers queries, or a full conversational system with synthesis?  
*Latency tolerance:* How low must the end‑to‑end response time be (e.g., <200 ms for spoken dialogue)?  
*Domain & language:* Which languages, accents, and vocabularies are required?  
*Deployment constraints:* Edge vs. cloud, bandwidth limits, privacy regulations.

**Approach**  
1. **Front‑end capture** → low‑latency microphone pipeline (noise‑suppression, echo cancellation).  
2. **Speech‑to‑Text (STT)** → streaming model (e.g., Kaldi/DeepSpeech) that emits partial hypotheses.  
3. **Intent & slot extraction** → lightweight transformer or RNN that processes the transcript in real time.  
4. **Dialog policy** → finite‑state machine or reinforcement‑learning policy that decides next action.  
5. **Text‑to‑Speech (TTS)** → neural vocoder (WaveNet/WaveGlow) optimized for low CPU usage.  
6. **Feedback loop** → confidence scores feed back to the policy for clarification requests.

**Depth**  
- Use *chunked* streaming STT to reduce latency (~50 ms per 200‑ms audio chunk).  
- Apply *beam search* with a small beam (≤4) to keep decoding fast.  
- Deploy *model quantization* (int8) and *pruning* for edge inference.  
- Complexity: STT O(T·C), T=audio length, C=number of model parameters; policy inference is O(1) per turn.

**Edge Cases**  
- Accents or background noise causing low confidence → fallback to “I didn’t catch that.”  
- Long utterances exceeding buffer size → segment and re‑join.  
- Privacy: ensure local STT when data cannot leave device.

**Optimize & Communicate**  
Iterate on latency by profiling each component, replacing heavy TTS with a lightweight concatenative system if needed. Explain trade‑offs (accuracy vs. speed) to stakeholders, highlighting how streaming inference and model compression keep the agent responsive while respecting deployment constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
