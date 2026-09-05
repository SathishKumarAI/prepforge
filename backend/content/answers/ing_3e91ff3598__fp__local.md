---
qid: ing_3e91ff3598__fp__local
question: Build RAG over a customer's documents where access control is row- and document-level.
  How do you guarantee a user never sees restricted content in an answer?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 531
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:17:38-05:00'
sources: []
---

## How to keep every answer *policy‑safe* in a RAG

**The problem**  
A Retrieval‑Augmented Generation (RAG) system pulls snippets from many documents, then a language model (LM) stitches them into an answer. If the index contains *protected rows* or *confidential documents*, the LM can inadvertently surface that content unless we intervene **before** generation.

**Why it must be done at retrieval time**  
The LM is a black‑box probabilistic function; once it receives a passage, it has no built‑in notion of who may read it. Therefore, the only guaranteed way to keep restricted text out of the output is to *never* let the LM see it in the first place.

### 1. Policy‑aware vector index  
- **Encode ACL tags** (user id, role, project) as extra dimensions or as a separate “policy vector.”  
- When inserting a document row, append its policy vector to the embedding.  
- At query time, concatenate the user’s policy vector with the query and perform *cosine similarity* only over the policy‑compatible dimension.  
  - This is equivalent to solving a constrained optimization: maximize relevance **subject** to ACL compatibility.

### 2. Fine‑grained filtering layer  
After retrieval, run a lightweight rule engine that checks each returned chunk’s ACL against the user’s token set. Discard any mismatch before it reaches the LM.  

### 3. Optional audit log  
Store the policy vector and the query‑embedding pair; this proves that no disallowed chunk ever entered the generation pipeline.

**Non‑obvious insight**  
Treating the retrieval step as a *constrained optimization* (relevance + policy penalty) is far more robust than post‑generation filtering. If you only filter after the LM, you rely on the model’s implicit understanding of policies—a fragile assumption that fails under prompt injection or hallucination. By embedding policy into the similarity metric itself, every retrieved chunk satisfies access control *by construction*, guaranteeing zero leakage regardless of how clever the user is.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
