---
qid: ing_9326d73281__fp__local
question: 'Explain: Create an eval for a task — Working with evals | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 580
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:18:12-05:00'
sources: []
---

**Why an evaluation matters**

When training or fine‑tuning a language model you are implicitly solving an *optimization problem*: adjust parameters so the loss on future data is minimal. The loss is only useful if it mirrors what users actually care about—accuracy, safety, interpretability. An **evaluation** is the bridge that translates “user satisfaction” into a numeric objective.

**Deriving the eval workflow**

1. **Define the task’s *latent goal* (G)** – e.g., “answer user questions correctly.”  
2. **Specify an observable proxy (P)** – a set of inputs, a scoring rubric, or a human judge.  
3. **Formulate a loss L = f(P)** that is differentiable w.r.t. model outputs if you want to fine‑tune; otherwise, it can be a simple accuracy metric.  

OpenAI’s evals framework formalizes this chain:  
- *Prompt* → *Model output* → *Annotator or rule‑based scorer* → *Metric*.  
Each step is modular so you can swap out annotators for automated scoring without touching the rest.

**Why it must be modular**

The evaluation pipeline is a *black box* to the optimizer. The loss must be **closed‑form and reproducible**; otherwise, gradient descent stalls. By isolating the scoring component, you guarantee that any change in the metric (e.g., tightening a safety rule) does not break earlier stages of data ingestion or preprocessing.

**Non‑obvious insight**

Most people treat evals as “just a test set.” In reality, they are *policy constraints* expressed as loss terms. If you expose multiple evaluation heads—accuracy, hallucination rate, bias score—you implicitly train the model to satisfy a *Pareto frontier* of objectives. The optimizer will then learn trade‑offs that reflect real‑world priorities rather than a single scalar target.

---

### Quick steps in code

```python
from openai.eval import EvalTask, Prompt, Scorer, Metric

task = EvalTask(
    name="qa_accuracy",
    prompt=Prompt.from_file("prompt.txt"),
    scorer=Scorer.human(),          # or Scorer.rule_based()
    metric=Metric.accuracy(),
)

# Run the eval
results = task.run(models=["gpt-4o"])
print(results.summary())
```

Each component can be replaced, and you can chain multiple `EvalTask`s to approximate a multi‑objective loss. This is how OpenAI’s API turns human intent into a trainable signal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
