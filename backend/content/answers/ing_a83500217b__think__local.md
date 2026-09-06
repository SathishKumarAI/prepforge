---
qid: ing_a83500217b__think__local
question: 'Explain: Every assertion in a Harvey answer needs to link back to a specific
  passage. Design the grounding system, and tell me how you would measure the unsupported-claim
  rate.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 213
output_tokens: 512
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:09:32-05:00'
sources: []
---

**1. Clarify the goal & assumptions**  
   - *Goal*: Every claim in a Harvey‑style answer must be traceable to an exact passage in the source text.  
   - *Assumptions*: We have access to the original documents, a token‑level alignment between user queries and passages, and that “passage” means a contiguous block of text (e.g., paragraph or sentence).  

**2. Adopt a mental model**  
   - Treat the answer as a graph: nodes = assertions; edges = links to source spans.  
   - Grounding system = a pipeline that (a) parses the answer, (b) identifies candidate assertions, (c) searches for matching passages, and (d) records evidence IDs.

**3. Step‑by‑step reasoning**  
   1. *Assertion extraction*: Use dependency parsing + rule‑based patterns to segment sentences into atomic claims.  
   2. *Passage retrieval*: For each claim, run a semantic similarity query against the document index; rank passages by cosine similarity of embeddings.  
   3. *Evidence selection*: Pick the top‑scoring passage if its score exceeds a threshold (e.g., 0.7). Store the passage ID and offset.  
   4. *Link annotation*: Append a footnote or inline tag linking the claim to the selected passage.  
   5. *Verification*: Run an automated check that every claim has an associated link; flag any missing links.

**4. Common traps to avoid**  
   - Over‑segmenting: treating clauses as separate claims when they belong together.  
   - Relying solely on lexical overlap; miss paraphrases.  
   - Setting the similarity threshold too low → false positives (claims linked to irrelevant passages).  
   - Ignoring context length: a claim may span multiple paragraphs.

**5. Sanity‑check & communication**  
   - Spot‑check random claims against human‑annotated evidence.  
   - Report metrics: *coverage* (percentage of claims with links) and *precision* (how often the linked passage truly supports the claim).  
   - Communicate results as a short table: `Total Claims | Linked | Unlinked | Unsupported‑Claim Rate = Unlinked / Total`.  

By following this structured pipeline, we can systematically ground every assertion and reliably measure how many claims remain unsupported.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
