---
qid: ing_82605fae9e__fp__local
question: Some annotators are pasting your tasks into ChatGPT and submitting the output.
  How do you detect and handle it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 412
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:42:31-05:00'
sources: []
---

**Why the problem matters**

When annotators *reuse* a model’s output as their own, the training data no longer reflects genuine human judgments. The loss surface is corrupted: gradients are driven by artifacts rather than real linguistic signals, causing over‑fitting to the model’s idiosyncrasies and degrading generalization.

**Detection from first principles**

1. **Similarity fingerprinting**  
   *Compute a high‑dimensional embedding (e.g., BERT CLS) for each submitted answer.*  
   If the cosine distance between a submission and the corresponding model output is below a learned threshold—calibrated on known clean pairs—it flags likely duplication.

2. **Entropy audit**  
   Model outputs tend to have lower perplexity than human text. Estimate token‑level perplexity; unusually low values (e.g., < 10) raise suspicion.

3. **Temporal consistency check**  
   If a batch of submissions arrives within milliseconds of the same prompt, it is improbable that multiple annotators independently produced identical responses.

4. **Cross‑annotator overlap**  
   Build a pairwise similarity matrix across all submissions for a prompt; clusters with > 90 % overlap indicate copying.

**Handling strategy**

- *Reject or re‑label* flagged entries automatically.  
- *Offer corrective feedback* to annotators, clarifying the policy and providing examples of acceptable responses.  
- *Introduce a “human‑only” subtask*: require annotators to write a brief reflection on why they chose their answer, which is difficult for copied text.

**Non‑obvious insight**

The entropy audit leverages *information theory*: human language is inherently more uncertain than deterministic model output. By treating perplexity as an information‑content metric, we transform a behavioral heuristic into a principled statistical test—something many pipelines overlook in favor of simple string matching.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
