---
qid: ing_f2ec25db9e__think__local
question: 'Explain: Data Mesh Architectures — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 462
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:02:54-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   * Ask whether they mean a pure “data‑mesh” (decentralized, domain‑owned data) or a hybrid with central lakehouse layers.  
   * Assume you’ll explain core principles and sketch a high‑level architecture that could feed ML pipelines.

**2️⃣ Adopt a layered mental model**  
   * **Domain layer** – business domains own datasets as “data products.”  
   * **Platform layer** – shared infra (catalog, governance, security).  
   * **Consumption layer** – data consumers (ML teams, BI) use self‑serve APIs or pipelines.  
   * Map each to common ML workflow stages (ingestion → feature store → model training).

**3️⃣ Step‑by‑step reasoning**  
   1. Identify domains that produce distinct features (e.g., sales, product usage).  
   2. Define ownership contracts: who writes, validates, and exposes data products.  
   3. Build a unified metadata catalog; expose schemas via APIs or query engines.  
   4. Enforce governance centrally (access control, lineage) but let domains enforce quality locally.  
   5. Provide a shared feature store that consumes domain‑produced tables and serves ML models.  

**4️⃣ Avoid common traps**  
   * Don’t conflate “data mesh” with “data lake.”  
   * Beware of over‑centralizing the platform layer; it should be lightweight.  
   * Resist giving every domain full autonomy without a shared security policy.

**5️⃣ Sanity‑check & communicate**  
   * Run through a concrete ML use‑case (e.g., churn prediction).  
   * Verify that each domain can publish its feature set, the platform guarantees discoverability, and the model training job can pull from the feature store.  
   * Summarize: “Data mesh gives you scalable, domain‑driven data products; the platform stitches them together so ML teams get reliable, governed inputs without a single bottleneck.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
