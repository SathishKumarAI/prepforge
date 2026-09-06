---
qid: ing_a9cf168b5f__think__local
question: What is an agent? — Agentic Engineering - by Neo Kim and Paul Hoekstra
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 390
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:14:42-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Confirm that “agent” refers to *machine‑learning agents* (not legal or philosophical agents).  
- Assume the reader knows basic ML terms but not the specific definition used in **Agentic Engineering**.

**2️⃣ Adopt a mental model**  
- Treat an agent as a **closed-loop system**: it observes, decides, acts, and learns.  
- Map this to the classic *perception–action* cycle plus a *learning* component (policy update).

**3️⃣ Step‑by‑step reasoning**  
1. Start with the *environment* (input space).  
2. Define the *state representation* that the agent extracts.  
3. Explain the *policy* or decision function mapping states to actions.  
4. Show how *actions* influence the environment and generate new observations.  
5. Highlight the *learning loop*: reward signals, loss functions, gradient updates.

**4️⃣ Avoid common pitfalls**  
- Don’t conflate an agent with a model; emphasize the interaction loop.  
- Beware of over‑simplifying “agent = neural net”; it’s the *behaviour* that matters.  
- Resist mixing up *policy* and *value function* unless explicitly needed.

**5️⃣ Sanity‑check & verbalize**  
- Ask: Does this definition cover perception, action, and learning?  
- Say aloud: “An agent is a system that perceives its environment, decides on actions based on a policy, executes those actions, observes the outcome, and learns from feedback to improve future decisions.”  

Follow these steps whenever you need to explain an ML concept succinctly yet comprehensively.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
