---
qid: ing_3c24357898__think__local
question: What does "treat all model output as untrusted" mean, and why?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 403
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:47:16-05:00'
sources: []
---

**1. Clarify the question & assumptions**  
- Identify that “untrusted” refers to security/robustness in AI systems.  
- Assume the context is building reliable software that uses model predictions (e.g., NLP, vision).  
- Note we’re discussing *all* outputs, not just a subset.

**2. Mental model / framework**  
- Treat output as data produced by an external process: it can be wrong, biased, or manipulated.  
- Use the “trusted‑source vs untrusted source” dichotomy common in software security (e.g., inputs from users).  
- Combine with *model reliability* concepts: accuracy, calibration, adversarial robustness.

**3. Step‑by‑step reasoning**  
1. Models are statistical approximations; they can misclassify or hallucinate.  
2. Even high‑accuracy models have error rates that matter in critical domains.  
3. Outputs can be exploited by attackers (e.g., prompting a language model to reveal private info).  
4. Therefore, any downstream component must not assume the output is correct; it should validate, monitor, or sandbox it.  

**4. Common traps to avoid**  
- Assuming “high accuracy” ≈ “trustworthy”.  
- Ignoring distribution shift: a model may be accurate on training data but fail elsewhere.  
- Overlooking that outputs can leak sensitive info or reveal internal weights.

**5. Sanity‑check & communicate**  
- Ask: “If this output is fed directly into a policy decision, what could go wrong?”  
- Explain: “Because the model’s confidence doesn’t guarantee correctness, treat it like any external input—verify, rate‑limit, and log.”  
- Summarize succinctly for stakeholders: “Treat all model outputs as untrusted so you can guard against errors, bias, and attacks before they propagate.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
