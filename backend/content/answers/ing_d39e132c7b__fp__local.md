---
qid: ing_d39e132c7b__fp__local
question: 'Explain: An eval pipeline you own suddenly reports a 6-point drop for a
  customer''s model between Tuesday and Wednesday. The model didn''t change. Debug
  it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 600
total_tokens: 790
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:31:00-05:00'
sources: []
---

**From the ground up: why a 6‑point drop can happen without touching the model**

1. **Problem statement**  
   A pipeline that *evaluates* a black‑box model must be invariant to the model itself; any change in its output signals a drift somewhere else (data, compute, or evaluation logic). Therefore the first principle is: *the only source of variance should be the input distribution and the environment.*

2. **Where variance can creep in**  
   - **Input data shift** – new samples arriving at the test set that differ from training statistics.  
   - **Pre‑processing drift** – a transformation (scaling, tokenization) that changed between runs.  
   - **Hardware or software differences** – random seeds, floating‑point precision, library updates.  
   - **Evaluation code bugs** – e.g., an accidental removal of a metric weight.

3. **Systematic debugging protocol**

| Step | Action | Rationale |
|------|--------|-----------|
| **1** | Re‑run the pipeline on the *exact same* test set used on Tuesday, forcing deterministic seeds and disabling any stochastic preprocessing. | Eliminates input and randomness as sources. |
| **2** | Compare every intermediate artifact (feature vectors, cached embeddings) from Tuesday vs Wednesday. Use a diff of hashes or checksums. | Detects subtle changes in data transformation pipelines. |
| **3** | Log the environment: OS version, library versions, GPU/CPU details, random seed settings. | Software updates can alter numerical results even if code is unchanged. |
| **4** | Verify that the same metric implementation (e.g., F1 vs weighted‑average) and weighting scheme are used. Re‑calculate metrics manually on a handful of samples. | A bug in metric calculation will show up as an outlier in the per‑sample scores. |

4. **Non‑obvious insight**  
   *Even if the model is untouched, floating‑point rounding differences across CPUs/GPUs can accumulate to a few percentage points.* Modern deep‑learning frameworks sometimes switch between single and double precision for speed, which changes the score subtly but consistently. Therefore always pin the numeric precision or serialize the model’s inference graph.

5. **Resolution**  
   Once the root cause is identified (e.g., an unintentional change in a preprocessing scaler), roll back to the original configuration or version‑control that component. Add a *data‑drift guard* that flags when feature statistics deviate beyond a threshold, and enforce deterministic evaluation environments via containerization.

By treating the pipeline as a closed system whose only allowed variance is from the input distribution, you can systematically isolate any hidden source of error and prevent unexplained metric swings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
