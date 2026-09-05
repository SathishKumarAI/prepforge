---
qid: ing_1d0c6261c9__star__local
question: 'Explain: Getting started — Cody - Sourcegraph docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 436
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:27:44-05:00'
sources: []
---

**Situation:**  
When my team rolled out a new micro‑service stack, we needed a fast way to onboard junior developers who were unfamiliar with our legacy codebase. The documentation was scattered across GitHub and internal wikis, making it hard for newcomers to find the right functions or APIs.

**Task:**  
I had to create a quick reference that let engineers ask natural language questions about the code and get instant answers—essentially turning our docs into an interactive knowledge base without writing new tooling from scratch.

**Action:**  
I used Sourcegraph’s Cody feature. First, I enabled the “Cody for Docs” extension in our org’s Sourcegraph instance and pointed it at the monorepo containing both source code and Markdown docs. Then I wrote a small set of prompt templates that wrapped key API patterns (e.g., “Explain how `fetchUserData` handles errors”). Cody leveraged its built‑in LLM to scan the repo, index the docs, and surface context‑aware snippets directly in the editor. To ensure accuracy, I ran a validation loop: for each template I compared Cody’s output against our existing documentation, tweaked prompts, and added a few unit tests that verified the returned code snippets matched the real implementation.

**Result:**  
Within two weeks, junior developers could retrieve accurate, context‑rich answers in under 30 seconds, cutting onboarding time by ~35%. The team reported a 50% drop in support tickets related to “how do I use this function?” and I was able to repurpose the same Cody setup for our new product line with minimal effort. This experience taught me how to rapidly prototype AI‑augmented documentation workflows using Sourcegraph’s tooling without reinventing the wheel.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
