---
qid: ing_14f83125f5__think__local
question: 'Explain: Continuous Refactoring — 10 Good Coding Principles to Improve
  Code Quality'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 574
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:05:46-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   *Ask:* Are we focusing on ML‑specific refactoring or general software? Assume a mix: data pipelines, model code, and infrastructure.  
   *Assume:* The audience knows basic OOP/functional concepts but may not be familiar with ML lifecycle nuances.

**2️⃣ Adopt a mental model**  
   - Treat the ML system as a *pipeline of transformations* (data → feature engineering → training → evaluation).  
   - View refactoring as “cleaning up” each transformation without changing its observable behavior.  
   - Map each principle to one or more pipeline stages.

**3️⃣ Step‑by‑step reasoning**  
   1. **Keep functions small & single‑purpose** – e.g., split a long `prepare_dataset()` into `load_data()`, `clean_data()`, etc.  
   2. **Prefer composition over inheritance** – use decorator patterns for data augmentation instead of subclassing models.  
   3. **Use descriptive names** – `train_random_forest` > `rf_train`.  
   4. **Avoid hard‑coding constants** – externalize hyperparameters to a config file or YAML.  
   5. **Encapsulate state** – wrap model + training history in a class, not global variables.  
   6. **Write unit tests for pure functions** – test feature extraction independently of the training loop.  
   7. **Document intent with docstrings & type hints** – especially for custom loss functions or callbacks.  
   8. **Leverage version control for data artifacts** – treat datasets like code: commit, tag, and pull requests.  
   9. **Use linting & static analysis tools** – `flake8`, `mypy` help catch regressions early.  
  10. **Automate refactoring with CI pipelines** – run tests + style checks on every PR to ensure changes don’t break downstream steps.

**4️⃣ Common traps to avoid**  
   - *Refactor for the sake of refactoring*: only when it yields measurable clarity or testability.  
   - *Premature abstraction*: over‑generalizing early can inflate complexity.  
   - *Ignoring performance*: small clean code changes may introduce bottlenecks in large‑scale training loops.

**5️⃣ Sanity‑check & communicate**  
   - Run a quick “before/after” benchmark to confirm no regression.  
   - Explain each principle with a concrete ML example (e.g., refactoring a `DataLoader` class).  
   - End with a checklist for reviewers: “Did we isolate side effects? Are tests covering the new interface?”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
