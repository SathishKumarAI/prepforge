---
qid: ing_f366bbed2b__fp__local
question: 'Explain: Speech synthesis — Conversational AI latency: What is it and why
  it matters?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 457
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:36:20-05:00'
sources: []
---

### Speech synthesis – conversational‑AI latency

**What it is**  
When a user speaks, the system must (1) transcribe the audio, (2) run the dialogue model, and (3) generate a spoken reply. *Latency* is the elapsed time from the end of the user’s utterance to the start of the generated speech. It is measured in milliseconds and reflects the cumulative delays of all three stages.

**Why it matters**  
Human conversation tolerates roughly 200 ms of echo‑delay before speakers feel a “break.” Exceeding that threshold turns a fluid dialogue into a stilted, turn‑taking rhythm that users perceive as robotic or unresponsive. In safety‑critical domains (e.g., aviation, medical), even 50 ms can cause misinterpretation of commands.

**Why the design must enforce it**  
Latency is an optimization problem on the *information bottleneck* between user intent and system response. Each stage compresses data: ASR reduces raw audio to a text hypothesis; the language model condenses that into a semantic plan; TTS expands the plan back to waveform. The product of compression rates, computational throughput, and communication overhead determines end‑to‑end delay. Minimizing latency requires balancing three constraints:

1. **Model size vs. inference speed** – larger models yield better naturalness but slower decoding.
2. **Quantization / pruning** – aggressive model compression reduces FLOPs yet risks audible artifacts.
3. **Hardware scheduling** – overlapping ASR, NLU, and TTS pipelines on heterogeneous accelerators (CPU ↔ GPU ↔ DSP) can shave hundreds of milliseconds.

**Non‑obvious insight**  
Latency is not merely a sum of independent delays; it depends critically on *prediction horizon*. If the dialogue model predicts several future phonemes ahead, TTS can begin synthesis before ASR finishes, effectively overlapping stages. This “look‑ahead” strategy turns a linear pipeline into a pipelined one, reducing perceived latency without sacrificing quality—a trick that many designers overlook in favor of pure inference speed hacks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
