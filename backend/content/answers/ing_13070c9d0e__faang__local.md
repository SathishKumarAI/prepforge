---
qid: ing_13070c9d0e__faang__local
question: 'Explain: New Threat Categories — Llm Security'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 576
total_tokens: 807
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:28:04-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise explanation of *“New Threat Categories – LLM Security.”* I’ll assume you mean: (1) what new risks arise when large language models (LLMs) are deployed; and (2) how those differ from traditional AI or software security concerns. If you need specifics on particular mitigations, let me know.

**Approach**  
1. Define LLMs & their unique properties.  
2. Enumerate classic threat categories: data privacy, model integrity, availability, and misuse.  
3. Highlight *new* categories that surface only with generative LLMs (e.g., hallucinations, prompt injection).  
4. Tie each to real‑world impact and mitigation ideas.

**Depth**  

| New Threat | Why It’s Unique | Impact | Typical Mitigations |
|------------|-----------------|--------|---------------------|
| **Prompt Injection / Jailbreaks** | LLMs interpret user prompts as code; attackers craft inputs that bypass safety filters. | Unauthorized data exfiltration, policy violations. | Robust prompt sanitization, hardened instruction tuning, real‑time monitoring of output patterns. |
| **Hallucination Exploitation** | Models generate plausible but false content; attackers can seed misinformation or fraud. | Credibility loss, regulatory fines. | Fact‑checking layers, confidence scoring, human‑in‑the‑loop review for high‑stakes domains. |
| **Model Inversion via Output Analysis** | Repeated outputs reveal internal embeddings. | Privacy leaks of training data (e.g., personal records). | Differential privacy during fine‑tuning, output noise injection, rate limiting. |
| **Adversarial Prompt Perturbations** | Tiny prompt changes cause drastic output shifts. | Automated content generation for phishing/spam. | Adversarial robustness testing, prompt‑style classifiers. |

**Edge Cases**  
- Models with *few‑shot* prompts may still be tricked by minimal context changes.  
- Open‑source LLMs lack hardened safety layers; community‑based monitoring is critical.  
- Regulatory environments (GDPR, CCPA) impose additional constraints on data usage.

**Optimize & Communicate**  
Explain that these categories are *interdependent*: a jailbreak can trigger hallucinations, which in turn expose private data via inversion. Stress the importance of layered defenses and continuous threat modeling. Conclude with an actionable roadmap: start with prompt sanitization, add output monitoring, then deploy differential privacy for high‑value models.

This structure shows clear problem framing, systematic analysis, depth in technical detail, awareness of edge conditions, and a concise communication style that aligns with FAANG interview expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
