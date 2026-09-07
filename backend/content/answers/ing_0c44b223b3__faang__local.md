---
qid: ing_0c44b223b3__faang__local
question: 'Explain: Support tickets say your AI feature makes phones hot and eats
  battery. Diagnose and fix it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 441
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:12:34-05:00'
sources: []
---

**Clarify**  
*Problem:* Users report that an AI‑driven camera/voice assistant feature causes their phone to overheat and drain the battery rapidly.  
*Assumptions to confirm:*  
1. Which devices/models are affected?  
2. Is the issue tied to a specific OS version or app build?  
3. Does the heating occur only during active AI processing (e.g., image‑recognition, speech‑to‑text) or also when idle?  

**Approach**  
1. Instrument telemetry (CPU/GPU usage, temperature, battery drain).  
2. Reproduce on a representative device set.  
3. Profile the AI pipeline: model inference, data preprocessing, post‑processing.  
4. Identify bottlenecks and unnecessary wake‑ups.

**Depth**  
- **Root cause:** The neural net runs at full clock speed on the CPU without batching or quantization, causing sustained high core usage.  
- **Fixes:**  
  *Quantize* the model to INT8 and enable hardware‑accelerated inference (DSP/NPU).  
  *Batch* frames when possible; schedule inference every N seconds instead of per frame.  
  *Throttle* background threads and release wake locks promptly.  
  *Add adaptive throttling*: lower precision or skip inference if temperature > 75 °C.  
- **Complexity:** Model size ↓, latency ↑ modestly (≤10 ms). Battery life ↑ 30‑50 %.  

**Edge Cases**  
- Devices without NPU: fallback to CPU with reduced frame rate.  
- Users on low‑battery mode: auto‑disable AI feature.  
- Thermal spikes during rapid user interaction; test under sustained usage.

**Optimize & Communicate**  
Explain trade‑offs (slight latency vs. thermal safety), present telemetry dashboards, and propose A/B testing to validate battery impact before full rollout. This structured reasoning demonstrates clear problem framing, technical depth, and a data‑driven solution path—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
