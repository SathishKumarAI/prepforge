---
qid: vq_6d9e29d879__star__local
question: What is MRO in Python? How does it work?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 372
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:03:20-05:00'
sources: []
---

**Situation** – In a recent micro‑services project I was refactoring the authentication layer. The old code had three mixins (`TokenAuth`, `OAuthMixin`, `LoggingMixin`) that all inherited from a base `BaseAuth`. When I added a new class `AdvancedAuth` inheriting from all four, unit tests started failing with “AttributeError: 'AdvancedAuth' object has no attribute ‘log’”.

**Task** – I needed to understand why the method lookup was skipping `LoggingMixin` and to reorganize the inheritance so that every mixin’s methods were reachable without breaking existing behavior.

**Action** – I examined Python’s Method Resolution Order (MRO) using `AdvancedAuth.__mro__` and `inspect.getmro()`. I discovered that Python uses the C3 linearization algorithm, which creates a deterministic order that respects local precedence while preserving monotonicity. I rewrote the inheritance as `class AdvancedAuth(LoggingMixin, OAuthMixin, TokenAuth, BaseAuth):` and verified the MRO: `(AdvancedAuth, LoggingMixin, OAuthMixin, TokenAuth, BaseAuth, object)`. I then added a simple test to ensure each mixin’s method was called in the expected sequence.

**Result** – After the change all tests passed (100% coverage on auth logic), response time for login dropped from 120 ms to 85 ms, and I gained confidence that future mixin additions will follow a predictable lookup path. The experience reinforced how crucial MRO is when designing composable Python classes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
