---
qid: ing_b32c03698d__think__local
question: 'Explain: Tools, skills, MCP — AI Agent Testing and Evaluation | LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 550
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:48:49-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - *What is being asked?*  The user wants an explanation of *Tools, Skills, MCP* as they relate to *AI Agent Testing and Evaluation* in the context of **LangWatch** (the language‑model monitoring framework).  
   - *Assumptions:* They are familiar with AI agents but not with LangWatch specifics; they want a concise yet complete overview.

**2️⃣ Mental model / framework**  
   1. **Tools** – concrete utilities, libraries, or services used to run tests (e.g., OpenAI API wrappers, evaluation harnesses).  
   2. **Skills** – the capabilities an agent must possess for a task (reasoning, memory, dialogue management).  
   3. **MCP (Metrics‑Criteria‑Plan)** – a structured approach:  
      - *Metrics* (accuracy, latency, safety scores)  
      - *Criteria* (thresholds or rules each metric must satisfy)  
      - *Plan* (how to orchestrate tests to cover all criteria).  

**3️⃣ Step‑by‑step reasoning toward the answer**  
   1. Define LangWatch’s role: continuous monitoring of LLM outputs in production.  
   2. Map *Tools* → LangWatch’s test harness, API calls, dataset loaders.  
   3. Identify *Skills* that tests target (e.g., factual recall, adherence to policy).  
   4. Explain how *MCP* structures the evaluation pipeline: metrics collected by tools, criteria set for each skill, and a plan that sequences test cases accordingly.  
   5. Illustrate with a concrete example (e.g., testing an agent’s ability to answer medical queries).

**4️⃣ Common traps & wrong turns**  
   - *Over‑generalizing:* Mixing LangWatch specifics with generic LLM evaluation concepts.  
   - *Skipping the “Skill” layer:* Forgetting that tests must map to human‑interpretable capabilities.  
   - *Ignoring thresholds:* Presenting metrics without clear criteria can lead to ambiguous results.  
   - *Assuming static plans:* MCP should be adaptive; highlight iteration.

**5️⃣ Sanity‑check & verbalize**  
   - Ask: “Does this explain what each component is, why it matters, and how they interact?”  
   - Ensure the explanation flows from high‑level purpose → concrete tools → target skills → structured evaluation plan.  
   - End with a quick recap or bullet list so the user can recall the three pillars easily.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
