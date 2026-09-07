---
qid: ing_39bc550274__faang__local
question: 'Title: SWE-bench: Can Language Models Resolve Real-World GitHub Issues?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 506
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:58:48-05:00'
sources: []
---

**Clarify**  
We’re asked whether large language models (LLMs) can *automatically* resolve real‑world GitHub issues—i.e., read a PR/issue description, understand the intent, generate code changes or pull requests that compile and pass tests, and optionally merge. Key assumptions:  

1. The repository has a clear build/test pipeline exposed via CI.  
2. Issue text follows common conventions (labels, titles).  
3. LLMs can be fine‑tuned on repo history.  

**Approach**  
1. **Data ingestion** – pull issue/PR bodies, comments, and the associated diffs from GitHub’s API.  
2. **Representation** – encode text + code context using a multimodal transformer (e.g., CodeBERT or GPT‑4 with fine‑tuning).  
3. **Generation pipeline** –  
   * Prompt LLM to produce a diff that satisfies the issue description.  
   * Run the generated patch against the CI environment; capture compile/test failures.  
4. **Iterative refinement** – feed failure logs back into the prompt (self‑debug loop) until tests pass or a timeout is reached.  

**Depth**  
- Use a *retrieval‑augmented* approach: retrieve similar past commits to bias generation.  
- Complexity: Each generation+CI run is O(1) relative to repo size; overall cost dominated by CI runtime and LLM token usage.  
- Trade‑offs: Higher fidelity requires more tokens (cost) vs. faster, coarser fixes that may need human review.  

**Edge Cases**  
- Non‑textual issues (binary assets).  
- Dependent changes across multiple files or modules.  
- Security/permission constraints (private repos).  
Testing: unit tests on synthetic issue–patch pairs; integration tests against a sandbox repo with a full CI pipeline.  

**Optimize & Communicate**  
- Cache embeddings of common code patterns to speed retrieval.  
- Parallelize CI runs for multiple candidate patches.  
- Present the final patch with a confidence score and a diff preview so reviewers can quickly verify correctness.  

In summary, an LLM‑driven resolver is feasible with a tight feedback loop between generation and continuous integration, but it remains complementary—human oversight is essential to catch subtle semantic bugs or architectural violations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
