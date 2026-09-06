---
qid: ing_57a86011e6__think__local
question: 'Explain: Local and CI — AI Agent Testing and Evaluation | LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 483
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:47:08-05:00'
sources: []
---

**1. Clarify the ask & assumptions**  
- Identify that “Local” means running tests on a single machine (e.g., dev laptop) while “CI” refers to Continuous Integration pipelines (GitHub Actions, GitLab CI, etc.).  
- Assume we’re talking about evaluating an AI agent’s behavior through automated tests rather than manual inspection.  
- Note that the audience likely knows basic testing concepts but may not be familiar with domain‑specific agents.

**2. Adopt a mental model**  
- Think of *testing* as two layers: **functional correctness** (does the agent do what it should?) and **performance/robustness** (how well under varied conditions?).  
- Treat **Local** as the first, fast, exploratory stage; **CI** as the repeatable, production‑grade stage.  
- Use a *pipeline* diagram: code → local test run → CI test run → report.

**3. Step‑by‑step reasoning**  
1. Define clear evaluation metrics (accuracy, latency, safety).  
2. Write unit tests for individual components (tokenizer, policy network).  
3. Create integration tests that simulate a full dialogue loop.  
4. On local, run these with verbose output and debugging tools.  
5. Configure the CI pipeline to install dependencies, run tests, and publish artifacts.  
6. Add flaky‑test handling (retries) because AI outputs can be stochastic.

**4. Common traps to avoid**  
- Assuming local success guarantees CI success; environment differences matter.  
- Overlooking non‑determinism: random seeds must be fixed for reproducible CI results.  
- Ignoring resource limits in CI (GPU vs CPU).  
- Neglecting to capture and compare logs or model checkpoints.

**5. Sanity checks & communication**  
- Verify that a failing local test also fails in CI; run both manually if needed.  
- Keep the explanation concise: “Local lets developers iterate quickly, while CI ensures every commit meets the same rigorous standards.”  
- Use visual aids (flowchart) to illustrate the two stages and their interaction.

This structured approach helps anyone internalize how to design, run, and maintain AI agent tests across local and continuous‑integration environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
