---
qid: ing_25c719f0a2__fp__local
question: 'Explain: Two different latency numbers — Understanding latency | ElevenLabs
  Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 492
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:25:24-05:00'
sources: []
---

**Why ElevenLabs reports two latencies**

When a text‑to‑speech model is queried, the system must do two independent jobs:

1. **Server‑side inference** – The neural network runs on GPU/CPU and produces raw audio samples.
2. **Client‑side delivery** – Those samples are streamed back over the network to the user’s device.

Because the first job lives in the cloud and the second depends on Internet speed, ElevenLabs reports:

| Latency | What it measures | Why it matters |
|---------|------------------|----------------|
| *Server latency* | Time from receiving the request until the first audio packet is ready for streaming. | Reflects model size, hardware, batch scheduling; limits how quickly a user can start hearing speech. |
| *Total latency* | Server latency + network round‑trip time (RTT) + client buffering. | Determines the real‑world “start‑to‑hear” delay that users experience. |

**Derivation from first principles**

Let \(t_{\text{model}}\) be the inference time, \(t_{\text{net}}\) the RTT, and \(b\) the client buffer size (in samples). The total latency is

\[
L_{\text{total}} = t_{\text{model}} + t_{\text{net}} + \frac{b}{f_s}
\]

where \(f_s\) is the sampling rate. ElevenLabs separates \(t_{\text{model}}\) from the sum because:

- **Optimization target**: The cloud team can only reduce \(t_{\text{model}}\); network conditions are outside their control.
- **User experience**: End‑users care about \(L_{\text{total}}\), but they also want to know whether delays stem from model size or poor connectivity.

**Non‑obvious insight**

The buffer term \(\frac{b}{f_s}\) is often the *dominant* component of total latency for high‑bandwidth connections. Even if a model finishes instantly, users will still wait because the client must pre‑fetch enough samples to avoid underruns. Thus, reducing server latency below a certain threshold yields diminishing returns unless the client buffer policy is also tuned.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
