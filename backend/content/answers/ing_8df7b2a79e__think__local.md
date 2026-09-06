---
qid: ing_8df7b2a79e__think__local
question: 'Explain: I''m volunteering all of these guys as — Google I/O 2009 - Google
  Wave: Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 482
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:26:32-05:00'
sources: []
---

**1️⃣ Clarify & Scope**  
- Confirm the user wants an explanation of how Google Wave worked under the hood (architecture, protocols, data model).  
- Assume no deep‑technical background; aim for a high‑level overview that still touches on key components.

**2️⃣ Mental Model / Framework**  
- Treat Wave as a *real‑time collaborative application* similar to Google Docs but with richer features.  
- Break it into three layers:  
  1. **Client UI & Interaction** – browsers, mobile apps, APIs.  
  2. **Sync & Communication Layer** – WebSockets/long polling + protocol (Wavelet RPC).  
  3. **Backend Data Model** – Wavelets, operations, persistence.

**3️⃣ Step‑by‑Step Reasoning**  

1. **Client‑Server Flow**: User edits → client sends operation → server validates & broadcasts to others.  
2. **Operational Transformation (OT)**: Explain how concurrent edits are merged while preserving intention.  
3. **Wavelets & Documents**: Each Wave contains multiple wavelets; each wavelet holds a document or other data type.  
4. **Persistence & Replication**: Data stored in sharded, replicated databases for fault tolerance.  
5. **Extensibility**: Apps (bots) can read/write via APIs, adding new content types.

Use analogies (e.g., OT = “merge branches” in version control) to make abstract ideas concrete.

**4️⃣ Common Traps**  

- *Confusing OT with CRDTs*: Wave used OT, not CRDT.  
- *Over‑emphasizing client‑side logic*: Server is authoritative.  
- *Assuming a single database*: In reality, multiple services (auth, wave storage, app server).

**5️⃣ Sanity‑Check & Communicate**  

- Re‑read the explanation to ensure each layer flows logically.  
- Summarize in one sentence: “Google Wave was built on real‑time OT over WebSockets, with a distributed backend that stores editable ‘wavelets’ and lets third‑party apps extend its functionality.”  
- Use simple examples (e.g., two users editing the same paragraph) to illustrate key points.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
