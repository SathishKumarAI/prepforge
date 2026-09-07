---
qid: ing_bdf40dc632__faang__local
question: 'Explain: Latency Budget — Voice Ai Healthcare'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 473
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:04:07-05:00'
sources: []
---

**Clarify**  
You’re asking how a *latency budget* applies to a voice‑AI system in healthcare (e.g., dictation, triage bots). I’ll assume:  
1) The system must respond fast enough for clinicians to stay conversational.  
2) Regulatory compliance (HIPAA, FDA) imposes limits on error rates and auditability.  

**Approach**  
1. Define a target end‑to‑end latency (e.g., < 200 ms).  
2. Decompose the pipeline: acoustic front‑end → ASR → intent/NLP → backend lookup → response synthesis.  
3. Profile each component, identify bottlenecks, and set per‑module budgets that sum to the overall goal.

**Depth**  
- **Acoustic & ASR**: Use lightweight models (e.g., 1–2 ms/second) with on‑device pre‑processing; employ model quantization and adaptive beamforming.  
- **NLP / Intent**: Deploy a distilled transformer (≤ 5 ms inference) that can handle clinical vocabularies via domain adapters.  
- **Backend**: Cache frequent queries in an in‑memory store; use async calls to EMR systems, with graceful degradation if latency spikes.  
- **Text‑to‑Speech**: Synthesize using a low‑latency neural TTS (≤ 20 ms per sentence).  

Total expected latency ≈ 150–180 ms, leaving slack for error handling.

**Edge Cases**  
- Network partitions → fallback to local cache or offline mode.  
- High acoustic noise → trigger adaptive sampling or user prompt.  
- Model drift → continuous monitoring of confidence scores; retrain on flagged samples.

**Optimize & Communicate**  
Iteratively tighten budgets by profiling real traffic, applying hardware acceleration (TPU/FPGA), and pruning redundant model layers. I’d present the latency budget as a “service level objective” in the architecture diagram, annotate each module’s contribution, and explain how monitoring dashboards enforce SLAs. This demonstrates clear problem framing, systematic engineering, and awareness of regulatory constraints—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
