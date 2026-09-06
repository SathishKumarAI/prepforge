---
qid: vq_3b56f62724__think__local
question: What are the different masking techniques available ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 448
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:25:42-05:00'
sources: []
---

**1️⃣ Clarify & set assumptions**  
- *What is “masking” in this context?* – We’re talking about protecting sensitive data (PII, PHI, financial) when it’s stored or transmitted.  
- *Scope:* only data‑at‑rest and data‑in‑use within a data warehouse / lakehouse; we’ll ignore network‑level encryption unless explicitly asked.  

**2️⃣ Adopt a mental model** – classify masking methods by *purpose* and *implementation*:  
1. **Static (Data‑at‑Rest) Masking** – applied when the dataset is stored permanently.  
2. **Dynamic (Runtime/On‑Demand) Masking** – applied as data is queried or streamed.  

Within each, differentiate between *deterministic* vs *non‑deterministic* approaches and *format‑preserving* vs *format‑changing*.  

**3️⃣ Step‑by‑step reasoning**  
- List all known techniques (e.g., substitution, shuffling, hashing, tokenization, encryption, nulling).  
- For each, note: how it preserves data semantics (format‑preserving), whether it’s reversible, and typical use cases.  
- Group by static vs dynamic to keep the answer organized.  

**4️⃣ Common traps**  
- Mixing *encryption* with *masking*: encryption is a cryptographic protection, not a masking technique.  
- Forgetting that some methods (e.g., hashing) are irreversible, which limits downstream analytics.  
- Assuming all dynamic masking can be applied at the database layer; sometimes you need an application‑level proxy or middleware.  

**5️⃣ Sanity‑check & communicate**  
- Verify each technique satisfies: *data confidentiality*, *analytic usability* (format‑preserving), and *reversibility* where needed.  
- Present in a clear table or bullet list, then give a brief example for one static and one dynamic method to illustrate usage.  
- End with a quick note on selecting the right approach based on compliance requirements (GDPR, HIPAA).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
