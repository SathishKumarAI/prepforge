---
qid: ing_c95a3deda6__think__local
question: What are Agent Skills, and when do you package knowledge as a skill rather
  than a tool, an MCP server, or retrieval?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 615
total_tokens: 819
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:14:15-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
- *What is being asked?* The user wants a definition of **Agent Skills** and guidance on when to treat knowledge as a skill versus other mechanisms (tool, MCP server, retrieval).  
- *Assumptions:*  
  - “Agent” refers to an AI agent that can perform tasks by invoking capabilities.  
  - “Skill” is a reusable, self‑contained module with its own prompt or logic.  
  - The alternatives (tool, MCP server, retrieval) are distinct ways of extending an agent’s abilities.

**2️⃣ Mental model / framework**  
- Think of the **agent architecture** as a stack:  
  1. *Core reasoning* – planning & decision making.  
  2. *Capabilities* – where knowledge resides.  
     - **Skill:** encapsulated logic + context (often a prompt or function).  
     - **Tool:** an external API or command‑line utility the agent calls.  
     - **MCP server:** a managed service that hosts models or data.  
     - **Retrieval:** a vector store / search system providing documents on demand.  
- Use a decision tree: *Is the knowledge static, reusable, and can be expressed as a prompt? → Skill.* Otherwise consider the other options.

**3️⃣ Step‑by‑step reasoning**  
1. Identify the *type of knowledge* (static facts, procedural steps, domain expertise).  
2. Check **reusability**: will many agents or scenarios need it? If yes, package as a skill.  
3. Evaluate **complexity**: can it be expressed in a prompt or function call? If it requires heavy computation or external data, lean toward tool/MCP/server.  
4. Consider **statefulness**: skills are stateless; tools or servers maintain state if needed.  
5. Decide on *deployment*: Skills are local modules; tools may be remote APIs; MCP servers host large models; retrieval pulls documents.

**4️⃣ Common traps to avoid**  
- Mixing a skill with an API call that should remain a tool.  
- Over‑engineering: creating many tiny skills instead of a single, well‑structured one.  
- Forgetting that skills are meant for *prompt‑based* reasoning, not arbitrary code execution.  
- Ignoring latency and cost differences between local prompts vs external calls.

**5️⃣ Sanity check & verbalize**  
- Rephrase the answer: “A skill is a reusable prompt/logic block embedded in an agent; use it when you need static, reusable knowledge that can be reasoned about locally.”  
- Verify against examples: FAQs → skills; database queries → retrieval; image generation → tool.  
- Ensure clarity by listing concrete scenarios for each option.

By following this structured approach, you’ll consistently decide whether to package knowledge as a skill or another capability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
