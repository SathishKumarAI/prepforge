---
qid: ing_a59ffc0657__faang__local
question: Design an agent that operates a web browser to complete multi-step tasks.
  How do you make it reliable enough to ship?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 438
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:09:55-05:00'
sources: []
---

**Clarify**  
We need a browser‑automation agent that can finish end‑to‑end user workflows (e.g., booking a flight, filling a form) with high reliability before shipping to production.  
Assumptions:  
1. The UI is dynamic but consistent across environments.  
2. We have access to the site’s API for validation where possible.  
3. Tests run on CI and in staging/production.

**Approach**  
1. **Modular task graph** – represent each user action as a node (click, type, wait).  
2. **Deterministic selectors** – use data‑testids or stable ARIA labels instead of brittle CSS/XPath.  
3. **Explicit waits + retry logic** – wait for element visibility and re‑attempt up to N times with exponential backoff.  
4. **State verification** – after each node, query the DOM or backend API to confirm expected state (e.g., cart count).  
5. **Parallel sandbox runs** – spin up isolated browser contexts (Playwright/Chromium) per test.

**Depth**  
Implement a lightweight DSL for task scripts; compile them into Playwright actions. Complexity: O(n) per step, with retry cost negligible if failures are rare. Use a queue to de‑duplicate identical steps across tasks. Leverage headless browsers for speed and coverage. Store execution traces (screenshots, console logs) for debugging.

**Edge Cases**  
- Network latency spikes → increase timeout thresholds.  
- Dynamic content (ads, pop‑ups) → detect and close via selectors or script injection.  
- Auth failures → fallback to API‑based login if UI fails.  

**Optimize & Communicate**  
Add a health‑check endpoint that runs a lightweight “heartbeat” task; fail fast if any step consistently fails. Document all assumptions in the README and provide an interactive demo of the DSL. In interviews, emphasize how deterministic selectors, state checks, and retries transform flaky UI tests into production‑ready agents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
