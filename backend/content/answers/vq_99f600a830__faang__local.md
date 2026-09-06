---
qid: vq_99f600a830__faang__local
question: What are Dataset, Linked Service and IR ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 515
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:24:16-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a quick explanation of three Azure‑Data‑Factory (ADF) concepts: *Dataset*, *Linked Service* and *Integration Runtime (IR)*. I’ll assume they want the functional role, how they relate to each other, and why each is needed.

---

### 1️⃣ Approach
- **Define** each term in plain language.  
- **Show the hierarchy**: IR → Linked Service → Dataset.  
- **Explain data flow** between components during a copy activity.  

---

### 2️⃣ Depth

| Component | Purpose | Key Details |
|-----------|---------|-------------|
| **Integration Runtime (IR)** | Executes data movement and transformation. | *Self‑hosted* for on‑prem or hybrid, *Azure* for cloud, *SSIS* for legacy packages. Handles authentication, networking, scaling. |
| **Linked Service** | Connection definition to an external resource. | Stores connection strings, credentials (via Key Vault), security settings. One linked service per data store (SQL DB, Blob, ADLS, etc.). |
| **Dataset** | Schema‑aware representation of data within a linked service. | Points to a table/partition or file path; includes schema, parameters, and optional mapping. Used by activities as source/destination. |

During a copy activity: IR fetches the *Linked Service* credentials, then reads the *Dataset* definition to know what data to pull/push.

---

### 3️⃣ Edge Cases
- **Parameterization**: Datasets/linked services may be parameterized; missing values cause runtime failures.  
- **Credential rotation**: If Key Vault secrets change, IR must refresh tokens.  
- **Self‑hosted IR network issues**: Can’t reach on‑prem resources → data movement stalls.

---

### 4️⃣ Optimize & Communicate
- **Reuse Linked Services** across pipelines to avoid duplication.  
- **Use Azure‑managed IR for scalability**, but fall back to self‑hosted when accessing on‑prem.  
- **Document datasets** with clear naming conventions; unit‑test mapping logic.

> *In a nutshell*: The Integration Runtime runs the work, Linked Service tells it where the data lives and how to connect, and Dataset describes what that data looks like. This separation keeps pipelines modular, secure, and scalable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
