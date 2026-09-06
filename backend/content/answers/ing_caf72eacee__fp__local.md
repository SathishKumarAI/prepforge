---
qid: ing_caf72eacee__fp__local
question: 'Explain: Creating an eval run — Working with evals | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 529
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:12:01-05:00'
sources: []
---

### Why an *eval run* matters

When you train a language model you are solving a **black‑box optimisation** problem: find weights that minimise loss on unseen data.  
But training alone tells you nothing about *how well* the final model will behave in real deployments.  
An **evaluation run** is the formal bridge between training and deployment: it turns an abstract loss into concrete, repeatable metrics (accuracy, safety, bias).  

### From problem to API call

1. **Define the task** – a prompt‑response pair or a dataset of prompts with reference answers.  
2. **Choose a metric** – e.g., BLEU for translation, pass‑rate for coding questions.  
3. **Create an `Eval` object** in OpenAI’s platform: it stores the dataset and the chosen metrics as immutable specifications.  
4. **Launch an `EvalRun`**: this is a *stateless* request that submits the model name, temperature, etc., to the same evaluation harness that will run on every prompt.

```python
import openai

# 1. Define eval
eval = openai.Eval.create(
    name="my-translation-test",
    dataset=... ,          # your JSONL file of src‑tgt pairs
    metrics=["bleu", "accuracy"],
)

# 2. Run it
run = openai.EvalRun.create(eval_id=eval.id, model="gpt-4o-mini")
```

The run returns a **scorecard**: per‑metric scores and a detailed log of each prompt’s output.

### Deeper principle

Evaluation is an *information‑theoretic* sanity check.  
If a model achieves high loss but low BLEU, it means the gradients are pointing in a direction that does not align with human‑valued semantics—an irrecoverable mismatch between training objective and real‑world utility.

### Non‑obvious insight

Most people treat eval runs as “just another test”.  
In fact, because an `EvalRun` is *deterministic* (same model & settings → same scorecard), you can use it to **track drift**: run the same eval on a production model every week.  Any sudden drop in BLEU or accuracy flags that your fine‑tuning pipeline has introduced unintended biases—providing an early warning system for catastrophic failure modes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
