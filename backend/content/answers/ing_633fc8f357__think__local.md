---
qid: ing_633fc8f357__think__local
question: 'Explain: Monolithic Architecture — Cloud Native Anti-Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 487
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:33:48-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - Assume “Monolithic Architecture” refers to a single deployable unit (all services, DBs, UI in one container or VM).  
   - “Cloud‑Native Anti‑Patterns” are design choices that look fine on paper but break cloud benefits (scalability, resilience, observability).  
   - Target audience: ML engineers who might package models as monoliths.

**2️⃣ Mental model / framework**  
   - **Layered anti‑patterns list**: *Single Deployment Unit*, *Tight Coupling*, *Hard‑coded Config*, *Shared State*, *Monolithic Data Store*.  
   - Map each to cloud‑native principles: *Micro‑service decomposition, declarative config, statelessness, independent scaling, observability*.

**3️⃣ Step‑by‑step reasoning**  
   1. Identify the monolith’s components (model inference API, preprocessing pipeline, metrics store).  
   2. For each component, ask “Can it scale independently?” – if no, it’s a *Single Deployment Unit* anti‑pattern.  
   3. Examine inter‑component calls; tight coupling → hard to evolve or replace models.  
   4. Check configuration: hard‑coded paths vs. environment variables/ConfigMaps.  
   5. Look for shared in‑memory state (e.g., caching entire model graph) – violates statelessness.  
   6. Evaluate data persistence: one monolithic DB vs. per‑service storage.

**4️⃣ Common traps to avoid**  
   - Assuming “one container = cloud‑native” is enough.  
   - Over‑splitting services without clear boundaries → micro‑service explosion.  
   - Ignoring versioning when decoupling model artifacts.

**5️⃣ Sanity‑check & communicate**  
   - Run a mental “what if” test: scale only the inference API – does the monolith break?  
   - Summarize each anti‑pattern with a quick fix (e.g., containerize each pipeline step, use Kubernetes Deployment for scaling).  
   - Conclude by emphasizing that ML pipelines benefit from modularity: easier A/B testing, rollback, and resource optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
