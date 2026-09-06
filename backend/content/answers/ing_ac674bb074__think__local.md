---
qid: ing_ac674bb074__think__local
question: 'Explain: When do you build an agent versus a fixed workflow? The PM wants
  "an agent."'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 455
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:23:03-05:00'
sources: []
---

**1️⃣ Clarify the goal & constraints**  
- *What does “agent” mean to the PM?* Is it a reactive bot, a learning system, or just a script that runs on demand?  
- *Scope*: Do we need real‑time decision making, continuous learning, or can a static pipeline suffice?  
- *Resources*: Time, data, infra, and expertise available.

**2️⃣ Mental model: “Agent vs. Workflow” decision matrix**  
| Criterion | Agent suitable | Fixed workflow suitable |
|-----------|-----------------|------------------------|
| **Dynamic inputs / uncertainty** | ✔︎ | ✖︎ |
| **Need for adaptation or learning** | ✔︎ | ✖︎ |
| **Complex multi‑step reasoning** | ✔︎ | ✖︎ |
| **Clear, deterministic data flow** | ✖︎ | ✔︎ |
| **Limited data / simple logic** | ✖︎ | ✔︎ |

Use this as a quick reference.

**3️⃣ Step‑by‑step reasoning**  
1. List all system requirements (inputs, outputs, latency).  
2. Map each requirement to the matrix columns.  
3. Count how many “agent” vs. “workflow” criteria are met.  
4. If majority lean toward agent and there’s a genuine need for adaptability, justify an agent.  
5. Else, propose a fixed workflow with clear modularity.

**4️⃣ Common traps**  
- *Over‑engineering*: Calling something an “agent” just because it uses ML.  
- *Ignoring constraints*: A true agent needs continuous data; if data pipelines are static, a workflow is safer.  
- *Underestimating maintenance*: Agents require monitoring and retraining loops.

**5️⃣ Sanity check & verbalize**  
- Summarize the decision logic in one sentence: “We’ll build an agent because it must adapt to unpredictable user behavior and learn from new data.”  
- If you can’t explain why a workflow would be insufficient, revisit your criteria.  

By following this structured thinking, you can confidently argue for or against building an agent versus a fixed workflow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
