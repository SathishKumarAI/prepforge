---
qid: ing_afc42607d9__think__local
question: 'Explain: ✍️ License: open-core split — GitHub - langwatch/langwatch: The
  platform for LLM evaluations and AI agent testing \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 214
output_tokens: 586
total_tokens: 800
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:36:34-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**

- *What is being asked?*  
  Explain what an “open‑core split” license means and how it applies to the GitHub project **langwatch/langwatch** (an LLM evaluation platform).  
- *Assumptions*:  
  – The reader knows basic software licensing terms.  
  – They are interested in how the repo’s legal model works, not a deep dive into every license text.

---

**2️⃣ Build a mental framework**

1. **Core vs. Extensions**  
   - *Core* = free, open‑source code available under an OSI‑approved license (e.g., MIT).  
   - *Extensions* = proprietary add‑ons or services that users can purchase.
2. **Open‑core split model**  
   - The core is fully functional and modifiable.  
   - Extensions provide extra value but are closed source, often bundled with commercial support or hosting.

---

**3️⃣ Step‑by‑step reasoning**

1. *Locate the repo’s license file* → see MIT (or similar) for core code.  
2. *Search for “extensions” or “commercial” sections* in README or docs → identifies where proprietary features live.  
3. *Map features*:  
   - Core: evaluation metrics, test harnesses, agent scaffolding.  
   - Extensions: advanced analytics dashboard, cloud‑hosted agents, premium data sets.  
4. *Explain implications*:  
   – Developers can fork & modify the core.  
   – Commercial users pay for extensions; they cannot redistribute those parts.

---

**4️⃣ Common traps to avoid**

- **Mixing open and closed code in a single repo**: The split is usually enforced by separate directories or build flags, not by mixing licenses in one file.  
- **Assuming all core features are free forever**: Some core components may become part of the paid tier later.  
- **Overlooking “dual‑licensing” nuances**: If the project offers a dual open/enterprise license, that changes usage rights.

---

**5️⃣ Sanity‑check & verbalize**

- *Ask*: Does this description match what you see in the repo’s docs?  
- *Explain aloud*: “The core of langwatch is MIT‑licensed; you can use it freely. The proprietary extensions—like the hosted evaluation service—are closed source and require a commercial license.”  
- *Confirm*: If the user still confuses, point them to the exact files (`LICENSE`, `README.md`, or an `extensions/` folder) for verification.

This structured approach keeps your explanation clear, accurate, and easy to replicate for other open‑core projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
