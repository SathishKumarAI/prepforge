---
qid: ing_2f2967f082__think__local
question: 'Explain: Design the eval harness for an LLM feature we''re shipping - treat
  it like you''d design a test framework.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 384
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:47:09-05:00'
sources: []
---

**Metacognition Blueprint – Designing an Eval Harness for an LLM Feature**

1. **Clarify Scope & Goals (≈30 words)**  
   *Ask*: What feature is being shipped? Which user‑centric metrics matter (accuracy, safety, latency)? Define success thresholds and the target audience (QA team, data scientists).  
2. **Choose a Test Framework Mental Model (≈40 words)**  
   Adopt the “Unit‑Test → Integration → System” pyramid: unit tests for isolated prompts, integration tests for prompt chains, system tests for end‑to‑end user flows. Map each layer to the feature’s components (prompt templates, post‑processing).  
3. **Step‑by‑Step Reasoning (≈70 words)**  
   *a.* Identify input‑output contracts: expected tokens, confidence ranges.  
   *b.* Create a deterministic prompt library with metadata (tags, version).  
   *c.* Build an evaluation runner that seeds the LLM, captures raw output and post‑processed results.  
   *d.* Compute metrics per test case and aggregate by group/tag.  
   *e.* Store results in a time‑series DB for trend analysis.  
4. **Avoid Common Traps (≈30 words)**  
   Don’t hard‑code golden outputs that drift with model updates; use reference ranges or human‑reviewed anchors instead. Guard against flaky tests by isolating randomness and mocking external services.  
5. **Sanity‑Check & Communicate (≈20 words)**  
   Run a smoke test on fresh data, verify metric thresholds, and present a concise dashboard. Iterate the harness as new edge cases surface, keeping documentation up to date for future teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
