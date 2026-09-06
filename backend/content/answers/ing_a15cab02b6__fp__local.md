---
qid: ing_a15cab02b6__fp__local
question: 'Explain: End-to-end time to first audio (TTFA) — Conversational AI latency:
  What is it and why it matters?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 387
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:48:58-05:00'
sources: []
---

**End‑to‑End Time to First Audio (TTFA)**  
In a conversational AI system the user speaks → the platform transcribes → the model generates a reply → text‑to‑speech produces the first audible word. **TTFA is the elapsed time from the moment the user stops speaking until that first word sounds**. It aggregates all intermediate latencies: network RTT, audio buffering, automatic speech recognition (ASR) inference, natural‑language understanding (NLU), dialogue policy planning, text generation, and neural TTS synthesis.

Why it matters  
1. **Human perception** – The human brain tolerates about 200 ms of delay before a pause feels “jarring.” TTFA that exceeds this threshold turns a smooth dialogue into a stilted back‑and‑forth.  
2. **Cognitive load** – Longer TTFA forces users to wait, leading to frustration and higher abandonment rates; conversely, ultra‑fast TTFA can cause misinterpretation of the user’s intent if the system “jumps” ahead.  
3. **Economic cost** – In call‑center or virtual‑assistant scenarios, every millisecond saved translates into a measurable reduction in average handle time.

Non‑obvious insight: *TTFA is not merely the sum of component latencies; it is dominated by the **distribution tail**.* A single slow ASR frame can stall the entire pipeline because downstream modules block on the first token. Optimizing for mean latency alone leaves this “worst‑case” bottleneck unaddressed. Techniques such as pipelined inference, incremental decoding, and adaptive buffering that target the 95th percentile are therefore essential for delivering consistently low TTFA in real‑world deployments.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
