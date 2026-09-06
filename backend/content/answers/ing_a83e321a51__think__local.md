---
qid: ing_a83e321a51__think__local
question: 'Explain: Test Suites & Assertions: Define Unit Tests'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 470
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:09:38-05:00'
sources: []
---

**1️⃣ Clarify the goal and key terms**  
   - *What is a “unit test”?* A small, isolated check that verifies one piece of code behaves as expected.  
   - *What are “test suites” and “assertions”?* Suites group many unit tests; assertions are the individual checks inside each test.

**2️⃣ Adopt a mental model: “Specification → Implementation → Verification”**  
   - View the system’s requirements as a specification.  
   - Write code that aims to satisfy that spec.  
   - Use tests to verify (and document) that the implementation meets the spec.

**3️⃣ Step‑by‑step reasoning**  

1. **Identify a unit** – e.g., a single function or method.  
2. **Define expected behavior** – inputs → outputs, side effects, error conditions.  
3. **Write assertions** for each scenario (e.g., `assert add(2, 3) == 5`).  
4. **Group related tests into a suite** (e.g., all arithmetic tests in `TestMath`).  
5. **Run the suite**, inspect failures, refine code or test as needed.

**4️⃣ Common traps to avoid**  

- *Testing too broadly*: Mixing multiple units in one test defeats isolation.  
- *Over‑asserting*: Checking internal state instead of public behavior.  
- *Hardcoding values*: Makes tests brittle when requirements evolve.  
- *Ignoring edge cases*: Failing to cover inputs like `None`, extremes, or errors.

**5️⃣ Sanity‑check & communicate**  

- **Read the test first**: If it makes sense and covers a clear scenario, you’re on track.  
- **Explain aloud**: “This assertion ensures that calling `divide(6, 2)` returns `3` and throws a `ZeroDivisionError` when the divisor is zero.”  
- **Peer review**: Ask someone else to read the test; if they can predict the outcome without seeing the implementation, it’s likely correct.

By following this structured approach, you create clear, maintainable unit tests that form robust test suites, each assertion serving as a precise contract for your code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
