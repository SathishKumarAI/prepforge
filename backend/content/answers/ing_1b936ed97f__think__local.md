---
qid: ing_1b936ed97f__think__local
question: 'Explain: Q: Describe three RAG patterns and when to use each.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 591
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:31:45-05:00'
sources: []
---

I will produce numbered list explaining clarifications, mental model (RAG = Retrieval Augmented Generation), stepwise reasoning, traps, sanity check.**1️⃣ Clarify the scope & assumptions**  
- *What is RAG?*  Retrieval‑Augmented Generation: a generative model that can query an external knowledge base at inference time.  
- *“Patterns”* refers to common architectural or workflow variants (e.g., “Retrieve‑then‑Generate”, “Generate‑then‑Retrieve”, “Dual‑Encoder RAG”).  
- Assume the audience knows basic NLP but not deep RAG internals; keep explanations high‑level yet concrete.

**2️⃣ Mental model / framework**  
Treat each pattern as a pipeline of two stages: **retrieval** (searching indexed documents) → **generation** (transformer producing output).  Think of “where” the external knowledge is injected and “how” it influences decoding.  This yields three archetypes:

| Pattern | Retrieval step | Generation step | Key idea |
|---------|-----------------|-----------------|----------|
| Retrieve‑then‑Generate | Query → top‑k docs | Feed docs + prompt into decoder | Knowledge as context |
| Generate‑then‑Retrieve | Decoder proposes key terms | Use terms to query | Model guides retrieval |
| Dual‑Encoder RAG | Encoder processes query+docs in parallel | Joint scoring & generation | Tight coupling of evidence |

**3️⃣ Step‑by‑step reasoning toward answer**  
- **Step 1:** Define each pattern’s flow diagrammatically.  
- **Step 2:** Explain the intuition: why we might want retrieval first (fast, stable), or let the model steer retrieval (more dynamic).  
- **Step 3:** Cite typical use cases: static FAQ answering → Retrieve‑then‑Generate; open‑domain dialogue → Dual‑Encoder; domain adaptation with few examples → Generate‑then‑Retrieve.  
- **Step 4:** Mention trade‑offs: latency, faithfulness, hallucination risk.

**4️⃣ Common traps to avoid**  
- Mixing up “retrieval” vs “relevance scoring.”  
- Assuming all patterns require the same index format.  
- Overlooking that Generate‑then‑Retrieve can amplify model bias if key terms are wrong.  

**5️⃣ Sanity‑check & verbal communication**  
- Re‑phrase each pattern in one sentence: “We first pull evidence, then generate” etc.  
- Ask yourself: Does the explanation make sense to someone who only knows transformers?  
- If a point feels shaky, backtrack to the diagram and confirm the flow.

Use this checklist whenever you need to explain RAG patterns—clarify scope, map the pipeline, reason through flows, dodge common pitfalls, and verify clarity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
