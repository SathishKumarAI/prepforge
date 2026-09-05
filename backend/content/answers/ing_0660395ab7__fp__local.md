---
qid: ing_0660395ab7__fp__local
question: 'Explain: Voice type affects latency — Understanding latency | ElevenLabs
  Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 566
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:19:14-05:00'
sources: []
---

**Why a “voice type” changes latency**

At the core of any neural TTS engine is an *inference graph* that maps a text‑to‑spectrogram encoder to a vocoder that produces audio samples.  
Latency \(L\) is simply the wall‑clock time required for this pipeline:

\[
L = t_{\text{pre}} + \underbrace{\frac{C}{f_{\text{CPU/GPU}}}}_{t_{\text{compute}}} + t_{\text{post}}
\]

where  

* \(t_{\text{pre}}\) and \(t_{\text{post}}\) are fixed overheads (tokenisation, I/O).  
* \(C\) is the number of floating‑point operations (FLOPs) in the model.  
* \(f_{\text{CPU/GPU}}\) is the effective processing frequency.

A “voice type” is essentially a different model or a set of hyper‑parameters that trade off **model size** against **audio quality**:

| Voice | Typical FLOPs per sample | Quality |
|-------|--------------------------|---------|
| *Standard* | \(10^8\) | Good |
| *High‑fidelity* | \(3\times10^8\) | Very good |

Because \(C\) scales linearly with the number of parameters and layers, a high‑fidelity voice incurs roughly three times the compute cost. On a fixed CPU/GPU this inflates \(t_{\text{compute}}\), pushing overall latency up.

**Deeper principle:**  
Latency is an *optimization* metric; we minimise \(C\) subject to a quality constraint. Different voices represent different points on the Pareto frontier between **speed (lower FLOPs)** and **expressiveness (more parameters, richer feature maps)**.

**Non‑obvious insight:**  
For repeated calls with the same voice, caching *intermediate encoder outputs* (e.g., phoneme embeddings) can reduce \(t_{\text{pre}}\) dramatically. Many real‑world systems pre‑compute these once per utterance and reuse them across multiple requests, effectively shifting part of the latency budget from compute to memory bandwidth—an optimisation rarely mentioned in documentation but crucial for low‑latency deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
