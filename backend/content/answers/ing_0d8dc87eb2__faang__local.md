---
qid: ing_0d8dc87eb2__faang__local
question: 'Explain: Design the routing layer that decides whether a user request is
  handled on-device, by a first-party server model, or by a third-party model.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 458
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:15:23-05:00'
sources: []
---

**Clarify**

We need a *routing layer* that, given an incoming user request (e.g., text prompt, image), decides whether to:
1. Run inference locally on the device,
2. Call our own server‑side model,
3. Forward to a third‑party provider.

Assumptions:  
- All models expose a common API; latency and cost differ per tier.  
- Device resources (CPU/GPU, battery) vary by user segment.  
- Privacy policies dictate that certain data cannot leave the device.  

**Approach**

1. **Feature extraction** – collect request metadata: payload size, content type, user profile flags, device capability.  
2. **Decision engine** – a lightweight rule‑based + ML hybrid:  
   - *Rule layer* (latency budget, privacy flag).  
   - *ML classifier* (trained on historical routing outcomes) to fine‑tune for edge cases.  
3. **Execution dispatcher** – abstract adapters for each tier that handle auth, serialization, and fallback.

**Depth**

- The rule layer runs in O(1); the ML model is a small decision tree (≈10 k params).  
- Latency: device path ≈ 50 ms, first‑party server ≈ 200 ms, third‑party ≈ 300 ms.  
- Cost: third‑party incurs per‑inference fees; we track usage quotas to avoid overrun.  
- Privacy: any request flagged “confidential” bypasses external calls.

**Edge Cases**

- Network loss → fallback to device if possible.  
- Device overheating → throttle or defer non‑critical requests.  
- Model drift on third‑party → health checks with self‑diagnostics.

**Optimize & Communicate**

Future work: replace the rule + tree with a reinforcement‑learning policy that optimizes for overall system QoS and revenue. I’d present this design by walking through a concrete request flow, highlighting trade‑offs between latency, cost, and privacy, and demonstrating how each component scales linearly with traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
