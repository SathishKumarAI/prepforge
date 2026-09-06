---
qid: ing_ed3bdbc2db__fp__local
question: What is zero-shot CoT - and why did "Let's think step by step" become famous?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 450
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:23:44-05:00'
sources: []
---

**Zero‑shot Chain‑of‑Thought (CoT)** is a prompting technique that forces a language model to *internally generate* a step‑by‑step reasoning trace before producing an answer, without any fine‑tuning or labeled examples.

### The fundamental problem it solves
Large pre‑trained models excel at pattern matching but struggle with multi‑hop inference: they can “guess” the final answer by spurious correlations rather than genuine deduction. CoT turns the model into a *deductive engine*: each intermediate step is an explicit, self‑checked transformation of the input that reduces the search space for the next step.

### Why the phrase **“Let’s think step by step”** works
1. **Cognitive framing** – it nudges the model to adopt a “thinking mode” analogous to human problem‑solving.  
2. **Self‑regulation signal** – the prompt signals that intermediate reasoning is required, encouraging the model to produce longer, structured text rather than a single token.  
3. **Bootstrapping from pre‑training** – during training the model has seen many *instructions* and *explanations*. The prompt leverages this latent knowledge of how to articulate logical chains.

### Deeper principle
CoT is an instance of **self‑supervised curriculum learning**: the model uses its own output as a scaffold, gradually refining its internal representation. It aligns with *information bottleneck* ideas—by forcing explicit intermediate states, it reduces information loss and improves generalization.

### Non‑obvious insight
The key benefit isn’t just longer text; it’s that **the intermediate steps expose the model’s hidden reasoning policy**. By inspecting these traces we can diagnose whether the model truly understands the problem or is merely exploiting surface patterns—a diagnostic tool that zero‑shot CoT provides for free.

In short, “Let’s think step by step” turns a pattern matcher into an *explainer*, giving us both higher accuracy and interpretability without any extra training data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
