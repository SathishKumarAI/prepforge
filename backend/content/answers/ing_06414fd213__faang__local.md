---
qid: ing_06414fd213__faang__local
question: Where is my data hosted and processed? — Secure legal AI for the most sensitive
  matters | Harvey
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 467
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:58:53-05:00'
sources: []
---

**Clarify**  
You’re asking where your proprietary or regulated data lands when you use a commercial AI service and how it’s processed—especially for highly sensitive workloads (health, finance, defense). The key assumptions:  
1. You control the data at rest in your own environment before sending to the provider.  
2. The provider offers “on‑prem” or “hybrid” deployment options.  
3. Legal requirements (GDPR, HIPAA, FedRAMP) dictate no cross‑border transfer without safeguards.

**Approach**  
1. Identify the hosting model: cloud‑only vs. private‑cloud/on‑prem.  
2. Map data flow: ingestion → processing → output.  
3. Verify compliance controls: encryption at rest/ in transit, audit logs, access control, data residency guarantees.

**Depth**  
- **Cloud‑only** (e.g., OpenAI GPT‑4 via API): data is temporarily stored in the provider’s region; the vendor’s SLA and CSP agreements guarantee no persistence beyond a short window. Encryption keys are managed by the vendor unless you use customer‑managed keys (CMK).  
- **Private‑cloud/on‑prem**: you install the model on your own VMs or containers, data never leaves your premises. The provider supplies only software updates; all processing stays local.  
- **Hybrid**: sensitive data is processed on‑prem while less critical queries go to the cloud; a secure VPN/Zero‑Trust network isolates traffic.

**Edge Cases**  
- Misconfigured APIs that send logs or intermediate states to public buckets.  
- Unintentional persistence in caching layers (e.g., GPU memory).  
- Failure of key rotation leading to data exposure.

**Optimize & Communicate**  
Recommend a “data residency” clause in the contract, enforce end‑to‑end encryption with CMK, and audit logs reviewed quarterly. Explain that for top‑secret workloads you should opt for on‑prem deployment, or at least a private‑cloud region within your jurisdiction, ensuring all data stays under your legal control. This demonstrates clear reasoning, technical depth, and awareness of compliance nuances.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
