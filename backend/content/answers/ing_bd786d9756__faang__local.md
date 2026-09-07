---
qid: ing_bd786d9756__faang__local
question: 'Explain: Streaming and latency — Understanding latency | ElevenLabs Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 599
total_tokens: 834
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:03:12-05:00'
sources: []
---

**Clarify**  
The question asks how *latency* is defined in the context of *streaming audio* (as in ElevenLabs’ TTS API) and why it matters for real‑time synthesis. I’ll assume we’re talking about client‑side latency: the time from sending a request until the first audible sample reaches the user, not just network round‑trip.

**Approach**  
1. Define “latency” as end‑to‑end delay.  
2. Break it into components (network, server processing, codec/streaming).  
3. Explain how streaming mitigates total latency by sending small chunks early.  
4. Relate to user experience and system design.

**Depth**  

| Component | Typical duration | Impact |
|-----------|------------------|--------|
| **Network RTT** | 10–200 ms (depends on distance, ISP) | Adds constant base delay; cannot be eliminated by streaming. |
| **Server pre‑processing** | 20–50 ms per request | For streaming, only first few ms of audio are needed to start playback. |
| **Chunk generation & encoding** | 5–10 ms per 200 ms chunk | Streaming sends the first chunk as soon as it’s ready; subsequent chunks follow at fixed intervals. |
| **Client buffering** | 50–100 ms (minimum buffer for smooth play) | Must be large enough to hide jitter but small enough not to inflate latency. |

*Latency in ElevenLabs’ API* is measured from the moment the HTTP request is sent until the first byte of audio data arrives at the client. Because the service streams, the first 200–300 ms of speech can be rendered while the rest continues to arrive, keeping perceived lag below ~250 ms—acceptable for conversational UI.

**Edge cases**  
- **High jitter or packet loss**: increases effective latency; need forward error correction or adaptive buffering.  
- **Large requests (e.g., long passages)**: initial chunk still quick, but total completion time rises linearly with length.  
- **Client under‑buffering**: can cause underruns and audible glitches.

**Optimize & communicate**  
To reduce latency further, we could:  
1. Use *HTTP/2* or *WebSockets* to lower handshake overhead.  
2. Deploy edge servers closer to users (CDN).  
3. Offer a “low‑latency” mode that reduces preprocessing complexity at the cost of slightly lower audio quality.

When explaining this to interviewers, I’d emphasize how streaming transforms an otherwise linear latency into a *pipeline*: only the first chunk matters for user perception, while later chunks keep the buffer full. This aligns with FAANG’s focus on scalable, low‑latency services and demonstrates both analytical depth and practical engineering insight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
