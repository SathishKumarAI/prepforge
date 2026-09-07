---
qid: ing_21a866a9f0__faang__local
question: 'Explain: Safety & guardrails — Ai System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 513
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:03:09-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked how to build *safety* and *guardrails* into an AI system—i.e., prevent harmful outputs, bias amplification, or misuse while keeping utility high. Key assumptions: (a) the model is pre‑trained and fine‑tuned on user data; (b) it serves a public API; (c) latency ≤ 200 ms; (d) regulatory compliance (GDPR, COPPA).  

**2️⃣ Approach**  
1. *Risk taxonomy* – map harms (privacy leakage, disallowed content, hallucination, bias).  
2. *Defense layers*:  
   - Data‑level filtering & sanitization.  
   - Model‑level constraints (reward shaping, fine‑tuning on safe datasets).  
   - Runtime post‑processing (moderation pipelines, user‑feedback loops).  
3. *Monitoring* – real‑time dashboards + audit logs.  

**3️⃣ Depth**  
- **Data filtering**: use regex & ML classifiers to block PII before tokenization; cost ≈ O(n) per request.  
- **Fine‑tuning**: supervised fine‑tune on a curated “safe” corpus (≈ 10k examples); add a penalty term λ·(undesired_score).  
- **Post‑processing**: a lightweight rule‑based engine checks token probability distribution for disallowed phrases; if threshold > 0.7, replace with safe fallback.  
- **Human‑in‑the‑loop**: flag high‑risk queries to human moderators; feedback updates the fine‑tune set.  

**4️⃣ Edge Cases**  
- Adversarial prompts that trigger hallucinations. Test with jailbreak scripts.  
- Over‑censoring leading to utility loss (e.g., blocking medical advice). Use A/B tests to balance precision vs recall.  

**5️⃣ Optimize & Communicate**  
- Cache moderation results for identical queries (O(1) lookup).  
- Deploy a separate “safety microservice” so the main inference latency stays low.  
- Explain design choices: layered defense = principle of *defense‑in‑depth*; monitoring satisfies regulatory auditability.  

This structured plan demonstrates clear problem framing, thoughtful architecture, complexity awareness, and readiness for edge‑case testing—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
