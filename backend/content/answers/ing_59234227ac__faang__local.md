---
qid: ing_59234227ac__faang__local
question: 'Explain: The Two Architectures — Realtime Voice Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 522
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:11:02-05:00'
sources: []
---

**Clarify**  
You’re asking how “Realtime Voice Agents” are built in two common architectures—*client‑side* (edge) and *server‑side* (cloud).  
Assumptions: we care about latency, bandwidth, privacy, scalability, and cost.

---

**Approach**  
1. **Client‑Side** – everything runs locally on the user’s device.  
2. **Server‑Side** – audio is streamed to a cloud service for processing and response generation.

We’ll compare each on key dimensions: latency, data usage, privacy, compute load, and scalability.

---

**Depth**

| Dimension | Client‑Side | Server‑Side |
|-----------|-------------|-------------|
| Latency | Near-zero (no network hop) – ideal for instant replies. | Adds round‑trip delay (~50–200 ms) plus processing time; acceptable if > 100 ms is tolerable. |
| Bandwidth | Minimal—only small model checkpoints and updates. | Continuous audio stream or chunks; higher bandwidth, especially for high‑sample‑rate speech. |
| Privacy | Data stays on device; no raw audio leaves the user. | Raw audio or transcripts leave device; must be encrypted and compliant with regulations (GDPR, CCPA). |
| Compute | Device CPU/GPU limits model size; may need quantization or pruning. | Cloud GPUs/TPUs allow large models (e.g., transformer‑based ASR, LLMs) and frequent updates. |
| Scalability | Limited by device capabilities; difficult to roll out new features globally. | Elastic scaling via autoscaling clusters; easier A/B testing and feature rollout. |

---

**Edge Cases**

- **Offline mode** → only client works.  
- **Very large vocabularies or complex NLU** → server required.  
- **Highly variable network conditions** → hybrid: lightweight front‑end on device, fallback to cloud.

---

**Optimize & Communicate**  
A *hybrid* architecture often wins: run a lightweight ASR/intent recognizer locally for instant feedback; stream to the cloud only when deeper context or richer response generation is needed. This reduces latency, preserves privacy, and keeps bandwidth in check while still leveraging powerful cloud models.  

In interviews, emphasize that trade‑offs are data‑driven: measure real‑world latency, model size, user privacy concerns, and cost before choosing an architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
