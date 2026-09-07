---
qid: ing_28d13d8747__faang__local
question: 'Explain: Failure modes & mitigations — Customer Support Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 452
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:18:27-05:00'
sources: []
---

**Clarify**  
You’re asking how an AI‑powered customer‑support agent can fail and what we’d do to mitigate those failures. I’ll assume the bot is deployed in a live chat setting, handles FAQs, escalates complex tickets, and must protect user data.

**Approach**  
1. Enumerate common failure modes (misunderstanding intent, hallucinating facts, privacy leaks, escalation loops).  
2. For each, propose technical mitigations (confidence thresholds, knowledge‑base grounding, audit logs).  
3. Discuss operational safeguards (human review, rate limiting).  

**Depth**  
| Failure | Mitigation | Complexity |
|---------|------------|-----------|
| **Intent misclassification** | Confidence scoring + fallback to human; use intent‑specific fine‑tuning | O(1) per message |
| **Hallucinated answers** | Retrieval‑augmented generation (RAG) with a verified knowledge base; post‑generation validation layer | O(log N) retrieval |
| **Privacy leakage** | Tokenization + differential privacy noise; enforce no PII storage, use on‑device inference | Minimal runtime overhead |
| **Escalation loops** | Rule‑based escalation threshold + watchdog timers; manual audit queue | O(1) |
| **System overload** | Auto‑scaling with graceful degradation; queue throttling | O(log M) scaling |

**Edge Cases**  
- Ambiguous queries that trigger multiple intents.  
- Rapid bursts of traffic causing cache misses.  
- Adversarial inputs designed to extract PII.  
Test by simulating mixed intent dialogs, load spikes, and adversarial prompts.

**Optimize & Communicate**  
Iteratively profile the RAG pipeline; compress embeddings with product quantization to reduce latency. Document trade‑offs: tighter confidence thresholds lower hallucinations but increase human handoff. Explain decisions in a stakeholder deck: “We chose RAG because it keeps factuality while allowing rapid retraining.” This structured reasoning showcases problem decomposition, technical depth, and clear communication—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
