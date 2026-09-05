---
qid: ing_47593a9711__star__local
question: 'Explain: When to Use Code-Based Evals — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 312
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:51:29-05:00'
sources: []
---

**Situation:**  
During a project at a fintech startup, we built an AI model that generated personalized loan recommendation emails. The marketing team wanted instant feedback on the relevance and compliance of each email before sending them to customers.

**Task:**  
I had to create a rapid, repeatable evaluation system that could run hundreds of synthetic customer profiles through the model, verify business rule adherence (e.g., credit score thresholds), and score the output for tone consistency—all in real time during development sprints.

**Action:**  
I set up code‑based evals using Langwatch for monitoring model outputs and Langfuse to orchestrate test runs. I wrote a Python script that generated 1,000 synthetic profiles, invoked the email generation endpoint, then executed a series of assertion functions: checking subject line length, verifying no disallowed keywords, and scoring sentiment with HuggingFace’s pipeline. The evals were integrated into our CI pipeline so every commit ran them automatically, flagging regressions before they hit staging.

**Result:**  
The automated code‑based evals cut manual review time from 4 hours per sprint to under 30 minutes, reduced compliance incidents by 78%, and gave the product team confidence that changes met business constraints. I learned how tightly coupling evaluation logic with code not only speeds iteration but also surfaces hidden edge cases early in the cycle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
