---
qid: ing_51e8bb7c9c__think__local
question: 'Explain: Using Pre-Built Agents from Agent Pack — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 452
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:24:54-05:00'
sources: []
---

**1. Clarify the ask & assumptions**  
   - The user wants an explanation of how to use pre‑built agents from the *Agent Pack* in Haystack, specifically the tutorial section.  
   - Assume they have a working Haystack installation and basic knowledge of Rasa/Haystack concepts.

**2. Mental model / framework**  
   - Treat the Agent Pack as a library of reusable conversational components (agents).  
   - The process involves: import → configure → register in the flow → test/run.  
   - Map this to Haystack’s *flow* and *agent* architecture.

**3. Step‑by‑step reasoning**  
   1. **Locate the Agent Pack** – It lives under `haystack/agents` or can be pip installed.  
   2. **Import the desired agent** – e.g., `from haystack.agents import FAQAgent`.  
   3. **Instantiate with config** – Pass a pre‑trained model, index path, and any parameters (e.g., `k=5`).  
   4. **Register in the flow** – Use `flow.add_agent("faq", faq_agent)` or within a YAML flow file.  
   5. **Define triggers / routing** – Specify when this agent should be called (keywords, intent).  
   6. **Run & test** – Start the server (`haystack serve`) and interact via CLI/Chat UI to see the pre‑built logic in action.

**4. Common pitfalls**  
   - Forgetting to install the correct dependencies for the agent’s model.  
   - Mis‑configuring the index path → empty responses.  
   - Not wiring triggers, so the agent never gets invoked.  
   - Using an incompatible Haystack version (API changes).

**5. Sanity check & communication**  
   - Verify that after running a query the response matches the expected format from the tutorial examples.  
   - Explain each code snippet’s purpose and how it ties into the overall flow.  
   - Offer to walk through a concrete minimal example if needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
