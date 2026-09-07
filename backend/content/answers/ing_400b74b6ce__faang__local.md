---
qid: ing_400b74b6ce__faang__local
question: Explain self-consistency. When is it worth the cost?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 519
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:12:56-05:00'
sources: []
---

**Self‑Consistency in LLMs**

| Step | What I’ll do |
|------|--------------|
| **Clarify** | *Problem:* Explain the self‑consistency (SC) technique used with large language models, and when its extra compute is justified. <br>*Assumptions to confirm:* 1) The model already produces high‑confidence answers; 2) We can afford multiple forward passes; 3) The target task values accuracy over latency. |
| **Approach** | 1. Define SC: repeat the prompt, sample *N* outputs, rank by internal confidence or a secondary verifier, and pick the top‑ranked answer. <br>2. Discuss its effect on calibration and error reduction. <br>3. Evaluate cost–benefit trade‑off (time, tokens, compute). |
| **Depth** | SC is essentially *ensembling* for language models. By sampling many responses we expose the model’s latent distribution; the most self‑consistent answer tends to align with its highest probability mode. Empirically, 10–30 samples can improve accuracy by 2–5 % on QA or summarization tasks, but latency scales linearly with *N* (≈ O(N·T) where T is token generation time). |
| **Edge Cases** | • If the model’s confidence scores are poorly calibrated, SC may reinforce wrong answers. <br>• For streaming or real‑time systems, repeated sampling breaks the “one‑pass” requirement. <br>• Extremely noisy prompts can lead to divergent samples that SC cannot reconcile. |
| **Optimize & Communicate** | • Use *few* high‑quality samples (e.g., 5–10) and a lightweight verifier (e.g., prompt‑based scoring or a small classifier). <br>• Parallelize generations on GPUs to mitigate latency. <br>Explain that SC is worth it when: <br>1) The task tolerates slight delay (document search, legal QA). <br>2) Accuracy is mission‑critical (medical diagnosis). <br>3) Compute budget allows multiple passes without violating SLAs. |

*In summary,* self‑consistency trades latency for modest accuracy gains by leveraging the model’s own distribution; it shines in high‑stakes, batch‑oriented settings where a few extra seconds are acceptable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
