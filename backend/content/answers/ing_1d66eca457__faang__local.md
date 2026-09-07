---
qid: ing_1d66eca457__faang__local
question: 'Explain: Jailbreak-Aware Output Filtering — Prompt Injection Defense'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 443
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:53:31-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem:* Design a system that blocks malicious prompt‑injection (“jailbreak”) attacks while still letting legitimate user requests pass through.  
*Assumptions I’d confirm:*  
- The model is stateless and receives only the current prompt.  
- Attackers can prepend or append text to influence generation.  
- We have access to a pre‑trained LLM, but can add lightweight preprocessing.

**2️⃣ Approach**  
1. **Token‑level sanity check** – scan for known jailbreak patterns (e.g., “Ignore policy”, “You are not restricted”).  
2. **Contextual embedding filter** – embed the prompt and compare against a curated “safe” prompt set using cosine similarity.  
3. **Policy enforcement layer** – run a lightweight rule engine on top of the filtered prompt before passing to the LLM.

**3️⃣ Depth**  
- *Token check:* O(n) time, trivial overhead; catches exact pattern matches.  
- *Embedding filter:* Uses a small sentence‑embedding model (e.g., DistilBERT). Complexity O(k · n), where k is embedding dimension; acceptable for real‑time service.  
- *Policy engine:* Implements whitelist/blacklist rules (e.g., “no instructions to violate policy”).  
Trade‑offs: More strict patterns reduce false negatives but increase false positives; embeddings capture semantic intent, mitigating obfuscation.

**4️⃣ Edge Cases**  
- Legitimate prompts containing forbidden tokens (“policy”) → test with synonyms.  
- Adversaries craft new jailbreak phrases not in the pattern list → rely on embedding similarity to flag.  
- Over‑filtering causing user frustration → tune similarity threshold and provide feedback loop.

**5️⃣ Optimize & Communicate**  
- Cache embeddings for repeated prompts to reduce latency.  
- Log flagged attempts for continuous learning.  
- Explain to stakeholders: “We’re layering quick pattern checks with semantic filtering, giving us a 99%+ detection rate while keeping user experience smooth.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
