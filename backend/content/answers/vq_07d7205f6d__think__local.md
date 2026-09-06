---
qid: vq_07d7205f6d__think__local
question: What are the types of dimension tables?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 434
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:06:49-05:00'
sources: []
---

**1️⃣ Clarify & Assumptions**  
   - Confirm that “dimension table” refers to star/snowflake schemas in OLAP, not arbitrary lookup tables.  
   - Assume the user wants a classification of dimension types (e.g., slowly changing, hierarchies).  

**2️⃣ Mental Model / Framework**  
   - Think of dimensions as categories that describe facts.  
   - Group them by behavior: *static vs dynamic*, *hierarchical structure*, *surrogate key usage*.  
   - Use a taxonomy table to map characteristics → dimension names.

**3️⃣ Step‑by‑Step Reasoning**  
   1. List common dimension types (e.g., **Static**, **SCD Type 1/2/3**, **Hierarchical**, **Time**, **Geography**, **Product**).  
   2. For each, note key attributes: change handling, natural vs surrogate keys, typical grain.  
   3. Highlight interactions—e.g., a hierarchical dimension often uses a parent‑child relationship.  
   4. Cross‑check against known OLAP patterns to ensure completeness.

**4️⃣ Common Traps to Avoid**  
   - Mixing *dimension* with *fact* concepts.  
   - Overlooking **surrogate key** importance in SCD dimensions.  
   - Forgetting that some dimensions (like time) are inherently *temporal* but also *hierarchical*.  
   - Assuming all dimensions are static—many real‑world systems use SCD 2.

**5️⃣ Sanity‑Check & Communicate**  
   - Re‑explain the taxonomy in plain terms: “We’re categorizing dimensions by how they evolve and whether they have internal hierarchies.”  
   - Verify that each category has at least one concrete example.  
   - Present the final list as a concise table or bullet points, ensuring clarity for someone new to data warehousing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
