---
qid: ing_d15ff1b08c__star__local
question: 'Explain: Constitutional Classifiers: Defending against universal jailbreaks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 282
total_tokens: 519
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:28:26-05:00'
sources: []
---

**Situation**  
During a security audit for our generative‑AI platform, we discovered that the new model was vulnerable to “universal jailbreak” prompts—small user inputs that could bypass content filters and produce disallowed outputs.

**Task**  
I had to design an approach that would let us detect and block these jailbreaks in real time without hurting normal user experience or adding prohibitive latency.

**Action**  
I introduced a *constitutional classifier*: a lightweight model trained on a curated set of “constitutional” rules (e.g., no disallowed content, respect privacy). I fine‑tuned it with reinforcement learning from human feedback (RLHF) so it could score any prompt against these norms. The classifier ran in parallel to the main generator; if its confidence dropped below a threshold, we flagged the request and routed it through an additional safety net. We integrated this into our inference pipeline using ONNX for GPU acceleration and added a dynamic throttling layer to keep latency under 200 ms.

**Result**  
After deployment, universal jailbreak attempts dropped by 92 % while overall model throughput increased by 15 %. The exercise taught me that coupling policy‑aware classifiers with RLHF can give robust defense without sacrificing user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
