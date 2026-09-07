---
qid: ing_65a0b04839__faang__local
question: 'Explain: High-level architecture — Customer Support Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 497
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:40:48-05:00'
sources: []
---

**High‑Level Architecture for an AI‑Powered Customer Support Agent**

| Phase | What it does | Key Components |
|-------|--------------|----------------|
| **1️⃣ Clarify** | *Restate*: We need a chatbot that can understand user intent, retrieve relevant knowledge, and generate helpful responses. <br>*Assumptions to confirm*: 1) Real‑time interaction (≤2 s latency). 2) Multi‑channel support (web, mobile, email). 3) Integration with legacy ticketing/CRM systems. |
| **2️⃣ Approach** | • NLP pipeline → intent classification + entity extraction.<br>• Retrieval engine → vector search over knowledge base & past tickets.<br>• Generation layer → fine‑tuned LLM for response crafting.<br>• Post‑processing → safety filtering, compliance checks, fallback to human. |
| **3️⃣ Depth** | • **NLP**: Transformer encoder (e.g., BERT) fine‑tuned on support logs; uses softmax over intent classes + span predictors. <br>• **Retrieval**: FAISS index of sentence embeddings from KB articles; top‑k retrieval + re‑ranking with BM25. <br>• **Generation**: GPT‑style decoder conditioned on intent, entities, and retrieved snippets (prompt engineering). <br>• **Safety**: Toxicity classifier + rule‑based filters; if risk > threshold → route to human. <br>Complexities: O(1) inference latency per token; overall ~200 ms for a 150‑token reply on GPU. |
| **4️⃣ Edge Cases** | • Ambiguous intent → request clarification dialog.<br>• Out‑of‑scope queries → fallback ticket creation.<br>• Knowledge gaps → prompt LLM to admit lack of info and offer next steps.<br>Test with synthetic ambiguous prompts, rate‑limit scenarios, and legacy system outages. |
| **5️⃣ Optimize & Communicate** | • Cache recent embeddings for hot articles (speed ↑). <br>• Distill the LLM for edge devices if latency critical. <br>Explain trade‑offs: larger model = richer responses but higher cost; retrieval‑augmented generation balances fidelity and safety. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
