---
qid: ing_374a7cee8e__fp__local
question: 'Explain: Get started — Letta V1 SDK | Letta Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 609
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:01:59-05:00'
sources: []
---

### Getting Started – *Letta* V1 SDK (Why it’s the right choice)

When you first encounter a machine‑learning framework, the **fundamental problem** is turning data into predictions while keeping the *pipeline* reproducible and portable.  
Letta solves this by treating every model as a **self‑contained artefact**: a directory that bundles code, parameters, training logs, and inference runtime in one place. The SDK turns this artefact into an executable *image* (Docker or OCI) with no manual dependency resolution.

#### Why it must work this way

1. **Isolation & Reproducibility** – By packaging the exact Python/Java/etc. environment, Letta guarantees that a model trained on cluster A runs identically on laptop B.  
2. **Versioning as a first‑class citizen** – The SDK automatically tags artefacts with semantic version numbers and immutable digests (SHA256). This satisfies *continuous deployment* pipelines where a new commit can be promoted to production only after passing all tests.  
3. **Zero‑configuration inference** – When you call `letta run model:my-model@1.0`, the SDK pulls the correct image, mounts input data, and starts the inference process with minimal CLI flags. No Docker‑CLI gymnastics or environment variables are required.

#### Deeper principle

Letta’s design is an instantiation of **information‑theoretic compression**:  
*Model + training metadata = compressed representation that preserves all predictive information.*  
By treating the artefact as a *lossless* container, Letta avoids the classic “dependency hell” and ensures that every inference run has the same entropy budget.

#### One non‑obvious insight

Most people overlook **metadata-driven orchestration**.  
Letta’s SDK automatically extracts tags such as `framework`, `runtime-version`, and `hardware-accelerator` from the artefact and uses them to route the model to the appropriate compute node (CPU, GPU, or TPU). This means you can deploy a single repository across heterogeneous clusters without writing custom scheduler logic.

#### Quick start

```bash
# 1️⃣ Create a new project
letta init my-ml-project

# 2️⃣ Add your training script and data
cp train.py my-ml-project/
cd my-ml-project/

# 3️⃣ Train and package the model
letta train --script=train.py --data=data/ --output=model.v1

# 4️⃣ Run inference locally
letta run model:model.v1 --input=test.json
```

The SDK’s documentation (docs.letta.ai) walks you through every step, from configuring `letta.yaml` to integrating with CI/CD pipelines. By turning *model training* into a deterministic build process, Letta lets you focus on the science rather than the engineering overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
