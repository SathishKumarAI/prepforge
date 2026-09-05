---
qid: vq_73bdb46ea1__star__local
question: In Python, how are arguments delivered by value or reference?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 334
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:04:39-05:00'
sources: []
---

**Situation:**  
In a recent data‑pipeline refactor for our recommendation engine, I noticed the feature‑extraction function was unexpectedly altering the original dataframe passed from the caller, causing downstream jobs to run on corrupted data.

**Task:**  
I needed to pinpoint why the mutation happened and redesign the interface so callers could rely on the original data remaining untouched while still allowing efficient processing.

**Action:**  
I started by inspecting Python’s argument-passing semantics: objects are passed by reference, but immutable types behave like pass‑by‑value. Using a minimal reproducer, I showed that passing a `pandas.DataFrame` (mutable) allowed in‑place changes. To preserve the caller’s data, I switched to using `df.copy(deep=True)` inside the function and documented the expectation of immutability. For performance, I added an optional `in_place=False` flag so callers could choose to mutate when they explicitly wanted it. I also wrote unit tests that assert no side‑effects on the original object.

**Result:**  
After the change, our pipeline ran without data corruption; runtime increased by only 3 % due to shallow copies in most cases. The team now has a clear contract: pass‑by‑value for immutable inputs and explicit copy semantics for mutable ones. I learned that clarifying Python’s reference behavior early prevents subtle bugs and improves API usability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
