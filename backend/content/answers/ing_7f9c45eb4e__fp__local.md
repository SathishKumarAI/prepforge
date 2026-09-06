---
qid: ing_7f9c45eb4e__fp__local
question: 'Explain: Installation — GitHub - crewAIInc/crewAI: Framework for orchestrating
  role-playing, autonomous AI agents. By fostering collaborative intelligence, CrewAI
  empowers agents to work together seamlessly, tackling complex tasks. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 209
output_tokens: 454
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:36:45-05:00'
sources: []
---

## Installing **crewAI** from GitHub

1. **Clone the repo**  
   ```bash
   git clone https://github.com/crewAIInc/crewAI.git
   cd crewAI
   ```

2. **Create a virtual environment** (recommended)  
   ```bash
   python -m venv .venv
   source .venv/bin/activate          # Linux/macOS
   .\.venv\Scripts\activate           # Windows
   ```

3. **Install dependencies**  
   ```bash
   pip install --upgrade pip setuptools wheel
   pip install -r requirements.txt
   ```

4. **Run a quick demo**  
   ```bash
   python examples/run_demo.py
   ```

The framework relies on *role‑based orchestration*: each agent is given a distinct function (e.g., research, summarization, decision‑making). The core engine schedules calls between agents using a lightweight event loop. This design stems from **distributed optimization**—by decomposing a task into subproblems, the overall solution converges faster and scales with added agents.

### Why it must work this way

- **Modularity**: Agents are stateless functions; swapping or upgrading one agent does not ripple through the system.
- **Parallelism**: The event loop allows concurrent API calls to LLMs, reducing latency compared to a linear pipeline.
- **Fault tolerance**: If an agent fails, the orchestrator can retry or fallback without halting the entire workflow.

### Non‑obvious insight

Most users focus on *role definitions*, but the real power lies in the *interaction graph*. By explicitly modeling dependencies (e.g., “Agent B must wait for Agent A’s output”), crewAI turns a chaotic multi‑agent conversation into a directed acyclic graph. This guarantees determinism: re‑running the same graph always yields the same sequence of calls, enabling reproducible experiments and easier debugging—something many frameworks overlook in favor of raw speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
