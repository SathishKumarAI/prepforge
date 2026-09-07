---
qid: ing_6d3a083a8a__faang__local
question: You need 5,000 test inputs and have 50. How do you use an LLM to generate
  test data without fooling yourself?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 520
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:57:34-05:00'
sources: []
---

**Clarify**

You’re given 50 real‑world examples of a problem domain (e.g., user queries, API payloads). The goal is to synthesize ~5 000 *valid* test cases that exercise the system’s edge paths without creating “hallucinated” data that misleads you into thinking the model works.  
Assumptions:  
- Each input must be syntactically and semantically valid for the target API or UI.  
- The LLM is capable of paraphrasing but may generate out‑of‑distribution samples.  
- You have a way to programmatically validate inputs (schema, regex, semantic checks).

**Approach**

1. **Seed expansion pipeline** – feed each of the 50 seeds into an LLM with controlled prompts that enforce format constraints.  
2. **Iterative validation** – immediately run a validator on each generated sample; discard or refine those that fail.  
3. **Diversity metrics** – use embeddings to cluster outputs, ensuring coverage across latent space.  
4. **Human‑in‑the‑loop sanity check** – spot‑check a random subset before full deployment.

**Depth**

- Prompt template: “Generate 10 distinct user requests of type X that match JSON schema Y, preserving field semantics.”  
- Post‑generation filtering:  
  * Schema validation (JSON‑schema validator).  
  * Semantic checks via a lightweight rule engine (e.g., date formats, numeric ranges).  
- Diversity: compute cosine similarity on embeddings; reject samples with >0.9 similarity to any existing case.  
- Complexity: O(N × M) where N=50 seeds and M≈100 generations per seed → ~5 000 items. Memory overhead is modest (embedding vectors).

**Edge Cases**

- LLM hallucination of impossible values (e.g., future dates).  
- Over‑generation of similar prompts leading to duplicate test cases.  
- Schema drift: if the system’s spec changes, old seeds become invalid.

**Optimize & Communicate**

Explain that by combining *controlled prompting*, *automated validation*, and *embedding‑based diversity pruning*, you prevent “fooling” yourself with synthetic data while scaling from 50 to 5 000. Highlight that each step is auditable: validators can log failures, embeddings show coverage gaps, and a small human audit ensures the pipeline stays honest. This structured process aligns with FAANG expectations for rigorous testing and clear communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
