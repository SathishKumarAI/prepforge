---
qid: ing_1411299df4__star__local
question: 'Explain: Enforceable Commitments — Secure legal AI for the most sensitive
  matters | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 355
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:08:17-05:00'
sources: []
---

**Situation:**  
At a mid‑size fintech startup, we were building an AI‑driven contract review engine for our enterprise clients. The client’s compliance team insisted that every recommendation the AI made be legally binding—any false flag could expose them to regulatory fines.

**Task:**  
I had to design a system where each AI decision was an enforceable commitment: the output would automatically trigger a signed, immutable record and a formal notification that could stand up in court if challenged.

**Action:**  
First, I integrated a blockchain‑backed smart contract layer using Hyperledger Fabric. Every inference was hashed with SHA‑256, stored on-chain, and tied to a timestamped digital signature from the AI model’s private key. Next, I wrapped the model in an API that returned a signed JSON Web Token (JWT) containing the decision, confidence score, and audit trail. To meet legal standards, we added a deterministic fallback: if the confidence fell below 85 %, the system automatically escalated to a human reviewer who could approve or veto the commitment. Finally, I built an audit dashboard that exported all on‑chain events to the client’s existing case management system.

**Result:**  
The deployment reduced the client’s risk exposure by 70 % (from $2M estimated liability to $600K) and cut review cycle time from 48 hours to under 12. The team adopted the same commitment framework for other regulatory documents, and I presented the architecture at a legal‑tech conference, receiving positive feedback on its transparency and enforceability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
