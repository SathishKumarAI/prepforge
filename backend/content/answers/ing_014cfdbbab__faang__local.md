---
qid: ing_014cfdbbab__faang__local
question: 'Explain: Hardware — On Device And Edge Deployment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 617
total_tokens: 848
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:47:11-05:00'
sources: []
---

**Hardware – On‑Device & Edge Deployment**

| **Aspect** | **On‑Device (Mobile/IoT)** | **Edge (Gateways/NICs)** |
|------------|---------------------------|--------------------------|
| **Latency** | <10 ms; ideal for real‑time control. | 1–50 ms; good for local aggregation & filtering. |
| **Power** | Ultra‑low (≤ 100 mW); battery‑driven. | Moderate (≤ 5 W); often mains or larger batteries. |
| **Compute** | ARM Cortex, GPUs, NPUs (e.g., Qualcomm Hexagon). | Multi‑core CPUs + dedicated AI accelerators (TPU‑Edge, Intel Movidius). |
| **Memory/Storage** | 256 MB–2 GB RAM; flash 8–32 GB. | 4–16 GB RAM; SSD/NVMe 64–512 GB. |
| **Connectivity** | Wi‑Fi, BLE, LTE/5G, NB‑IoT. | Ethernet, 5G backhaul, LoRaWAN gateways. |
| **Security** | Secure Element + TrustZone. | TPM, hardware encryption modules. |

### Clarify
- *Goal:* Reduce cloud traffic & latency while keeping models lightweight.
- *Assumptions:* Models fit within device memory; power budget known; network bandwidth variable.

### Approach
1. **Model quantization (INT8/FP16)** to shrink size and speed inference.  
2. **Knowledge distillation**: train a small student model on‑device, teacher runs in cloud.  
3. **Hardware‑aware pruning** to align with specific accelerators.  
4. **Edge orchestration layer** for dynamic routing between device & edge when bandwidth or compute fluctuates.

### Depth
- On‑device inference can achieve ~30 FPS for a 0.5 M model on a Snapdragon NPU; edge devices run full‑size ResNet‑50 at >10 FPS with GPU/TPU.  
- Power consumption: INT8 inference ≈ 200 mW on mobile vs. 1 W on edge gateway.

### Edge Cases
- **Model drift**: Update distribution via OTA; monitor accuracy degradation.  
- **Battery spikes**: Fall back to lower‑precision or cached results.  
- **Security breaches**: Use signed binaries and secure boot.

### Optimize & Communicate
Explain trade‑offs: On‑device offers lowest latency but limited compute; edge balances performance with power, enabling heavier models and collaborative inference (federated learning). Highlight that a hybrid pipeline—on‑device filtering + edge aggregation—maximizes responsiveness while conserving bandwidth. This structured rationale demonstrates clear problem framing, technical depth, and practical deployment insights expected in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
