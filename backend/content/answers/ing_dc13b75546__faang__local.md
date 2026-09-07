---
qid: ing_dc13b75546__faang__local
question: Your chat agent is moving to the phone. What actually changes?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 476
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:10:13-05:00'
sources: []
---

**Clarify**  
You’re migrating a conversational AI from a web‑based UI to a native mobile app (iOS/Android). The goal is to preserve intent recognition, dialogue flow and data privacy while delivering a smooth on‑device experience. Key assumptions: we have a cloud‑hosted NLU engine, real‑time streaming audio, and a server‑side session store.

**Approach**  
1. **Transport & Latency** – switch from HTTP polling/WebSocket to gRPC/Protobuf for lower overhead.  
2. **Audio Capture** – use platform APIs (AVFoundation / AudioRecord) with 16 kHz mono PCM, streaming in 200 ms chunks.  
3. **On‑device NLU** – bundle a lightweight Transformer or RNN model; quantize to INT8 for <50 MB footprint.  
4. **Privacy & Offline Mode** – encrypt local logs, allow “offline” inference with a cached model, sync when connectivity returns.  
5. **Session Management** – store session state in secure storage (Keychain/Keystore) and replicate it to the cloud via encrypted sync.

**Depth**  
- **Latency**: 50 ms end‑to‑end achievable by pre‑fetching the next utterance’s context.  
- **Model Size**: ~30 MB after quantization; inference <20 ms on a recent GPU/Neural Engine.  
- **Security**: TLS v1.3 for all network traffic, local data encrypted at rest (AES‑256).  
- **Scalability**: Use CDN for model updates; background fetch keeps the app lightweight.

**Edge Cases**  
- No connectivity → fallback to cached intent set.  
- Background audio → handle iOS/Android audio session interruptions.  
- Battery drain → throttle inference on low‑power devices.

**Optimize & Communicate**  
We’ll A/B test two streaming protocols, measure 95th‑percentile latency and battery impact. Results guide a final choice. Communicating this to stakeholders: “By moving the NLU pipeline offline we cut round‑trip latency by ~30 ms, reduce server costs, and meet privacy regulations.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
