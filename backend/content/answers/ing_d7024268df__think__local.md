---
qid: ing_d7024268df__think__local
question: 'Explain: Reduce Global Dependencies — 10 Good Coding Principles to Improve
  Code Quality'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 628
total_tokens: 822
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:07:38-05:00'
sources: []
---

**1. Clarify the goal & scope**  
   *What does “Reduce Global Dependencies” actually mean in ML code?*  
   - Is it about limiting global variables, minimizing cross‑module coupling, or controlling side effects from data loaders and model components?  
   - Assume we’re targeting Python projects that use NumPy/PyTorch/TensorFlow, where globals (e.g., a shared config dict) can silently alter training runs.

**2. Adopt a mental framework**  
   *Use the “Dependency Inversion” principle + the “Single Responsibility Principle.”*  
   - Think of each module as a black box that receives all its inputs via parameters or dependency injection, and returns outputs without mutating shared state.  
   - Visualize a flow diagram: data → preprocessing → model → loss → optimizer → metrics → output; every arrow should be explicit.

**3. Step‑by‑step reasoning toward the 10 principles**  
   1. Identify global objects (configs, random seeds).  
   2. Replace them with immutable dataclasses or context managers that inject state locally.  
   3. Ensure functions are pure: same inputs → same outputs, no hidden globals.  
   4. Use dependency injection for components (e.g., loss functions, optimizers).  
   5. Encapsulate data pipelines in classes that expose only a `__call__` method.  
   6. Avoid mutable defaults; use factory functions or `None` checks.  
   7. Adopt a registry pattern to map string names to concrete implementations (avoids global imports).  
   8. Document side‑effect expectations clearly in docstrings.  
   9. Write unit tests that mock all external dependencies, ensuring isolation.  
   10. Refactor legacy code iteratively: pull out globals into configuration objects and replace with constructor arguments.

**4. Common traps to avoid**  
   - **Hidden imports**: modules importing globals silently (e.g., `import config`).  
   - **Singletons masquerading as globals**: they still introduce hidden state.  
   - **Over‑injection**: passing too many parameters makes APIs unwieldy; balance clarity with simplicity.  
   - **Forgetting immutability**: mutable defaults can lead to shared state bugs.

**5. Sanity‑check & verbalize the plan**  
   - Run a quick “dependency graph” audit (e.g., using `modulegraph`) to spot remaining globals.  
   - Explain each principle aloud to a colleague: “We’re moving from global config to a frozen dataclass that’s passed into every component, so no hidden state.”  
   - Verify with a unit test that changing the config in one part of the code does not affect unrelated modules.

By following this structured thought process you can systematically produce a robust set of 10 coding principles that reduce global dependencies and improve ML code quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
