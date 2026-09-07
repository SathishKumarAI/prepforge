---
qid: ing_4f34e99ef2__faang__local
question: 'Explain: II. Dependencies — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 478
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:48:45-05:00'
sources: []
---

**Clarify**  
The interview asks for an explanation of the *Dependencies* principle in the 12‑Factor App methodology, which is a set of best practices for building modern cloud‑native applications (including ML services). I’ll assume they want: what it means, why it matters, and how to apply it in an ML pipeline.

**Approach**  
1. Define “dependencies” in this context.  
2. Explain the rule: list all external libraries and frameworks explicitly.  
3. Show how to separate runtime from build‑time dependencies.  
4. Give concrete examples for an ML stack (e.g., `scikit-learn`, `pytorch`).  

**Depth**  
- *Dependencies* are any external code your app relies on (libraries, runtimes, services). The 12‑factor rule states: **“Explicitly declare and isolate all dependencies.”**  
- Use a lockfile (`requirements.txt`/`Pipfile.lock`, `pom.xml`, `package.json`) to capture exact versions.  
- In containers, copy only the lockfile first, install, then copy source—this ensures reproducible builds and caching.  
- Separate *runtime* (e.g., `torch==2.0.1`) from *build‑time* (e.g., `gcc`, `make` for compiling C extensions). Build tools are removed in the final image to keep it lightweight.  
- For ML services, pin data‑science libraries and GPU drivers; use environment variables to switch between CPU/GPU builds.

**Edge Cases**  
- Transitive dependencies that change without your control (e.g., a new `numpy` release breaking C extensions).  
- Binary wheels requiring OS‑specific libraries (CUDA/cuDNN).  
- Hidden implicit deps like global config files or system Python packages.

**Optimize & Communicate**  
I’d emphasize the payoff: deterministic, version‑controlled deployments that avoid “works on my machine” bugs. I’d close by noting that in ML workflows, caching the data preprocessing step and model artifacts can be seen as an extension of this principle—dependencies also include data versions. This structured answer shows clear reasoning, technical depth, and awareness of practical trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
