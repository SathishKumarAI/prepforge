---
qid: ing_a242429f4f__eli5__local
question: 'Explain: Getting Started with Installation — GitHub - crewAIInc/crewAI:
  Framework for orchestrating role-playing, autonomous AI agents. By fostering collaborative
  intelligence, CrewAI empowers agents to work together seamlessly, tackling complex
  tasks. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 316
total_tokens: 516
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:54:54-05:00'
sources: []
---

Imagine you’re setting up a new LEGO city where each block is an AI agent that can talk to the others and build something amazing together.  
1. **Get the blueprint** – on GitHub the “repo” (short for repository) is like the instruction book. Open it in your browser.  
2. **Copy the city plans** – run `git clone https://github.com/crewAIInc/crewAI.git` to download all the LEGO pieces to your computer.  
3. **Prepare a clean workspace** – create a virtual environment (`python -m venv env && source env/bin/activate`). Think of it as a dedicated room where only your city’s blocks live, avoiding clutter from other projects.  
4. **Add the necessary bricks** – install the required libraries with `pip install -r requirements.txt`. These are the special connectors that let the agents talk to each other.  
5. **Start building** – run the example script (`python examples/simple.py`). Your agents will launch, coordinate, and start solving a task together—just like LEGO minifigures collaborating on a new structure.

That’s it: clone, set up an isolated environment, install dependencies, then launch. You’ve just assembled your first AI “city.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
