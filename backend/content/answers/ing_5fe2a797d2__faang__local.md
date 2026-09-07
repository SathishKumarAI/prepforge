---
qid: ing_5fe2a797d2__faang__local
question: 'Explain: Install the Additional Dependencies — GitHub - OpenBMB/AgentVerse:
  \ud83e\udd16 AgentVerse \ud83e\ude90 is designed to facilitate the deployment of
  multiple LLM-based agents in various applications, which primarily provides two
  frameworks: task-solving and simulation \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 289
output_tokens: 472
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:27:13-05:00'
sources: []
---

**Clarify**  
You’re asking how to add the extra libraries required by **AgentVerse**, a framework for orchestrating LLM‑based agents in both *task‑solving* and *simulation* scenarios. I’ll assume you have a fresh Python environment, want to run the example notebooks, and that you can install system packages.

**Approach**  
1. Create/activate a virtual env.  
2. Install the core package via pip (`pip install openbmb-agentverse`).  
3. Resolve optional heavy dependencies (PyTorch, CUDA, `transformers`, `datasets`) as listed in the repo’s `requirements.txt`.  
4. Verify GPU support if needed and install the correct CUDA toolkit.  

**Depth**  
```bash
python -m venv av-env && source av-env/bin/activate
pip install --upgrade pip setuptools wheel
pip install openbmb-agentverse[full]   # pulls core + all extras
```
The `[full]` extra installs:  
- `torch`, `transformers`, `accelerate` for model inference.  
- `gymnasium`, `stable-baselines3` for simulation environments.  
- `langchain` and `anthropic` if you plan to use external LLMs.  

Check CUDA:  
```bash
nvcc --version  # or `nvidia-smi`
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118
```
Run a quick sanity check: `python -c "import agentverse; print(agentverse.__version__)"`.

**Edge Cases**  
- **Mismatched CUDA** → install CPU‑only PyTorch.  
- **Package conflicts** (e.g., older `transformers`) → pin versions in a `requirements.txt`.  
- **Large model weights** may require 10 GB+ free space.

**Optimize & Communicate**  
Explain that using the `[full]` extra ensures all optional features are ready, reducing later install friction. If disk space is tight, list only needed extras (`[gym]`, `[langchain]`). Highlight that virtual environments isolate dependencies, keeping the host system clean and making CI pipelines reproducible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
