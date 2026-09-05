---
qid: ing_c4d0b8701a__star__local
question: You're designing an MCP server. How do you decide whether something should
  be a tool, a resource, or a prompt?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 337
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:03:35-05:00'
sources: []
---

**Situation:**  
At my last company we were building a multi‑tenant AI model hosting platform (MCP) that served internal data scientists and external partners. The product team wanted to expose three new features: reusable code snippets, shared datasets, and pre‑configured prompts for fine‑tuning.

**Task:**  
I had to decide which of these should be implemented as tools, resources, or prompts so the platform would stay modular, secure, and easy to maintain while meeting performance targets (≤ 1 s inference latency per request).

**Action:**  
First I mapped each item against our core principles: *extensibility*, *access control*, and *reusability*. Code snippets that could be executed on any model were tagged as **tools**—they live in a sandboxed runtime, version‑controlled, and exposed via a REST API. Shared datasets are static assets; I treated them as **resources**, stored in an object store with fine‑grained ACLs and cached locally for each tenant to hit our latency goal. Finally, prompt templates that only modify the input string were classified as **prompts**—they’re lightweight JSON objects fetched on demand and merged at inference time.

**Result:**  
The clear categorization cut integration effort by 30 % and reduced API surface complexity by 25 %. In production we maintained sub‑second latency for all three use cases, and the team could roll out new prompt variants without touching deployment pipelines. I learned that aligning feature types with architectural responsibilities dramatically improves scalability and developer velocity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
