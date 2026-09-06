---
qid: ing_6abef57485__think__local
question: 'Explain: Make Testing Easy — 10 Good Coding Principles to Improve Code
  Quality'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 634
total_tokens: 828
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:04:40-05:00'
sources: []
---

**1. Clarify the goal and scope**  
   *Assumptions*: We’re talking about unit‑level tests for ML pipelines (data prep, feature engineering, model training). The audience knows basic testing concepts but wants concrete coding habits that reduce friction when writing or running tests.

**2. Adopt a mental model: “Testability as a first‑class design constraint”**  
   Treat every module with the same lens you would use for production code—encapsulate state, expose clear interfaces, and keep side effects minimal. Think of testability like API design: predictable inputs → deterministic outputs.

**3. Step‑by‑step reasoning toward the 10 principles**  

| # | Principle | Rationale | Typical Pitfall |
|---|-----------|-----------|-----------------|
| 1 | **Keep functions pure** | No hidden globals or I/O; tests can call them directly. | Over‑engineering to avoid side effects. |
| 2 | **Use dependency injection** | Swap out real data loaders with mocks. | Forgetting to expose dependencies through constructors. |
| 3 | **Separate concerns (ETL, model, evaluation)** | Each layer has its own test suite. | Mixing data logic and training code. |
| 4 | **Define clear contracts (type hints, docstrings)** | Tests can assert against expected signatures. | Relying on duck‑typing only. |
| 5 | **Make randomness deterministic** | Seed RNGs or use fixtures; tests are repeatable. | Assuming random splits won’t affect results. |
| 6 | **Avoid hard‑coded file paths** | Use path parameters or configuration objects. | Tests fail when filesystem layout changes. |
| 7 | **Provide a test data factory** | Reuse fixture data across tests. | Writing identical data creation code in every test. |
| 8 | **Use property‑based testing for edge cases** | Catch unseen bugs early. | Overlooking rare but critical inputs. |
| 9 | **Document expected failure modes** | Test that errors surface correctly. | Ignoring exception handling paths. |
|10 | **Run tests in CI with coverage thresholds** | Ensures new code is covered and refactor‑safe. | Relying on manual test runs only. |

**4. Common traps to avoid**  
   * Mixing data preprocessing and model logic → hard to isolate failures.  
   * Over‑mocking: replace too much of the real pipeline, losing integration checks.  
   * Ignoring performance metrics in tests; a unit test should not depend on training time.

**5. Sanity‑check & verbalize**  
   • Ask: “Does this principle reduce friction for a new tester?”  
   • Explain each rule as a question: “Will my code run with a fake data loader?”  
   • Summarize: “Treat testability like API design—clear, deterministic, and injectable.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
