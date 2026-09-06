---
qid: ing_48744361f3__fp__local
question: The customer's "documents" turn out to be scanned PDFs, Excel exports with
  merged cells, and a 15-year-old SharePoint. The pilot assumed clean text. What do
  you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 466
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:39:31-05:00'
sources: []
---

**Problem Restated**

You’re building an AI‑powered extraction pipeline that was trained on pristine, machine‑encoded text. Now the data arrive as scanned PDFs, Excel sheets with merged cells, and a legacy SharePoint repository—essentially noisy, unstructured inputs. The system’s failure rate spikes because it can’t reconcile these formats.

**Why It Must Work This Way**

At its core, an AI extractor is a *probabilistic mapping* from raw input to structured output. The mapping’s accuracy hinges on the *distribution* of training data matching that of deployment. When the input distribution shifts (from clean text to OCR‑blurred scans, merged cells, or inconsistent metadata), the model’s confidence collapses—an unavoidable consequence of statistical learning theory.

**Deriving a Solution**

1. **Pre‑processing as a New Model Layer**  
   Treat conversion (OCR, cell unmerging, SharePoint parsing) as an *inference* step that produces a *latent representation* close to the training distribution. This is akin to variational autoencoders where the encoder maps noisy data into a clean latent space.

2. **Joint Fine‑Tuning**  
   Collect a small, representative sample of each format and fine‑tune both the pre‑processor and extractor jointly. This leverages *transfer learning*: the pre‑processor learns to generate high‑fidelity text while the extractor adapts to minor residual noise.

3. **Uncertainty Estimation**  
   Inject Bayesian layers or Monte Carlo dropout to quantify confidence in each token. Downstream processes can flag low‑confidence segments for human review, turning a brittle system into an *adaptive loop*.

4. **Iterative Feedback Loop**  
   Store corrections as new training data, closing the distribution gap over time—an embodiment of *online learning*.

**Non‑Obvious Insight**

The real bottleneck isn’t OCR accuracy but *contextual consistency*. Merged cells and legacy metadata distort relational structure; a model that learns to recover these relations (e.g., by predicting table schema) outperforms one that only improves pixel‑level OCR. Thus, focus on restoring *semantic layout* before semantic content.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
