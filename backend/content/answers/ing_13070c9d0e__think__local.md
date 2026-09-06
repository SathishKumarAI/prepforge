---
qid: ing_13070c9d0e__think__local
question: 'Explain: New Threat Categories — Llm Security'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 496
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:59:40-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   *What is meant by “New Threat Categories” for LLM security?*  
   - Assume we’re discussing emerging risks that traditional NLP or software‑security models don’t cover.  
   - Assume the audience knows basic ML/LLM concepts but not the latest attack taxonomy.

**2️⃣ Adopt a threat‑modeling framework**  
   *Use STRIDE (Spoofing, Tampering, Repudiation, Information disclosure, Denial of Service, Elevation of privilege) + data‑flow analysis.*  
   - Map LLM components (data ingestion, fine‑tuning, inference API, output post‑processing).  
   - Identify where novel attack vectors arise.

**3️⃣ Step‑by‑step reasoning**  
   1. **Data poisoning & prompt injection** – new “content‑based” tampering that manipulates model weights or outputs.  
   2. **Model inversion & membership inference** – privacy leakage unique to large, publicly fine‑tuned models.  
   3. **Adversarial hallucination** – forcing the LLM to generate false but plausible content (disinformation).  
   4. **API abuse & prompt‑based DoS** – over‑loading inference services via crafted prompts.  
   5. **Supply‑chain compromise of pre‑trained weights** – tampering during distribution, leading to backdoors.  

   For each, note the entry point, attacker goal, and mitigations.

**4️⃣ Avoid common pitfalls**  
   - Don’t conflate traditional software bugs with ML‑specific issues.  
   - Don’t assume all attacks are purely malicious; some arise from inadvertent data leakage or misuse.  
   - Beware of over‑generalizing “model poisoning” to any fine‑tuning change.

**5️⃣ Sanity‑check & verbalize**  
   - Verify that each threat category maps to a distinct vector in STRIDE and has an observable impact (e.g., compromised confidentiality, integrity, or availability).  
   - Summarize: *“LLM security now faces data‑centric tampering, privacy leakage, hallucination attacks, API abuse, and supply‑chain risks—each demanding tailored defenses beyond classical software hardening.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
