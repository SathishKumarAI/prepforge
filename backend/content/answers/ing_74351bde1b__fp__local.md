---
qid: ing_74351bde1b__fp__local
question: 'Explain: The note should be ready before the clinician leaves the room.
  Build me the latency budget, and tell me where the money goes.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 589
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:12:08-05:00'
sources: []
---

**Latency Budget for “Note‑Ready Before Exit”**

The goal is a deterministic upper bound on total response time \(T_{\max}\) that guarantees the clinical note appears in the EMR while the practitioner exits the room.  
We decompose \(T_{\max}\) into three stages, each governed by a different principle:

| Stage | Latency Component | Underlying Principle | Budget Share |
|-------|-------------------|----------------------|--------------|
| 1. **Speech‑to‑Text (S2T)** | \(\tau_{s}\) | *Information theory*: the channel capacity of the acoustic pipeline dictates a minimal decoding time proportional to input duration \(L\). | \(\approx 0.4\,T_{\max}\) |
| 2. **NLP Summarization & Structuring** | \(\tau_{n}\) | *Optimization*: transformer inference cost scales with sequence length and model depth; pruning/quantization reduce it linearly while preserving BLEU‑like quality. | \(\approx 0.35\,T_{\max}\) |
| 3. **EMR Insertion & Validation** | \(\tau_{e}\) | *Probabilistic inference*: network latency follows an exponential tail; we allocate a safety margin \(k\sigma\) to bound the 99th percentile. | \(\approx 0.25\,T_{\max}\) |

**Why this split?**  
- **S2T** dominates because raw audio is the only source of uncertainty; its latency is fixed by sampling rate and codec delay.  
- **NLP** sits in the middle: model size is tunable, so we trade off compute (money) against accuracy.  
- **EMR** is the final gatekeeper; a small tail can kill usability, hence the conservative margin.

**Where the money goes:**  
1. **Compute nodes for S2T** – high‑frequency GPUs or FPGAs to keep \(\tau_{s}\) below 0.4 \(T_{\max}\).  
2. **Model optimization services** (pruning, quantization, distillation) to shrink \(\tau_{n}\).  
3. **Low‑latency networking & caching** for EMR API calls; budget a small buffer for worst‑case RTT.

*Non‑obvious insight:* The *variance* of each stage matters more than its mean. A highly deterministic S2T engine with a tiny mean but large variance can still violate the deadline, whereas a slightly slower but tightly concentrated NLP inference may be preferable. Balancing **mean–variance** trade‑offs is therefore essential in any latency budget for clinical AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
