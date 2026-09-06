---
qid: ing_a242429f4f__fp__local
question: 'Explain: Getting Started with Installation — GitHub - crewAIInc/crewAI:
  Framework for orchestrating role-playing, autonomous AI agents. By fostering collaborative
  intelligence, CrewAI empowers agents to work together seamlessly, tackling complex
  tasks. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 212
output_tokens: 505
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:50:38-05:00'
sources: []
---

**Why the install process is designed this way**

The core problem *CrewAI* solves is **seamless orchestration of multiple, heterogeneous AI agents**.  
To orchestrate them we must (1) isolate each agent’s runtime, (2) give every agent a reproducible environment, and (3) allow rapid iteration across the codebase. The typical Python‑based AI stack already satisfies (1) via virtual environments or containers; CrewAI builds on that foundation to enforce (2) with **Poetry** (exact dependency resolution) and (3) with an editable install (`pip install -e .`) so changes in the local repo immediately affect all agents.

**Step‑by‑step**

1. **Clone the repository**  
   ```bash
   git clone https://github.com/crewAIInc/crewAI.git
   cd crewAI
   ```
2. **Create a virtual environment** (recommended)  
   ```bash
   python -m venv .venv && source .venv/bin/activate
   ```
3. **Install dependencies with Poetry** – this guarantees that every agent gets the same versions of `langchain`, `openai`, etc.  
   ```bash
   pip install poetry
   poetry install
   ```
4. **Editable local installation** – so modifications to core classes (`Agent`, `Crew`) propagate instantly.  
   ```bash
   pip install -e .
   ```

5. **Verify the setup** by running a simple crew demo:  

   ```python
   from crewai import Crew, Agent

   # create two agents and run them together
   agent1 = Agent(role="Researcher", goal="Find data sources")
   agent2 = Agent(role="Analyst", goal="Summarize findings")

   crew = Crew(agents=[agent1, agent2])
   result = crew.run("Explain quantum computing in layman terms.")
   print(result)
   ```

**Non‑obvious insight**

Using **editable installs (`pip install -e .`)** is not merely a convenience; it enforces the *principle of single source of truth*. Every time you tweak `crewai/agents.py`, all running agents pick up that change without needing to rebuild images or restart services—crucial for rapid prototyping in research labs where code evolves nightly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
