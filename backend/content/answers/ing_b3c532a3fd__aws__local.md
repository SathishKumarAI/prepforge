---
qid: ing_b3c532a3fd__aws__local
question: 'Q: Walk me through the latency budget of a voice agent. Where do the milliseconds
  go, and what is the single biggest lever?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 404
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:11:22-05:00'
sources: []
---

**Situation & Goal**  
I led a cross‑functional team that built an Alexa‑style voice assistant for a consumer electronics company. The product launch required a *50 ms* latency budget from the user’s utterance to the first audible response—critical for “instant‑response” perception.

**Task**  
Identify where the 50 ms were spent and determine the single biggest lever to shrink it.

**Action**  

| Stage | Approx. ms | AWS Services & Design |
|-------|-----------|-----------------------|
| **Network RTT** | 10 ms (avg) | Use Amazon CloudFront edge caches + TCP Fast Open |
| **Audio Capture → Transcription** | 15 ms | Deploy a lightweight Whisper model on an **Amazon SageMaker Edge Device**, inference via **AWS Greengrass** |
| **Intent Routing** | 8 ms | Stateless Lambda functions behind **API Gateway v2 (HTTP/2)**, cache intent‑to‑action map in **DAX** |
| **Action Execution** | 12 ms | Direct calls to AWS IoT Core, use **MQTT** over WebSocket for minimal handshake |
| **Speech Synthesis & Playback** | 5 ms | Serverless TTS via **Amazon Polly**, stream PCM directly to the device |

**Result**  
By moving the transcription model to Greengrass and caching intent routes in DAX, we cut overall latency from **92 ms → 48 mp**, a **47%** improvement that exceeded the target. The biggest lever was off‑loading inference to the edge (Δ ≈ 20 ms).  

**Takeaway**  
Ownership of the full stack, deep dive into each micro‑second, and bias for action—shift compute to the edge—to meet stringent latency budgets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
