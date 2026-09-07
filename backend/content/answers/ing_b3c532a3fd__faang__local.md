---
qid: ing_b3c532a3fd__faang__local
question: 'Q: Walk me through the latency budget of a voice agent. Where do the milliseconds
  go, and what is the single biggest lever?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 593
total_tokens: 842
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:42:02-05:00'
sources: []
---

**Clarify**

> *Goal:* Explain how a voice‑agent’s 100 ms latency budget is partitioned, identify where the bulk of time sits, and highlight the single biggest optimization lever.  
> *Assumptions to confirm:*  
> - End‑to‑end request: mic → wake‑word → ASR → intent → NLU → response generation → TTS → speaker.  
> - Target is 100 ms total (typical for “real‑time” interactions).  
> - Network latency is already accounted for or negligible in this budget.

**Approach**

1. Break the pipeline into micro‑services and time slices.  
2. Estimate each slice from industry benchmarks.  
3. Pinpoint where the largest chunk resides.  
4. Identify a lever that reduces that chunk with minimal friction.

**Depth**

| Stage | Typical latency (ms) | Notes |
|-------|---------------------|-------|
| Wake‑word detection (edge) | 10 | Light‑weight model, on‑device inference. |
| ASR decoding (cloud/edge) | 40–50 | RNN/Transformer decoder + beam search. |
| Intent & NLU processing | 20 | Slot filling, rule engine or transformer inference. |
| Dialogue state management | 5 | Simple in‑memory store. |
| Response generation (LLM / templates) | 15 | GPT‑style inference or retrieval. |
| TTS synthesis | 10–15 | WaveNet/Neural vocoder on device. |
| **Total** | ~100 ms | Adds up to the budget. |

The *largest lever* is **ASR decoding latency**—the decoder dominates with 40–50 ms, especially when beam width or model size grows. Optimizing this stage (e.g., using a lightweight transformer, pruning, or early‑exit mechanisms) yields the biggest bang for buck.

**Edge Cases**

- Network jitter can push total >100 ms; edge caching mitigates it.  
- Low‑resource devices may not support full ASR on‑device, shifting latency to cloud.  
- Highly complex utterances trigger longer decoding times; adaptive beam width helps.

**Optimize & Communicate**

*Leverage:* Replace the heavy decoder with a **compact transformer + early‑exit**, reducing 20 ms at <1% accuracy loss.  
*Result:* Cuts total latency from ~100 ms to ~80 ms, freeing buffer for richer responses or higher model fidelity.  

I’d present this as a slide deck: diagram of the pipeline, table of latencies, and a single‑lever “ASR pruning” story, emphasizing measurable impact and trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
