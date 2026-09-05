---
qid: ing_06a2aa629e__star__local
question: When does on-device or edge inference make sense, and what actually constrains
  it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 361
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:42:10-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a smart home thermostat that learned user preferences from voice commands. The product needed to respond within 150 ms for natural interaction and had to operate on a low‑power microcontroller in the HVAC unit, with no reliable Wi‑Fi during winter storms.

**Task:**  
I was tasked with delivering real‑time intent classification and temperature recommendation locally, while keeping the device’s battery life under 5 % per day and ensuring user data never left the unit.

**Action:**  
I ported a pre‑trained BERT model to TensorFlow Lite, then applied mixed‑precision quantization (int8) and pruning to reduce size from 45 MB to 12 MB. Using Edge TPU inference on an integrated NPU, I achieved <90 ms latency per request. I also implemented a local cache of recent utterances to avoid redundant processing. To handle bandwidth limits, all updates were scheduled over MQTT during off‑peak hours and encrypted end‑to‑end.

**Result:**  
Inference latency dropped from 350 ms (cloud) to 70 ms on‑device, improving user satisfaction scores by 23 %. Power consumption fell to 0.8 W peak, keeping the unit’s daily energy draw under 4 Wh. The project proved that edge inference is essential when low latency, privacy, and intermittent connectivity outweigh cloud benefits; constraints are mainly model size, compute throughput, and power budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
