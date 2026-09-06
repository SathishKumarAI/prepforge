---
qid: ing_c4d0b8701a__think__local
question: You're designing an MCP server. How do you decide whether something should
  be a tool, a resource, or a prompt?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 495
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:57:30-05:00'
sources: []
---

**1️⃣ Clarify the purpose & audience first**  
- Who will use it (players, modders, admins)?  
- What problem does it solve?  
- Is it an interactive command, a passive asset, or a template for content?

Assume you’re building a Minecraft‑style “modded server” where users can craft items, trigger events, and generate text.

**2️⃣ Adopt the *interaction* framework**  
| Type | Core characteristic | Typical use case |
|------|---------------------|------------------|
| **Tool** | An executable action that changes state (e.g., `/craft`, `/teleport`) | Direct player commands or admin utilities. |
| **Resource** | A static asset you can reference (texture, recipe, data file) | Materials, item definitions, configuration files. |
| **Prompt** | A reusable text or dialogue template that generates dynamic content | NPC dialogues, auto‑generated quest logs, AI responses. |

**3️⃣ Step‑by‑step reasoning**  
1. Identify the *output*: does it produce a new object, modify the world, or generate text?  
2. Check for **side effects**: tools alter game state; resources don’t.  
3. Look at **reusability**: prompts are often reused across contexts (e.g., same quest intro); resources can be reused but aren’t “executed.”  
4. Consider *user interaction*: if the player types a command that triggers it, it’s a tool.

**4️⃣ Common traps to avoid**  
- Mixing “tool” with “resource”: e.g., treating a recipe file as a command.  
- Over‑engineering prompts: using a prompt for a simple static message that should be a resource.  
- Forgetting the *state* aspect: tools must have clear pre/post conditions.

**5️⃣ Sanity check & verbalize**  
Ask yourself: “If I asked a player, ‘What is this?’ – would they expect it to run something?” If yes → tool.  
“Would I store this somewhere for future reference?” → resource.  
“If the same text can be fed into an AI engine elsewhere?” → prompt.

By looping through these questions you’ll consistently decide whether a new item on your MCP server should be a **tool**, **resource**, or **prompt**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
