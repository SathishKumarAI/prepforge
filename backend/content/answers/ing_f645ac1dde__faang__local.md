---
qid: ing_f645ac1dde__faang__local
question: 'Explain: Sources of Leakage — Llm Security'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 482
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:12:39-05:00'
sources: []
---

**Clarify**  
We’re asked to enumerate *sources of leakage* that compromise the security of large language models (LLMs).  By “leakage” I’ll interpret any unintended disclosure of training data, internal state, or model secrets that could be exploited by an attacker.  Key assumptions: the LLM is deployed via a public API; we’re concerned with both *data* and *model* leakage.

**Approach**  
1. Identify categories (training‑data, inference‑time, architectural).  
2. For each, list concrete mechanisms (e.g., membership inference).  
3. Briefly note mitigations to show awareness of trade‑offs.

**Depth**  

| Leakage source | Typical attack vector | Impact | Mitigation |
|----------------|-----------------------|--------|------------|
| **Training‑data memorization** | Prompting with near‑exact excerpts → model repeats private text | Privacy breach, legal risk | Differential privacy, data sanitization |
| **Membership inference** | Query‑output analysis to infer presence of a record in training set | Leaks whether sensitive data was used | Output noise, rate limiting |
| **Model extraction** | Repeated queries + regression on outputs → approximate weights | Intellectual property theft | Query throttling, differential privacy, watermarking |
| **Inference‑time side channels** | Timing, power, cache patterns during token generation | Reveals internal state or model size | Constant‑time ops, hardware isolation |
| **Prompt injection / jailbreaks** | Crafted prompts that cause the model to reveal hidden knowledge | Policy bypass, data leakage | Prompt filtering, instruction tuning |

**Edge cases**  
- Extremely rare tokens may still be memorized if they appear many times.  
- Adversaries can combine multiple weak signals (e.g., timing + output noise) for a stronger inference attack.

**Optimize & communicate**  
I’d emphasize that mitigation often trades utility for security: adding noise reduces accuracy, while throttling limits throughput.  A layered defense—privacy‑preserving training, robust API controls, and continuous monitoring—is the most practical strategy.  This structured walk‑through demonstrates clear problem framing, methodical analysis, and awareness of real‑world constraints—key signals interviewers look for in FAANG settings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
