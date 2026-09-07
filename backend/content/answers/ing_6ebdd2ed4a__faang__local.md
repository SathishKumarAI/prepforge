---
qid: ing_6ebdd2ed4a__faang__local
question: 'Explain: Unit Tests for Tools — Building Tool Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 517
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:01:15-05:00'
sources: []
---

**Unit Tests for Tool Agents (FAANG‑style)**  

| Step | What to do | Why it matters |
|------|------------|----------------|
| **1️⃣ Clarify** | *Restate:* We need automated tests that verify a tool‑agent’s correctness, isolation, and safety when invoking external APIs. | Ensures we’re testing the right thing—behavior of the agent, not the API itself. |
| **2️⃣ Approach** | 1. Mock every external dependency (HTTP calls, SDKs).<br>2. Use *dependency injection* so the agent can receive a stubbed client.<br>3. Write tests for: <br>a) Successful responses → correct state update.<br>b) Error codes → graceful fallback.<br>c) Rate‑limit/timeout scenarios. | Keeps tests fast, deterministic, and focused on the agent’s logic. |
| **3️⃣ Depth** | *Example (Python):*<br```python
class MockClient:
    def call(self, payload):
        if payload["intent"] == "book":
            return {"status":"ok","id":123}
        raise ValueError("bad intent")
```
Use `pytest` + `unittest.mock.patch` to inject `MockClient`. Verify that the agent stores `id=123` after a booking call and logs an error when calling with bad intent. Complexity: O(1) per test; memory O(1). | Demonstrates full coverage of success, failure, edge cases without real network overhead. |
| **4️⃣ Edge Cases** | • Network failures (timeouts, DNS errors).<br>• Unexpected payload shapes.<br>• Concurrent calls – race conditions. <br>Test by injecting delayed responses or raising `asyncio.TimeoutError`. | Highlights robustness; ensures the agent degrades gracefully. |
| **5️⃣ Optimize & Communicate** | *Improvements:* <br>– Use a contract‑based mock generator to keep stubs in sync with API docs.<br>– Add integration tests that hit a sandbox environment for end‑to‑end coverage. <br>When presenting, narrate the isolation strategy first, then walk through a success test and an error test, finishing with a quick note on performance impact (no real HTTP calls). | Shows you can scale tests, maintain them, and keep stakeholders confident in reliability. |

**Word count:** ~195 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
