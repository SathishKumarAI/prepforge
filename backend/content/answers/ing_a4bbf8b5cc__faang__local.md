---
qid: ing_a4bbf8b5cc__faang__local
question: 'Explain: Set Up Development Environment — Agent Building Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 703
total_tokens: 936
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:08:15-05:00'
sources: []
---

**Clarify**

We need a step‑by‑step guide for setting up an ML development environment that supports *agent building* (RL/decision‑making agents).  
Assumptions:  
1. Target platform is Linux (Ubuntu 22.04) or WSL on Windows.  
2. Team uses Python ≥ 3.10, Docker, and a GPU‑enabled workstation.  
3. CI/CD via GitHub Actions; notebooks for prototyping.

**Approach**

| Stage | Key Tasks |
|-------|-----------|
| 1️⃣ System prep | Install base packages (git, curl, build‑essential). |
| 2️⃣ Python & env | Use `pyenv` + `venv`; pin to a common `requirements.txt`. |
| 3️⃣ GPU drivers | NVIDIA driver ≥ 515, CUDA 12, cuDNN. |
| 4️⃣ Core libraries | PyTorch, TensorFlow, Ray/RLlib; install via conda or pip with matching CUDA wheels. |
| 5️⃣ Agent framework | Set up RLlib / Stable Baselines3, import OpenAI‑Gym envs. |
| 6️⃣ Docker | Create a `Dockerfile` that mirrors the host stack for reproducibility. |
| 7️⃣ CI integration | GitHub Actions workflow: lint (flake8), test (pytest), build image. |
| 8️⃣ Documentation | Keep a `README.md` with “Setup from scratch” and a `CONTRIBUTING.md`. |

**Depth**

- **Python**: `pyenv install 3.10.12`; `python -m venv .venv`; activate via `source .venv/bin/activate`.  
- **CUDA**: Verify with `nvidia-smi`; install cuDNN tarball into `/usr/local/cuda/include` and `/lib64`.  
- **PyTorch**: `pip install torch==2.1.0+cu12 torchvision torchaudio --index-url https://download.pytorch.org/whl/cu12`.  
- **RLlib**: `pip install ray[rllib]`.  
- **Docker**: Base image `nvidia/cuda:12.0-cudnn8-devel-ubuntu22.04`; copy `requirements.txt`, run `pip install -r requirements.txt`. Use `--gpus all` flag.

Complexity: O(1) for environment creation; rebuild time ~10 min (Docker). Trade‑off between pip vs conda—pip gives finer control but slower resolution.

**Edge Cases**

- Incompatible CUDA driver → fallback to CPU wheels.  
- Multiple GPU setups → ensure `CUDA_VISIBLE_DEVICES` is set.  
- CI GPU limits → use self‑hosted runners or simulate with CPU builds.

**Optimize & Communicate**

- Cache pip packages in CI (`~/.cache/pip`).  
- Pin exact hashes in `requirements.txt` for reproducibility.  
- Provide a “quick‑start” Jupyter notebook to validate the agent pipeline.  

Narrative: “By layering system, Python, GPU, libraries, and containerization, we create a deterministic, scalable stack that lets any ML engineer spin up an RL agent in minutes, while CI guarantees every commit stays reproducible.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
