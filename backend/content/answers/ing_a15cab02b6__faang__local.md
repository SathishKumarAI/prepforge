---
qid: ing_a15cab02b6__faang__local
question: 'Explain: End-to-end time to first audio (TTFA) — Conversational AI latency:
  What is it and why it matters?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 466
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:59:52-05:00'
sources: []
---

**Clarify**  
We’re asked about *End‑to‑End Time To First Audio* (TTFA) in a conversational AI system—i.e., the latency from when a user speaks until the first audible response is heard. Assume a typical voice‑assist pipeline: speech‑to‑text, intent inference, backend call(s), text‑to‑speech synthesis, and audio delivery.

**Approach**  
1. Define TTFA as the sum of all processing and network delays before the first sound starts.  
2. Explain why it matters for user experience (perceived responsiveness).  
3. Highlight its role in SLA, A/B testing, and model selection.  

**Depth**  
TTFA = *Capture Delay* + *STT Latency* + *Inference Time* + *Backend RTT* + *TTS Generation* + *Audio Streaming Prep*.  
- **Capture delay**: microphone startup (≈10 ms).  
- **Speech‑to‑Text**: online models ~300–500 ms; offline ~200 ms.  
- **Intent inference**: lightweight NN <50 ms on edge, server‑side 100–200 ms.  
- **Backend calls**: depends on service; 50–150 ms typical for REST.  
- **Text‑to‑Speech**: neural TTS ~200 ms for a short utterance.  
- **Streaming prep**: buffering ~30 ms.  

Total TTFA ≈ 1–2 seconds for cloud‑based systems, <800 ms for edge deployments.

**Edge cases**  
- Network outages → infinite TTFA.  
- Long user queries → larger STT & TTS times.  
- Model failures → fallback to canned response delays.

**Optimize & Communicate**  
- Move inference to the device (edge) to shave 100–200 ms.  
- Use streaming TTS to start audio before full synthesis completes.  
- Cache common responses to eliminate backend RTT.  
When explaining, I’d walk through each component, quantify typical values, and show a simple equation so interviewers see both conceptual grasp and concrete numbers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
