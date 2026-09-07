---
qid: ing_e08f451c09__faang__local
question: 'Explain: Latency Budgets — Realtime Voice Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 545
total_tokens: 778
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:21:22-05:00'
sources: []
---

**Clarify**  
We’re asked how a real‑time voice agent (e.g., virtual assistant) can meet *latency budgets*—the maximum time from user utterance to spoken response—while balancing compute, bandwidth, and quality of service. I’ll assume we’re targeting < 400 ms total latency on mobile/edge devices, with constraints on CPU, memory, network jitter, and battery.

**Approach**  
1. **Decompose the pipeline:** ASR → intent inference → dialog policy → TTS.  
2. **Profile each stage** to identify bottlenecks.  
3. **Apply layer‑wise optimizations** (model pruning, quantization, caching).  
4. **Use asynchronous streaming** and early‑exit techniques.  
5. **Architect redundancy** (edge fallback vs cloud) to handle network variance.

**Depth**  

| Stage | Optimization | Complexity | Trade‑offs |
|-------|--------------|------------|------------|
| ASR | 1‑D CNN + LSTM, 4‑bit quantization; beam search width 2 | O(T · W) | Slight accuracy loss for speed |
| Intent | TinyML classifier (MobileNetV2‑lite), early‑exit after first layer if confidence >0.9 | Linear in input length | Risk of misclassification when early exit triggers |
| Policy | Rule‑based fallback + lightweight RNN; cache recent context | O(1) per turn | Limited flexibility vs deep RL policy |
| TTS | WaveRNN‑lite or FastSpeech2 with 8‑bit weights, streaming synthesis | O(T · C) | Voice naturalness may drop compared to full‑scale models |

**Edge Cases**  
- **Network outages:** switch to on‑device fallback; pre‑fetch common responses.  
- **High background noise:** trigger ASR confidence gating; fall back to text input.  
- **Battery drain spikes:** throttle CPU frequency or use low‑power DSP for TTS.

**Optimize & Communicate**  
I’d prototype a microbenchmark suite, iterate on quantization levels, and measure *Cumulative Distribution Function* of latency to ensure > 90 % of responses stay below 400 ms. In interviews I’d emphasize the trade‑off loop: “We tighten ASR precision until the 95th percentile latency hits our budget, then we shift resources to TTS if needed.” This demonstrates a data‑driven, end‑to‑end optimization mindset that FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
